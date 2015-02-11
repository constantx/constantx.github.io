var helper_utils = require("punch").Utils.Helper;

var block_helpers = {

	"production": function() {
		return helper_utils.checkArgs(arguments, function(text) {
			console.log('text', text);
			if(process.env.NODE_ENV === "development") {
				return "";
			}

			return text;
		});
	}

};

module.exports = {

	directAccess: function(){
		return { "block_helpers": block_helpers, "options": {} };
	},

	get: function(basepath, file_extension, options, callback){
		var self = this;

		return callback(null, { "block": block_helpers }, {});
	}

};
