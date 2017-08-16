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
                if (sessionLen < 5) {
                    sessionLen = 5;
                }
                $("#sdisplay")
                    .text(sessionLen);
            });
        $("#splus")
            .click(function() {
                sessionLen += 1;
                $("#sdisplay")
                    .text(sessionLen);
            });

    });