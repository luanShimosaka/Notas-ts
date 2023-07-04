import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('Hey man!');
});

app.listen(3100);
console.log('Server on port', 3100);