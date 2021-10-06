canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var mouse_event="empty";
var lastpositionofx;
var lastpositionofy;
color="black";
widthofline=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    currentpositionofx=e.clientX - canvas.offsetLeft;
    currentpositionofy=e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(currentpositionofx, currentpositionofy, 20 ,0 , 2 * Math.PI); 
    ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;

}
canvas.addEventListener("touchstart", my_touchstart);
    
function my_touchstart(e)
{
    console.log("my_touchstart");

    //Addictonal Activity ends

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");

     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}

