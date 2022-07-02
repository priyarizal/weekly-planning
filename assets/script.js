
//defining time
var time 
//Grabbed the current time and set it to move every second
//put it in the currentday div
setInterval(() => {
    time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $('#currentDay').html(time); 
    
    //triggering the function I wrote on lines 18-69
    updateTime()

}, 1000); 


//creating my array of office hours

function updateTime() {

    //commented this timeblock line out because I am getting the hour from the ID of the element
    // var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

    //setting a dynamic time so the colorblocks move with time 
    var currentHour = 11
    // var currentHour = moment().format('H');

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

}; 
//passing a function to listen for a click on savebutton
$('.saveBtn').on('click', function(event) {

    //defining my key and my value to call it on localStorage

    var key =$(this).siblings("textarea").attr("id")
    var value =$(this).siblings("textarea").val()

    // console.log($(this).siblings("textarea").val())
    // console.log($(this).siblings("textarea").attr("id"))

    localStorage.setItem(key, value);
    
})

//setting a 'this' so I can loop through the siblings

$('#9').val(localStorage.getItem('9'));
// $('#10').val(localStorage.getItem('10'));

$("textarea").each(function() {
 $(this).val(localStorage.getItem($(this).attr("id")))
 console.log($(this).attr("id"))
})











    

    
    

