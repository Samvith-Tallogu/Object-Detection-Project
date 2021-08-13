function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('bottle.jpeg');
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
    fill('#006400');
    text('Bottle', 205, 30);
    textSize(24);
    noFill();
    rect(200, 40, 180, 400);
}