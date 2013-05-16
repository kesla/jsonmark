var path = require('path')

  , interpreted = require('interpreted')

  , jsonmark = require('../jsonmark')

// run all the parse tests
interpreted({
    source: path.resolve(__dirname, 'markdown')
  , expected: path.resolve(__dirname, 'json')
  , update: false
  , test: function (name, content, callback) {
      callback(null, jsonmark.parse(content))
  }
})

// run all the stringify tests
interpreted({
    source: path.resolve(__dirname, 'json')
  , expected: path.resolve(__dirname, 'markdown')
  , update: false
  , test: function (name, content, callback) {
      callback(null, jsonmark.stringify(JSON.parse(content)))
  }
})