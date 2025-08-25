import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript 🚀");
  i ate a chicken today
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
