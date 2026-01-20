document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Check if `data-src` exists before loading the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            img.classList.remove("lazy");
          }

          // Stop observing the image after it's loaded
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "700px 0px", // Adjust as needed
      threshold: 0.1,
    }
  );

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
