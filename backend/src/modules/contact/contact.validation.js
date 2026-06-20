import { BadRequestError } from "../../shared/utils/errors.js";

export function validateContact(data) {
  if (!data.name) {
    throw new BadRequestError("Name is required");
  }

  if (!data.email) {
    throw new BadRequestError("Email is required");
  }

  if (!data.message) {
    throw new BadRequestError("Message is required");
  }
}
