var x=0;
var counter = 0;
var counter1 = 0;
var timer1 = 0;
var timer2 = 0;
var state=false;

function setup(){
    createCanvas(200,200);
    timer1= createP('timer1');
    timer2 = createP('timer2');
    interval=setInterval(timeit,500); //starting first timer
    button=createButton('start timer');
    button.mousePressed(toggleTimer); 

}
function toggleTimer(){
    state=!state;
    if(state){
        interval2= setInterval(timeit2,1000); //starting 2nd timer
        button.html("stop timer")
    }else{
        clearInterval(interval2);
        counter1=0;
        button.html("start timer");
    }
}
function timeit(){
    timer1.html(counter);
    counter++;
}
function timeit2(){
    timer2.html(counter1);
    counter1++;
}
function draw(){
    background(51);
    stroke(255);
    line(x, 0, x, height);
    x+=3;
    if(x>width){
        x=0;
    }
}

function rainbow(){
    createP("rainbow");
    setTimeout(rainbow,1000);
}