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

- https://priyarizal.github.io/weekly-planning/
- https://github.com/priyarizal/weekly-planning

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

````

# Screen Shots for Design Highlight

![dailycalender](./assets/1.png)
![dailycalender](./assets/2.png)

# Gif for Demoing Functionality

![dailycalender](./assets/Work%20Day%20Scheduler.gif)

# Contributors

- UCB bootcamp instructor : Jerome Channete

- Sean New (tutor)
- Jehyun Jung (tutor)

# Contact Me

- www.linkedin.com/in/priya-r-822271110
- https://github.com/priyarizal

# License

- MIT
