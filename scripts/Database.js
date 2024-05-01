class Database {
  constructor() {
    this.lists = {};
    this.load();
  }

  save() {
    localStorage.setItem("lists", JSON.stringify(this.lists));
  }

  load() {
    const loadedData = JSON.parse(localStorage.getItem("lists"));
    this.lists = loadedData ? { ...loadedData } : {};
  }

  deleteList(listId) {
    delete this.lists[listId];
    this.save();
  }

  newList(title = "New List", items = []) {
    const id = this.generateUniqueId();
    this.lists[id] = { id, title, items };
    this.save();
  }

  newListItem(amount = 0, text = "", checked = false) {
    const id = this.generateUniqueId();
    return { id, amount, text, checked };
  }

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}

export default new Database();
