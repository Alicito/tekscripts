const express = require('express');                             // express requirement
const router = express.Router();                                // routing


// LOGIN
router.get('/login', (req, res) => res.render('login'));
// REGISTER
router.get('/register',(req, res) => res.render('register'));             // '/' is defaultpage. sends a message welcome for link confirmation

module.exports = router;      