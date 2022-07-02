# Title

- Daily calender

# Description

- This is a simple calendar application that allows a user to save events for each hour of the day to create a work day schedule. The current day is displayed at the top of the calender with color coded timeblocks to indicate past(grey), present(red), and the future(green). Each timeblock contains a textbox where users can input their events for the day. Users can also click on the blue button next to the textbox to store it in their local storage. The event will persist even when the page gets refreshed.

# Technologies

- HTML
- CSS
- JavaScript
- Jquery
- Moment.js

# Deployed Link and URL

# Significant Code Snippets

LocalStorage

````$('.saveBtn').on('click', function(event) {

    var key =$(this).siblings("textarea").attr("id")
    var value =$(this).siblings("textarea").val()

    localStorage.setItem(key, value);

```$('#9').val(localStorage.getItem('9'));
// $('#10').val(localStorage.getItem('10'));

```$("textarea").each(function() {
 ```$(this).val(localStorage.getItem($(this).attr("id")))



# Screen Shots for Design Highlight

````
