import Database from "./Database.js";
import ListItem from "./ListItem.js";

export default class List {
  constructor(listId) {
    this.main = document.querySelector("main");
    this.list = Database.lists[listId];
    this.wrapper = this.createWrapper(this.list.title);
    this.container = this.createContainer();
    this.list.items.map((item) => new ListItem(item, this.container));
  }

  createWrapper(title) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("list");
    wrapper.innerHTML = `
      <h2>${title}</h2>
      <button class="list__button">
        <i class="fa-solid fa-qrcode"></i>
      </button>`;
    this.main.appendChild(wrapper);
    return wrapper;
  }

  createContainer() {
    const container = document.createElement("ul");
    container.classList.add("list__container");
    this.wrapper.appendChild(container);
    return container;
  }
}
