const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'freelanceinest@gmail.com',
    pass: 'Fa787ARL@',
  },
})

const send = ({ subject, body, attachments }) => {
  const message = {
    from: 'freelanceinest@gmail.com',
    // to: 'freelanceinest@gmail.com, info@inest.ca',
    to: 'freelanceinest@gmail.com',
    subject,
    html: body,
    attachments,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)))
  })
}

module.exports = send
