import { activationNotification } from "./activationNotification.js";
import { render } from "./render.js";
import { contacts } from "./scripts.js";

export function addFavorite(e, isFavoriteRegime) {
  const contactIndex = e.target.closest(".contacts__contact").dataset.index;

  contacts[contactIndex].isFavorite = contacts[contactIndex].isFavorite ? false : true;

  if (contacts[contactIndex].isFavorite) {
    activationNotification("Контакт добавлен в избранное.");
  } else {
    activationNotification("Контакт удалён из избранного.");
  }

  render(isFavoriteRegime);

  localStorage.setItem("contacts", JSON.stringify(contacts));
}
