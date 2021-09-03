import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from './data.toml';
import yaml from './data.yaml';
import json5 from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json5.title);
console.log(json5.owner.name);

function component() {
  const element = document.createElement("div");

  // Lodash, previously  included via a script, is required for this line to work
  // Lodash is now imported by this script.
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Using our function instead according to Odin Project tutorial
  element.innerHTML = myName("Cody");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
