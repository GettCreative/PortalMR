var mongoose = require('mongoose');
mongoose.connect('mongodb://root:abc123@ds141720.mlab.com:41720/portal');
// mongoose.connect('mongodb://${user}:${pass}@${uri}/${db}?authMechanism=MONGODB-CR')
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  email: String,
  password: String,
  name:String,
  username:String
});

var User = mongoose.model('User', userSchema);

var save=function(data,callback){
  var user = new User(data)
  user.save(function(err,dataRes) {
    if(err){
      callback(err,null)
    }
    callback(null,dataRes)
  })
}

module.exports.save = save;
module.exports.User = User
