// JS Here!
function myFunction() {
    console.log("Hello World");
}

function careerEvent(){
    document.getElementById("second_div").style.color = "#6e6e6e";
    document.getElementById("second_div").style.background = "#f4f4f4";
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:3000/", true);
  xhttp.send();
}