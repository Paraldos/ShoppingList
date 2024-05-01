class Database {
  constructor() {
    this.lists = this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const lists = JSON.parse(localStorage.getItem("lists"));
    return lists ? lists : [];
  }

  saveToLocalStorage() {
    localStorage.setItem("lists", JSON.stringify(this.lists));
  }

  newList(id = "", title = "", items = []) {
    return new Object({ id, title, items });
  }

  newListItem(amount = 0, text = "", checked = false) {
    return new Object({ amount, text, checked });
  }
}

export default new Database();
