var IS_HEADER = /^#/
  , HEADER_STRING = /^#+\s*(.+)\s*$/

module.exports = {
    _getHeader: function(row) {
      return row.match(HEADER_STRING)[1]
    }
  , _parseContent: function(rows) {
      var headerObj
        , content = {}
        , self = this
        , stringifyBody = function(bodyObj) {
            // trim to remove especially any beginning/end newlines
            return bodyObj.join('\n').trim()
          }

      rows.forEach(function(row) {
        if (IS_HEADER.test(row)) {
          // finish the previous headerObj
          if (headerObj)
            headerObj.body = stringifyBody(headerObj.body)

          // create the new headerObj
          headerObj = {
              head: row
            , body: []
          }

          // and add it to the content-object
          content[self._getHeader(row)] = headerObj
        } else {
          headerObj.body.push(row)
        }
      })

      // and finish the last headerObj
      headerObj.body = stringifyBody(headerObj.body)

      return content
    }
  , _parseOrder: function(rows) {
      var self = this

      return rows
        .filter(function(row) {
          return row[0] === '#'
        })
        .map(function(row) {
          return self._getHeader(row)
        })
    }
  , parse: function(markdown) {
      var rows = markdown.split('\n')
      return {
            order: this._parseOrder(rows)
          , content: this._parseContent(rows)
        }
    }
  , stringify: function(json) {
      var order = json.order
        , content = json.content

      return order.map(function(key) {
        var str = content[key].head

        if (content[key].body.length > 0)
          str = str + '\n\n' + content[key].body

        return str
      }).join('\n\n')
    }
}