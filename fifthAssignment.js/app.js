var app = require('express')();
var async = require('async');
var bodyParser = require('body-parser');
var json = bodyParser.json();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(json);
app.get('/promise/:msg',(req,res)=>{
    var message = req.params.msg;
    promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            message += "my";
            resolve(message);
        }, 2000)
    })
    
    promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            message += " first";
            resolve(message);
        }, 2000)
    })
    
    promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            message += " promise";
            //return reject("error")
            resolve(message);
        }, 2000)
    })
    var abcd=  Promise.all([promise1, promise2, promise3]).then((result)=>{res.send(result)}).catch((abc)=>console.log(abc));
    
});

app.post('/asyncWaterFall',(req,res)=>{
    console.log(req.body);
    async.waterfall([
        function (callback) {
          //user login 
          var user = {
            userName: req.body.userName,
            emailId: req.body.emailId,
            password: req.body.password,
            phoneNo: req.body.phoneNo
          }
          console.log(user);
          callback(null, user.userName, user.emailId, user.password, user.phoneNo);
          console.log("hello 1");
          res.send("user is valid");
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
            throw ("user name not matched, user doesnot exists")
          }
          if (emailId === arg2) {
            // email id exists 
          }
          else {
            throw ("email id not matched, email id does not exists")
          }
          if (password === arg3) {
            // password matches
          }
          else {
            throw ("password didnt matched, password doesnot matches")
          }
          callback(null);
        }
      ], function (err) {
        // result now equals to 'Task1 and Task2 completed'
        
        console.log("error");
      });
});
app.get('/asyncAuto',(req,res)=>{
    async.auto({
        get_data: function(callback) {
            console.log('in get_data');
            // async code to get some data
            callback(null, 'in get_data');
        },
        make_folder: function(callback,results) {
            console.log('in make_folder');
            console.log(results);
            // async code to create a directory to store a file in
            // this is run at the same time as getting the data
            callback(null, 'in make folder');
        },
        write_file: ['get_data', 'make_folder', function(callback, results) {
            console.log('in write_file');
            // once there is some data and the directory exists,
            // write the data to a file in the directory
            callback(null, 'in write file');
        }],
        email_link: ['write_file', function(callback, results) {
            console.log('in email_link');
            // once the file is written let's email a link to it...
            // results.write_file contains the filename returned by write_file.
            callback(null, {'file':results.write_file, 'email':'user@example.com'});
        }]
    }, function(err, results) {
        console.log('err = ', err);
        console.log('results = ', results);
        res.send(results);
    });
})
app.get('/asyncAwait',(req,res)=>{
    function resolveAfter2Seconds() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("hello");
                resolve("promise returned");
              }, 2000);
              
        })
    }   
    async function asyncCall() {
      console.log('calling');
      var result = await resolveAfter2Seconds();
      console.log("called");
      console.log(result);
      res.send(result);
    }
    
    asyncCall();
    
})
app.get('/gen',(req,res)=>{
    function* Add(x) {
        yield x+1;
        let y = 6;
        yield abc(y);
        return x ;
     }
     var abc =  function abc(c){
         return new Promise((resolve,reject)=>{ 
            resolve(c+10);
        })
     }
     var gen = Add(5);
     var arr = [];
     arr.push(gen.next());
     
     arr.push(gen.next()); 
     arr.push(gen.next());
     console.log(arr);
     res.send("gen tested");
});
app.listen(3000);
