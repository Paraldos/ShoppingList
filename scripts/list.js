import Database from "./Database.js";
import ListItem from "./ListItem.js";
import DeleteListModal from "./deletListModal.js";
import ChangeListTitleModal from "./ChangeListTitleModal.js";
import SVG from "./svg.js";
import QRCodeModal from "./QRModal.js";

export default class List {
  constructor(listId) {
    this.main = document.querySelector("main");
    this.dbEntry = Database.lists[listId];
    this.list = this.createList();
    this.header = this.addHeader();
    this.addQRCodeButton();
    this.title = this.addTitle();
    this.addDeleteButton();
    this.addPlusBtn();
    this.itemContainer = this.addItemContainer();
    this.dbEntry.items.map((item) => new ListItem(item, this.itemContainer));
    document.addEventListener("updateListTitle", () => {
      this.title.innerHTML = this.dbEntry.title;
    });
  }

  createList() {
    const list = document.createElement("div");
    list.classList.add("list");
    this.main.appendChild(list);
    return list;
  }

  addHeader() {
    const header = document.createElement("div");
    header.classList.add("list__header");
    this.list.appendChild(header);
    return header;
  }

  addTitle() {
    const title = document.createElement("h2");
    title.classList.add("list__title");
    title.innerHTML = this.dbEntry.title;
    title.addEventListener("click", () => {
      new ChangeListTitleModal(this.dbEntry.id);
    });
    this.header.appendChild(title);
    return title;
  }

  addQRCodeButton() {
    const button = document.createElement("button");
    button.classList.add("list__button", "list__qrcode-button");
    button.innerHTML = SVG.qrCode();
    button.addEventListener("click", () => {
      new QRCodeModal(this.dbEntry.id);
    });
    this.header.appendChild(button);
  }

  addDeleteButton() {
    const button = document.createElement("button");
    button.classList.add("list__button", "list__delete-button");
    button.innerHTML = SVG.trash();
    button.addEventListener("click", () => {
      new DeleteListModal(this.dbEntry.id);
    });
    this.header.appendChild(button);
  }

  addPlusBtn() {
    const button = document.createElement("button");
    button.classList.add("list__button", "list__plus-button");
    button.innerHTML = SVG.circlePlus();
    button.addEventListener("click", () => {
      const item = Database.newListItem();
      this.dbEntry.items.push(item);
      new ListItem(item, this.itemContainer);
      Database.save();
    });
    this.header.appendChild(button);
  }

  addItemContainer() {
    const container = document.createElement("ul");
    container.classList.add("list__item-container");
    this.list.appendChild(container);
    return container;
  }
}
