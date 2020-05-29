const ex = require('express');

const app = ex();
const port = 8000;
app.disable('x-powered-by');

const mess = { messages: 'public' };

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send(mess);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
