const myLibrary = [
  { title: "title1", author: "author1", pages: 1, read: "finished" },
  { title: "title2", author: "author2", pages: 2, read: "not read yet" },
  { title: "title3", author: "author3", pages: 3, read: "finished" },
  { title: "title4", author: "author4", pages: 4, read: "not read yet" },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "Finished" : "Not yet read"
    }`;
  };
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function showLibrary() {
  const table = document.getElementById("table");

  myLibrary.forEach((book) => {
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");
    const bookRow = document.createElement("tr");

    title.appendChild(document.createTextNode(book.title));
    author.appendChild(document.createTextNode(book.author));
    pages.appendChild(document.createTextNode(book.pages));
    read.appendChild(document.createTextNode(book.read));
    bookRow.append(title, author, pages, read);

    table.appendChild(bookRow);
  });
}

showLibrary();
