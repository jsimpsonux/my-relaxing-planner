// Assigned variables for selectors of HTML classes.
var currentDate = $('#currentDay');
var displayTime = $('#container');
var rowCss = $('.row');


// This function selects a html tag and and uses the day.js library to format the date in a specific way.
// currentDate now selects the HTML tag where the date will be displayed.
function displayCurrentDate() {
    var today = dayjs().format('dddd, MMM YYYY');
    currentDate.text(today);
}
displayCurrentDate();

// This is a save button function to save any notes that the user inputs into the calendar on each block.
// time variable selects the closest id to the '.timeblock' class name.
// description variable selects the value of the input into the description time block using the previous method.
// localStorage is now taking the value of the user input into the description and the time that is associated with the
// block and saving it to the local storage.
$('.saveBtn').on('click',function(){
    var time = $( this ).closest('.time-block').attr('id')
    var description = $( this ).prev('.description').val()
    localStorage.setItem(time, description)
})


// this for loop is going through the time blocks I have set up in HTML that's why it is checking if i is less than 18 which is 6PM
// it will go through each timeblock and set the value of what I get from local storage that I had set previously before. This is a shorter way of running it without
// writing a line of code for each time block.
for(let i = 9; i < 18; i++) {
    $('#hour-' + i +' .description').val(localStorage.getItem('hour-' + i))
}

// this function sets the current time through the day.js library but only selecting the hour. 
// it then selects the time-block css and uses the each method to select each timeblock and applies the css makeover.
//  blockTime will go to the block we are currently on using ( this ), it will then get the id and split on the '-' in the id
// this will then turn it into an array, which is when [1] selects the number in the id.
// parseInt will then turn it into a number which is assigned to the blockTime that's when the rest of the function will add and remove classes from
// the css file which styles the timeblocks depending on the time of the current day for the user.
function timeBlocks() {
    var currentTime = dayjs().hour();
    // var currentTime = 11; // tests the function.
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