var express = require('express')
var request = require('request')
var $ = require('cheerio')
var errors = require('./errors')
var sources = require('./sources')
var sinks = require('./sinks')

var app = express()

app.use(errors.logErrors)
app.use(errors.errorHandler)
app.get('/info.json', function(req, res){
  $.load('blah')
  request('http://www.b2i.us/profiles/investor/CSummary.asp?BzID=1319&Nav=1&LangID=1&s=0&tPName=Profile', function(err, resp, html){
    if (err) {
      console.error(err)
      res.send(err)
    }
    else {
      data = $.load(html)
      info = data('#b2iProfileQuoteLastPrice').text()
      console.log(info)
      res.send(info)
    }
  })
})

app.listen(3000)
console.log('Listening on port 3000')
