var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bcrypt = require('bcrypt')
var utils=require('./utils')
var session = require('express-session');
var db = require('.././database-mongo/index');
var mongoose=require('mongoose')
var User=mongoose.model('User')
// -------------------------------------------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
// --------------------------------------------------------
app.use(session({
secret:"123456",
resave: false,
saveUninitialized: true
}))



//signup
app.post("/signup",function(req,res){
 var email =req.body.email
 var username = req.body.username
 var name = req.body.name
var password = req.body.password
 //checking for a username,and if it doesn't exist it will create an account
 //and store the hashed password.
 User.findOne({email:email},function(err,user){
   if(!user){
     bcrypt.hash(password,10,function(err,hash){
         var user=new User({
           email:email,
           username:username,
           name:name,
           password:hash
         })
         user.save(function(err,user){
           console.log('Successful signup');
           //createSession will make a new session and store the user object in it.
           utils.createSession(req,res,user,email,email);
         })
     })
 }else{
   console.log('This email is already taken ..!');
    res.status(404).send(err);
 }
 })
});




//login
//let the login with email and password 
app.post("/login",function(req,res){
 var email=req.body.email;
 var password=req.body.password;
 console.log(req.body)
 //searching for user by the username and comparing passwords.
 User.findOne({email:email},function(err,user){
  if(err)
    {res.send(err)}

   else if(!user){
     // console.log('This email does not exist in database !');
     res.status(404).send( "this user does not exist in database please create new user now" )
   }
   else{
   bcrypt.compare(password,user.password,function(err,match){
         if(match){

           utils.createSession(req,res,user);

         }else{
           // console.log('Wrong password .!');
           res.status(404).send(err);
     }
   })}
 })
});


//upload video to amazon s3 to get the urls for videos
app.post('/api/upload', function (req, res, next) {
  const element1 = req.body.element1;
  var busboy = new Busboy({ headers: req.headers });

  console.log('element1');
  console.log(element1);

  busboy.on('finish',function(){
      console.log('upload finished')
  })


  console.log('files')
  console.log(req.files)


  const file=req.files.element2;
  console.log(file)

  let s3bucket=new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,

  });


s3bucket.createBucket(function () {
  var params = {
   Bucket: BUCKET_NAME,
   Key: file.name,
   Body: file.data,
  };

   s3bucket.upload(params, function (err, data) {
   if (err) {
    console.log('error in callback');
    console.log(err);
   }
   console.log('success');
   console.log(data);
  });
});

 req.pipe(busboy);
});


//downlod video from amazon to my local pc  
app.get('/api/upload/get',function(req,res,next){
  
  let s3bucket=new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,

  });

  s3bucket.createBucket(function () {
  var params = {
   Bucket: BUCKET_NAME,
   //to download any video just take the name of it from amazon and put it in key
   Key:video_name,
   
  };
  s3bucket.getObject(params,function(err,data){
    if(err){
      console.log('error in callback')
      console.log(err)
    }
    console.log('success');
    console.log(data);

    res.setHeader('Content-disposition','attachment; filename=planet (1).mp4')
    res.setHeader('Content-length',data.ContentLength);
    res.end(data.Body)
  })


  })
});








var port = 3000
app.listen( port , function() {
console.log('listening on port: ', port);
})
