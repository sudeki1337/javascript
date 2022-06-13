function startTime() {
  var oDate = new Date()
  var iDay = oDate.getDate();
  var iMonth = oDate.getMonth() + 1;
  var iYear = oDate.getFullYear();
  var iHours = oDate.getHours();
  var iMinutes = oDate.getMinutes();
  var iSeconds = oDate.getSeconds();
  iMinutes = checkTime(iMinutes);
  iSeconds = checkTime(iSeconds);
  document.getElementById("date").innerHTML = "Datum: " + iDay + "." + iMonth + "." + iYear + "   " + "Uhrzeit" + " " + iHours + ":" + iMinutes + ":" + iSeconds;

  setTimeout(startTime, 1000);
}


function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

function austauschen(id, quelle) {
  document.getElementById(id).src = quelle;
}

function pruefen() {
  var nachname = document.getElementById("nachname");
  var email = document.getElementById("email");

  if (nachname.value === "") {
    alert("Bitte geben Sie Ihren Nachnamen ein!");
    nachname.focus();
    return false;
  }
  if (email.value === "") {
    alert("Bitte geben Sie Ihre Emailadresse ein!");
    email.focus();
    return false;
  }
}
