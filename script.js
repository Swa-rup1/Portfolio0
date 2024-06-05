

document.addEventListener('scroll', () => {
  const header = document.getElementById('nav-section');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


