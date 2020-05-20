'use strict';
  var mongoose = require('mongoose');
  var Card = mongoose.model('Card');
  var createCard = function  (req, res) {
  	var name = req.params.name;	
  	var newCard= new Card();	
  	newCard.name = name;	
  	newCard.save(function (error, data) {		
  		if (error !== null && error !== undefined) {					
  		res.send(500, {'Error': error});		
  	} 
  	else {			
  		res.json(201, {saved: data});				
  	}	
  });	
  	return;
  };
  module.exports = 
  {	
  	Card: createCard
  };