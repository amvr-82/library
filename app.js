const BtnBuild = document.getElementById("btn-build");
const ModalBuild = document.getElementById("modal-screen");
const CloseModal = document.getElementById("close-modal");

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
