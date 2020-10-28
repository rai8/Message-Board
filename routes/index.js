var express = require('express')
var router = express.Router()
const dateFormat = require('dateformat')
const now = new Date()
let messages = [
  {
    text: 'Hi there',
    user: 'Amando',
    added: dateFormat(now),
  },
  {
    text: 'Hello World',
    user: 'Charles',
    added: dateFormat(now),
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message-Board', messages })
})

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Send Message' })
})

//get data from form to our array
router.post('/new', (req, res) => {
  messages.unshift({
    text: req.body.messageText,
    user: req.body.author,
    added: dateFormat(now),
  })
  res.redirect('/')
})

module.exports = router
