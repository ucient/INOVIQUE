import "dotenv/config";
import cors from "cors";
import express from "express";
// import routes from "./src/routes/index.js";
import { errorHandler } from "./src/shared/middlewares/error.middleware.js";
import { rateLimiter } from "./src/shared/middlewares/rateLimit.middleware.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(rateLimiter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", routes);

const handleUser = (req, res) => {
  console.log("params:", req.params);
  console.log("query:", req.query);
  console.log("body:", req.body);

  res.send("ok");
  console.log(req);
};

app.get("/", (req, res) => {
  const mockReq = {
    params: { id: "123" },
    query: { role: "admin" },
    body: {
      name: "parth",
      email: "parth@example.com",
    },
  };

  handleUser(mockReq, res);
});

app.post("/users/:id", handleUser);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
