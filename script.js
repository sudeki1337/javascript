var a = new Date()
var day = a.getDate();
var month = a.getMonth() +1;
var year = a.getFullYear();

function startTime() {
  var a = new Date()
  var day = a.getDate();
  var month = a.getMonth() +1;
  var year = a.getFullYear();
var h = a.getHours();
var m = a.getMinutes();
var s = a.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById("date") .innerHTML = "Datum: " + day + "." + month + "." + year + "   " + "Uhrzeit"+" " + h +":" + m + ":" + s ;

setTimeout(startTime, 1000); }


function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function austauschen (id, quelle) {document.getElementById(id) .src = quelle; }

  function pruefen () {
    var nachname = document.getElementById("nachname");
    var email = document.getElementById("email");

    if (nachname.value == "") {
      alert ("Bitte geben Sie Ihren Nachnamen ein!");
  nachname.focus ();
  return false;
  }
    if (email.value == ""){
    alert ("Bitte geben Sie Ihre Emailadresse ein!");
  email.focus ();
  return false;
  }
  }
