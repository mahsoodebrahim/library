let myLibrary = [
  {
    title: "title1",
    author: "author1",
    pages: 1,
    read: "Finished",
    isDisplayed: false,
    id: 34,
  },
  {
    title: "title2",
    author: "author2",
    pages: 2,
    read: "Unfinished",
    isDisplayed: false,
    id: 342,
  },
  {
    title: "title3",
    author: "author3",
    pages: 3,
    read: "Finished",
    isDisplayed: false,
    id: 123,
  },
  {
    title: "title4",
    author: "author4",
    pages: 4,
    read: "Unfinished",
    isDisplayed: false,
    id: 12,
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.isDisplayed = false;
  this.id = getRandomInt(1000);

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "Finished" : "Unfinished"
    }`;
  };
}

function showLibrary() {
  const table = document.getElementById("table");

  myLibrary.forEach((book) => {
    if (book.isDisplayed) return; // don't display a book that's already displayed

    book.isDisplayed = true;
    const removeBookIcon = '<i class="fas fa-minus-circle"></i>';
    const readStatusButton = "<button>Toggle Read Status</button>";

    // Create elements for book attributes and row within the table
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");
    const toggleReadStatusBtn = document.createElement("td");
    const removeBookBtn = document.createElement("td");
    const bookRow = document.createElement("tr");

    // Add content for each element
    title.appendChild(document.createTextNode(book.title));
    author.appendChild(document.createTextNode(book.author));
    pages.appendChild(document.createTextNode(book.pages));
    read.appendChild(document.createTextNode(book.read));
    read.id = `book-${book.id}-read-status`;
    toggleReadStatusBtn.innerHTML = readStatusButton;
    removeBookBtn.innerHTML = removeBookIcon;
    bookRow.id = book.id;

    // add event listeners
    removeBookBtn.addEventListener("click", () =>
      removeBookFromLibrary(book.id)
    );

    toggleReadStatusBtn.addEventListener("click", () =>
      changeReadStatus(read.id)
    );

    // Append book attributes to row
    bookRow.append(
      title,
      author,
      pages,
      read,
      toggleReadStatusBtn,
      removeBookBtn
    );

    // Append row to table
    table.appendChild(bookRow);
  });
}

function addBookToLibrary() {
  // Get user entered book data
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked
    ? "Finished"
    : "Unfinished";

  // Create a new book with user data
  const newBook = new Book(title, author, pages, read);

  // Clear user inputs
  clearInputs();

  // Add book to library
  myLibrary.push(newBook);

  // Update library
  showLibrary();
}

function removeBookFromLibrary(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);

  const bookRow = document.getElementById(id);
  removeAllChildNodes(bookRow);
}

function clearInputs() {
  document.getElementById("title").value = null;
  document.getElementById("author").value = null;
  document.getElementById("pages").value = null;
  document.getElementById("read").checked = null;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function changeReadStatus(readID) {
  const read = document.getElementById(readID);
  read.innerText = read.innerText === "Finished" ? "Unfinished" : "Finished";
}

showLibrary();

const addBookBtn = document.getElementById("add-book");
addBookBtn.addEventListener("click", addBookToLibrary);
