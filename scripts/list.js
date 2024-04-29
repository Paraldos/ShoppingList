class List {
  initList(list) {
    const wrapper = this.createWrapper(list.title);
    const container = this.createContainer(wrapper);
    list.items.map((item) => this.createItem(item, container));
    return wrapper;
  }

  createWrapper(title) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("list");
    wrapper.innerHTML = `
      <h2>${title}</h2>
      <button class="list__button">
        <i class="fa-solid fa-qrcode"></i>
      </button>`;
    return wrapper;
  }

  createContainer(wrapper) {
    const container = document.createElement("ul");
    container.classList.add("list__container");
    wrapper.appendChild(container);
    return container;
  }

  createItem(item, container) {
    const element = document.createElement("li");
    element.classList.add("list-item");
    container.appendChild(element);
    element.innerHTML = `
      <input value=${item.amount} type='number' class="list-item__value"/>
      <select name='type' class="list-item__select">
        <option value='stk'>stk</option>
        <option value='kg'>kg</option>
        <option value='g'>g</option>
        <option value='l'>l</option>
      </select>
      <input value=${item.text} type='text' class="list-item__text"/>
      <input type="checkbox" class="list-item__checkbox">
      <hr/>`;

    this.addCheckboxLogic(element, item);

    return element;
  }

  addCheckboxLogic(element, item) {
    const checkbox = element.querySelector(".list-item__checkbox");
    checkbox.checked = item.checked;
    if (item.checked) element.classList.add("list-item--checked");

    checkbox.addEventListener("change", (e) => {
      element.classList.toggle("list-item--checked", e.target.checked);
    });
  }
}

export default new List();
