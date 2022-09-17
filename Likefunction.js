const likeBtn = document.querySelector(".like_btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;

likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
    console.log('O');
    
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
    console.log('X');
  }
});


var doubleSubmitFlag = false;
function doubleSubmitCheck(){
  if(doubleSubmitFlag){
    return doubleSubmitFlag;
  }else{
    doubleSubmitFlag = true;
    return false;
  }
}
function test_1(){
  if(doubleSubmitCheck()) return;
  console.log("등록");
}


/*
$.ajax({
  type: "post",
  url: "http://server.smfestival.site/swagger-ui/index.html#/post-controller/editPostUsingPATCH",
  dataType: "json",
  contentType : "application/json",
  data: JSON.stringify({
    check:0,
    id:1
  }),
  success: function(){}
})
 */