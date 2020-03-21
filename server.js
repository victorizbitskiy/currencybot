const express = require('express')
const bodyParser = require('body-parser')

global.fetch = require('node-fetch')
const cc = require('cryptocompare')
cc.setApiKey('YOUR_KEY')

const app = express() 
const port = 80
app.use(bodyParser.json()) 

app.post('/rubusd', (req, res) => {

  cc.price('USD', ['RUB'])
  .then(prices => {

    res.send({

      replies: [{
        type: 'text',
        content: "RUB / USD: " + prices.RUB,
      }], 
      conversation: {
        memory: { key: 'value' }
      }
    })
  })
  }) 

  app.post('/rubeur', (req, res) => {

    cc.price('EUR', ['RUB'])
    .then(prices => {
  
      res.send({
  
        replies: [{
          type: 'text',
          content: "RUB / EUR: " + prices.RUB,
        }], 
        conversation: {
          memory: { key: 'value' }
        }
      })
    })
    }) 

app.listen(port, () => { 
  console.log('Server is running on port 80') 
})
