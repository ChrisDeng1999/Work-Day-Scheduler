var taskInputEl = $("textarea");
var currentTime = parseInt(moment().hour());



function hourStatus() {
  for (let i = 9; i < 18 ; i++) {
    var element = $("#"+i);
    var staticTime = element.attr("data-hour")
    if(staticTime > currentTime) {
      element.addClass("future");
    } else if (staticTime < currentTime) {
      element.addClass("past");
    } else {
      element.addClass("present");
    }
  }
}




// var todaysDate = moment().format("dddd MMMM, Do");
// $("#currentDay").text("Today's Date is " + todaysDate);


//reference the paragraph for current day
//save buttons - add class and add eventListeners on all save buttons

function todaysDate() {
  var day = moment().format("dddd MMMM, Do");
  var time = moment().format("hh:mm:ss a");
  $("#currentDay").text("Today's Date is " + day + " at " + time);
}

todaysDate();
hourStatus();
setInterval(todaysDate, 1000);
setInterval(hourStatus, 15000);
console.log(time);



$(".saveBtn").on("click", saveTask)
function saveTask() {
  console.log("hello");
}

//local.storage set time as key and value as textarea text (setItem)

//function for updating hour colors
//grab current hour with moment.js moment().hours() military time = currentTime
//loop that goes through all time blocks and then run a condition statemnt to compare current hour to each time block
//variable that stores that boocks hour by the time blocks id in the html military tim (Parse string to integer)

//if (timeblock < currentTime) {
//  add past class grey
//} else if (timeblock ===curentTime) {
//  remove class past and add present
//} else {
//  remove past and present and add future
//}

//function for loading task from local storage

//textarea set the value to local.storage getItem('hour-9')

//setInterval to run the fucntion of hourcolor updating function every 15-30 seconds
