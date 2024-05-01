import SVG from "./svg.js";

export default class Modal {
  constructor(xButton = false, canBeEscaped = true) {
    this.canBeEscaped = canBeEscaped;
    this.overlay = this.addOverlay();
    this.modalBody = this.addModalBody();
    this.contentContainer = this.addContentContainer();
    if (xButton) this.addXButton();
  }

  addOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("modal__overlay");
    document.body.appendChild(overlay);
    if (this.canBeEscaped) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) this.removeModal();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") this.removeModal();
      });
    }
    return overlay;
  }

  addModalBody() {
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal__body");
    this.overlay.appendChild(modalBody);
    return modalBody;
  }

  addContentContainer() {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("modal__content-container");
    this.modalBody.appendChild(contentContainer);
    return contentContainer;
  }

  addXButton() {
    const xButton = document.createElement("button");
    xButton.classList.add("modal__x-button");
    xButton.innerHTML = SVG.xmark();
    xButton.addEventListener("click", () => this.removeModal());
    this.modalBody.appendChild(xButton);
  }

  removeModal() {
    this.overlay.remove();
  }
}
