const express = require('express');
const path = require('path');

const router = express();

router.use(express.static(path.join(__dirname, '/public')));

router.get('/', (req, res) => {
  res.sendfile('index.html');
});

router.listen(3000, () => {
	console.log('server started ...');
});