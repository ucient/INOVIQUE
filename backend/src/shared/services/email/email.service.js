import fs from "fs/promises";
import path from "path";
import handlebars from "handlebars";
import { transporter } from "../../../config/mail.config.js";

async function renderTemplate(templateName, data) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "services",
    "email",
    "templates",
    templateName,
  );

  const source = await fs.readFile(filePath, "utf8");

  const template = handlebars.compile(source);

  return template(data);
}

export async function sendAdminNotification(contact) {
  const html = await renderTemplate("admin-notification.hbs", contact);

  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission - ${contact.name}`,
    html,
  });
}
