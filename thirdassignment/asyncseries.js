var async = require('async');
async.series([
  function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 5000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      //throw("error");
      callback(null, 2);
    }, 1000);
  }
],
function(err, results) {
  console.log(results);
  console.log(err);
  
});

