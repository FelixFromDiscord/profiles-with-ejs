var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:id', function(req, res, next) {
  let fileData = fs.readFileSync(path.join(__dirname, "..", "data/users.json"));
  const data = JSON.parse(fileData.toString());
  let options = data[req.params.id];
  if (options === undefined) {
    options = { userNotFound: true };
  } else {
    options.userNotFound = false;
  }
  res.render('user', options);
});

module.exports = router;
