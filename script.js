var character= document.getElementById("character");
var block=document.getElementById("block");
var change=document.getElementById("mark");
var score=0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }

setTimeout(function(){
  character.classList.remove("animate");  
},500);
     
     
}
var checkDead= setInterval(function(){
    var characterTop=
parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft=
parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation="none";
    block.style.display="none";
    alert("You scored "+(score));
}


},10);

setInterval(function(){
score=score+100;
mark.innerText=score;

},1000);