var context = canvas.getContext('2d');

var heart_red = new Image();
heart_red.src = "heart_red.png";

var Papyrus_leg = new Image();
Papyrus_leg.src = "papyrus_leg.png";

var Papyrus_body = new Image();
Papyrus_body.src = "papyrus_body.png";

var bonebone = new Image();
bonebone.src = "BoneP.png";

var bgm = new Audio();
bgm.src = 'Phase1.ogg';

var dx = 400;
var dy = 420;

var keyright = 1;
var keyleft = 1;
var keydown = 1;
var keyup = 1;

var bone1_info = 0;

var heartmode = 0;

bgm.play();

setTimeout("bone()", 5000);

requestAnimationFrame(main);

function main() {
	context.clearRect(0, 0, 800, 600);

	context.strokeStyle = 'white';
	context.lineWidth = 8;
	context.strokeRect(150, 320, 500, 200);
	context.drawImage(heart_red, dx, dy, 20, 20);
	context.drawImage(Papyrus_leg, 337.5, 180, 125, 125);
	context.drawImage(Papyrus_body, 337.5 ,90, 125, 125);
	document.addEventListener("keydown", keyDownHandler);
	document.addEventListener("keyup", keyUpHandler);
	HeartMove();


	requestAnimationFrame(main);
}

 
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        keyright = 0;
    }
    else if(e.keyCode == 37) {
        keyleft = 0;
    }
    if(e.keyCode == 40) {
        keydown = 0;
    }
    else if(e.keyCode == 38) {
        keyup = 0;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        keyright = 1;
    }
    else if(e.keyCode == 37) {
        keyleft = 1;
    }
    if(e.keyCode == 40) {
        keydown = 1;
    }
    else if(e.keyCode == 38) {
        keyup = 1;
    }
}

function HeartMove(){
	if(heartmode == 0) {
		if(keyright == 0) {
			if(dx < 650 - 16) {
				dx += 3;
			}
		}
		if(keyleft == 0) {
			if(dx>150) {
				dx -= 3;
			}
		}
		if(keydown == 0) {
			if(dy < 520 - 16) {
				dy += 3;
			}
		}
		if(keyup == 0) {
			if(dy > 320) {
				dy -= 3;
			}
		}
	
	}

	if(heartmode == 1) {
		if(keyright == 0) {
			if(dx < 650 - 16) {
				dx += 3;
			}
		}
		if(keyleft == 0) {
			if(dx > 150) {
				dx -= 3;
			}
		}
	}
}

function bone() {
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
	context.drawImage(bonebone, 337.5 ,90);
}

