import Database from "./Database.js";
import Modal from "./modal.js";
import SVG from "./svg.js";

export default class QRCodeModal extends Modal {
  constructor(listId) {
    super(true);
    console.log(listId);
  }
}
