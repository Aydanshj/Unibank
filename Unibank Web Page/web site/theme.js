function changeMode() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    let button = document.getElementById('button');
    if (button.innerHTML == "Dark Mode") {
       button.innerHTML = "Normal Mode";
    } else {
       button.innerHTML = "Dark Mode"
    }
 }

 