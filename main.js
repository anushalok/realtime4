noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#969A97');

    docement.getElementByIs("square_side").innerHTML = "Wifht And Height of a square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,differnece)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.Y;
        console.log("noseX = "+ noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = (leftWristX-rightWrist);

        condole.log("leftWristX = " + leftWistX + "rightWristX = " + rightWristX +" differnece =" + difference);
    }
}


