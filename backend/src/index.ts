import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
//app.use(routes);

app.get('/', (req, res) => {
    return res.send('Hey man!');
});

app.listen(3100);
console.log('Server on port', 3100);