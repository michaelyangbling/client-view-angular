// const express = require('express');
// const app = express();
// app.use(express.static('./dist'));
// app.get('/*', function (req, res) {
//  res.sendFile(__dirname + '/dist/client-view-angular/index.html');
// });
// app.listen(process.env.PORT || 4100);


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/content-management-consumer-side'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/content-management-consumer-side/index.html'));
});

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
    });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4100);