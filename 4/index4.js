$(document).ready(function () {

    $('button').click(function () {

        let p = $('p'),
            span = $('span');

        if (!(p.hasClass("style") && span.hasClass("style"))) {

            p.addClass("style");
            span.addClass("style");

        } else {

            p.removeClass("style");
            span.removeClass("style");
        }
    })
})