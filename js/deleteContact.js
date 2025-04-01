import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { modal } from "./view.js";

export function deleteContact(contactIndex, isFavoriteRegime) {
  contacts.splice(contactIndex, 1);

  render(isFavoriteRegime);
  modal.close();

  localStorage.setItem("contacts", JSON.stringify(contacts));
}
