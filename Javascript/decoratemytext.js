(function(){

    "use strict";

    let decorateText = function() {
        setInterval(increaseFontSize, 500);
    }

    let increaseFontSize = function() {
        var myText = document.getElementById("myTextArea");
        var fontSize = window.getComputedStyle(myText,).getPropertyValue("font-size");
        myText.style.fontSize = parseInt(fontSize) + 2 + "pt";
    }

    let blingEffect = function() {
        var status = document.getElementById("blingCheckbox");
        var myText = document.getElementById("myTextArea");
        if(status.checked) {
            myText.style.fontWeight = "bold";
            myText.style.color = "green";
            myText.style.textDecoration = "underline";
            document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }else{
            myText.style.fontWeight = "normal";
            myText.style.color = "black";
            myText.style.textDecoration = "none";
            document.body.style.background = "none";
        }
    }

    let malkovichTransformation = function(){
        var myTextValue = document.getElementById("myTextArea");
        var list = myTextValue.value.split(" ");
        for (let index = 0; index < list.length; index++) {
            if(list[index].length > 5) {
                list[index] = "Malkovich";
            }
        }
        myTextValue.value = list.join(" ");
    }

    function clearTetxtArea() {
        document.getElementById("myTextArea").value = "";
    }

    let igpayAtinlayTransformation = function(){
        let myTextValue = document.getElementById("myTextArea");
        if(myTextValue.value.length > 0) {
            let list = myTextValue.value.split(" ");

            for (let index = 0; index < list.length; index++) {
                list[index] = igpayAtinlayApplyTransformation(list[index]);
            }
            myTextValue.value = list.join(" ");
        }
    }

    function igpayAtinlayApplyTransformation(word) {
        if(isVowel(word.charAt(0))) {
            return vowelSoundsTransformation(word);
        }else{
            if(word.length > 1 && isVowel(word.charAt(1))) {
                return consonantSoundTransformation(word);
            }else{
                return consonantClusterTransformation(word);
            }
        }
    }

    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
    }

    function consonantSoundTransformation(word) {
        return word.substring(1, word.length) + word.charAt(0) + "ay";
    }

    function consonantClusterTransformation(word) {
        var index = 0
        while(word.length < index && !isVowel(word.charAt(index))) index++;
        return word.substring(index, word.length) + word.substring(0, index) + "ay";
    }

    function    vowelSoundsTransformation(word) {
        return word + "way";
    }

    let mapEventHandlers = function() {
        document.getElementById("decorateTextButton").onclick = decorateText;
        document.getElementById("igpayAtinlayButton").onclick = igpayAtinlayTransformation;
        document.getElementById("malkovichButton").onclick = malkovichTransformation;
        document.getElementById("clearTextButton").onclick = clearTetxtArea;
        document.getElementById("blingCheckbox").onchange = blingEffect;
    }

    window.onload = mapEventHandlers;

})();
