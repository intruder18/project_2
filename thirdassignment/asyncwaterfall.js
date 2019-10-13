var async = require('async');
async.waterfall([
  function (callback) {
    //user login 
    var user = {
      userName: "vipan",
      emailId: "singlavipan18@gmail.com",
      password: "abc123!",
      phoneNo: "9803410390"
    }
    callback(null, user.userName, user.emailId, user.password, user.phoneNo);
    console.log("hello 1");
  },
  function (arg1, arg2, arg3, arg4, callback) {
    // checking if user exists
    //fetching user data from database
    let userName = "vipan";
    let emailId = "singlavipan18@gmail.com";
    let password = "abc123!"
    if (userName === arg1) {
      //user exists 
    }
    else {
      throw ("user doesnot exists")
    }
    if (emailId === arg2) {
      // email id exists 
    }
    else {
      throw ("email id does not exists")
    }
    if (password === arg3) {
      // password matches
    }
    else {
      throw ("password doesnot matches")
    }
    callback(null, arg4);
  }
], function (err, result) {
  // result now equals to 'Task1 and Task2 completed'
  console.log(result);
});

// Or, with named functions:

