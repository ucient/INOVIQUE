import { Contact } from "./contact.model.js";
import { sendAdminNotification } from "../../shared/services/email/email.service.js";

export const createContact = async (payload) => {
  const contact = await Contact.create(payload);

  try {
    const templateData = contact.toObject();
    await sendAdminNotification(templateData);

    contact.mailSent = true;
    contact.mailSentAt = new Date();

    await contact.save();
  } catch (error) {
    contact.mailError = error.message;
    await contact.save();

    throw error;
  }

  return contact;
};
