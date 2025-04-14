import express from 'express';
import qr from 'qr-image';
import { Readable } from 'stream';
import https from 'https';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send("API running...");
});

app.get('/qr/:text', (req, res) => {
    try {
        const qrText = req.params.text || "I love QR!";
        const qrImage = qr.image(qrText, { type: 'png' });

        res.setHeader('Content-Type', 'image/png');
        qrImage.pipe(res);

    } catch (error) {
        console.error("Error generating QR code:", error);
        res.status(500).send("Error generating QR code");
    }
});

// Load SSL certificates
const options = {
    key: fs.readFileSync(process.env.HTTPS_KEY || './key.pem'),  // Path to your private key
    cert: fs.readFileSync(process.env.HTTPS_CERT || './cert.pem') // Path to your certificate
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});