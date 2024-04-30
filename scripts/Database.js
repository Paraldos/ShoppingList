class ListItem {
  constructor(amount = 0, text = "", checked = false) {
    this.amount = amount;
    this.text = text;
    this.checked = checked;
  }
}
class List {
  constructor(id = "", title = "", items = []) {
    this.id = id;
    this.title = title;
    this.items = items;
  }
}

const Database = [
  new List("1", "Groceries", [
    new ListItem(1, "Milk", false),
    new ListItem(1, "Eggs", false),
  ]),
  new List("2", "To Do", []),
];
export default Database;
