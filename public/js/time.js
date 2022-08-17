var currentDate = $("#currentDate");
//This function updates the current date to 
//display at the top of each page
function updateCurrentDate() {
    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
}
//function call to update current day
updateCurrentDate();