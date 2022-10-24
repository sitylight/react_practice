const express = require('express');

const app = express();

app.use((req, rep, next) => {
  console.log('receive request: ', req.url);
  next();
});

app.get('/students', (req, rep) => {
  const students = [
    { id: '001', name: 'n1', age: 18 },
    { id: '002', name: 'n2', age: 19 },
    { id: '003', name: 'n3', age: 20 },
  ];
  rep.send(students);
});

app.listen(5000, (error) => {
  if (!error) console.log('server start sucessfully, listening port 5000');
});
