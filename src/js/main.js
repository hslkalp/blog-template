const menuBtn = document.getElementById('mobile-menu-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', function () {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu')
  } else {
    menu.classList.add('show-menu')
  }
})
