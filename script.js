canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 
color="blue";
widthline=2;
radius=5;
var mouseevent="empty";
var lastX,lastY;

canvas.addEventListener("mousedown", md);
function md(e){
    color=document.getElementById("color").value;
    widthline=document.getElementById("width").value;
    radius=document.getElementById("rad").value;
    mouseevent="mouseDown";

}

canvas.addEventListener("mousemove", mv);
function mv(e){
    CurrentX=e.clientX - canvas.offsetLeft;
    CurrentY=e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthline;
        ctx.arc(CurrentX,CurrentY,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastX=CurrentX;
    lastY=  CurrentY;
}

canvas.addEventListener("mouseup", mup);
function mup(e){
    mouseevent="mouseUp";

}

canvas.addEventListener("mouseleave", ml);
function ml(e){
    mouseevent="mouseleave";
    
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}