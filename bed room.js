var status = "";
function preload(){
     img = loadImage("bed room.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image();
    fill("#FF0000");
    text();
    noFill();
    stroke("#FF0000");
    rect();

    
    fill("#FF0000");
    text();
    noFill();
    stroke("#FF0000");
    rect();
    
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}
