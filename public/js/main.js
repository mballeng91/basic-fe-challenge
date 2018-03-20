// JS Here!
function myFunction() {
    console.log("Hello World");
}


function applyFilter(){
    var image = document.getElementById("the-image");
    var text = document.getElementById("quote");

        if(image.style.filter == "brightness(15%)") {
            image.style.filter = "grayscale(100%)";
            text.style.color = "gray";
        }
        else{
            image.style.filter = "brightness(15%)";
            text.style.color = "white";
        }
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


function toggleMenu() {
    var menuBox = document.getElementById('menu-box2');
    if(menuBox.style.display == "none") { // if is menuBox displayed, hide it
        menuBox.style.display = "block";
        console.log("menu shown");
    }
    else { // if is menuBox hidden, display it
        menuBox.style.display = "none";
        console.log("menu hidden");
    }
}