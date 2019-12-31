import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ error: 'Got here (POST)' })
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
