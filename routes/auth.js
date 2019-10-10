var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
    const { userName, password } = req.body
    try {
        console.log(userName, password)
        if (!userName || !password) {
            throw 'body error'
        }
        if (userName === 'wooseok' && password === '1234') {
            req.session.user = { user: userName }
            res.status(200).send({ status: 'success' })
        }
        else {
            throw 'name or password is not verified'
        }
    } catch (err) {
        res.status(400).send({ error: err })
    }
});

router.get('/logout', function (req, res, next) {
    try {
       if(req.session.user) {
            req.session.user = null
            res.status(200).send({ status: 'success' })
       }
       else {
           throw "You're not logged in now"
       }
    } catch (err) {
        res.status(400).send({ error: err })
    }
});


module.exports = router;
