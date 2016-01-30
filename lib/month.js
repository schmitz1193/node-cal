'use strict';

const zellers = require('../lib/zellers.js');

let month = {};

month.setUpMonth = (year, month ) => {

    //Set up calendar title

//   console.log('Year and month in setUpMonth ', year, month);

    const monthNames = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const calMonth = new Date(year,month).getMonth();  //returns the month number
    const calYear = new Date(year,month).getFullYear();  //returns the year in full
//    console.log('calMonth and calYear ', calMonth, calYear);
    const title = `${monthNames[calMonth]} ${calYear}`;
    const titleSpaces = parseInt((20 - title.length)/2);
    const titleLine = `${' '.repeat(titleSpaces)}${title}\n`;
//    console.log(titleLine);
    return titleLine;
  },

 month.setUpWeekDays = () => {
    //Set up week day titles
     const calWeekDays = `Su Mo Tu We Th Fr Sa\n`;
 //    console.log(calWeekDays);
     return calWeekDays;
  },

 month.setUpDates = (year, month, day) => {

//    console.log('Year month day in setUpDAtes ', year, month, day);

     //Set up start position of the dates based on the weekday the first day of the months occurs
    //Set up day numbers
    const firstDay = zellers.modDay(parseInt(year),parseInt(month), parseInt(day));
//    console.log("setupdates year, month, day, firstday:  ", year, month, day, firstDay);
    let dayNums = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayCount = new Date(year, month, 0).getDate();  //returns how many days are in the month
    dayNums = dayNums.splice(0, dayCount);  // splice out the dates you do not need
    const spacesToStart = ' '.repeat(firstDay * 3);
    const firstDateLine = `${spacesToStart}${dayNums.join(' ')}`;
    const line1 = `${firstDateLine.substr(0,20)}\n`;
    const line2 = `${firstDateLine.substr(21,20)}\n`;
    const line3 = `${firstDateLine.substr(42, 20)}\n`;
    const line4 = `${firstDateLine.substr(63, 20)}\n`;
    const line5 = `${firstDateLine.substr(84, 20)}\n`;
    const line6 = `${firstDateLine.substr(105, 20)}`;

//    console.log("the calendar!! ", line1, line2, line3, line4, line5, line6);
    return `${line1}${line2}${line3}${line4}${line5}${line6}`;
  };

const genMon = month.setUpMonth;
const genWeekDays = month.setUpWeekDays;
const genDates = month.setUpDates;

month.setUpWholeMonth = (year, month) => {
  return `${genMon(year, month)}${genWeekDays()}${genDates(year, month, 1)}`;
};



module.exports = month;

