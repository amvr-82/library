const BtnBuild = document.getElementById("btn-build");
const ModalBuild = document.getElementById("modal-screen");
const CloseModal = document.getElementById("close-modal");
const modalScreen = document.querySelector("#modal-screen");
const openModalBtn = document.querySelector("#btn-build");
const closeModalIcon = document.querySelector("#close-modal");
const cancelBtn = document.querySelector(".close");
const createBtn = document.querySelector(".continue");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const releaseInput = document.querySelector(".release-input");
const tableBody = document.querySelector("tbody");
const booksCount = document.querySelector(".books-count");

function Open_modal() {
  ModalBuild.classList.remove("hidden");
}

function close_modal() {
  ModalBuild.classList.add("hidden");
}

BtnBuild.addEventListener("click", Open_modal);
CloseModal.addEventListener("click", close_modal);
window.addEventListener("click", (e) => {
  if (e.target === ModalBuild) {
    close_modal();
  }
});

function showModal() {
  modalScreen.classList.remove("hidden");
}

function hideModal() {
  modalScreen.classList.add("hidden");
  clearInputs();
}

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  releaseInput.value = "";
}

openModalBtn.addEventListener("click", showModal);
closeModalIcon.addEventListener("click", hideModal);
cancelBtn.addEventListener("click", hideModal);

createBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const release = releaseInput.value.trim();

  if (!title || !author || !release) {
    alert("لطفاً تمام فیلدها را پر کن 🫠");
    return;
  }

  const newBook = { title, author, release };
  saveBook(newBook);
  loadBooks();
  hideModal();
});

function saveBook(book) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  tableBody.innerHTML = "";
  booksCount.textContent = books.length;

  books.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-6 py-3">${book.title}</td>
      <td class="px-6 py-3">${book.author}</td>
      <td class="px-6 py-3">${book.release}</td>
      <td class="px-6 py-3">
        <button class="delete-btn" data-index="${index}">حذف</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", removeBook);
  });
}

function removeBook(e) {
  const index = e.target.dataset.index;
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  loadBooks();
}

window.onload = loadBooks;
