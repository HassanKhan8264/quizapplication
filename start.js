// start tab 
function tics(arg) {
    var btn0 = document.getElementById("btn0");
    var tab0 = document.getElementById("tab0");
    if (arg === "zero") {
        tab0.style.display = "block"
    } else {
        tab0.style.display = "none"

    }
}
// start tab end

//questions
function check() {
    score = 0;

    var right = document.getElementById("q1");
    var q2 = document.getElementById("q2")
    var q3 = document.getElementById("q3")
    var q4 = document.getElementById("q4")
    if (right.checked === true) {
        score++;
        alert("You are right how do you know")
    } else {
        score--;
    }

} 