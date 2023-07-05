import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//app.use(routes);

app.get('/', (req, res) => {
    return res.send('Hey man!');
});

app.listen(3100);
console.log('Server on port', 3333);