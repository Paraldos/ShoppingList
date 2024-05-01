class Database {
  constructor() {
    this.lists = {};
    this.newList("Test", [
      this.newListItem(1, "Mjölk", false),
      this.newListItem(1, "Bröd", true),
    ]);
  }

  loadFromLocalStorage() {
    const lists = JSON.parse(localStorage.getItem("lists"));
    return lists ? lists : [];
  }

  saveToLocalStorage() {
    localStorage.setItem("lists", JSON.stringify(this.lists));
  }

  newList(title = "", items = []) {
    const id = this.generateUniqueId();
    this.lists[id] = { id, title, items };
  }

  newListItem(amount = 0, text = "", checked = false) {
    return new Object({ amount, text, checked });
  }

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}

export default new Database();
