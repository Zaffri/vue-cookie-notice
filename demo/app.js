/**
 * @name VueJS Cookie Notice Component
 * @description entry script for app
 * @author Steven Morrison <https://github.com/Zaffri/>
 */

const port      = process.env.PORT || 80;
const express   = require("express");
const app       = express();

app.use(express.static('public')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/', 'index.html'));
});

app.listen(port, function(){
    console.log("Server running on port", port);
});