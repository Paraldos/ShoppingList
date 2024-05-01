class Database {
  constructor() {
    this.lists = {};
    this.load();
  }

  save() {
    this.saveToLocalStorage();
  }

  load() {
    this.lists = this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const lists = JSON.parse(localStorage.getItem("lists"));
    return lists ? lists : [];
  }

  saveToLocalStorage() {
    localStorage.setItem("lists", JSON.stringify(this.lists));
  }

  newList(title = "New List", items = []) {
    const id = this.generateUniqueId();
    this.lists[id] = { id, title, items };
  }

  newListItem(amount = 0, text = "", checked = false) {
    const id = this.generateUniqueId();
    return new Object({ id, amount, text, checked });
  }

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}

export default new Database();
