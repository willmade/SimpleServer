const ex = require('express');
const { wxo1, wxo2 } = require('./mid.js');

const app = ex();
// any port
const port = 8000;
// disable header
app.disable('x-powered-by');

//any response message
const mess = { messages: 'public' };

app.use(wxo1);
app.get('/', wxo2, (req, res) => {
  //console.log(req.headers);
  res.send(mess);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// some variable passsing from cmdln
let args = process.argv;
args.splice(0, 2);
console.log('arguments passed from command->', args);
