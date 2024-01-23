var currentDate = $('#currentDay');
var displayTime = $('#container');
var rowCss = $('.row');

var eachHour = dayjs().get('hour');

function displayCurrentDate() {
    var today = dayjs().format('dddd, MMM YYYY');
    currentDate.text(today);
}
displayCurrentDate();

$('.saveBtn').on('click',function(){
    var time = $( this ).closest('.time-block').attr('id')
    var description = $( this ).prev('.description').val()
    localStorage.setItem(time, description)
})

for(let i = 9; i < 18; i++) {
    $('#hour-' + i +' .description').val(localStorage.getItem('hour-' + i))
}



timeBlocks();
setInterval(timeBlocks,30000);