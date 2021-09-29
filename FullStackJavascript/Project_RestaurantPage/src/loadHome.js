import chef from "./chef.png";

const loadHome = () => {
  const content = document.getElementById("content");

  const chefImg = document.createElement("img");
  chefImg.src = chef;

  content.appendChild(chefImg);
};

export default loadHome;
