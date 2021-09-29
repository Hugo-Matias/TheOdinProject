import bgimg from "./bg.jpg";

const loadPage = () => {
  const bg = document.getElementById("bg");

  const image = document.createElement("img");
  image.className = "bg";
  image.src = bgimg;

  bg.appendChild(image);

  const header = document.getElementById("header");

  const title = document.createElement("h1");
  title.innerText = "Pizzarini's Pizzeria";

  const desc = document.createElement("h2");
  desc.innerText = "The secret is always in the dough!";

  header.appendChild(title);
  header.appendChild(desc);

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  header.appendChild(navbar);

  const homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";
  homeBtn.classList.add('homeBtn');
  const menuBtn = document.createElement("button");
  menuBtn.innerText = "Menu";
  menuBtn.classList.add('menuBtn');
  const contactsBtn = document.createElement("button");
  contactsBtn.innerText = "Contacts";
  contactsBtn.classList.add('contactsBtn');

  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(contactsBtn);
};

export default loadPage;
