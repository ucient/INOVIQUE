import { contactDTO } from "./contact.dto.js";
import { createContact } from "./contact.service.js";
import { validateContact } from "./contact.validation.js";

export const submitContact = async (req, res, next) => {
  try {
    const payload = contactDTO(req.body);
    validateContact(payload);

    const contact = await createContact(payload); //* in future we can send the data along with response

    return res
      .status(201)
      .json({ success: true, message: "Contact form submited" });
  } catch (error) {
    next(error);
  }
};
