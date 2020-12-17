/*
 A simple server example with some middle ware

 */

// express server is used
const ex = require('express');
// simple middleware functions
const { wxo1, wxo2 } = require('./mid.js');

const app = ex();
// a arbitrary port
const port = 8000;

// disable header
app.disable('x-powered-by');

//any old response message
const mess = { messages: 'public' };

// tell server to use middleware with every route
app.use(wxo1);

// A simple route handler 
// with middleware only for this route
app.get('/', wxo2, (req, res) => {

  //console.log(req.headers);
  
  res.send(mess);
});

app.listen(port, () =>
  console.log(`Simple server listening at http://localhost:${port}`)
);

/*
// some variable passsing from cmdln
let args = process.argv;
args.splice(0, 2);
console.log('arguments passed from command->', args);
*/