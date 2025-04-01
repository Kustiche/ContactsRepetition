import { render } from "./render.js";
import { contacts } from "./scripts.js";

export function addFavorite(e, favorite) {
  const contactIndex = e.target.closest(".contacts__contact").dataset.index;

  contacts[contactIndex].isFavorite = contacts[contactIndex].isFavorite ? false : true;

  render(favorite);

  localStorage.setItem("contacts", JSON.stringify(contacts));
}
