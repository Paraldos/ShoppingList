import firebaseAPI from "./firebaseAPI.js";

export default class Lists {
  constructor() {
    this.lists = document.querySelector(".lists");
    document.addEventListener("listsLoaded", () => this.init());
    document.addEventListener("newListAdded", () => this.init());
  }

  init() {
    this.lists.innerHTML = "";
    firebaseAPI.lists.forEach((list) => {
      let newList = this.createList(list);
      const addItemBtn = newList.querySelector(".list__add-item-btn");
      addItemBtn.addEventListener("click", () => this.addItem(list));
    });
  }

  createList(list) {
    console.log(list);
    const newList = document.createElement("section");
    newList.classList.add("list", "container");
    newList.id = list.id;
    newList.innerHTML = `
      <div class="list__header">
        <h2>${list.title}</h2>
        <button class="list__qr-btn">
          <i class="fa-solid fa-qrcode"></i>
        </button>
        <button class="list__add-item-btn">
          <i class="fa-regular fa-square-plus"></i>
        </button>
      </div>
      <ul></ul>
    `;
    this.lists.appendChild(newList);
    return newList;
  }

  addItem(list) {
    list.items = list.items || [];
    list.items.push({
      name: "New Item",
      quantity: 1,
      checked: false,
    });
    firebaseAPI.write(`lists/${list.id}`, list);
  }
}
