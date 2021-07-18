const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/upload", (req, res) => {
    console.log('file uploaded')

    // use modules such as express-fileupload, Multer, Busboy
    return res.status(200).json({ result: true, msg: 'file uploaded' });
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});