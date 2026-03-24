const express = require("express");
const QRCode = require("qrcode");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve index.html from root folder
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// QR API
app.get("/qr", async (req, res) => {
    const text = req.query.text;

    if (!text) {
        return res.send("Enter text");
    }

    try {
        const qr = await QRCode.toDataURL(text);
        res.send(`<img src="${qr}" />`);
    } catch (err) {
        res.send("Error generating QR");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});