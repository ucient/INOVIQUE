import express from "express";
import contactRoutes from "./contact/contact.route.js";

const router = express.Router();

router.get("/", (req, res) => res.send("welcome to INOVIQUE"));
router.use("/contact", contactRoutes);

export default router;
