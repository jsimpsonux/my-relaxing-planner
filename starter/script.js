var currentDate = $('#currentDay');
var displayTime = $('#container');

var eachHour = dayjs().get('hour');

function displayCurrentDate() {
    var today = dayjs().format('dddd, MMM YYYY');
    currentDate.text(today);
}
displayCurrentDate();

function timeBlocks() {
    for (var i = 9; i < 20; i++) {
        displayTime.add( $( "ul li" ) );
        $("ul").css({ 'list-style-type': 'none', margin: '0', padding: '0', width: '60%' });
        $("li").css({ 'margin': '0 3px 3px 3px', padding: '0.4em', 'padding-left': '1.5em', 'font-size': '1.4em', height: '18px' });


    }
}

timeBlocks();