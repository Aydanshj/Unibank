
function gfgMenu() {
    const GFG = document.querySelector('.links');
  
    if (GFG.style.display === "none") {
        GFG.style.display = "block";
    }
    else {
        GFG.style.display = "none";
    }
}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 
 $(document).ready(function () {
     $('.currency').click(function (e) {
         e.preventDefault();
         var selected = $(this).html();
         $('.dropdown-toggle.from').html(selected);
     });
 });

 $(document).ready(function () {
     $('.currencyto').click(function (e) {
         e.preventDefault();
         var selected = $(this).html();
         $('.dropdown-toggle.to').html(selected);
     });
 });

 function myFunction() {
     window.open("/html/InternetBanking.html");
 }

 $('#night-theme').click(function () {
     $('#display_advance').toggle('1000');
     $("i", this).toggleClass("bi bi-moon-stars bi bi-brightness-high");

 });

 $(document).ready(function () {
    $("#night-theme").click(function () {
        $("#night-theme").css("background-color", "white");
         $("#night-theme").css("color", "black");

         $("body,header").css("background-color", "black");
         $("body,b,a,.cl").css("color", "white");
       $(".bc").css("background-color", "#1A1A1A");
        $("#Valyuta-calculator,.bc2").css("background-color", "#313131");
         $("#input,#input2").css("background-color", "#464646");
    });
 });