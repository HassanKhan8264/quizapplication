// start tab 
function tics(arg){
    var btn0 = document.getElementById("btn0");
    var tab0 = document.getElementById("tab0");
    if(arg === "0"){
        tab0.style.display = "block"
    }else{
        tab0.style.display = "none"
        
    }
}
// start tab end

//questions
var nextbtn0 = document.getElementById("nextbtn0"); 
var nexttab0 = document.getElementById("nexttab0");
function next(arg){
    if(arg === "0"){
        tab0.style.display = "none"
        nexttab0.style.display = "block";
        nextbtn0.style.display = "none"
    }else{

        nexttab0.style.display = "block";
    }
} 
    