function opennav() {
    if ($("#navbar").width() == "250") {
        closenav();
    } else {
        $("#navbar").width("250px");
        $("#main").css("margin-left", "250px");
    }
}

function closenav() {
    $("#navbar").width("0px");
    $("#main").css("margin-left", "0px");
}

$("a").click(function () {
    var id = $(this).attr("href");

    if ($(id).offset() != undefined) {
        var currentloc = $(id).offset().top;

        $("html , body").animate({
            scrollTop: currentloc
        }, 100);
    }

})



$(document).ready(function () {
    $("#singers div:first").css({ display: 'block' });
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});



(function countdown() {
    var current = new Date();
    var eventDate = new Date(2024, 1, 1);

    var currentMil = current.getTime();
    var eventDateMil = eventDate.getTime();
    // console.log(current.getTime());
    // console.log(eventDate.getTime());
    // console.log(eventDateMil-currentMil);
    var rem = eventDateMil - currentMil;

    var sec = Math.floor(rem / 1000);
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);

    hour %= 24;
    min %= 60;
    sec %= 60;

    if (hour < 10)
        hour = '0' + hour;
    if (min < 10)
        min = '0' + min;
    if (sec < 10)
        sec = '0' + sec;

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    setTimeout(countdown, 1000);

})();


let message = document.getElementById('message');

document.addEventListener('input', function (e) {
    console.log(e.target.value);
    console.log((e.target.value).length);
    if ((e.target.value).length <= 100) {
        let rem = 100 - (e.target.value).length;
        document.getElementById('remaining').innerHTML = rem;
    }
    else {
        document.getElementById('remaining').innerHTML = 'your available character finished ';
    }

})