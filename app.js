// Main node file
const express = require('express');                               // requirement for express     
const app = express();                                            // ^      
const expressLayouts = require('express-ejs-layouts');        

app.use(expressLayouts);
app.set('view engine', 'ejs'); 

app.use(express.static("public"));

app.use('/', require('./routes/index'));                            // triggers index.js link in routes/index.js
app.use('/users', require('./routes/users'));                       // triggers users.js link in routes/users.js

const PORT = process.env.PORT || 5000;                              // variable on local server

app.listen(PORT, console.log(`server started on ${PORT}`));         // enables local server check browser if working