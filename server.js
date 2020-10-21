const express = require('express');
const path = require('path');

app = express();
// app.use(serveStatic(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, 'dist')));

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('server started '+ port);
});
