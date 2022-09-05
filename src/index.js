const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
const port = 4000;
server.listen(port, () => {
  console.log('listening' + port);
});
//endpoint
server.post('/card', (req, res) => {
  const responseSuccess = {
    cardURL:
      'https://awesome-profile-cards.herokuapp.com/card/29111662374762259',
    success: true,
  };
  const responseError = {
    success: false,
    error: 'Falta un parámetro',
  };
  res.json(responseError);
});
// endpoint "devolver tarjeta"
server.get('/card/:id', (req, res) => {
  res.json({
    url: 'https://awesome-profile-cards.herokuapp.com/card/29111662374762259',
  });
});
