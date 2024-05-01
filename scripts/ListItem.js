import Database from "./Database.js";

export default class ListItem {
  constructor(item, container) {
    this.item = item;
    this.container = container;
    this.wrapper = this.createWrapper();
    this.amount = this.createAmount();
    this.type = this.createType();
    this.text = this.createText();
    this.checkbox = this.createCheckbox();
  }

  createWrapper() {
    const wrapper = document.createElement("li");
    wrapper.classList.add("list-item");
    wrapper.innerHTML = `<hr/>`;
    this.container.appendChild(wrapper);
    return wrapper;
  }

  createAmount() {
    const input = document.createElement("input");
    input.value = this.item.amount;
    input.type = "number";
    input.classList.add("list-item__value");
    this.wrapper.appendChild(input);
    return input;
  }

  createType() {
    const input = document.createElement("select");
    input.name = "type";
    input.classList.add("list-item__select");
    input.innerHTML = `
      <option value='stk'>stk</option>
      <option value='kg'>kg</option>
      <option value='g'>g</option>
      <option value='l'>l</option>`;
    this.wrapper.appendChild(input);
    return input;
  }

  createText() {
    const input = document.createElement("input");
    input.value = this.item.text;
    input.type = "text";
    input.classList.add("list-item__text");
    this.wrapper.appendChild(input);
    return input;
  }

  createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("list-item__checkbox");
    checkbox.addEventListener("change", (e) => {
      this.wrapper.classList.toggle("list-item--checked", e.target.checked);
    });
    this.wrapper.appendChild(checkbox);
    return checkbox;
  }
}
