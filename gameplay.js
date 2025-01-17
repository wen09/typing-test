//music list with start time for stage 1
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

var canvas = document.querySelector('canvas');
var paragraph = document.querySelector('.game');
var currentWord = document.querySelector('.currentWord');
var input = document.querySelector('.input');
var scoreDes = document.querySelector('.score');
const body = document.querySelector('html');

//color theme
var backgroundColor;
var mainButtonFill;
var mainButtonStroke;
var selectedBoxColor;
var textColor;
var selectedWordColor;
function theme(){
    if (body.classList.contains('theme-light')) {
        backgroundColor = "rgb(255, 255, 255)";
        mainButtonFill = "rgba(235, 137, 33, 0.7)";
        mainButtonStroke = "rgba(235, 137, 33, 0.1)";
        selectedBoxColor = "rgb(235, 137, 33)";
        textColor = "rgb(235, 137, 33)";
        selectedWordColor = "rgb(0, 0, 0)";
    }else if(body.classList.contains('theme-dark')) {
        backgroundColor = "rgb(32, 32, 31)";
        mainButtonFill = "rgba(44, 44, 42, 0.7)";
        mainButtonStroke = "rgba(44, 44, 42, 0.1)";
        selectedBoxColor = "rgb(0, 0, 0)";
        textColor = "rgb(0, 0, 0)";
        selectedWordColor = "rgb(114, 114, 114)";
    }
}

// TODO: read from file made from midi
//list of words for stage 3
var wordList = [
    'Object-oriented programming',
    'abstraction',
    'polymorphism',
    'encapsulation',
    'inheritance'
];
//sets all music to start time for stage 2
for (var i = 0; i < 11; i++) {
    music[i][0].currentTime = music[i][1];
}
// TODO: read from directory
//stoes music data
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
var bgm = 0;//stores music selected from stage 2

var ctx = canvas.getContext('2d');
ctx.canvas.width = 2000;
ctx.canvas.height = 1000;
canvas.addEventListener('mousedown', click, true);
canvas.addEventListener('mousemove', mouseCoord, false);

//controls stages
// 0 == start screen, 1 == list of music, music selection, 2 == game load, 3 == game play, 4 == end screen
var play = 0;//start at 0
var score = 0;

var mouse = {
    x: undefined,
    y: undefined
}

//margin of error for stage 0,2,4
var marginErrorHl = 250;
var marginErrorH2 = 400;
var marginErrorVl = 60;
var marginErrorV2 = 270;
//margin of error for stage 2
var playButtonx = 1000;
var playButtony = 500;
var playButtonRadius = 200;
//margin of error for stage 1
var listXl = 100;
var listXr = listXl + 1800;
var listYt = 150;
var listYb = listYt + 400;
//margin of error for stage 4
var backButtonx = 1300;
var backButtony = 500;
var backButtonRadius = 150;

function click(event) {
    x = event.clientX;
    y = event.clientY;
    if (play == 0) {
        if (x > playButtonx - playButtonRadius - marginErrorHl && x < playButtonx + playButtonRadius - marginErrorH2
            && y > playButtony - playButtonRadius - marginErrorVl && y < playButtony + playButtonRadius - marginErrorV2)
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
        if (x > playButtonx - playButtonRadius - marginErrorHl && x < playButtonx + playButtonRadius - marginErrorH2
            && y > playButtony - playButtonRadius - marginErrorVl && y < playButtony + playButtonRadius - marginErrorV2)
            play = 3;
    }else if (play == 4) {
        if (x > backButtonx - backButtonRadius - 400 && x < backButtonx + backButtonRadius - 500 
            && y > backButtony - backButtonRadius - 100 && y < backButtony + backButtonRadius - 235)
            play = 0;
    }
}
function mouseCoord(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

//stage 0
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
        ctx.strokeStyle = mainButtonStroke;
        ctx.fillStyle = mainButtonFill;
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
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.fillText("START", x, y);
}
function StartScreen() {
    this.displayFile = function () {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var x = 100;
        var y = 150;
        ctx.font = "Bold 45px Comic Sans MS";
        ctx.fillStyle = textColor;
        ctx.fillText("HOVER TO LISTEN", 800, 100);
        for (var row = 0; row < fileList.length; row++) {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(x, y + row * 70, 1800, 70);
            ctx.strokeStyle = "rgb(150, 150, 150)";
            ctx.beginPath();
            ctx.moveTo(x, y + (row + 1) * 70);
            ctx.lineTo(x + 1800, y + (row + 1) * 70);
            ctx.stroke();
            ctx.font = "35px Comic Sans MS";
            ctx.fillStyle = textColor;
            ctx.textAlign = "left";
            ctx.fillText(fileList[row][0], x + 20, y + 50 + row * 70);
            ctx.fillText(fileList[row][1], x + 250, y + 50 + row * 70);
            ctx.fillText(fileList[row][2], x + 1250, y + 50 + row * 70);
            ctx.fillText(fileList[row][3], x + 1650, y + 50 + row * 70);
        }

    }
}
//stage 1
function SelectList() {
    this.roundedRect = function (x, y) {
        var radius = 20;
        ctx.fillStyle = selectedBoxColor;
        ctx.strokeStyle = selectedBoxColor;
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
        ctx.fillStyle = backgroundColor;
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
//stage 2
function playButton(x, y) {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.fillText("PLAY", x, y);
}
//logics for stage 3
function verifyInput(){
    if(verifyCurrentWord()){
        displayWord(wordList);
        input.value = '';
        score++;
    }
    scoreDes.innerHTML = score;
}
function verifyCurrentWord(){
    console.log("inputs!!!!");
    console.log(currentWord.innerHTML);
    console.log(input.value);
    if(input.value === currentWord.innerHTML)
        return true;
    else
        return false;
}
//display to html
function displayWord(words){
    const rand = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[rand];
    scoreDes.innerHTML = score;
}
//stage 4
function displayScore(){
    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.fillText("Your score", 500, 400);
    ctx.fillText("Score: " + this.score, 500, 500);
}
function backButton(x, y) {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.fillText("BACK", x, y);
}

var startButtonCircle = new MorphingCircle (playButtonx, playButtony, playButtonRadius);
var backButtonCircle = new MorphingCircle (backButtonx, backButtony, backButtonRadius);
var musicList = new StartScreen();
var selectList = new SelectList();

//display

//displays the logic for html
function logic(){
    displayWord(wordList);
    input.addEventListener('input', verifyInput);
}
//sets the end screen for html
function end(){
    play = 4;
    console.log("ended!!!!");
}
//displays everything
function animation(){
    window.requestAnimationFrame(animation);
    theme();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if(play == 0){
        paragraph.style.display="none";
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
        music[bgm][0].loop = false;
        music[bgm][0].play();
        paragraph.style.display="block";
        canvas.style.display="none";
    }else if(play == 4){
        canvas.style.display="inline";
        paragraph.style.display="none";
        ctx.fillText('end', 100, 100);
        music[bgm][0].pause();
        backButtonCircle.update();
        backButton(backButtonx, backButtony);
        displayScore();
    }
}
//displays the graphics
animation();