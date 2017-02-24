var express = require('express');
var url = require('url');
var app = express();
var router = express.Router();

router.get('/hello', function(req, res, next){
   var get_params = url.parse(req.url, true).query;

   if (Object.keys(get_params).length == 0)
   {
      res.end('Hello all');
   }
   else
   {
      res.end('Hello ' + get_params.name);
   }
});

module.exports = router;
