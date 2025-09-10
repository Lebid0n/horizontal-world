import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { seed } from "./seeder";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running!" });
});

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully!");

    await seed();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
