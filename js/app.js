$(document)
    .ready(function() {
        var sessionLen = 25;
        var breakLen = 5;
        var clockPause = false;
        var breakClock = false;
        var id;
        var diff;

        function startClock(duration) {
            var start = Date.now(),
                minutes, seconds, str;
            $("#bplus")
                .prop("disabled", true);
            $("#bminus")
                .prop("disabled", true);
            $("#sminus")
                .prop("disabled", true);
            $("#splus")
                .prop("disabled", true);

            function playSound() {
                var audio = new Audio("./alarm.mp3");
                audio.play();
            }

            function countDownTimer() {
                diff = duration - (((Date.now() - start) / 1000) | 0);

                minutes = (diff / 60) | 0;
                seconds = (diff % 60) | 0;

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                str = minutes + ":" + seconds;
                $("#timer")
                    .text(str);

                if (diff <= 0) {
                    clearInterval(id);
                    playSound();
                    if (breakClock) {
                        breakClock = false;
                        $("#type")
                            .text("Session");
                        startClock((sessionLen * 60));
                    } else {
                        breakClock = true;
                        $("#type")
                            .text("Break");
                        startClock((breakLen * 60));
                    }
                }

            }
            countDownTimer();
            id = setInterval(countDownTimer, 1000);
        }

        function pauseClock() {
            console.log(diff);
            clearInterval(id);
            $("#bplus")
                .prop("disabled", false);
            $("#bminus")
                .prop("disabled", false);
            $("#sminus")
                .prop("disabled", false);
            $("#splus")
                .prop("disabled", false);
        }

        $("#bplus")
            .click(function() {
                breakLen += 1;
                $("#bdisplay")
                    .text(breakLen);
            });
        $("#bminus")
            .click(function() {
                breakLen -= 1;
                if (breakLen < 1) {
                    breakLen = 1;
                }
                $("#bdisplay")
                    .text(breakLen);
            });
        $("#sminus")
            .click(function() {
                sessionLen -= 1;
                if (sessionLen < 1) {
                    sessionLen = 1;
                }
                $("#sdisplay")
                    .text(sessionLen);
                $("#timer")
                    .text((sessionLen < 10 ? "0" + sessionLen : sessionLen) + ":00");
            });
        $("#splus")
            .click(function() {
                sessionLen += 1;
                $("#sdisplay")
                    .text(sessionLen);
                $("#timer")
                    .text((sessionLen < 10 ? "0" + sessionLen : sessionLen) + ":00");
            });
        $("#setter")
            .click(function() {
                if ($("#setter")
                    .text() === "Start") {
                    if ((!clockPause) || diff == 0) {
                        var duration = sessionLen * 60;
                        startClock(duration);
                    } else {
                        startClock(diff);
                    }
                    $("#setter")
                        .text("Pause");
                    $("#setter")
                        .removeClass("btn-outline-primary");
                    $("#setter")
                        .addClass("btn-outline-warning");
                } else if ($("#setter")
                    .text() === "Pause") {
                    clockPause = true;
                    pauseClock();
                    $("#setter")
                        .text("Start");
                    $("#setter")
                        .removeClass("btn-outline-warning");
                    $("#setter")
                        .addClass("btn-outline-primary");
                }
            });
        $("#reset")
            .click(function() {
                if (clockPause) {
                    breakClock = false;
                    clockPause = false;
                    $("#setter")
                        .text("Pause");
                    $("#setter")
                        .removeClass("btn-outline-primary");
                    $("#setter")
                        .addClass("btn-outline-warning");
                    clearInterval(id);
                    $("#timer")
                        .text((sessionLen < 10 ? "0" + sessionLen : sessionLen) + ":00");
                    $("#setter")
                        .text("Start");
                    $("#setter")
                        .removeClass("btn-outline-warning");
                    $("#setter")
                        .addClass("btn-outline-primary");
                    $("#type")
                        .text("Session");
                }
            });
    });