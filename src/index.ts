import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  const name: string = req.body.name;
  const age: number = req.body.age;
  res.send(`Mattia is ${age} years old`);
});

app.listen(3000, () => {
  console.log('server listening on 3000')
});