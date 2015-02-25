var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
  var x = Math.floor(Math.random() * 2) + 1;;

  if (x == 1) {
  	res.render("index", projects);
  }
  else {
  	res.render("index_alternate", projects);
  }
};