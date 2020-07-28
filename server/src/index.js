//node sserver
const express = require('express');
const app = express();

//react app dependencies
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/home/index').default;

app.get('/',(req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
})

app.listen(3030,() => console.log('listening at port 3030'));