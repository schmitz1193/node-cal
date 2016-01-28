'use strict';



//module.exports = {
//  modifiedMonth: function(month) {
//    var returnMonth = 0;
//remove next line and just start with the if statement


function modifiedMonth (month) {
  let returnMonth;
  if (month<3) {
    returnMonth = month + 12;
  } else {
      returnMonth = month;
    };
  return returnMonth;
};


function modifiedYear (year, month) {
  let returnYear;
  if (month<3) {
    returnYear = year - 1;
  } else {
      returnYear = year;
    };
  return returnYear;
};


function modDay (year, month, day) {

  const returnMonth = modifiedMonth(month);
  const returnYear = modifiedYear(year, month);
  const weekDay = (day + parseInt(((returnMonth + 1) * 26) / 10) + returnYear + parseInt(returnYear / 4) + 6 * parseInt(returnYear / 100) + parseInt(returnYear / 400) - 1) % 7;
  return weekDay;
};

module.exports = {modifiedMonth: modifiedMonth,
                  modifiedYear: modifiedYear,
                  modDay: modDay};



// h = (q + floor((13*(m+1)/5)) + K + floor(K/4) + floor(J/4) + 5J)
// // translate variable names in to algorithm components.

    // q is the day of month.
    // final int q = day;
    // m is the month, but Jan and Feb need to be month 13 and 14
    // respectively
    // final int m = month + (month < 3 ? 12 : 0);
    // if the month is jan, or feb, then year is of the previous year.
    // final int calcyear = year - (month < 3 ? 1 : 0);
    // K is the year-in-century
    // final int K = calcyear % 100;
    // J is the century number
    // final int J = calcyear / 100;

