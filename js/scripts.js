import { addContact } from "./addContact.js";
import { addFavorite } from "./addFavorite.js";
import { deleteContact } from "./deleteContact.js";
import { edititngContact } from "./edititngContact.js";
import { openModal } from "./openModal.js";
import { render } from "./render.js";
import { buttonFavorites, content, form, modalDeleteButton, modalForm } from "./view.js";

export const contacts = JSON.parse(localStorage.getItem("contacts")) ?? [];
let contactIndex = "";
let isFavorite = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addContact(isFavorite);
});

content.addEventListener("click", (e) => {
  const isButtonStar = e.target.closest(".contacts__button-star") !== null;
  const isContact = e.target.closest(".contacts__contact") !== null;

  if (isButtonStar) {
    addFavorite(e, isFavorite);

    return;
  } else if (isContact) {
    contactIndex = e.target.closest(".contacts__contact").dataset.index;

    openModal(e);
  }
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  edititngContact(contactIndex, isFavorite);
});

modalDeleteButton.addEventListener("click", () => {
  deleteContact(contactIndex, isFavorite);
});

buttonFavorites.addEventListener("click", () => {
  isFavorite = isFavorite ? false : true;

  render(isFavorite);
});

render();
