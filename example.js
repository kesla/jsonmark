var jsonmark = require('./jsonmark')
  , markdown = '#header\n\nHello, world!'

console.log('this is the json-format:')
console.log(JSON.stringify(jsonmark.parse(markdown), null, '  '))
console.log()
console.log('and it can be parsed back to markdown:')
console.log(jsonmark.stringify(jsonmark.parse(markdown)))