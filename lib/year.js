'use strict';

const _ = require("../node_modules/lodash");

const zellers = require('../lib/zellers.js');

//const {setUpMonth, setUpWeekDays, seUpDates} = require('../lib/month.js');

let Year = {};

Year.setUpYearTitle = (year) => {
  // Set up the year heading for the calendar
  const thirtySpaces = 29;
  const calHeading = `${' '.repeat(thirtySpaces)}${year}\n`;
  return calHeading;

};

Year.setUpMonthNames = (year, monthLine) => {
  //Set up the month names..3 months across, 4 months down.  Monthline is the number for the first month in each line (1,4,7,10)
  const monthNames = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthTitles = [];
  for (let i = monthLine; i < monthLine + 3; i++) {
      let initialSpaceInTitle = parseInt((20 - monthNames[i].length)/2);
      let endSpaceInTitle = (20 - monthNames[i].length)-initialSpaceInTitle;
      monthTitles[i] = `${' '.repeat(initialSpaceInTitle)}${monthNames[i]}${' '.repeat(endSpaceInTitle)}`;
   }
    const twoSpaces = '  ';
    let x = monthLine;
    const threeMonthTitle = `${monthTitles[x]}${twoSpaces}${monthTitles[x+1]}${twoSpaces}${monthTitles[x+2]}\n`;
    return `${threeMonthTitle}`;
};


Year.setUpWeekDayNames = () => {
  const weekDays = `Su Mo Tu We Th Fr Sa`;
  const twoSpaces= '  ';
  const calWeekDays = `${weekDays}${twoSpaces}${weekDays}${twoSpaces}${weekDays}\n`;
  return calWeekDays;
};

Year.setUpDates = (year, dateLine) => {
  let eachDateLine = [];
  let dateInFirstMonth = [];
  let dateInSecondMonth = [];
  let dateInThirdMonth = [];

  for (let i = dateLine; i < dateLine + 3; i++) {
    let dayNums = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let firstDay = zellers.modDay(parseInt(year),i, 1);  //finds the first day of the month
    const dayCount = new Date(year, i, 0).getDate();  //returns how many days are in the month
  //  console.log('day count ', dayCount);
    dayNums = dayNums.splice(0, dayCount);  // splice out the dates you do not need
   // console.log('day nums: ', dayNums);
    const spacesToStart = ' '.repeat(firstDay * 3);  //set up where first day starts
    let allDatesInMonth = `${spacesToStart}${dayNums.join(' ')}`; //join the dayNums array into a string with spaces between contains all the dates for the month
    allDatesInMonth.length < 180 ? allDatesInMonth += `${' '.repeat(180-allDatesInMonth.length)}` : allDatesInMonth;
    const twoSpaces = '  ';
    eachDateLine[0] = `${allDatesInMonth.substr(0,20)}${twoSpaces}`;
    eachDateLine[1] = `${allDatesInMonth.substr(21,20)}${twoSpaces}`;
    eachDateLine[2] = `${allDatesInMonth.substr(42, 20)}${twoSpaces}`;
    eachDateLine[3] = `${allDatesInMonth.substr(63, 20)}${twoSpaces}`;
    eachDateLine[4] = `${allDatesInMonth.substr(84, 20)}${twoSpaces}`;
    eachDateLine[5] = `${allDatesInMonth.substr(105, 20)}${twoSpaces}`;
    i === dateLine ? dateInFirstMonth = eachDateLine.slice():
    i === (dateLine + 1) ? dateInSecondMonth = eachDateLine.slice():
      dateInThirdMonth = eachDateLine.slice();
  }
  let arrayOfDates = _.zip(dateInFirstMonth, dateInSecondMonth, dateInThirdMonth);
  let threeMonthDates;
 // let stringOfDates;
 // for  (let x = 0; x < 7; x++) {
   // x === 6 ? stringOfDates = `${arrayOfDates[x].join('')}` :
  //   stringOfDates = `${arrayOfDates[x].join('')}` + `\n`;
  //   threeMonthDates += stringOfDates;
//   };

 // let x = 0;

  
  threeMonthDates = `${arrayOfDates[0].join('')}\n${arrayOfDates[1].join('')}\n${arrayOfDates[2].join('')}\n${arrayOfDates[3].join('')}\n${arrayOfDates[4].join('')}\n${arrayOfDates[5].join('')}\n`;
//  `${arrayOfDates[5].join('')}` === `${' '.repeat(184)}` ? threeMonthDates :
//    threeMonthDates += threeMonthDates + `${arrayOfDates[5].join('')}\n`;
  return threeMonthDates;
};

const genHeading = Year.setUpYearTitle;
const genMonthNames = Year.setUpMonthNames;
const genWeekDays = Year.setUpWeekDayNames;
const genDates = Year.setUpDates;

Year.setUpWholeYear = (year) => {
  return `${genHeading(year)}\n${genMonthNames(year,1)}${genWeekDays()}${genDates(year,1)}${genMonthNames(year,4)}${genWeekDays()}${genDates(year,4)}${genMonthNames(year,7)}${genWeekDays()}${genDates(year,7)}${genMonthNames(year,10)}${genWeekDays()}${genDates(year,10)}`;
};


module.exports = Year;
