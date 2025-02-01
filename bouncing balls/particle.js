var gravity = 0.2;

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = 0;
    this.xspeed = 4;
    this.history = [];

    this.update = function () {
        this.yspeed += gravity;  // Use the gravity variable you defined
        this.x += this.xspeed
        this.y += this.yspeed;
    
        if (this.y > height) {
            this.y = height;
            this.yspeed *= -0.8;
        } else if(this.x > width){
            this.x = width;
            this.xspeed*=-0.9;
        }
        else if (this.x<0){
            this.x = 0;
            this.xspeed*=-0.9;
        }



        let v = createVector(this.x, this.y);
        this.history.push(v);
        if (this.history.length > 20) { // Keeps only last 20 positions
            this.history.shift();
        }
    };

    this.show = function () {
        noStroke();
        fill(0);  // Changed to black to contrast with gray background
        ellipse(this.x, this.y, 40, 40);  // Made the ball bigger
    };
}