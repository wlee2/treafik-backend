var express = require('express');
var router = express.Router();

var sayHelloRouter = require('./sayHello');
var testRouter = require('./test');
var authRouter = require('./auth');

router.use('/sayHello', sayHelloRouter);
router.use('/test', testRouter);
router.use('/auth', authRouter)

module.exports = router;
