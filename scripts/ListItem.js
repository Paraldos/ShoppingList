import Database from "./Database.js";

export default class ListItem {
  constructor(item, container) {
    this.item = item;
    this.container = container;
    this.wrapper = this.createWrapper();
    this.createHr();
    this.amount = this.createAmount();
    this.type = this.createType();
    this.text = this.createText();
    this.checkbox = this.createCheckbox();
    this.update();
  }

  update() {
    this.wrapper.classList.toggle("list-item--checked", this.item.checked);
    this.amount.disabled = this.item.checked;
    this.type.disabled = this.item.checked;
    this.text.disabled = this.item.checked;
  }

  createWrapper() {
    const wrapper = document.createElement("li");
    wrapper.classList.add("list-item");
    this.container.appendChild(wrapper);
    return wrapper;
  }

  createHr() {
    const hr = document.createElement("hr");
    this.wrapper.appendChild(hr);
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
    checkbox.checked = this.item.checked;
    checkbox.classList.add("list-item__checkbox");
    checkbox.addEventListener("change", (e) => {
      this.item.checked = e.target.checked;
      this.update();
      Database.save();
    });
    this.wrapper.appendChild(checkbox);
    return checkbox;
  }
}
