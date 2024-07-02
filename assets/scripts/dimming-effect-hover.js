let overlay = document.getElementById("overlay");

function showOverlay() {
  overlay.style.display = "block";
  overlay.style.zIndex = 9999;
  overlay.style.opacity = 0.6;
}

function hideOverlay() {
    overlay.style.display = "none";
  overlay.style.opacity = 0;
  overlay.style.zIndex = -1;
  
}
