
//defining time
var time 
//Grabbed the current time and set it to move every second
//put it in the currentday div
setInterval(() => {
    time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $('#currentDay').html(time);
}, 1000);

// moment().format("ha");
// console.log(moment().format("ha"));

//creating my array of office hours
var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

var currentHour = 14

//grabbing each textarea ID from my html to run this function
$("textarea").each 
(function(index, element) { 
    // console.log(index, element.id)
    // console.log(string(currentHour))

    //my element.ID is a string atm so parsing it into Integers
    console.log(parseInt(element.id))
    if (currentHour===parseInt(element.id)) { 
          $(this).attr("class","present col-8")
    }else if(currentHour>parseInt(element.id)){
        // console.log
        $(this).attr("class","past col-8")}
    else {
        $(this).attr("class","future col-8")
    }
      // element.tagName("test")
        // console.log(index,element
        // $(element.id).css("past")}
        // console.log($(element.id))
});

// var button = $('.saveBtn')
// // button.on("click", storeToDo);

// // function storeToDo(event) 


// $('.saveBtn').on('click', function(event) {
//    console.log(event)
// } 

    

    // $(this).attr('aria-pressed', $(this).attr('aria-pressed') === 'false' ? 'true' : 'false');
    // $('html').attr('data-theme', $('html').attr('data-theme') === 'dark' ? 'light' : 'dark');

    // if ('false' === $(this).attr('aria-pressed')) {
    //     localStorage.setItem('themeChoice', 'dark');
    // } else {
    //     localStorage.setItem('themeChoice', 'light');
    

