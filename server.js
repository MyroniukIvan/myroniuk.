const path = require('path');
const express = require('express');

const app = express();

console.log(__dirname);
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(process.cwd, 'media')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', function (req, res) {
  res.get(path.join(__dirname, 'build', 'media'));
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
