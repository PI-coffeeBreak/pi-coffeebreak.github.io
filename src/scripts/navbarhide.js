const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (window.scrollY > 0) {
    navbar.classList.add('shadow-xl');
  } else {
    navbar.classList.remove('shadow-xl');
  }


  if (window.innerWidth < 640) { // breakpoint 'sm'
    
    if (currentScroll > lastScroll && currentScroll > 120) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
