function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Toggle the show class
  navLinks.classList.toggle('show');
  
  // Toggle aria-expanded for accessibility
  const isExpanded = navLinks.classList.contains('show');
  menuToggle.setAttribute('aria-expanded', isExpanded);
  
  // Disable scroll when menu is open
  document.body.style.overflow = isExpanded ? 'hidden' : '';
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      document.querySelector('.nav-links').classList.remove('show');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 900 && 
      navLinks.classList.contains('show') &&
      !e.target.closest('.nav-links') &&
      !e.target.closest('.menu-toggle')) {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});