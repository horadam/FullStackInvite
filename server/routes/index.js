var express = require('express');
var router = express.Router();

let going = []
let GoingCount = 0

let notGoing =[]
let NotGoingCount = 0

router.post('/going', (req, res, next) => {
  GoingCount++
  going.push({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    img: req.body.img,

  })

  console.log(going)

  res.json({
    "message": "person invited"
  })
})

router.post('/notGoing', (req, res, next) => {
  NotGoingCount++
  notGoing.push({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    img: req.body.img,

  })

  console.log(notGoing)

  res.json({
    "message": "person not invited"
  })
})

router.get('/going', (req, res, next) => {
  res.json(going)
})

router.get('/notGoing', (req, res, next) => {
  res.json(notGoing)
})



module.exports = router;
