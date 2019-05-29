//music list mouse hover
//figure out which event listener for hover
//fix marine error

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener('mousedown', click, true);
canvas.addEventListener('mousemove', mouseCoord, false);
var play = 0;
var mouse = {
    x: undefined,
    y: undefined
}

var marginErrorHl = 250;
var marginErrorHr = 400;
var marginErrorVl = 60;
var marginErrorVr = 270;
var playButtonx = 1000;
var playButtony = 500;
var playButtonRadius = 200;

function click(event){
    x = event.clientX;
    y = event.clientY;
    if(play == 0){
        if(x>playButtonx-playButtonRadius-marginErrorHl && x<playButtonx+playButtonRadius-marginErrorHr 
            && y>playButtony-playButtonRadius-marginErrorVl && y<playButtony+playButtonRadius-marginErrorVr)
            play = 1;
    }
}

function mouseCoord(event){
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop; 
}
function selectList(){
    if(mouse.x > 100 && mouse.x < 1225){
        // if(mouse.y > 150 && mouse.y < 200 )
            ctx.fillRect(100,150,1800,70);
    }
        // ctx.fillRect(100,mouse.y,1800,70);
}
//start button
function MorphingCircle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.randA = [0,0,0,0];
    this.dA = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxA = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randB = [0,0,0,0];
    this.dB = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxB = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randC = [0,0,0,0];
    this.dC = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxC = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randD = [0,0,0,0];
    this.dD = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxD = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randE = [0,0,0,0];
    this.dE = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxE = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randF = [0,0,0,0];
    this.dF = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxF = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randG = [0,0,0,0];
    this.dG = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxG = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];
    this.randH = [0,0,0,0];
    this.dH = [Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25,Math.random()*0.5-0.25];
    this.maxH = [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30];

    this.draw = function(){
        ctx.strokeStyle = "rgba(235, 137, 33, 0.1)";
        ctx.fillStyle = "rgba(235, 137, 33, 0.7)";
        var points = [  this.x-this.radius+this.randA[0],this.y+this.randA[1],
                        this.x-this.radius*4/5+this.randB[0],this.y-this.radius*4/5+this.randB[1],
                        this.x+this.randC[2],this.y-this.radius+this.randC[3],
                        this.x+this.radius*9/10+this.randD[2],this.y-this.radius*3/5+this.randD[3],
                        this.x+this.radius+this.randE[0],this.y+this.randE[1],
                        this.x+this.radius*4/5+this.randF[2],this.y+this.radius*9/10+this.randF[3],
                        this.x-this.radius/5+this.randG[0],this.y+this.radius+this.randG[1],
                        this.x-this.radius*4/5+this.randH[0],this.y+this.radius*3/5+this.randH[1],
                        this.x-this.radius+this.randA[0],this.y+this.randA[1],
                        this.x-this.radius*4/5+this.randB[0],this.y-this.radius*4/5+this.randB[1],
                        this.x+this.randC[2],this.y-this.radius+this.randC[3]
                    ];
        ctx.beginPath();
        ctx.moveTo(this.x-this.radius*4/5, this.y-this.radius/10);
        for (i = 2; i <= points.length - 4; i+=2)
        {    
            var xc = (points[i] + points[i + 2]) / 2;
            var yc = (points[i+1] + points[i + 3]) / 2;
            ctx.quadraticCurveTo(points[i], points[i+1], xc, yc);
        }

        ctx.fill();
        ctx.stroke();
    }
    this.update = function(){
        this.draw();

        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randA[i]) > this.maxA[i])
                this.dA[i] = -this.dA[i];
            // this.maxA[i] -= 0.01;
            this.randA[i]  -= this.dA[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randB[i]) > this.maxB[i])
                this.dB[i] = -this.dB[i];
            // this.maxB[i] -= 0.01;
            this.randB[i]  -= this.dB[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randC[i]) > this.maxC[i])
                this.dC[i] = -this.dC[i];
            // this.maxC[i] -= 0.01;
            this.randC[i]  -= this.dC[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randD[i]) > this.maxD[i])
                this.dD[i] = -this.dD[i];
            // this.maxD[i] -= 0.01;
            this.randD[i]  -= this.dD[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randE[i]) > this.maxE[i])
                this.dE[i] = -this.dE[i];
            // this.maxE[i] -= 0.01;
            this.randE[i]  -= this.dE[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randF[i]) > this.maxF[i])
                this.dF[i] = -this.dF[i];
            // this.maxF[i] -= 0.01;
            this.randF[i]  -= this.dF[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randG[i]) > this.maxG[i])
                this.dG[i] = -this.dG[i];
            // this.maxG[i] -= 0.01;
            this.randG[i]  -= this.dG[i];
        }
        for(var i = 0; i < 4; i++){
            if(Math.abs(this.randH[i]) > this.maxH[i])
                this.dH[i] = -this.dH[i];
            // this.maxH[i] -= 0.01;
            this.randH[i]  -= this.dH[i];
        }
    }
}
function startButton(x,y){
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "rgb(235, 137, 33)";
    ctx.textAlign = "center";
    ctx.fillText("START", x, y);
}
//start screen
function StartScreen(){
    this.fileList = [
                    ["epic", "test.mp3", "artist", "3:45"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                    ["classic", "classic.mp3", "a", "10:00"],
                ];

    this.displayFile = function(){
        var x = 100;
        var y = 150;
        
        ctx.font = "Bold 45px Comic Sans MS";
        ctx.fillStyle= "rgb(235, 137, 33)";
        ctx.fillText("HOVER TO LISTEN", 800, 100);
        for(var row = 0; row < this.fileList.length; row++){
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillRect(x,y+row*70,1800,70);
            ctx.strokeStyle = "rgb(150, 150, 150)";
            ctx.beginPath();
            ctx.moveTo(x, y+(row+1)*70);
            ctx.lineTo(x+1800, y+(row+1)*70);
            ctx.stroke();
            ctx.font = "35px Comic Sans MS";
            ctx.fillStyle = "rgb(235, 137, 33)";
            ctx.textAlign = "left";
            ctx.fillText(this.fileList[row][0], x+20, y+50+row*70);
            ctx.fillText(this.fileList[row][1], x+250, y+50+row*70);
            ctx.fillText(this.fileList[row][2], x+1350, y+50+row*70);
            ctx.fillText(this.fileList[row][3], x+1650, y+50+row*70);
        }
        
    }
}

var startButtonCircle = new MorphingCircle (playButtonx, playButtony, playButtonRadius);
var musicList = new StartScreen();
musicList.displayFile();
function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,2000, 1000);
    if(play == 0){
        startButtonCircle.update();
        startButton(playButtonx, playButtony);
        ctx.beginPath();
        ctx.arc(playButtonx, playButtony, playButtonRadius, 0, 2 * Math.PI);
    }else if(play == 1){
        musicList.displayFile();
        selectList();
    }
    
    
}
animation();