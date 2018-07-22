var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin123',
  database: 'users'
})


/* Post users listing. */
router.post('/', function(req, res, next) {

  var username= req.body.username;
  var password= req.body.password;

    connection.query(
        "SELECT * FROM user WHERE username = ? AND password = ? ",
        [username, password], function(err, row, field){
          if(err){
            console.log(err);
            res.send({'success': false, 'message': 'Could not connect to db'});
          }
          if(row.length > 0){
            res.send({'success': true, 'message': row[0].username});
          }
           else{
            res.send({'success': false, 'message': 'Incorrect Username or Password'});
          }
                  });

});

module.exports = router;
