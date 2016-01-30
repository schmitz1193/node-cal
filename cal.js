#!/usr/bin/env node --harmony_destructuring

'use strict';

const Month = require('./lib/month.js');

//ignore the first two arguments? first two arguments are the month and the year

const [,, ...argv] = process.argv;

//console.log('argv ', argv);
//get the month and year of today
//args.length === 0 ? console.log(setUpWholeMonth(
//

if (argv.length === 0) {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  console.log(Month.setUpWholeMonth(year,month));
  } else if (argv.length === 2) {
    const [month, year] = argv;
//    console.log(Month);
    console.log(Month.setUpWholeMonth(year,month));
     } else if(argv.length === 1) {
    const [year] = argv;
    console.log('generateYear(${year})')
  } else {
    console.log('broke it');
  }
