let overlay = document.getElementById("overlay");
const dekstopDropdownContainer = document.querySelector(
  ".dekstop-dropdown-container"
);
const dekstopDropdownContentContainer = document.querySelector(
  ".dekstop-dropdown-content-container"
);
const hamburgerIcon = document.querySelector(".hamburger-icon");
let mobileMenu = document.querySelector(".mobile-menu-container");
const subMenuDropdownButtons = document.querySelectorAll(
  ".sub-menu-dropdown-button"
);

// DEKSTOP DROPDOWN
dekstopDropdownContainer.addEventListener("mouseover", () => {
  showOverlay();
  sessionStorage.setItem("overlayVisible", "true");
});

dekstopDropdownContainer.addEventListener("mouseleave", () => {
  hideOverlay();
  sessionStorage.setItem("overlayVisible", "false");
});

// Track if the dropdown is open
let isDropdownOpen = false;

window.addEventListener("scroll", () => {
  if (isDropdownOpen) {
    isDropdownOpen = false; // Reset the flag
    dekstopDropdownContentContainer.style.display = "none";
    hideOverlay();
    sessionStorage.setItem("overlayVisible", "false");
  }
});

window.addEventListener("load", () => {
  if (dekstopDropdownContainer.matches(":hover")) {
    // If the container is hovered on page load, show the overlay
    showOverlay();
    isDropdownOpen = true; // Set the flag
    sessionStorage.setItem("overlayVisible", "true");
  } else {
    hideOverlay();
    sessionStorage.setItem("overlayVisible", "false");
  }
});

// Update isDropdownOpen when the dropdown is hovered
dekstopDropdownContainer.addEventListener("mouseover", () => {
  isDropdownOpen = true; // Set the flag to true
});

dekstopDropdownContainer.addEventListener("mouseleave", () => {
  isDropdownOpen = false; // Set the flag to false
  dekstopDropdownContentContainer.style.display = "block";
});

//MOBILE MENU
subMenuDropdownButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Get the ID of the dropdown content associated with this button
    const dropdownId = button.getAttribute("data-dropdown");
    const subMenuDropdownContent = document.getElementById(dropdownId);

    // Close other open dropdowns and remove the "show" class
    document
      .querySelectorAll(".sub-menu-dropdown-content.show")
      .forEach((content) => {
        if (content !== subMenuDropdownContent) {
          content.classList.remove("show");
        }
      });

    // Toggle the current dropdown
    subMenuDropdownContent.classList.toggle("show");

    // Dynamically adjust the height of the menu-container
  });
});
document.addEventListener("mousedown", (event) => {
  // Check if the menu is open
  if (mobileMenu.classList.contains("show")) {
    // Check if the click is outside the mobile menu AND outside the hamburger icon
    const isClickOutsideMenu =
      !mobileMenu.contains(event.target) &&
      !hamburgerIcon.contains(event.target);

    // Check if the click is also outside any sub-menu dropdown contents
    const isClickOutsideSubMenus = !Array.from(
      document.querySelectorAll(".sub-menu-dropdown-content")
    ).some((subMenu) => subMenu.contains(event.target));

    // If click is outside menu, hamburger, and sub-menus, then close everything
    if (isClickOutsideMenu && isClickOutsideSubMenus) {
      hideMenu(); // Close mobile menu
      hamburgerIcon.classList.toggle("active");
      // Close all sub-menu dropdowns
      document
        .querySelectorAll(".sub-menu-dropdown-content.show")
        .forEach((subMenu) => {
          subMenu.classList.remove("show");
        });
    }
  }
});
function toggleMenu() {
  if (mobileMenu.classList.contains("show")) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  mobileMenu.classList.add("show");

  showOverlay();
  sessionStorage.setItem("overlayVisible", "true");
  lockScroll();
}

function hideMenu() {
  setTimeout(() => {
    mobileMenu.classList.remove("show");
  }, 0);

  hideOverlay();
  sessionStorage.setItem("overlayVisible", "false");
  unlockScroll();
}

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  document
    .querySelectorAll(".sub-menu-dropdown-content.show")
    .forEach((subMenu) => {
      subMenu.classList.remove("show");
    });
});

// OVERLAY
// Restore overlay visibility if it was previously shown
if (
  sessionStorage.getItem("overlayVisible") === "true" &&
  mobileMenu.classList.contains("show")
) {
  showOverlay();
} else {
  hideOverlay(); // Ensure overlay is hidden if state is inconsistent
  sessionStorage.setItem("overlayVisible", "false");
}

function showOverlay() {
  overlay.style.display = "block";
  overlay.style.zIndex = 9999;
  overlay.style.opacity = 0.6;
}

function hideOverlay() {
  overlay.style.opacity = 0;
  overlay.style.display = "none";
  overlay.style.zIndex = -1;
}
// LOCK SCROLL
function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "";
}
