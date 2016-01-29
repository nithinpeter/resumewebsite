/**
 * Created by nithinpeter on 19/03/15.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname+"/public"))


app.get('/',function(req,res) {
    res.send('index.html');
})

app.listen(process.env.PORT || 9000);

console.log("listening on port 9000")
