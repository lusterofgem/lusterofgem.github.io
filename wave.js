// Setting
const resourcePath = 'resource/wave/';
const waveMaxAge = 24;

// The array to store all wave
let waveArray=[];

// Wave class constructor
function Wave(x, y) {
    this.x=x;
    this.y=y;
    this.age=0;
    this.img = document.createElement('img');
    this.img.setAttribute('src', resourcePath + 'wave0.png');
    this.img.setAttribute('style', 'position:absolute;top:'+(this.y-25)+'px;left:'+(this.x-25)+'px;');
    this.img.setAttribute('draggable', 'false');
    document.body.appendChild(this.img);
}

// Create a wave and add it to waveArray
function createWave(x,y) {
    let wave = new Wave(x,y);
    waveArray.push(wave);
}

// Delete a wave which is dead
function deleteWave(wave) {
    document.body.removeChild(wave.img);
    waveArray.splice(waveArray.indexOf(wave), 1);
}

// Check if the wave is dead
function isWaveDead(wave) {
    if(wave.age>waveMaxAge) {
        return true;
    }
    else {
        return false;
    }
}

// Run the wave (add the age and change the image resource location)
function runWave(wave) {
    if(!isWaveDead(wave)) {
        wave.img.setAttribute('src', resourcePath + 'wave' + wave.age + '.png');
        wave.age++;
    }
    else {
        deleteWave(wave);
    }
}

// Run all wave in waveArray
function runAllWave() {
    for(let i=0; i<waveArray.length; i++) {
        if(waveArray[i]) {
            runWave(waveArray[i]);
        }
    }
}

// Create wave on mouse position
function createWaveOnMouse(event) {
    const maxWave = 1;
    let randomWaveCount = Math.random()*maxWave;;
    for(let i=0; i<randomWaveCount; i+=1) {
        setTimeout(function(){createWave(event.clientX, event.clientY)}, i*50);
    }
}

// Entry point
function waveJs() {
    window.addEventListener('click', createWaveOnMouse);
    window.setInterval(runAllWave, 10);
}

window.addEventListener('load', waveJs);
