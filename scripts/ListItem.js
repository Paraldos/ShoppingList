export default class ListItem {
  constructor(item) {
    this.amount = item.amount;
    this.text = item.text;
    this.checked = item.checked;
    this.element = this.createElement();
  }

  createElement() {
    let wrapper = this.createWrapper();
    wrapper.appendChild(this.createAmountElement());
    wrapper.appendChild(this.createTextElement());
    wrapper.appendChild(this.createCheckboxElement());
    return wrapper;
  }

  createWrapper() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("list-item");
    return wrapper;
  }

  createAmountElement() {
    const amountElement = document.createElement("span");
    amountElement.textContent = this.amount;
    return amountElement;
  }

  createTextElement() {
    const textElement = document.createElement("span");
    textElement.textContent = this.text;
    return textElement;
  }

  createCheckboxElement() {
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.checked = this.checked;
    return checkboxElement;
  }
}
