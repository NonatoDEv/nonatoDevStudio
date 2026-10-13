document.addEventListener('DOMContentLoaded', () =>{
    const navToggle = document.getElementById('hamButton');
    const navList = document.getElementById('mainMenu');

    if (!navToggle || !navList) {
    console.error('No se encontraron los elementos navToggle o navList');
    return;
    }

    navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.classList.toggle('is-open');
  });
});