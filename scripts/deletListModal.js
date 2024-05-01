import Database from "./Database.js";
import Modal from "./modal.js";
import SVG from "./svg.js";

export default class DeleteListModal extends Modal {
  constructor(listId) {
    super();
    this.listId = listId;
    this.contentContainer.innerHTML += `<h2>Delete List</h2>`;
    this.addBtns();
  }

  addBtns() {
    const btns = document.createElement("div");
    btns.classList.add("modal__button-container");
    btns.appendChild(this.yesBtn());
    btns.appendChild(this.noBtn());
    this.contentContainer.appendChild(btns);
  }

  yesBtn() {
    const btn = document.createElement("button");
    btn.classList.add("modal__yes-button");
    btn.innerHTML = SVG.circleCheck();
    btn.addEventListener("click", () => {
      Database.deleteList(this.listId);
      this.removeModal();
    });
    return btn;
  }

  noBtn() {
    const btn = document.createElement("button");
    btn.classList.add("modal__no-button");
    btn.innerHTML = SVG.circleX();
    btn.addEventListener("click", () => this.removeModal());
    return btn;
  }
}
