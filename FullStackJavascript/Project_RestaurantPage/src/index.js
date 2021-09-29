import loadPage from "./loadPage";
import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContacts from "./loadContacts";
import "./style.css";

(function load() {
  loadPage();
  loadHome();

  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const contactsBtn = document.querySelector(".contactsBtn");

  homeBtn.addEventListener("click", function () {
    loadContent("home");
  });
  menuBtn.addEventListener("click", function () {
    loadContent("menu");
  });
  contactsBtn.addEventListener("click", function () {
    loadContent("contacts");
  });
})();

function loadContent(module) {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  if (module == "home") {
    loadHome();
  } else if (module == "menu") {
    loadMenu();
  } else if (module == "contacts") {
    loadContacts();
  }
}
