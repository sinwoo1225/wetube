import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`✅ Server Listen : http://127.0.0.1:${PORT}`);
};

app.listen(PORT, handleListening);
