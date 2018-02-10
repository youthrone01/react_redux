var request = require('request');

module.exports = {
	all: function(req,res){
		let url = "https://jsonplaceholder.typicode.com/photos"
		request(url, function(err, response, body){
			let images = JSON.parse(body).slice(0,12)
			images.map((image)=>{
				return image['description'] = image.title+", "+image.url;
			})
			res.json(images)
		})
	},
	
}
