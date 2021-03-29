const mailer = require('../Email/nodemailer')





module.exports.newMail = (req, res) => {
    console.log(req.files)
    const attachments = req.files.map(i =>({filename: i.filename, path: `./imgMail/${i.filename}`}))


    let html = "<b>Поступила новая заявка</b>"
    html += `<hr>ФИО: ${req.body.name}`
    html += `<p>Phone: ${req.body.phone}</p>`
    html += `<p>Email: ${req.body.mail}</p>`
    html += `<p>Комментарии к заказу: ${req.body.textarea}</p>`

    const message = {
        from: '<paq-diller@yandex.ru>', // sender address
        to: "paq-diller@yandex.ru", // list of receivers
        subject: "✔✔✔--НОВАЯ ЗАЯВКА--✔✔✔", // Subject line
        text: "Заявка", // plain text body
        html: html,
        attachments: [...attachments]
    }
    mailer(message,res)

};

