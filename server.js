const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./mailer')
const builder = require('./emailBuilder')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/contact', (req, res) => {
    const { email = '', name = '', services = [] } = req.body

    mailer({ email, name, services })
      .then(() => {
        const text = builder({
          email,
          name,
          services,
        })
        res.send(text)
      })
      .catch(error => {
        res.send(`An error occured: \n ${error}`)
      })
  })

  server.listen(3019, err => {
    if (err) throw err
    console.log('> Read on http://localhost:3019')
  })
})
