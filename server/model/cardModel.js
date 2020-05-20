'use strict';
	var mongoose = require('mongoose');
	var Card = new mongoose.Schema({	
		name : { type : String},
		list : []	
	}, { versionKey: false });
	
	module.exports = {	
		Card : Card
	};

