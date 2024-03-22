const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:1024'
  }))

app.post('/', (req, res) => {
    res.send({
        username:'jiafeimao'
    })
    console.log('post')
    res.sendStatus(200);
}),

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
