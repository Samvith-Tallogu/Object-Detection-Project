function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('room.jpeg');
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
    text('Bed', 55, 130);
    textSize(24);
    noFill();
    rect(50, 140, 440, 290);
}