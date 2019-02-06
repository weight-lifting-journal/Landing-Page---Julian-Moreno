

  const overlay = document.querySelector('.menu-overlay');
  const btn = document.querySelector('.menu-btn');
  const close = document.querySelector('.fa-times');
  const links = document.querySelectorAll('.menu-link');

  
btn.addEventListener('click', () => {
    TweenMax.from(overlay, 0.5, {opacity:0});
    overlay.classList.add('drop-menu')
});


close.addEventListener('click', () => overlay.classList.remove('drop-menu'));

Array.from(links).map(link => { link.addEventListener('click', () => overlay.classList.remove('drop-menu') );});