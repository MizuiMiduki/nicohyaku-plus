$(function () {
    $('.st-space_right').eq(2).after('<button id="nicohyaku_plus__on_off_button" class="nicohyaku-plus--on-off-button-disable">シロナガスクジラ</buton>');
});

$(function () {
    chrome.storage.local.get(["nikohyaku_plus_on_off"], function (result) {
        var on_off = result.nikohyaku_plus_on_off;
        if (on_off == true) {
            $(".auto").toggleClass("nicohyaku-plus--auto-hdn");
            $(".auto-hdn").toggleClass("nicohyaku-plus--auto");
            $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-disable");
            $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-enable");
        }
        on_off_toggle = on_off;
    })

    $('#nicohyaku_plus__on_off_button').click(function () {
        $(".auto").toggleClass("nicohyaku-plus--auto-hdn");
        $(".auto-hdn").toggleClass("nicohyaku-plus--auto");
        on_off_toggle = !on_off_toggle;
        chrome.storage.local.set(
            {
                "nikohyaku_plus_on_off": on_off_toggle,
            }
        );
        $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-disable");
        $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-enable");
    })
});