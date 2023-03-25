/* eslint-disable unicorn/prevent-abbreviations */
const express = require('express');
const paths = require('./paths');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(paths.INDEX_PAGE);
});

module.exports = router;
