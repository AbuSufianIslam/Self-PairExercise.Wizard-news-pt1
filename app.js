const express = require('express');
const morgan = require('morgan');
const postBank = require('./postBank');
const postList = require('./Views/postList');
const singlePost = require('./Views/singlePost');

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

//app.get("/", (req, res) => res.send("Hello World!"));

app.get('/', (req, res) => {
	const posts = postBank.list();

	res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
	const id = Number(req.params.id);
	const post = postBank.find(id);
	res.send(singlePost(post));
});

const PORT = 1337;

app.listen(PORT, () => {
	console.log(`App listening in port ${PORT}`);
});
