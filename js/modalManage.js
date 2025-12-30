$(document).ready(function () {
    $(".videoGameBtn").on("click", function () {
        $("#favGameModal").toggle();
    });


    $("button[aria-label = 'Close']").on("click", function () {
        $(this).parents(".modal").hide();
        $(this).parents(".modal").removeClass("fullScreenModal");
        $(this).siblings("button[aria-label = 'Maximize']").show();
        $(this).siblings("button[aria-label = 'Restore']").hide();
    });
    $("button[aria-label = 'Minimize']").on("click", function () {
        $(this).parents(".modal").hide();

    });
    $("button[aria-label = 'Restore']").on("click", function () {
        $(this).parents(".modal").removeClass("fullScreenModal");
        $(this).siblings("button[aria-label = 'Maximize']").show();
        $(this).hide();
    });
    $("button[aria-label = 'Maximize']").on("click", function () {
        $(this).parents(".modal").addClass("fullScreenModal");
        $(this).hide();
        $(this).siblings("button[aria-label = 'Restore']").show();
    });


    $("#favGameModal").load("../games.html");

});
