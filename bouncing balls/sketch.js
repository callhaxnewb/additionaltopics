var particle=[];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle.push(new Particle(200, 50));
    background(0);
}

function mousePressed(){
    particle.push(new Particle(mouseX, mouseY));
}
function draw() {
    background(200);
    for(var i=0;i<particle.length;i++){
        particle[i].update();
        particle[i].show();
    }
}
