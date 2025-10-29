const BtnBuild = document.getElementById("btn-build");
const ModalBuild = document.getElementById("modal-screen");
function Open_modal() {
  ModalBuild.classList.remove("hidden");
  console.log("hi");
}

BtnBuild.addEventListener("click", Open_modal());
