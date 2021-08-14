noseX = "";
noseY = "";

function preload()
{
    missed_wav = loadSound("missed.wav");
}

function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
	console.log('Model Loaded!');
}
  
function gotPoses(results)
{
    if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX = " + noseX +", noseY = " + noseY);
	}
}

function draw()
{
    game();
}