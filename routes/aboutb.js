//option 2 = create its own router object
//if you app has 4 different sections you would want to keep seperate in different files
//import express in our code
const express = require('express');
//create a router object
const router = express.Router();
//register middleware functions
//paths are relative to the path witch was configured for the object in app.js in this case /aboutb
// GET /about/
router.get('/', (req, res, next) => {
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
    res.render('aboutb', {
      title: 'About Me - Sample B', 
      tools: toolset
    }); 
  });
  



//export the router object 
module.exports = router;