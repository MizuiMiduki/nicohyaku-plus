$(function () {
    $('.common-header-1o7v8vg').after('<div style="color:white!important;"><p>お使いのブラウザ拡張機能"ニコ百+"は2023/12/31をもってサポートされなくなります。後継の"<a href="https://github.com/MizuiMiduki/nicominabe" style="text-decoration:underline; color:white;">ニコ見なべ</a>"をご利用ください</p></div>');
    $('.a-area_sns').before('<button id="nicohyaku_plus__on_off_button" class="nicohyaku-plus--on-off-button-disable">シロナガスクジラ</buton>');
    $(".auto").addClass("highlight-none");
    $(".auto-hdn").addClass("highlight-none");
});

$(function () {
    chrome.storage.local.get(["nikohyaku_plus_on_off"], function (result) {
        var on_off = result.nikohyaku_plus_on_off;
        if (on_off == true) {
            $(".auto").toggleClass("nicohyaku-plus--auto-hdn");
            $(".auto-hdn").toggleClass("nicohyaku-plus--auto");
            $(".auto").toggleClass("highlight-none");
            $(".auto-hdn").toggleClass("highlight-none");
            $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-disable");
            $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-enable");
        }
        on_off_toggle = on_off;
    })

    $('#nicohyaku_plus__on_off_button').click(function () {
        $(".auto").toggleClass("nicohyaku-plus--auto-hdn");
        $(".auto-hdn").toggleClass("nicohyaku-plus--auto");
        $(".auto").toggleClass("highlight-none");
        $(".auto-hdn").toggleClass("highlight-none");
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