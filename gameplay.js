// //actual game play!!!

var canvas = document.querySelector('canvas');
var music = [[document.querySelector('audio:nth-child(1)'), 0],
[document.querySelector('audio:nth-child(2)'), 0],
[document.querySelector('audio:nth-child(3)'), 3],
[document.querySelector('audio:nth-child(4)'), 0],
[document.querySelector('audio:nth-child(5)'), 50],
[document.querySelector('audio:nth-child(6)'), 0],
[document.querySelector('audio:nth-child(7)'), 25],
[document.querySelector('audio:nth-child(8)'), 137],
[document.querySelector('audio:nth-child(9)'), 0],
[document.querySelector('audio:nth-child(10)'), 0],
[document.querySelector('audio:nth-child(11)'), 55.5]
];
var ctx = canvas.getContext('2d');

for (var i = 0; i < 11; i++) {
    music[i][0].currentTime = music[i][1];
}

ctx.canvas.width = 2000;
ctx.canvas.height = 1000;
canvas.addEventListener('mousedown', click, true);
canvas.addEventListener('mousemove', mouseCoord, false);
window.addEventListener('keypress', keyboardInput, false);
var play = 3;//start at 0

var mouse = {
    x: undefined,
    y: undefined
}
var charValue;
var fileList = [
    ["Epic", "Disappear.mp3", "Two Steps From Hell", "2:59"],
    ["Epic", "Evergreen.mp3", "Two Steps From Hell", "3:02"],
    ["Classic", "He's a Pirate.mp3", "Klaus Badelt", "1:30"],
    ["J-Pop", "Lemon.mp3", "米津玄師", "4:10"],
    ["EDM", "All Time Low.mp3", "Jon Bellion", "3:41"],
    ["EDM", "Jack Sparrow.mp3", "Nigtcore", "3:01"],
    ["Remix", "East of Eden (Matstubs Remix).mp3", "Zella Day", "3:24"],
    ["Remix", "Castle Of Glass (M. Shinoda Remix).mp3", "Linkin Park", "6:21"],
    ["Alternative", "Strange.mp3", "Strange", "3:17"],
    ["Alternative", "Believer.mp3", "Imagine Dragons", "3:22"],
    ["Alternative", "Radioactive.mp3", "Imagine Dragons", "3:07"]
];
var bgm = 0;
var marginErrorHl = 250;
var marginErrorHr = 400;
var marginErrorVl = 60;
var marginErrorVr = 270;
var playButtonx = 1000;
var playButtony = 500;
var playButtonRadius = 200;
var listXl = 100;
var listXr = listXl + 1800;
var listYt = 150;
var listYb = listYt + 400;

// Countdown timer (in seconds)
var countdown = 0;
// ID to track the setTimeout
var id = null;

function click(event) {
    x = event.clientX;
    y = event.clientY;
    if (play == 0) {
        if (x > playButtonx - playButtonRadius - marginErrorHl && x < playButtonx + playButtonRadius - marginErrorHr
            && y > playButtony - playButtonRadius - marginErrorVl && y < playButtony + playButtonRadius - marginErrorVr)
            play = 1;
    } else if (play == 1) {
        if (mouse.x > listXl + 30 && mouse.x < listXr - 690) {
            if (mouse.y > listYt + 5 && mouse.y < listYb) {
                var diffY = listYb - listYt - 10;
                var boxH = diffY / 11;
                var temp = (mouse.y - listYt - 10) / boxH;
                bgm = Math.floor(temp);
                play = 2;
            }
        }
    } else if (play == 2) {
        if (x > playButtonx - playButtonRadius - marginErrorHl && x < playButtonx + playButtonRadius - marginErrorHr
            && y > playButtony - playButtonRadius - marginErrorVl && y < playButtony + playButtonRadius - marginErrorVr)
            play = 3;
    }
}
function mouseCoord(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
function keyboardInput(event) {
    input = event.char || event.keycode || event.which;
    charValue = String.fromCharCode(input);
}
//start button
function MorphingCircle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.randA = [0, 0, 0, 0];
    this.dA = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxA = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randB = [0, 0, 0, 0];
    this.dB = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxB = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randC = [0, 0, 0, 0];
    this.dC = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxC = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randD = [0, 0, 0, 0];
    this.dD = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxD = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randE = [0, 0, 0, 0];
    this.dE = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxE = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randF = [0, 0, 0, 0];
    this.dF = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxF = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randG = [0, 0, 0, 0];
    this.dG = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxG = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];
    this.randH = [0, 0, 0, 0];
    this.dH = [Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25];
    this.maxH = [Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30];

    this.draw = function () {
        ctx.strokeStyle = "rgba(235, 137, 33, 0.1)";
        ctx.fillStyle = "rgba(235, 137, 33, 0.7)";
        var points = [this.x - this.radius + this.randA[0], this.y + this.randA[1],
        this.x - this.radius * 4 / 5 + this.randB[0], this.y - this.radius * 4 / 5 + this.randB[1],
        this.x + this.randC[2], this.y - this.radius + this.randC[3],
        this.x + this.radius * 9 / 10 + this.randD[2], this.y - this.radius * 3 / 5 + this.randD[3],
        this.x + this.radius + this.randE[0], this.y + this.randE[1],
        this.x + this.radius * 4 / 5 + this.randF[2], this.y + this.radius * 9 / 10 + this.randF[3],
        this.x - this.radius / 5 + this.randG[0], this.y + this.radius + this.randG[1],
        this.x - this.radius * 4 / 5 + this.randH[0], this.y + this.radius * 3 / 5 + this.randH[1],
        this.x - this.radius + this.randA[0], this.y + this.randA[1],
        this.x - this.radius * 4 / 5 + this.randB[0], this.y - this.radius * 4 / 5 + this.randB[1],
        this.x + this.randC[2], this.y - this.radius + this.randC[3]
        ];
        ctx.beginPath();
        ctx.moveTo(this.x - this.radius * 4 / 5, this.y - this.radius / 10);
        for (i = 2; i <= points.length - 4; i += 2) {
            var xc = (points[i] + points[i + 2]) / 2;
            var yc = (points[i + 1] + points[i + 3]) / 2;
            ctx.quadraticCurveTo(points[i], points[i + 1], xc, yc);
        }

        ctx.fill();
        ctx.stroke();
    }
    this.update = function () {
        this.draw();

        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randA[i]) > this.maxA[i])
                this.dA[i] = -this.dA[i];
            // this.maxA[i] -= 0.01;
            this.randA[i] -= this.dA[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randB[i]) > this.maxB[i])
                this.dB[i] = -this.dB[i];
            // this.maxB[i] -= 0.01;
            this.randB[i] -= this.dB[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randC[i]) > this.maxC[i])
                this.dC[i] = -this.dC[i];
            // this.maxC[i] -= 0.01;
            this.randC[i] -= this.dC[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randD[i]) > this.maxD[i])
                this.dD[i] = -this.dD[i];
            // this.maxD[i] -= 0.01;
            this.randD[i] -= this.dD[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randE[i]) > this.maxE[i])
                this.dE[i] = -this.dE[i];
            // this.maxE[i] -= 0.01;
            this.randE[i] -= this.dE[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randF[i]) > this.maxF[i])
                this.dF[i] = -this.dF[i];
            // this.maxF[i] -= 0.01;
            this.randF[i] -= this.dF[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randG[i]) > this.maxG[i])
                this.dG[i] = -this.dG[i];
            // this.maxG[i] -= 0.01;
            this.randG[i] -= this.dG[i];
        }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.randH[i]) > this.maxH[i])
                this.dH[i] = -this.dH[i];
            // this.maxH[i] -= 0.01;
            this.randH[i] -= this.dH[i];
        }
    }
}
function startButton(x, y) {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "rgb(235, 137, 33)";
    ctx.textAlign = "center";
    ctx.fillText("START", x, y);
}
//start screen
function StartScreen() {
    this.displayFile = function () {
        var x = 100;
        var y = 150;

        ctx.font = "Bold 45px Comic Sans MS";
        ctx.fillStyle = "rgb(235, 137, 33)";
        ctx.fillText("HOVER TO LISTEN", 800, 100);
        for (var row = 0; row < fileList.length; row++) {
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillRect(x, y + row * 70, 1800, 70);
            ctx.strokeStyle = "rgb(150, 150, 150)";
            ctx.beginPath();
            ctx.moveTo(x, y + (row + 1) * 70);
            ctx.lineTo(x + 1800, y + (row + 1) * 70);
            ctx.stroke();
            ctx.font = "35px Comic Sans MS";
            ctx.fillStyle = "rgb(235, 137, 33)";
            ctx.textAlign = "left";
            ctx.fillText(fileList[row][0], x + 20, y + 50 + row * 70);
            ctx.fillText(fileList[row][1], x + 250, y + 50 + row * 70);
            ctx.fillText(fileList[row][2], x + 1250, y + 50 + row * 70);
            ctx.fillText(fileList[row][3], x + 1650, y + 50 + row * 70);
        }

    }
}
function SelectList() {
    this.roundedRect = function (x, y) {
        var radius = 20;
        ctx.fillStyle = "rgb(235, 137, 33)";
        ctx.strokeStyle = "rgb(235, 137, 33)";
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + 1800 - radius, y);
        ctx.fill();
        ctx.moveTo(x, y + radius + 1);
        ctx.lineTo(x + radius, y + radius + 1);
        ctx.lineTo(x + radius, y);
        ctx.lineTo(x, y + radius + 1);
        ctx.fill();
        ctx.arc(x + 1800 - radius, y + radius, radius, Math.PI * 1.5, 0, false);
        ctx.moveTo(x + 1800, y + radius);
        ctx.lineTo(x + 1800, y + 70 - radius);
        ctx.fill();
        ctx.moveTo(x + 1800, y + radius);
        ctx.lineTo(x + 1800 - radius, y + radius);
        ctx.lineTo(x + 1800 - radius, y + 70);
        ctx.lineTo(x + 1800, y + 70 - radius);
        ctx.fill();
        ctx.arc(x + 1800 - radius, y + 70 - radius, radius, 0, Math.PI * 0.5, false);
        ctx.moveTo(x + 1800 - radius, y + 70);
        ctx.lineTo(x + radius, y + 70);
        ctx.fill();
        ctx.arc(x + radius, y + 70 - radius, radius, Math.PI * 0.5, Math.PI, false);
        ctx.lineTo(x, y + 70 - radius);
        ctx.lineTo(x, y + radius);
        ctx.fill();
        ctx.fillRect(x + radius, y + radius, 1800 - radius * 2, 70 - radius);
        ctx.fillRect(x + radius, y, 1800 - radius * 2, 70 - radius);
    }
    this.reset = function (ind) {
        music[ind][0].currentTime = 0;
        for (var i = 0; i < 11; i++) {
            music[i][0].pause();
        }
    }
    this.selectedText = function (x, y, ind) {
        ctx.fillStyle = "white";
        for (var i = 0; i < 4; i++) {
            ctx.fillText(fileList[ind][0], x + 20, y + 50);
            ctx.fillText(fileList[ind][1], x + 250, y + 50);
            ctx.fillText(fileList[ind][2], x + 1250, y + 50);
            ctx.fillText(fileList[ind][3], x + 1650, y + 50);
        }
    }
    this.showSelected = function () {
        var position = [150, 220, 290, 360, 430, 500, 570, 640, 710, 780, 850];
        if (mouse.x > listXl + 30 && mouse.x < listXr - 690) {
            if (mouse.y > listYt + 5 && mouse.y < listYb) {
                var diffY = listYb - listYt - 10;
                var boxH = diffY / 11;
                var temp = (mouse.y - listYt - 10) / boxH;
                var ind = Math.floor(temp);
                this.roundedRect(100, position[ind]);
                this.selectedText(100, position[ind], ind);
                music[ind][0].play();
                for (var i = 0; i < 11; i++) {
                    if (i != ind) {
                        music[i][0].pause();
                        music[i][0].currentTime = music[i][1];
                    }
                }
            }
        }
    }
}
function playButton(x, y) {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "rgb(235, 137, 33)";
    ctx.textAlign = "center";
    ctx.fillText("PLAY", x, y);
}
//game play
function GamePlay(){
    this.timer = -3; //set to 0
    this.score = 0;
    this.currentPosition = 1;
    this.status = this.currentPosition;
    // this.status = this.currentPosition/fileList[bdm][3];
    this.wordX = 130;
    this.wordY = 260;
    this.index = this.timer-1;
    this.title = function(countDown){
        if(countDown <= 0){
            ctx.fillText(countDown, 650, 150);
            ctx.fillText("COUNTDOWN:", 350, 150);
        }else{
            ctx.fillText(countDown, 500, 150);
            ctx.fillText("START", 300, 150);
        }
    }
    this.sheetMusic = function(x,y){
        ctx.strokeStyle = "rgb(114, 114, 114)";
        var lineY = y;
        for(var i = 0; i < 5; i++){
            ctx.moveTo(x, lineY+i*20);
            ctx.lineTo(x+1800, lineY+i*20);
        }
        ctx.stroke();
    }
    this.words = function(words, timer){
        ctx.font = "70px Comic Sans MS";
        // ctx.fillStyle = "rgb(235, 137, 33)";
        ctx.textAlign = "center";
        var x = 130;
        var y = 260;
        var ind = 0;
        var row = 0;
        var currentX;
        var currentY;
        for(var i = 0; i < words.length; i++){
            if(timer == i)
                ctx.fillStyle = "rgb(0, 0, 0)";
            else
                ctx.fillStyle = "rgb(235, 137, 33)";
            currentX = x+60*ind;
            currentY = y+150*row
            if(currentX < 1900){
                ctx.fillText(words.charAt(i), currentX, currentY);
            }else{
                row++;
                ind = -1;
                i -= 1;
            }
            ind++;
        }
    }
    this.wordsAnimation = function(words){ //not for use
        ctx.font = "70px Comic Sans MS";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "center";

        if(this.wordX < 1850){
            this.index += 1;
            this.wordX = 130+60*(this.index);
            ctx.fillText(words[this.timer-1], this.wordX, this.wordY);
        }else{
            this.wordY += 150;
            this.wordX = 130;
            this.index = 0;
            ctx.fillText(words[this.timer-1], this.wordX, this.wordY);
        }
    }
    this.cursor = function(){ //not for use
        ctx.fillStyle = "rgba(235, 137, 33, 0.5)";
        ctx.fillRect(this.cursorX,this.cursorY, 50, 80);
    }
    this.cursorAnimation = function(){ //not for use
        this.cursor();
        if(this.cursorX >= 1800){
            this.cursorX = 130;
            this.cursorY += 150;
        }else{
            this.cursorX = 130+80*(this.timer);
        }
    }
    this.background = function(){
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = "rgb(235, 137, 33)";
        ctx.textAlign = "center";
        ctx.fillText(this.status + "%", 1600, 120);
        ctx.fillText("Score: " + this.score, 1800, 120);
        var y = 200;
        for(var i = 0; i < 5; i++){
            this.sheetMusic(100, y+i*150);
        }
    }
    this.update = function(words, countDown){
        this.background();
        gamePlay.title(countDown);
        if(countDown >= 0){
            this.words(words, countDown);
        }
    }
}

var startButtonCircle = new MorphingCircle (playButtonx, playButtony, playButtonRadius);
var musicList = new StartScreen();
var selectList = new SelectList();
var gamePlay = new GamePlay(countdown);

// Start the game
function startGame() {
    // Reduce the countdown timer ever second
    id = setInterval(function () {
        countdown++;
    }, 1000)
    animation();
}

// The main draw loop
play = 3;
function animation(){
    if (countdown < 0) {
        clearInterval(id);
        ctx.fillText('Time Remaining: ' + countdown, 100, 200);
      } else {
        window.requestAnimationFrame(animation);
      }

    ctx.clearRect(0,0,2000, 1000);
    ctx.fillText('Time Remaining: ' + countdown, 100, 100);
    if(play == 0){
        startButtonCircle.update();
        startButton(playButtonx, playButtony);
    }else if(play == 1){
        musicList.displayFile();
        selectList.showSelected();
    }else if(play == 2){
        selectList.reset(bgm);
        startButtonCircle.update();
        playButton(playButtonx, playButtony);
    }else if(play == 3){
        music[bgm][0].play();
        gamePlay.update("qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890", countdown);
    }
}

// Start the game
startGame();
