



var title1 = document.getElementById("title");
var write1 = document.getElementById("write");
var number1 = document.getElementById("number");
var contents1 = document.getElementById("contents");
var input1=document.getElementById("input1");

$('#input1').click( function() {

    if (title1.value==""||write1.value==""||number1.value==""||contents1.value=="") {
        alert("입력이 되지 않은 사항이 있습니다.");
    }
});


