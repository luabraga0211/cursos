const express = require('express')
const app = express()

const users = [
  {
    name: 'Luã',
    email: 'luasergiogomesbraga@gmail.com',
    idade: 18, 
    sexo: 'Masculino'
  }
]

app.get('/usuarios', (req, res) => {
  res.json(users)
})

app.post('/usuarios', (req, res) => {
  console.log(req.body)
  users.push(req.body)
  res.status(201).json(users)
})

app.listen(3000, () => console.log("Servidor está rodando"))