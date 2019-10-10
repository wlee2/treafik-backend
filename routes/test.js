var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  try {
    if (!req.session.user) {
      throw 'login required'
    }
    if (req.session.views) {
      req.session.views++
    }
    else {
      req.session.views = 1
    }

    const test = [
      { name: 'Wooseok' },
      { name: 'Jisu' },
      { name: 'Aaron' },
      { name: 'Jun' },
      { views: req.session.views }
    ]
    res.send(test);
  } catch (err) {
    res.status(400).send({ error: err })
  }

});

module.exports = router;
