import { contacts } from "./scripts.js";
import { content, templateContact } from "./view.js";

export function render(isFavorite = false) {
  content.innerHTML = "";

  contacts.forEach((element, index) => {
    const contactTemplate = templateContact.content.cloneNode(true);
    const contact = contactTemplate.querySelector(".contacts__contact");
    const contactAvatar = contactTemplate.querySelector(".contacts__avatar");
    const contactName = contactTemplate.querySelector(".contacts__name");
    const contactTelephone = contactTemplate.querySelector(".contacts__tel");
    const contactButtonStar = contactTemplate.querySelector(".contacts__button-star");

    contact.dataset.index = index;
    contactAvatar.textContent = element.name.substring(0, 1).toUpperCase();
    contactName.textContent = element.name;
    contactTelephone.textContent = "+" + element.telephone;

    if (element.isFavorite) {
      contactButtonStar.classList.add("active");
    }

    if (!isFavorite) {
      content.append(contactTemplate);
    } else if (isFavorite && element.isFavorite) {
      content.append(contactTemplate);
    }
  });
}
