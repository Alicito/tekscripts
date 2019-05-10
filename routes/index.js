const express = require('express');                             // express requirement
const router = express.Router();                                // routing

router.get('/', (req, res) => res.render('welcome'));             // '/' is defaultpage. sends a message welcome for link confirmation

module.exports = router;                                                
