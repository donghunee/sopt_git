var express = require('express');
var router = express.Router();
var users = require("../model/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:name', function(req,res,next) {
  res.render('index', { title: 'Express' });
})

router.post('/add', function(req,res,next) {

  let findConditionLocalUser = {
    gitName: req.body.name
  }

  users.findOne(findConditionLocalUser)
    .exec(function (err, user) {
      if (err) {
        res.status(500).json({
          message: "Internal server error",
          data: null,
        })
      } else if (!user) {
        localSignup(localEmail, localName, localSns, function (err, savedUser) {
          if (err) {
            res.status(500).json({
              message: "Internal server error",
              data: null,
            })
          } else {
            res.json({
              message: "success",
              data: {
                token: "Bearer " + savedUser.jsonWebToken,
              }
            })
          }
        })
      } else if (user) {
        user.count +=1
        res.json({
          message: "success",
          data: {
            token: "Bearer " + user.jsonWebToken,
          }
        })
      }
    })
})

function gitadd(count,score,next) {
  var userModel = new users()
  userModel.count += 1 
  userModel.socre += socre 
  userModel.save(function (err, newUser) {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
        data: null,
      })
    }
    next(err,newUser)
  })
}

module.exports = router;
