// underline the page you're on
var page = location.pathname.split("/").pop();
if (page == "") {
  page = "index.html";
}
var links = document.querySelectorAll("nav a");
for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") == page) {
    links[i].className = "active";
  }
}
