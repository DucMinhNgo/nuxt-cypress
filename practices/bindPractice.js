function log(level, time, message) {
    console.log(level + ' - ' + time + ': ' + message);
}

// function logErrToday(message) {
// log("Error", "Today", message);
// }
  
// logErrToday("Server die."); // Error - Today: Server die.

// this = null
const logErrToday = log.bind(null, "Error");

logErrToday("Today", "Server Die")