percent = 0;
img = "";
status = "";
objects = [];
function back() {
    window.location = 'index.html';
}
function preload(){
    img = loadImage('fruit.png');
}

function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
}

function modelLoaded() {
    console.log('CocoSSD Loaded!');
    status = true;
    detector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 650, 450);
    if (status !="") {
        for(i = 0; i < objects.length; i++){
            document.getElementById('status').innerHTML = 'Status: Objects detected Successfully!';
            fill('#FFFFFF');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+'  ' + percent + '%', objects[i].x + 12, objects[i].y + 25);
            noFill();
            stroke('#FFFFFF');
            textSize(24);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        }
}