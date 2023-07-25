const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
//const {pg} = require(pg);

// new pg.pool({
//   connectionString: 'postgres://postgrest:PuTKsHDFOtg3kLXG7uoQxCkNumeRZefu@dpg-civurl5gkuvrjelf6nn0-a/aprende_1xv9'
// })


app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});
