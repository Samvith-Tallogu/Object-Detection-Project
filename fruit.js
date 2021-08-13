function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('fruit.png');
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
    text('Bottle', 20, 30);
    textSize(26);
    noFill();
    rect(60, 40, 480, 400);
}