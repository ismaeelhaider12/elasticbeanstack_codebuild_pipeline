const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App 5</h1> <h4>Hello this is warning messsage from Muhammad Ismaeel Haider</h4> <p>Versiosn 1.2</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '103',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
