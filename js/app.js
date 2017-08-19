$(document)
    .ready(function() {
        var sessionLen = 1;
        var breakLen = 5;
        var clockPause = false;
        var ticks = false;
        var id;
        var diff;

        function startClock(duration) {
            var start = Date.now(),
                minutes, seconds, str;
            ticks = true;
            $("#bplus")
                .prop("disabled", true);
            $("#bminus")
                .prop("disabled", true);
            $("#sminus")
                .prop("disabled", true);
            $("#splus")
                .prop("disabled", true);

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
                    console.log(diff);
                    ticks = false;
                }

            }
            countDownTimer();
            id = setInterval(countDownTimer, 1000);
            console.log(id);
        }

        function pauseClock() {
            console.log(diff);
            ticks = false;
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
                if (breakLen < 5) {
                    breakLen = 5;
                }
                $("#bdisplay")
                    .text(breakLen);
            });
        $("#sminus")
            .click(function() {
                sessionLen -= 1;
                // if (sessionLen < 25) {
                //     sessionLen = 25;
                // }
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
                    if ((!ticks && !clockPause) || diff == 0) {
                        var duration = sessionLen * 60;
                        startClock(duration);
                    } else {
                        startClock(diff);
                    }
                    $("#setter")
                        .text("Pause");
                } else if ($("#setter")
                    .text() === "Pause") {
                    clockPause = true;
                    pauseClock();
                    $("#setter")
                        .text("Start");
                }
            });
    });