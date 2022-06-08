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

grabData();

$(".saveBtn").on("click", saveToLocal)




//local.storage set time as key and value as textarea text (setItem)
function fadeText() {

$("#savedEvent").removeClass("hide")
  // event.preventDefault();
}
$(".saveBtn").on("click", fadeText)

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
