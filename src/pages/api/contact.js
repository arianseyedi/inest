import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      break
    case 'POST':
      res.status(200).json({ error: 'Got here (POST)' })
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}