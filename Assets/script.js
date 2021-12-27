// Question 1
function clickimg1() {
    var a = document.getElementById('question1');
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}


 function displayAnswer1() {
  

    var ans = "Option3"; //if option 3 is answer
    var ele = document.getElementsByName('r1');

    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
           
            if (ele[i].value === ans) {
                document.getElementById("sel-ans1").innerHTML = "1. " + ele[i].value + " You Selected";
                document.getElementById("cor-incor1").innerHTML = "2. Your Selected Ans is correct!!!";
            }
            else {
                document.getElementById("sel-ans1").innerHTML = "1. " + ele[i].value + " You Selected";
                document.getElementById("cor-incor1").innerHTML = "2. Your Selected Ans is Wrong!!!";
            }
        }
    }
    var a = document.getElementById('question1');
    a.style.display = "none";
    document.getElementById('img1').removeAttribute("onclick");

}


// Question 2 
function clickimg2() {
    var a1 = document.getElementById('question2');
    if (a1.style.display === "none") {
        a1.style.display = "block";
    } else {
        a1.style.display = "none";
    }
}

 function displayAnswer2() {
    var ans2 = "Option1"; //if option 1 is answer
    var ele2 = document.getElementsByName('r2');

    for (var j = 0; j < ele2.length; j++) {
        if (ele2[j].checked) {
            if (ele2[j].value === ans2) {
                document.getElementById("sel-ans2").innerHTML = "1. " + ele2[j].value + " You Selected";
                document.getElementById("cor-incor2").innerHTML = "2. Your Selected Ans is correct!!!";
            }
            else {
                document.getElementById("sel-ans2").innerHTML = "1. " + ele2[j].value + " You Selected";
                document.getElementById("cor-incor2").innerHTML = "2. Your Selected Ans is Wrong!!!";
            }
        }
    }
    var a1 = document.getElementById('question2');
    a1.style.display = "none";

    document.getElementById('img2').removeAttribute("onclick");

}

