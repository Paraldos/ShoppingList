class ListItem {
  initListItem(item) {
    let el = document.createElement("div");
    el.classList.add("list-item");
    el.innerHTML = `
            <span>${item.amount}</span>
            <span>${item.text}</span>
            <input type="checkbox" ${item.checked ? "checked" : ""}>
        `;
    return el;
  }
}

export default new ListItem();
