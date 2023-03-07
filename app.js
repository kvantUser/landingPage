const navbar = document.getElementById('menu-header');

// ! Появление фона у меню
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = '#181818';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});


// ! Кнопка проскролить наверх
window.addEventListener('scroll', function() {
    var button = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 0) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });
  
  document.getElementById('scroll-to-top').addEventListener('click', function() {
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0; // для Safari
    document.documentElement.scrollTop = 0; // для Chrome, Firefox, IE и Opera
  });
  