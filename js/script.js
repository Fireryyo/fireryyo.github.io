$(document).ready(function () {
    $("#linkClose").on("click", function () {
        //alert("CLOSE");
        //$(".leftSideBar").css({"display":"none"});
        //My dumbass forgot to add $ at the beginning and wasted so much time, I thought hide didn't work and used css and then realized my mistake
        $(".leftSideBar").hide();   
    });
    $("#mainBodyClose").on("click", function () {
        $("#mainBody").hide();
    });


    //this is messy, this is TEMPORARY!!!!
    $("#play").on("click", function () {
        $("#tempAudio").trigger("play");
    });
    $("#pause").on("click", function () {
        $("#tempAudio").trigger("pause");
    });
});