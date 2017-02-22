var test = require('tape')
var dateFnsStartOf = require('../src/index.js')

var origDate = new Date('October 13, 2014 11:13:00')

test('dateFnsStartOf test', function (t) {
  var startMonth = dateFnsStartOf(origDate, 'month')
  t.equal(origDate.toLocaleString(), new Date('October 13, 2014 11:13:00').toLocaleString())
  t.equal(startMonth.toString(), new Date('2014-09-30T14:00:00.000Z').toString())
  t.end()
})

