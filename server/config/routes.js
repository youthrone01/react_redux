var images = require('../controllers/images.js');
var path = require('path');

module.exports = function(app){
	app.get('/images', (req,res)=>{images.all(req,res)})
	

	
}