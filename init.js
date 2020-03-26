import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`✅ Server Listen : http://127.0.0.1:${PORT}`);
};

app.listen(PORT, handleListening);
