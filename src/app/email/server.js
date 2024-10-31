


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, company, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jmmolins87@gmail.com',
            pass: '07870787Jm!'
        }
    });

    const mailOptions = {
        from: email,
        to: 'jmmolins87@gmail.com',
        subject: `Mensaje de ${ name } desde la web de ${ company }. Asunto: ${ subject }`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.status(200).send('Email enviado correctamente');
        }
    });

    app.listen(3000, () => {
        console.log(`Servidor iniciado en el puerto 3000`);
    });
});