// Get the hamburger button and navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.fixed-nav-bar ul');

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', () => {
  // Toggle the "active" class on the hamburger button
  hamburger.classList.toggle('active');
  // Toggle the "show" class on the navigation menu
  navMenu.classList.toggle('show');
});

// Get all list items in the navigation menu
const navLinks = document.querySelectorAll('.fixed-nav-bar li a');

// Add a click event listener to each list item
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the "active" class from the hamburger button
    hamburger.classList.remove('active');
    // Remove the "show" class from the navigation menu
    navMenu.classList.remove('show');
  });
});


// JavaScript for the carousel functionality
document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallary");
  const galleryItems = document.querySelectorAll(".gallaryImg");
  let currentIndex = 0;
  let isDragging = false;

  gallery.addEventListener("touchstart", handleTouchStart);
  gallery.addEventListener("touchmove", handleTouchMove);
  gallery.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("keydown", handleKeyDown);

  function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isDragging = true;
  }

  function handleTouchMove(event) {
      if (!isDragging) return;
      const currentX = event.touches[0].clientX;
      const diffX = currentX - startX;

      if (diffX > 0) {
          // Swipe right
          currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
      } else {
          // Swipe left
          currentIndex = (currentIndex + 1) % galleryItems.length;
      }

      updateSlidePosition();
      isDragging = false;
  }

  function handleTouchEnd() {
      isDragging = false;
  }

  function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
          // Arrow left key
          currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
      } else if (event.key === "ArrowRight") {
          // Arrow right key
          currentIndex = (currentIndex + 1) % galleryItems.length;
      }

      updateSlidePosition();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateSlidePosition();
  }

  function updateSlidePosition() {
      const translateValue = -currentIndex * 100;
      gallery.style.transform = `translateX(${translateValue}%)`;
  }

  setInterval(nextSlide, 3000); // Auto rotate every 3 seconds
});
