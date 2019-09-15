import fetch from 'isomorphic-fetch'

export default (req, res)=>{
  const respones = await fetch('https://api.kanye.rest')
  const data = await response.json()

  res.json(data)
}
