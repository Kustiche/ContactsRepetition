import { notification, notificationText } from "./view.js";

export function activationNotification(text) {
  notificationText.textContent = text;
  notification.classList.add("active");

  setTimeout(() => {
    notification.classList.remove("active");
  }, 4000);
}
