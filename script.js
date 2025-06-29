const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-100%';
});

// Animate gallery on scroll (optional)
window.addEventListener('scroll', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
});
