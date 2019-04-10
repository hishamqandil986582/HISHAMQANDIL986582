(function () {
    "use strict";

    var challengeIsOn = false;

    function insideTheBoundryZone() {
        if (challengeIsOn) {
            $(".boundary").not(".example").css("backgroundColor", "red");
            $("#status").text("Sorry, you lost :[");
            challengeIsOn = false;
        }
    }

    function outsideTheMazeZone() {
        if (challengeIsOn) {
            $(".boundary").not(".example").css("backgroundColor", "red");
            $("#status").text("Sorry, you lost :[");
            challengeIsOn = false;
        }
    }

    function startChallenge() {
        challengeIsOn = true;
        $("#status").text("Move over the maze toward E ...");
        $(".boundary").not(".example").css("backgroundColor", "#eeeeee");
    }

    function endChallenge() {
        if (challengeIsOn) {
            $(".boundary").not(".example").css("backgroundColor", "#79ff79");
            $("#status").text("You win! :]");
            challengeIsOn = false;
        }
    }

    function mapEventHandler() {
        $(".boundary").mouseover(insideTheBoundryZone);
        $("#maze").mouseleave(outsideTheMazeZone);
        $("#start").click(startChallenge);
        $("#end").mouseover(endChallenge);
    }

    $(mapEventHandler);
}());