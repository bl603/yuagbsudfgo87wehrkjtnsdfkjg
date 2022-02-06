noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/dVsbS75S/CNWG.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,299);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('model Loaded!')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose X="+noseX);
        console.log("nose y="+noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,80,77);
}
function take_snapshot(){
    save('myFilterImage.png');
}