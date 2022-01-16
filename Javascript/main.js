//Navigation Change font color  
//동작되나 새로고침 되면 유지되지 않음
function changeColor(){
  document.getElementById("nav__menu__li").style.color = "#FA3D4B";
  window.location.reload(true);
  console.log("change!");
}


//forumQuest.html > Error Code > Auto Height
$("textarea.ta__eCode").on('keydown keyup', function(){
  $(this).height(1).height($(this).prop('scrollHeight')+1);
})


//Display Date
const el = document.getElementById("date");

function date2Digits(){
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();

  el.innerText =
  `${year}.${("00" + month.toString()).slice(-2)}.${("00" + date.toString()).slice(-2)}`  //Display in double digits
}
date2Digits();

