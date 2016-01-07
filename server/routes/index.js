'use strict';

const express = require('express');
const router = express.Router();
const config = require('simple-registry').get('config');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: config.app.title,
    links: config.services.html.links,
    scripts: config.services.html.scripts
  });
});

module.exports = router;
