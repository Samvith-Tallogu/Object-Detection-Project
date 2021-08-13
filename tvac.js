function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('tvac.jpeg');
}
function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoaded);
}


function modelLoaded() {
    console.log('CocoSSD Loaded!');
}

function draw() {
    image(img, 0, 0, 600, 450);
    fill('#FF0000');
    text('TV', 235, 180);
    textSize(24);
    noFill();
    rect(230, 190, 250, 170);
    fill('#006400');
    text('AC', 235, 20);
    textSize(24);
    noFill();
    rect(235, 25, 250, 120);
}