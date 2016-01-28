'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    xit('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    var zellers = require('../lib/zellers.js');
    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
       it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
       it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
       it('returns 2015 for Feb 2015', () => {
        expect(zellers.modifiedYear(2016, 1)).to.equal(2015);
      });
       it('returns 2017 for March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.modDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.modDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.modDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Sunday) for March 1, 2200', () => {
        expect(zellers.modDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.modDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
  describe('the month output', () => {
    const month = require('../lib/month.js');
      it('should handle January', () => {
        expect(month.setUpMonth(2016, 1)).to.equal('    January 2016\n');
      });
  });
  describe('the weekday output', () => {
    const month = require('../lib/month.js');
      it('should print days with spaces', () => {
        expect(month.setUpWeekDays(2016, 1)).to.equal(`Su Mo Tu We Th Fr Sa\n`);
      });
  });
  describe('the dates with 31 days', () => {
    const month = require('../lib/month.js');
     it('should print all the dates in January',() => {
        expect(month.setUpDates(2016, 1, 1)).to.equal(`                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n`);
      });
  });


});
