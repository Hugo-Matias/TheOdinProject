const loadContacts = () => {
  const content = document.getElementById("content");

  const address = document.createElement("p");
  address.innerText = "9513 Dogwood Ave.\nMoses Lake, WA 98837";

  content.appendChild(address);
};

export default loadContacts;
