var express = require('express');
var router = express.Router();

/* GET home page. */
//These routes are relative to the path that was configured in app.js
//in this case this is the base path '/'
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/abouta', (req, res, next) => {
  //simulates going to the database and getting a list of tools
  let toolset = [
    {
      'name': 'Node'
    },
    {
      'name': 'Express'
    },
    {
      'name': 'Handlebars'
    }
  ];

  //pass view name and optionally some data in json format
  res.render('abouta', {
    title: 'About Me - Sample A', 
    tools: toolset
  }); 
});

module.exports = router;
