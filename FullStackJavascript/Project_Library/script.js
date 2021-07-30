let library = [];
const libStorageKey = "library";

function Book(title, author, pages, isRead) {
  this.id = Math.random().toString(16).substr(2, 16);
  this.title = title;
  this.author = author != "" ? author : "Desconhecido";
  this.pages = pages != "" ? pages : 0;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

function addBookToLibrary() {
  createBook();
  populateLibrary();
  toggleModal();
  clearForm();
  saveStorage();
}

function createBook() {
  const addForm = document.querySelector(".modal");
  const title = addForm.children[2].value;
  const author = addForm.children[5].value;
  const pages = addForm.children[8].value;
  const isRead = addForm.children[11].checked;
  const book = new Book(title, author, pages, isRead);
  library.push(book);
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");
  bookCard.setAttribute("data-id", book.id);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("delete-btn");
  removeBtn.addEventListener("click", deleteBook);
  removeBtn.textContent = "X";

  const title = document.createElement("h1");
  title.textContent = `"${book.title}"`;
  const author = document.createElement("h2");
  author.textContent = book.author;
  const pages = document.createElement("h3");
  pages.textContent =
    book.pages == 1 ? `${book.pages} pag.` : `${book.pages} pags.`;
  const read = document.createElement("button");
  read.classList.add("read-btn");
  if (book.isRead) {
    read.textContent = "Lido";
    read.classList.add("active");
  } else {
    read.textContent = "Não Lido";
  }
  read.addEventListener("click", manageReadStatus);

  bookCard.appendChild(removeBtn);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);

  document.querySelector(".bookshelf").appendChild(bookCard);
}

function deleteBook(e) {
  const bookCard = e.target.parentElement;
  library = library.filter(
    (book) => book.id !== bookCard.getAttribute("data-id")
  );
  populateLibrary();
  saveStorage();
}

function manageReadStatus(e) {
  toggleReadBtn(e.target);
  const bookCard = e.target.parentElement;
  const book = library.find(
    (book) => book.id === bookCard.getAttribute("data-id")
  );
  book.toggleRead();
}

function toggleReadBtn(btn) {
  if (btn.textContent == "Lido") {
    btn.textContent = "Não Lido";
  } else {
    btn.textContent = "Lido";
  }

  btn.classList.toggle("active");
}

function populateLibrary() {
  const bookshelf = document.querySelector(".bookshelf");
  const books = bookshelf.querySelectorAll(".book");

  books.forEach((book) => bookshelf.removeChild(book));
  // If there is no Id on the library book object it means the book was lodaded from localStorage, we need to recreate the object in order to give it it's required functionality via proto inheritance
  library.forEach((book) => {
    if (!book.id) {
      library[book] = new Book(
        book.title,
        book.author,
        book.pages,
        book.isRead
      );
    }
  });
  library.forEach((book) => createBookCard(book));
}

function toggleModal() {
  const addForm = document.querySelector(".add-form");
  addForm.classList.toggle("active");
}

function clearForm() {
  const addForm = document.querySelector(".modal");
  addForm.children[2].value = "";
  addForm.children[5].value = "";
  addForm.children[8].value = "";
  addForm.children[11].checked = false;
}

function initializeUi() {
  const addBookBtn = document.querySelector(".add-book-btn");
  addBookBtn.addEventListener("click", toggleModal);

  const addFormOverlay = document
    .querySelector(".add-form")
    .querySelector(".overlay");
  addFormOverlay.addEventListener("click", toggleModal);

  const addForm= document.querySelector(".modal");
  addForm.addEventListener("submit", (e, _) => {
    e.preventDefault();
    addBookToLibrary();
  });
}

function loadStorage() {
  if (!localStorage.getItem(libStorageKey)) {
    saveStorage;
  } else {
    library = JSON.parse(localStorage.getItem(libStorageKey));
  }
}

function saveStorage() {
  localStorage.setItem(libStorageKey, JSON.stringify(library));
}

function main() {
  loadStorage();
  initializeUi();
  populateLibrary();
}

main();
