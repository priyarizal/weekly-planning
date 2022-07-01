
var time 
setInterval(() => {
    // var time = moment().format("[Today is the] DDDo [day of the year.]");
    time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $('#currentDay').html(time);
}, 1000);



moment().format("ha");
console.log(moment().format("ha"));

var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

var currentHour = moment().format("H");

$("textarea").each 
(function(index, element) { 
    // console.log(index, element.id)
    // console.log(currentHour.toString())
    // console.log(string(currentHour))
    console.log(parseInt(element.id))
});

if (timeBlocks===element.id) {
 
}

























//  $('.saveBtn').on('click', function () {
//     // We add the event handler, alert("Hello World"), to the callback function.
//    console.log(this);
//    $(this)
//    console.log($(this.sibling))
//   });
