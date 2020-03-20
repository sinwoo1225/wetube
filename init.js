import app from "./index";

const PORT = 4000;

const handleListening = () => {
    console.log(`✅ Server Listen : http://127.0.0.1:${PORT}`);
}

app.listen(PORT,handleListening);