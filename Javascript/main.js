//Selected Navigation > Change font color
const navMenuEl = document.querySelector('.nav__menu')
navMenuEl.addEventListener('click', function(){
    navMenuEl.classList.add('clicked');
    if(navMenuEl.classList.contains('clicked')){
      navMenuEl.classList.remove('clicked')
    }
});

//forumQuest.html > Error Code > Auto Height
$("textarea.ta__eCode").on('keydown keyup', function(){
  $(this).height(1).height($(this).prop('scrollHeight')+1);
})

