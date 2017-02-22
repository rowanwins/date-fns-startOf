import startOfSecond from 'date-fns/start_of_second'
import startOfMinute from 'date-fns/start_of_minute'
import startOfHour from 'date-fns/start_of_hour'
import startOfDay from 'date-fns/start_of_day'
import startOfWeek from 'date-fns/start_of_week'
import startOfISOWeek from 'date-fns/start_of_iso_week'
import startOfMonth from 'date-fns/start_of_month'
import startOfYear from 'date-fns/start_of_year'
import startOfISOYear from 'date-fns/start_of_iso_year'
import parse from 'date-fns/parse'

module.exports = function (date, unit, options) {
  var outDate = parse(date)
  if (unit === 'second') {
    return startOfSecond(outDate)
  }
  if (unit === 'minute') {
    return startOfMinute(outDate)
  }
  if (unit === 'hour') {
    return startOfHour(outDate)
  }
  if (unit === 'day') {
    return startOfDay(outDate)
  }
  if (unit === 'week') {
    return startOfWeek(outDate)
  }
  if (unit === 'ISOWeek') {
    return startOfISOWeek(outDate)
  }
  if (unit === 'month') {
    return startOfMonth(outDate)
  }
  if (unit === 'year') {
    return startOfYear(outDate)
  }
  if (unit === 'ISOYear') {
    return startOfISOYear(outDate)
  }
}
