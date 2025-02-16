import cors from "cors";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import express from "express";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "¡Backend con TypeScript funcionando! 🚀" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
