import { render } from "./render.js";
import { contacts } from "./scripts.js";

export function addFavorite(e) {
  const contactIndex = e.target.closest(".contacts__contact").dataset.index;

  contacts[contactIndex].isFavorite = contacts[contactIndex].isFavorite ? false : true;

  render();
}
