'use strict';
  var mongoose = require('mongoose');
  var Card = mongoose.model('Card');   
  var updateCard = function  (req, res) { 
		Card.findOneAndUpdate({ '_id': req.params._id}, { $set:{'name' : req.params.name }}, {upsert: false ,runValidators: true },
      function (error, data){		
  		if (error !== null && error !== undefined) {			
  		  console.error(error);			
  		  res.send(500, {'Error': error});		
  	  } 
  	  else {	
		    res.json(200, {'Success': 'Data updated successfully!'}); 	 
  	  }	
    });	
  	return;
  };
  module.exports = 
  {	
  	Card : updateCard 
  };
