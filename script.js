const mom = moment();


var renderTime = function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
}

$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings('.event').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time,value);
    });

    $('#1st-hour .event').val(localStorage.getItem('1st-hour'));
    $('#2nd-hour .event').val(localStorage.getItem('2nd-hour'));
    $('#3rd-hour .event').val(localStorage.getItem('3rd-hour'));
    $('#4th-hour .event').val(localStorage.getItem('4th-hour'));
    $('#5th-hour .event').val(localStorage.getItem('5th-hour'));
    $('#6th-hour .event').val(localStorage.getItem('6th-hour'));
    $('#7th-hour .event').val(localStorage.getItem('7th-hour'));
    $('#8th-hour .event').val(localStorage.getItem('8th-hour'));
    $('#9th-hour .event').val(localStorage.getItem('9th-hour'));

    renderTime();

});
