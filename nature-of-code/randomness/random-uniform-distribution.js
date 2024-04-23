let randomCounts = [];

let counts = 50;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < counts; i++){
        randomCounts[i] = 0;
    }
}

function draw(){
    background(255);

    let index = floor(random(counts));
    randomCounts[index]++;

    stroke(0);
    fill(127);

    let w = width/randomCounts.length;

    for(let x = 0; x < randomCounts.length; x++){
        rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
    }
}
