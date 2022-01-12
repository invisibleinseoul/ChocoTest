const navMenuEl = document.querySelector('nav__menu')
navMenuEl.addEventListener('click', function(){
  if(navMenuEl.classList.contains('clicked')){
    navMenuEl.classList.remove('clicked');
  } else{
    navMenuEl.classList.add('clicked');
  };
});