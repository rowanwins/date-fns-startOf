A collection of the date-fns [startOf](https://date-fns.org/docs/) functions to mirror moment's [startOf](https://momentjs.com/docs/#/manipulating/start-of/) function.

## Installation
````
    npm install date-fns-start-of --save
````

## Usage
Simply add your date as the first argument, and the startOf type as your second argument and you're done!

dateFnsStartOf(<Date>, <StartOfType> one of 'second' 'minute' 'hour' 'day' 'week' 'ISOweek' month 'year' or 'ISOyear');

````
var dateFnsStartOf = require('date-fns-startOf');

var origDate = new Date('October 13, 2014 11:13:00');
var startMonth = dateFnsStartOf(origDate, 'month');

// startMonth = 'October 1, 2014 12:00:00'
````

## Credits
Built using nothing but the excellent [date-fns](https://date-fns.org) library.