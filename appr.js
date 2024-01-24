const express = require('express')

const app = express()

app.get('/',(req,res) => {
console.log('Peticion recibida')

res.send('<h1>Hola mundo </h1>')
})


app.listen(4000, () => {
   console.log('Servidor escuchand en el puerto 4000')

  }) 