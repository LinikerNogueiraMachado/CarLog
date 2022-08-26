const
express = require('express');
const app = express();
const appName = 'CarLog';
const outputhPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputhPath));
app.get('/*', (req, res) =>{
  res.sendFile(`${outputhPath}/index.html`);

})

app.listen(process.env.PORT);


