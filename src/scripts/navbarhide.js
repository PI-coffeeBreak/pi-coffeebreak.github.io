const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  console.log("Inner width: ", window.innerWidth);
  const currentScroll = window.scrollY;
  
  if (window.scrollY > 0) {
    navbar.classList.add('shadow-xl');
  } else {
    navbar.classList.remove('shadow-xl');
  }


  if (window.innerWidth < 640) { // breakpoint 'sm'
    console.log("Mobile detected, current scroll:", currentScroll, "last scroll:", lastScroll);
    
    if (currentScroll > lastScroll && currentScroll > 120) {
      console.log("Hiding navbar");
      navbar.style.transform = 'translateY(-100%)';
    } else {
      console.log("Showing navbar");
      navbar.style.transform = 'translateY(0)';
    }
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
