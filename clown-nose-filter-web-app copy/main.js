function preload(){

}

function setup(){
canvas = createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.size(600,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("PoseNet model has started!!:)");
}
function draw(){
image(video,0,0,600,400);
}
function take_snapshot(){
    save("moustache.png");
}
function gotPoses(results){
    // console.log("got poses")
if(results.length>0){
    console.log(results);
    console.log("moustache x ="+results[0].pose.moustache.x);
    console.log("moustache y ="+results[0].pose.moustache.y);
}
}

