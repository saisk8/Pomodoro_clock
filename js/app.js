$(document)
    .ready(function() {
        var sessionLen = 25;
        var breakLen = 5;
        $("#b+")
            .click(function() {
                breakLen += 1;
                $("#bd")
                    .text(breakLen);
            });
    });