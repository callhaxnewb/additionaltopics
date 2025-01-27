function setup() {
    let mainCanvas = createCanvas(200, 200);
    mainCanvas.position(150, 150);
    background(0,255,0);
    createP("hello");

    // Call the particle.js functionality
    createParticleCanvas();
}

function draw() {
    background(0,255,0);
    // Add draw logic for particles if necessary
}
