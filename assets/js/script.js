// moment format with day and month day of moment().format(dddd MM DD)

//reference the paragraph for current day
//save buttons - add class and add eventListeners on all save buttons

//$.("saveBtn").on("click", function to save to LS)

//save task function
//store this value as a variablereference the tex area and grab the value
//event.target use this
//use the sibling method to target the textarea
//use parent to target the specific hour based on the id

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
