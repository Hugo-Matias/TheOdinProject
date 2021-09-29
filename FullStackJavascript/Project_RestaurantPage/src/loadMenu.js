const loadMenu = () => {
  // Loads pizza images into an object
  const images = importImages(require.context("./pizzas", false, /\.png$/));

  const content = document.getElementById("content");

  const pizza1 = createCard("Margherita", images["1.png"]);
  const pizza2 = createCard("Marinara", images["2.png"]);
  const pizza3 = createCard("Quattro Stagioni", images["3.png"]);
  const pizza4 = createCard("Carbonara", images["4.png"]);
  const pizza5 = createCard("Frutti di Mare", images["5.png"]);
  const pizza6 = createCard("Quattro Fromaggi", images["6.png"]);
  const pizza7 = createCard("Crudo", images["7.png"]);
  const pizza8 = createCard("Napoletana", images["8.png"]);

  content.appendChild(pizza1);
  content.appendChild(pizza2);
  content.appendChild(pizza3);
  content.appendChild(pizza4);
  content.appendChild(pizza5);
  content.appendChild(pizza6);
  content.appendChild(pizza7);
  content.appendChild(pizza8);
};

const createCard = (title, image) => {
  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h3");
  cardTitle.innerText = title;
  const cardImage = document.createElement("img");
  cardImage.src = image;

  card.appendChild(cardTitle);
  card.appendChild(cardImage);

  return card;
};

// Imports all the images from the "pizzas" folder
function importImages(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default loadMenu;
