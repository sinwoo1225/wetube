import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
    console.log(`✅ Server Listen : http://127.0.0.1:${PORT}`);
}

app.listen(PORT,handleListening);