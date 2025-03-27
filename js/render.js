import { contacts } from "./scripts.js";
import { content, templateContact } from "./view.js";

export function render() {
  content.innerHTML = "";

  contacts.forEach((element, index) => {
    const contact = templateContact.content.cloneNode(true);

    contact.querySelector(".contacts__contact").dataset.index = index;
    contact.querySelector(".contacts__avatar").textContent = element.name.substring(0, 1).toUpperCase();
    contact.querySelector(".contacts__name").textContent = element.name;
    contact.querySelector(".contacts__tel").textContent = element.telephone;

    if (element.isFavorite) {
      contact.querySelector(".contacts__button-star").classList.add("active");
    }

    content.append(contact);
  });
}
