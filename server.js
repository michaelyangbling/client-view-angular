const express = require('express');
const app = express();
app.use(express.static('./dist'));
app.get('/*', function (req, res) {
 res.sendFile(__dirname + '/dist/client-view-angular/index.html');
});
app.listen(process.env.PORT || 4100);