(function(){
    "use strict";

    const slowSpeedFrameAnimation = 250;
    const highSpeedFrameAnimation = 50;
    const minimaumRequiredAnimationFrames = 2;
    const firstIndexArray = 0;

    let isAnimationOn = false,
        animationSpeed = slowSpeedFrameAnimation,
        animationFrames = [],
        animationID,
        animationFrameIndex = firstIndexArray;

    let startAnimation = function() {
        if(animationFrames.length < minimaumRequiredAnimationFrames) { return; }
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animationType").disabled = true;
        playAnimation();
    };
    let stopAnimation = function() {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animationType").disabled = false;
        animationFrameIndex = 0;
        clearInterval(animationID);
        isAnimationOn = false;
    };

    let changeAnimationType = function(){
        let selectedAnimation = ANIMATIONS[this.value];
        initializeScreen(selectedAnimation);
    };

    let changeFontSize = function(){
        document.getElementById("text-area").style.fontSize = this.value + "pt";
    };

    let changeSpeed= function(){
        if(this.checked) { animationSpeed = highSpeedFrameAnimation;
        } else { animationSpeed = slowSpeedFrameAnimation; }
        updateAnimationFramesSpeed();
    };

    let initializeScreen = function(selectedAnimationFrames){
        animationFrames = selectedAnimationFrames.split("=====\n");
        setScreenAnimation(animationFrames[firstIndexArray]);
    };

    let setScreenAnimation = function(value) {
        document.getElementById("text-area").value = value;
    };

    let playAnimation = function() {
        isAnimationOn = true;
        animationID = setInterval(animationEngine, animationSpeed);
    };

    let animationEngine = function() {
        if(animationFrameIndex >= animationFrames.length) { animationFrameIndex = firstIndexArray; }
        setScreenAnimation(animationFrames[animationFrameIndex]);
        animationFrameIndex++;
    };

    let updateAnimationFramesSpeed = function() {
        if(isAnimationOn) {
            clearInterval(animationID);
            playAnimation();
        }
    };

    let mapEventHandlers = function() {
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("animationType").onchange = changeAnimationType;
        document.getElementById("fontsize").onchange = changeFontSize;
        document.getElementById("turbo").onchange = changeSpeed;
    }

    window.onload = mapEventHandlers;

})();