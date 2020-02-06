import { emailContent, emailSubject } from '../../components/common/tools/emailmaker'

const nodemailer = require('nodemailer')
const formidable = require('formidable')

export default (req, res) => {
  const mailer = ({ subject, body, attachments }) => {
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'freelanceinest@gmail.com',
    //     pass: 'Fa787ARL@',
    //   },
    // })
    let refreshToken =
      '1//0fvosuc_hdRcvCgYIARAAGA8SNwF-L9Iri80EnnUS-G9RPM_6EROBFxY9D_yAvjQFV-VPjpU1h6W5cL8IEs5egNqfBdtajICLwv0'
    let expires = 1580711243786
    let accessToken =
      'ya29.Il-8B6GtxXLmme1KtwlN4vRsiEQP4ppmwjAiU_5-g27_pqHP6W5_VDknVJqUro2WncUU_gQPuehWXaLMaP-Pj2VEfdyT85rDP8tQVpzdn3dhomSB3SPeJPZyq0c9vl654Q'
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'freelanceinest@gmail.com',
        clientId: '339495749524-itjgi2a0njsqh3khcpjihv5jp931efp0.apps.googleusercontent.com',
        clientSecret: 'seK7kya-6AXgTUWAo7dHtqyg',
      },
    })
    transporter.on('token', token => {
      console.log('token:', token)
      accessToken = token.accessToken
      expires = token.expires
    })
    const message = {
      from: 'freelanceinest@gmail.com',
      to: 'info@inest.ca',
      // to: 'freelanceinest@gmail.com',
      subject,
      html: body,
      attachments,
      auth: {
        user: 'freelanceinest@gmail.com',
        refreshToken,
        accessToken,
        expires,
      },
    }
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)))
    })
  }
  switch (req.method) {
    case 'POST':
      const form = new formidable.IncomingForm()
      form.maxFields = 10
      form.maxFieldsSize = 2 * 1024 * 1024 // 2 MB
      form.maxFileSize = 10 * 1024 * 1024 // 10 MB
      form.parse(req, (err, fields, files) => {
        console.log(fields)
        if (err) {
          console.log('500', err)
          res.status(500).send(`parsing error occured`)
        } else {
          try {
            //   event = {
            //      email: "abc",
            //      name: 'Asghar Farhadi',
            //      services: "3,4,0",
            //      description: "I have a big house",
            //      contactInfo: {
            //        email: 'asghar@farhadi.film'
            //      },
            //      timestamp: '2020-01-20 22:22 PM'
            var now = new Date()
            var formatted_time =
              '' +
              now.getUTCFullYear() +
              '-' +
              (now.getUTCMonth() + 1) +
              '-' +
              (now.getUTCDate() + 1) +
              '  ' +
              now.getUTCHours() +
              ':' +
              now.getUTCMinutes() +
              ' ' +
              (now.getUTCHours() >= 12 ? 'pm' : 'am')

            const event = {
              name: fields.name,
              services: fields.services,
              description: fields.description,
              contactInfo: {
                email: fields.email,
              },
              timestamp: formatted_time, //now.format('M jS, Y \\i\\s \\h\\e\\r\\e!'),
            }
            const body = emailContent(event)
            const subject = emailSubject(event)
            const attachments =
              files && files.attachment && files.attachment.name && files.attachment.path
                ? [
                    {
                      filename: files.attachment.name,
                      path: files.attachment.path,
                    },
                  ]
                : undefined
            mailer({ subject, body, attachments })
              .then(info => {
                console.log('200 success', info)
                res.status(200).send('success')
              })
              .catch(error => {
                console.log('204', error)
                res.status(204).send('An error occured:') //\n ${error}
              })
          } catch (error) {
            console.log(error)
            res.status(500).send('an error occured while building email body')
          }
        }
      })
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
