export default class Item {
  constructor(item, listItems) {
    this.text = item.text;
    this.quantity = item.quantity;
    this.checked = item.checked;
    this.createWrapper();
    this.createCheckedInput();
    this.createQuantityInput();
    this.createTextInput();
    this.createDeleteBtn();
    listItems.appendChild(this.wrapper);
  }

  createWrapper() {
    this.wrapper = document.createElement("li");
    this.wrapper.classList.add("list__item");
  }

  createCheckedInput() {
    this.checkedInput = document.createElement("input");
    this.checkedInput.type = "checkbox";
    this.wrapper.appendChild(this.checkedInput);
  }

  createQuantityInput() {
    this.quantityInput = document.createElement("input");
    this.quantityInput.type = "number";
    this.wrapper.appendChild(this.quantityInput);
  }

  createTextInput() {
    this.textInput = document.createElement("input");
    this.textInput.type = "text";
    this.wrapper.appendChild(this.textInput);
  }

  createDeleteBtn() {
    this.deleteBtn = document.createElement("button");
    this.deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    this.wrapper.appendChild(this.deleteBtn);
  }
}
