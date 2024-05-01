export default class Modal {
  constructor(xButton = false, canBeEscaped = true) {
    this.canBeEscaped = canBeEscaped;
    this.overlay = this.addOverlay();
    this.modalBody = this.addModalBody();
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

  addXButton() {
    const xButton = document.createElement("button");
    xButton.classList.add("modal__x-button");
    xButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    xButton.addEventListener("click", () => this.removeModal());
    this.modalBody.appendChild(xButton);
  }

  removeModal() {
    this.overlay.remove();
  }
}
