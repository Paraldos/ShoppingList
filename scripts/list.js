import Database from "./Database.js";
import ListItem from "./ListItem.js";
import DeleteListModal from "./deletListModal.js";

export default class List {
  constructor(listId) {
    this.main = document.querySelector("main");
    this.list = Database.lists[listId];
    this.wrapper = this.createWrapper();
    this.addHeader();
    this.addQRCodeButton();
    this.addDeleteButton();
    this.container = this.createContainer();
    this.list.items.map((item) => new ListItem(item, this.container));
  }

  createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("list");
    this.main.appendChild(wrapper);
    return wrapper;
  }

  addHeader() {
    const header = document.createElement("h2");
    header.textContent = this.list.title;
    this.wrapper.appendChild(header);
  }

  addQRCodeButton() {
    const button = document.createElement("button");
    button.classList.add("list__button", "list__qrcode-button");
    button.innerHTML = `<i class="fa-solid fa-qrcode"></i>`;
    this.wrapper.appendChild(button);
  }

  addDeleteButton() {
    const button = document.createElement("button");
    button.classList.add("list__button", "list__delete-button");
    button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    button.addEventListener("click", () => {
      new DeleteListModal(this.list.id);
    });
    this.wrapper.appendChild(button);
  }

  createContainer() {
    const container = document.createElement("ul");
    container.classList.add("list__container");
    this.wrapper.appendChild(container);
    return container;
  }
}
