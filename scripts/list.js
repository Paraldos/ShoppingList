class List {
  initList(list) {
    const wrapper = this.createWrapper(list.title);
    const container = this.createContainer(wrapper);
    list.items.map((item) => {
      this.createContainerItem(item, container);
    });
    return wrapper;
  }

  createWrapper(title) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("list");
    wrapper.innerHTML = `<h2>${title}</h2>`;
    return wrapper;
  }

  createContainer(wrapper) {
    const container = document.createElement("ul");
    container.classList.add("list__container");
    wrapper.appendChild(container);
    return container;
  }

  createContainerItem(item, container) {
    const containerItem = document.createElement("li");
    containerItem.innerHTML = `
      <input value=${item.amount} type='number' />
      <select name='type'>
        <option value='stk'>stk</option>
        <option value='kg'>kg</option>
        <option value='g'>g</option>
        <option value='l'>l</option>
      </select>
      <input value=${item.text} type='text' />
      <input type="checkbox" ${item.checked ? "checked" : ""}>`;
    container.appendChild(containerItem);
    return containerItem;
  }
}

export default new List();
