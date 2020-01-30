const formidable = require('formidable')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./mailer')
const emailBuilder = require('./emailBuilder')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/contact', (req, res) => {
    const form = new formidable.IncomingForm()
    form.maxFields = 10
    form.maxFieldsSize = 2 * 1024 * 1024 // 2 MB
    form.maxFileSize = 10 * 1024 * 1024 // 10 MB
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log('500', error)
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
          const body = emailBuilder.emailContent(event)
          const subject = emailBuilder.emailSubject(event)
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
              res.status(204).send(`An error occured: \n ${error}`)
            })
        } catch (error) {
          console.log(error)
          res.status(500).send(`an error occured while building email body`)
        }
      }
    })
  })
  server.listen(3019, err => {
    if (err) throw err
    console.log('> Read on http://localhost:3019')
  })
})
