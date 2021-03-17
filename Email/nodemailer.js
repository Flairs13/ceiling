const fs = require('fs-extra')


const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport(
        {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'flairs13@yandex.ru', // generated ethereal user
            pass: 'ylwo1y52jl', // generated ethereal password
        },
    },
        {
            from: 'Mailer Test <flairs13@yandex.ru>'
        }

    );


    const mailer = (message,res) => {
        transporter.sendMail(message, (error,info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }
            console.log('Message sent successfully!');


            res.send(nodemailer.getTestMessageUrl(info))
            fs.emptyDir('./imgMail')  // Очищаю папку где временно храняться загруженные спецификации

        })
    }

module.exports = mailer