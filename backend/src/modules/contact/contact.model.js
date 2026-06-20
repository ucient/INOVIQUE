import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    mailSent: { type: Boolean, default: false },
    mailSentAt: { type: Date, default: null },
    mailError: { type: String, default: null },
  },
  { timestamps: true },
);

export const Contact = mongoose.model("Contact", contactSchema);
