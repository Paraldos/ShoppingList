export default class ListItem {
  constructor(amount = 0, text = "", checked = false) {
    this.amount = amount;
    this.text = text;
    this.checked = checked;
  }
}
