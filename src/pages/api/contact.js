import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      break
    case 'POST':
      const { email, name } = req.body
      console.log(req.body)
      console.log(res)
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
