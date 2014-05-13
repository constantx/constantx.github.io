/**
 * custom hook for copying CNAME file correctly
 */

var fs = require('fs');

module.exports = {

  run: function(path, options, callback) {
    var modified = options.modified || false;
    var finished = options.finished || false;

    // Empty path means it's the last thing it does
    if (!path) {
      fs.createReadStream('CNAME.md', {
        encoding: "utf8"
      })
      .pipe(
        fs.createWriteStream('./dist/CNAME', {
          encoding: "utf8"
        })
      );
    }

    return callback();
  }

};
