$(document)
    .ready(function() {
        var sessionLen = 25;
        var breakLen = 5;
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
                if (sessionLen < 25) {
                    sessionLen = 25;
                }
                $("#sdisplay")
                    .text(sessionLen);
                $("#timer")
                    .text(sessionLen + ":00");
            });
        $("#splus")
            .click(function() {
                sessionLen += 1;
                $("#sdisplay")
                    .text(sessionLen);
                $("#timer")
                    .text(sessionLen + ":00");
            });
        $("#setter")
            .click(function() {

            });

    });