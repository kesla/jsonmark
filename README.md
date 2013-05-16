# jsonmark

Parse markdown to a very simple json-format that can then be stringified back to markdown

## Installation

```
npm install jsonmark
```

## Example

```javascript
var jsonmark = require('./jsonmark')
  , markdown = '#header\n\nHello, world!'

console.log('this is the json-format:')
console.log(JSON.stringify(jsonmark.parse(markdown), null, '  '))
console.log()
console.log('and it can be parsed back to markdown:')
console.log(jsonmark.stringify(jsonmark.parse(markdown)))
```

### Output
would then print the following to stdout

```
this is the json-format:
{
  "order": [
    "header"
  ],
  "content": {
    "header": {
      "head": "#header",
      "body": "Hello, world!"
    }
  }
}

and it can be parsed back to markdown:
#header

Hello, world!
```

## Licence

Copyright (c) 2013 David Björklund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.