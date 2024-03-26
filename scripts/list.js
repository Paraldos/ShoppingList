import firebaseAPI from "./firebaseAPI.js";
import Item from "./item.js";

export default class List {
  constructor(listInfo, listsContainer) {
    this.listInfo = listInfo;
    this.init(listsContainer);
    this.update();
  }

  init(listsContainer) {
    this.createWrapper();
    listsContainer.appendChild(this.wrapper);
  }

  update() {
    this.wrapper.innerHTML = "";
    this.createHeader();
    this.createTitle();
    this.createQrBtn();
    this.createAddItemBtn();
    this.createItemsContainer();
    for (const item of this.listInfo.items || []) {
      new Item(item, this.itemsContainer);
    }
  }

  createWrapper() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("list", "container");
  }

  createHeader() {
    this.header = document.createElement("div");
    this.header.classList.add("list__header");
    this.wrapper.appendChild(this.header);
  }

  createTitle() {
    this.title = document.createElement("h2");
    this.title.textContent = this.listInfo.title;
    this.header.appendChild(this.title);
  }

  createQrBtn() {
    this.qrBtn = document.createElement("button");
    this.qrBtn.classList.add("list__qr-btn");
    this.qrBtn.innerHTML = `<i class="fa-solid fa-square-share-nodes"></i>`;
    this.header.appendChild(this.qrBtn);
  }

  createAddItemBtn() {
    this.addItemBtn = document.createElement("button");
    this.addItemBtn.classList.add("list__add-item-btn");
    this.addItemBtn.innerHTML = `<i class="fa-regular fa-square-plus"></i>`;
    this.addItemBtn.addEventListener("click", () => this.onAddItemBtn());
    this.header.appendChild(this.addItemBtn);
  }

  createItemsContainer() {
    this.itemsContainer = document.createElement("ul");
    this.itemsContainer.classList.add("list__items-container");
    this.wrapper.appendChild(this.itemsContainer);
  }

  onAddItemBtn() {
    this.listInfo.items = this.listInfo.items || [];
    this.listInfo.items.push({
      text: "New Item",
      quantity: 1,
      checked: false,
    });
    firebaseAPI.write(`lists/${this.listInfo.id}`, this.listInfo);
  }
}
