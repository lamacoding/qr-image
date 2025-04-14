import express from 'express';
import qr from 'qr-image';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send("API running...");
});

app.get('/qr/:text', (req, res) => {
    try {
        const qrText = req.params.text;
        const qrImage = qr.image(qrText, { type: 'png' });

        res.setHeader('Content-Type', 'image/png');

        // Use `pipe` to directly send the stream to the response
        qrImage.pipe(res);

    } catch (error) {
        console.error("Error generating QR code:", error);
        res.status(500).send("Error generating QR code");
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
