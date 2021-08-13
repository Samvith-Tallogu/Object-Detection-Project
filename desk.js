function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('desk.jpg');
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
    text('Laptop', 155, 18);
    textSize(24);
    noFill();
    rect(155, 20, 160, 110);
    fill('#FF0000');
    text('Desk', 35, 18);
    textSize(24);
    noFill();
    rect(35, 20, 520, 410);
}