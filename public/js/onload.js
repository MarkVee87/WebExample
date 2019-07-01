window.onload = function includeHTML() {
  loadCommonHTML();
  loadNavbarDateAndTime();
};

function loadCommonHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("get-external-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("get-external-html");
          loadCommonHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};

function loadNavbarDateAndTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = addAZero(now.getMonth());
  var day = addAZero(now.getDay());
  var hours = addAZero(now.getHours());
  var minutes = addAZero(now.getMinutes());
  var seconds = addAZero(now.getSeconds());
  document.getElementById('navbar_clock').innerHTML = hours + ":" + minutes + ":" + seconds + "&nbsp&nbsp&nbsp" + day + "-" + month + "-" + year;
  setTimeout(loadNavbarDateAndTime, 500);
};

function addAZero(i) {
  if (i < 10) {i = "0" + i};
  return i;
};