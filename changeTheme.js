document.querySelector('.changeTheme').addEventListener('click', change_theme);

function change_theme(){
  const body = document.querySelector('html');
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    }
  else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
  }
}