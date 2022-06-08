function hourStatus() {
  for (let i = 9; i < 18 ; i++) {
    var element = $("#"+i);
    var staticTime = element.attr("id")
    var currentTime = parseInt(moment().hour());
    if(staticTime > currentTime) {
      element.addClass("future");
    } else if (staticTime < currentTime) {
      element.addClass("past");
    } else {
      element.addClass("present");
    }
  }
}

function todaysDate() {
  var day = moment().format("dddd MMMM, Do");
  var time = moment().format("hh:mm:ss a");
  $("#currentDay").text("Today's Date is " + day + " at " + time);
}

todaysDate();
hourStatus();
setInterval(todaysDate, 1000);
setInterval(hourStatus, 15000);

function saveToLocal (event) {
  var element = event.target
  var hour = $(element).siblings(".hour").attr("data-hour")
  var task = $(element).siblings("textarea").val()


  localStorage.setItem(hour, task)
  console.log(task)

}

function grabData () {

  for (var key in localStorage){
    console.log(localStorage.getItem(key))
    if (localStorage.getItem(key) !== null) {
      $("#" + key).append(localStorage.getItem(key))
    }  
    if (localStorage.getItem(key) === "undefined") {
      $("#" + key).text("You need to save your task!")
    }  
  }
}

$(".saveBtn").on("click", saveToLocal)

function fadeText() {
$("#savedEvent").removeClass("hide")
var timeDelay = 2000;
setTimeout(function() {
  $("#savedEvent").addClass("hide")
}, timeDelay);
}
$(".saveBtn").on("click", fadeText)
grabData();