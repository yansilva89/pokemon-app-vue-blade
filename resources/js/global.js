document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelectorAll('.menu__toggle');
  const mobileMenu = document.querySelector('.menu__list');

  menuToggle.forEach((toggle) => {
    toggle.addEventListener('click', function() {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  })

  // Change font-weight on path url
  const currentUrl = window.location.pathname;
  const itemMenu = document.querySelectorAll('.desktop-menu__item a')
  const verifyCurrentUrl = () => {
    if (currentUrl === '/') {
      itemMenu[0].style.fontWeight = '700'
    } else {
      itemMenu[1].style.fontWeight ='700'
    }
  }
  verifyCurrentUrl()

  // Change Navbar color on Scroll
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.style.backgroundColor = '#2c2c2dd4';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
});