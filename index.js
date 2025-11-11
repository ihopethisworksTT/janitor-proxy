import express from "express";
import fetch from "node-fetch";
const app = express();
app.use(express.json());

const API_KEY = "YOUR_API_KEY_HERE"; // you'll replace this later

app.post("/api/chat", async (req, res) => {
try {
const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`,
},
body: JSON.stringify(req.body),
});
const data = await response.json();
res.json(data);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

app.listen(10000, () => console.log("￼ Proxy running on port 10000"));
