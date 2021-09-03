import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash, previously  included via a script, is required for this line to work
  // Lodash is now imported by this script.
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  // Using our function instead according to Odin Project tutorial
  element.innerHTML = myName('Cody');

  return element;
}

document.body.appendChild(component());