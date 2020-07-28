//node server
import express from 'express';
const app = express();

//react app dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home  from './client/components/home';

//directory available to outside world
app.use(express.static('public'));

app.get('/',(req, res) => {
    const content = renderToString(<Home />);
    const html = `
    <html>
    <head></head>
    <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `
    res.send(html);
})

app.listen(3030, () => console.log('listening at port 3030'));