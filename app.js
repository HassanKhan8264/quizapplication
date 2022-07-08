function submit(){
    var input = document.getElementById("userinput1").value;
    var input = document.getElementById("userinput2").value;
    var input = document.getElementById("userinput3").value;

    var value1 = userinput1.value;
    var value2 = userinput2.value;
    var value3 = userinput3.value;

    var greet = document.getElementById("greet1")

    var character1 = document.getElementById("character1")
    var character2 = document.getElementById("character2")
    var character3 = document.getElementById("character3")

    // input one

    if(value1 === "" || value1 === " " || value1 === "  "){
        character1.style.color = "red"
        character1.innerHTML = "<br>"+ "Character Not allowed";

    }else{
        greet.innerText = "Hi" +" "+ value1;

    }

    // input two
    value2 = value2.slice(0,3)
    if(value2 === "" || value2 === " " || value2 === "  " || value2.slice(0,2) !== "KH"){
        character2.style.color = "red"
        character2.innerHTML = "<br>"+ "Roll number starts with KH";

    }else{
        character2.innerHTML = "";
    }

    // input three 

    if(value3 === "" || value3 === " " || value3 === "  " || value3 !== "myquiz"){
        character3.style.color = "red"
        character3.innerHTML = "<br>"+ "Wrong code";

    }else if(value3 === "myquiz"){
        window.location.href = "./start.html"

    }
    else{
        character3.innerHTML = "";
    }

}