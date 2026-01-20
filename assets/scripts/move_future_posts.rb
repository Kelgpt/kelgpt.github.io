require 'fileutils'
require 'time'
require 'yaml'

# Set the base directory of your project (parent of the current directory)
base_dir = File.expand_path("../../", __dir__)

# Get current time
current_time = Time.now

# Drafts folder path
draft_path = File.join(base_dir, '_drafts')

# Process each file in the drafts folder
if Dir.exist?(draft_path)
  Dir.foreach(draft_path) do |file|
    next if file == '.' || file == '..'

    file_path = File.join(draft_path, file)

    # Load front matter to check for move_paths and date fields
    front_matter = YAML.load_file(file_path)

    if front_matter && front_matter['date'] && front_matter['move_paths']
      file_date = Time.parse(front_matter['date'])
      move_paths = front_matter['move_paths']

      # Check if the file's date has passed
      if file_date <= current_time
        # Use move_paths as the destination path
        destination_folder = File.join(base_dir, move_paths)

        # Ensure the destination folder exists
        FileUtils.mkdir_p(destination_folder)

        # Move the file
        FileUtils.mv(file_path, destination_folder)
        puts "#{file} moved to #{destination_folder}"
      else
        puts "#{file} not moved. Scheduled date is in the future."
      end
    else
      puts "#{file} does not contain valid date or move_paths in front matter."
    end
  end
else
  puts "Drafts directory does not exist. Skipping."
end
