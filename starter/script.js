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

function timeBlocks() {
    var currentTime = dayjs().hour()
    $('.time-block').each(function(){
        var blockTime = parseInt($( this ).attr('id').split('-')[1])
        if(blockTime < currentTime) {
            $( this ).addClass('past')
        } else if (blockTime === currentTime) {
            $( this ).removeClass('past')
            $( this ).addClass('present')
        } else {
            $( this ).removeClass('past')
            $( this ).removeClass('present')
            $( this ).addClass('future')
        }
    })
}

timeBlocks();
setInterval(timeBlocks,30000);