// This directory is for routes that only apply to the server
// the code you write in the api directory won't increase the client side javascript bundle that will ultimately need to be sent over the network

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
