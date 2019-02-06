

  let overlay = document.querySelector('.menu-overlay');
  let btn = document.querySelector('.menu-btn');
  let close = document.querySelector('.fa-times');
  
btn.addEventListener('click', () => overlay.classList.add('drop-menu'));
close.addEventListener('click', () => overlay.classList.remove('drop-menu'));
  