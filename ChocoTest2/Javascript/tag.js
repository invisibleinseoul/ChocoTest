$(document)
  .ready(function () {
    const tag = {};
    const cnt = 0;

    //add tag
    function addTag(value){
      tag[cnt] = value; //add tag in object
      if(cnt <= 5)cnt++; //increase cnt. max 5. be delete button's id for delete
    }
    //server <- tag >> array type
    function marginTag(){
      return Object.values(tag)
        .filter(function(word){
          return word !== "";
        });
    }

    $("#tag")
      .on("keyup", function (e){
        const self = $(this);
        console.log("keypress");

        //run when input focus and typing enter/space
        if(e.key === "Enter" || e.keycode == 32){
          const tagVal = self.val();  //load data
          //null > not run
          if(tagVal !== ""){
            //check duplicate. if exsit, return array
            const res = Object.values(tag)
              .filter(function(word){
                return word === tagVal;
              });
              //check duplicate
              if(res.length == 0){
                $("#tag-list")
                  .append("<li class='tag-item'>" + tagVal + "<span class='del-btn' idx='" + cnt + "'>x</span></li>");
                  addTag(tagVal);
                  self.val("");
              } else{
                alert("Tag duplicated")
              }
          }
          e.preventDefault(); //spacebar -> prevent empty space
        }
      });
      //delete button
      $(document)
        .on("click", ".detlBtn", function (e) {
          const index = $(this)
            .attr("idx");
          tag[index] = "";
          $(this)
            .prevent()
            .remove();
        });
  });

