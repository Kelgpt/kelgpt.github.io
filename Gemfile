source "https://rubygems.org"

# Specify Jekyll version explicitly
gem "jekyll", "~> 4.3.3"

group :jekyll_plugins do
  # gem "bundler", "~> 2.5"  # Commenting this out as GitHub Actions handles bundler
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-paginate-v2", "~> 3.0.0"
  gem "csv"
  gem "base64"
  gem "bigdecimal"
  gem "jekyll-admin", "~> 0.11.1"
  gem "rack", "~> 2.2.4"
  gem "sinatra", "~> 2.1.0"
  gem "sinatra-contrib", "~> 2.1.0"
  gem "rack-protection", "~> 2.1.0"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
