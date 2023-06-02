$(function () {
    $('.a-area_sns').after('<button id="nicohyaku_plus__on_off_button" class="nicohyaku-plus--on-off-button-disable">シロナガスクジラ対策</buton>');
});

$(function() {
$('#nicohyaku_plus__on_off_button').click(function(){
    $(".auto").toggleClass("nicohyaku-plus--auto-hdn");
    $(".auto-hdn").toggleClass("nicohyaku-plus--auto");
    $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-disable");
    $("#nicohyaku_plus__on_off_button").toggleClass("nicohyaku-plus--on-off-button-enable");
})
});