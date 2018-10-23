const express = require('express')
const app = express()
const port = 3000
const cakes = require('./data.json')

app.get('/', (req,res) =>{
  res.json({cakes})
})

app.get('/cake/:id', (req,res)=>{
  const id = req.params.id
  const cake = cakes.filter(piece=>{
    return piece.id == id
  })[0]
  res.json(cake)
})

app.post('/', (req,res)=>{
  const body = req.body
  cakes.push(body)
  res.json({cakes:cakes})
})

app.listen(port, ()=>{
  console.log(`I am on port ${port}`)
})
