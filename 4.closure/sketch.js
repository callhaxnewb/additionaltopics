var x=0;
var timer1 = 0;
var timer2 = 0;

function setup(){
    createCanvas(200,200);
    timer1 = createP('timer1');
    timer2 = createP('timer2');

    makeTimer(timer1,500);
    makeTimer(timer2,312);

}

function makeTimer(elt,wait){
    var counter = 0;
    setInterval(timeit,wait);
    function timeit(){
        elt.html(counter);
        counter++;
    }
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