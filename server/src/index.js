//node server
import express from 'express';
const app = express();
import renderer from  './helpers/renderer';


//directory available to outside world
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.send(renderer());
})

app.listen(3030, () => console.log('listening at port 3030'));