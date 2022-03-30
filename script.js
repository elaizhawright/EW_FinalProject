var time = new Date();
        var hours = time.getHours();
        if (hours < 12) {
            document.getElementById("time").innerHTML = "Good Morning"
        } else if (hours >= 12 && hours < 17) {
            document.getElementById("time").innerHTML = "Good Afternoon"
        } else {
            document.getElementById("time").innerHTML = "Good Evening"
        }
var days = document.getElementById("days");
var hours = document.getElementById("hours");

function calculateMeditation() {
    var exercise = days.value * hours.value;
    var results = document.getElementById("results");
    results.innerHTML = "You should exercise for " + exercise + " hours a week.";
}
var days = document.getElementById("days");
var hours = document.getElementById("hours");

function calculateMeditation() {
    var exercise = days.value * hours.value;
    var results = document.getElementById("results");
    results.innerHTML = "You should exercise for " + exercise + " hours a week.";
}