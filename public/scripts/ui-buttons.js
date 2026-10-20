document.addEventListener('DOMContentLoaded', () =>{
  //ham button
  const navToggle = document.getElementById('hamButton');
  const navList = document.getElementById('mainMenu');
    
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navList.classList.toggle('is-open');
      navToggle.classList.toggle('active')
    });
  }
  
  //language selector
  const langBtns = document.querySelectorAll('.lng-btn');
  if (langBtns.length > 0) {
    const currentUrl = window.location.href;
    
    langBtns.forEach(btn => {
      btn.classList.remove('active');
      if (currentUrl.includes(btn.getAttribute('href'))) {
        btn.classList.add('active');
      }
    });
  }

  //dark / light mode
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  if(themeToggle){
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light'){
      htmlElement.setAttribute('data-theme', 'light');
    }
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }
      else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
  });
  }
});