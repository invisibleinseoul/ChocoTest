const navMenuEl = document.querySelector('.nav__menu')
navMenuEl.addEventListener('click', function(){
    navMenuEl.classList.add('clicked');
    if(navMenuEl.classList.contains('clicked')){
      navMenuEl.classList.remove('clicked')
    }
});

$(document)
  .ready(function (){
    let tag = {};
    let counter = 0;

    function addTag(value){
      tag[counter] = value;
      counter++;
    }
    function marginTag(){
      return Object.values(tag)
        .filter(function (word){
          return word !== "";
        });
    }

    $("#tag")
      .on("keyup", function (e){
        let self = $(this);
        console.log("keypress");

        if(e.key === "Enter" || e.keyCode == 32){
          let tagValue = self.val();
          if(tagValue !== ""){
            let result = Object.values(tag)
              .filter(function (word){
                return word === tagValue;
              })
            if(result.length == 0){
              $("tag-list")
              .append("<li class='tag-item'>" + tagValue + "<span class='del-btn' idx='" + counter + "'>x</span></li>");
              addTag(tagValue);
              self.val("");
            } else {
              alert("태그값이 중복됩니다.");
            }
          }
          e.preventDefault();
        }
      });
$(document)
  .on("click", ".del-btn", function(e){
    let index = $(this)
      .attr("idx");
    tag[index] = "";
    $(this)
      .parent()
      .remove();
  });
})