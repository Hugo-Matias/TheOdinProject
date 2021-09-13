import _ from "lodash";
import myName from "./myName";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, previously  included via a script, is required for this line to work
  // Lodash is now imported by this script.
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Using our function instead according to Odin Project tutorial
  element.innerHTML = myName("Cody");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(document.createElement("br"));
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
