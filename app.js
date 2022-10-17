const express = require('express')
const app = express()

app.use(express.json())

app.get ("/", (request, response)=>{
  response.send ({message: 'Hello World'})
})

app.post ("/sum", (request, response)=>{
  const {number1, number2} = request.body
  const result = number1 + number2;
  response.status(200).send ({message: result})
  response.status(400).send ({message:'error 400 bad request'})
})


app.post ("/subs", (request, response)=>{
  const {number1, number2} = request.body
  const result = number1 - number2;
  response.send ({message: result})
})

app.post ("/mult", (request, response)=>{
  const {number1, number2} = request.body
  const result = number1 * number2;
  response.send ({message: result})
})

app.post ("/div", (request, response)=>{
  const {number1, number2} = request.body
  const result = number1 / number2;
  response.send ({message: result})
})

app.listen(3001, () => {
  console.log('Server running on localhost:3001...')
})