export function contactDTO(data) {
  return {
    name: data.name?.trim(),
    email: data.email?.trim().toLowerCase(),
    phone: data.phone?.trim(),
    subject: data.subject?.trim(),
    message: data.message?.trim(),
  };
}
