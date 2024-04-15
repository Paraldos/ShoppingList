import ListItem from "./ListItem.js";

class List {
  initList(list) {
    let el = document.createElement("div");
    el.classList.add("list");
    el.innerHTML = `
            <h2>${list.title}</h2>
            ${list.items
              .map((item) => {
                return ListItem.initListItem(item);
              })
              .join(" ")}
        `;
    return el;
  }
}

export default new List();
