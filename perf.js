function FPS() {
    this.currentTime = performance.now();
    this.startTime = this.currentTime;
    this.lastFPSCalculationTime = 0;
    this.fps = 0;
    this.numFrames = 0;
}

FPS.prototype.calculate = function () {
    this.currentTime = performance.now();
    this.numFrames++;

    // Upte the FPS every 100 ms.
    var elapsedTime = (this.currentTime - this.startTime) / 1000.0; // seconds      
    if (this.currentTime - this.lastFPSCalculationTime > 100) {
        this.fps = (this.numFrames / elapsedTime);
        this.lastFPSCalculationTime = this.currentTime;
    }

    // Re-calculate FPS every 2 seconds:
    if (elapsedTime > 2) {
        this.numFrames = 0;
        this.startTime = this.currentTime;
    }
};

var fps = new FPS();
(function loop() {
    fps.calculate();
    var fpsElement = document.getElementById("fps");
    fpsElement.innerHTML = fps.fps.toFixed(1);
    setTimeout(loop, 1000 / 60);
}());

