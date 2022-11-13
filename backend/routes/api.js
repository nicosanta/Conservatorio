var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/contacto', async (req, res, next) => {
    const mail = {
        to: 'santachitanicolas@gmail.com',
        subject: 'Contacto web',
        html: `Un mensaje recibido de: ${req.body.email} <br> ${req.body.mensaje} <br> su telefono de contacto es:${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
})

module.exports = router; 