import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./src/modules/index.js";
import { connectDB } from "./src/config/db.config.js";
import { errorHandler } from "./src/shared/middlewares/error.middleware.js";
// import { rateLimiter } from "./src/shared/middlewares/rateLimit.middleware.js";
import rateLimiter from "./src/shared/middlewares/rateLimit.middleware.js";
console.log(rateLimiter)

const app = express();
const PORT = process.env.PORT;

app.use(cors());
// app.use(rateLimiter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB();
});
