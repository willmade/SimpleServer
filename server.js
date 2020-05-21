const ex = require('express');

const app = ex();
const mess = { "messages" : "Bitch III Been Turnt" }

const port = 8000;
app.disable('x-powered-by');
app.get('/', (req, res) => {

    res.send(mess)

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
