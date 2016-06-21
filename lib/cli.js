

'use strict';

const Month = require('../lib/month.js');
const Year = require('../lib/year.js');

//ignore the first two arguments? first two arguments are the month and the year

const [,, ...argv] = process.argv;


let invalidMonthMsg = 'Month must be between 1 and 12';
let invalidYearMsg = 'Year must be between 1752 and 9999';

//get the month and year of today
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const argvOne = parseInt(argv[0]);
const argvTwo = parseInt(argv[1]);


//handle argument variables
//if there is one arg, check for year, if two check for year and month


argv.length === 0 ? console.log(Month.setUpWholeMonth(year, month)) :
argv.length === 1 && (argvOne < 1753 || argvOne > 9999) ? console.log(invalidYearMsg) :
argv.length === 1 ? console.log(Year.setUpWholeYear(argvOne)) :
argv.length === 2 && argvOne > 0 && argvOne <= 12 && argvTwo > 1752 && argvTwo < 10000 ? console.log(Month.setUpWholeMonth(argvTwo, argvOne)):
argv.length === 2 && (argvOne < 0 || argvOne > 12) ? console.log(invalidMonthMsg) :
argv.length === 2 && (argvTwo < 1753 || argvTwo > 9999) ? console.log(invalidYearMsg):
  console.log('invalid input, please retry');



