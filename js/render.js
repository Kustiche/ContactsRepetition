import { contacts } from "./scripts.js";
import { content, templateContact } from "./view.js";

export function render(favorite = false) {
  content.innerHTML = "";

  let filteredContacts = contacts.slice(0);

  if (favorite) {
    filteredContacts = filteredContacts.filter((contact) => {
      return contact.isFavorite;
    });
  } else {
    filteredContacts = contacts.slice(0);
  }

  filteredContacts.forEach((element, index) => {
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

    content.append(contactTemplate);
  });
}
