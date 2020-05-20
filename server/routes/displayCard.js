'use strict';
  var mongoose = require('mongoose');
  var Card = mongoose.model('Card');
  var displayCard = function  (req, res) {
  
    Card.find({}, function(err,data){
      if(err){
      res.send(500, {'message': 'Some Error happened' + err});    
    }
    else{
      res.json(200, data);   
    }
    });
  };
  module.exports = 
  {	
  	Card: displayCard
  };
