'use strict';

const VERSION = '1.0.0';
const MINUTE = 60;
const HOUR = 3600;
const DAY = 86400;
const WEEK = 604800;
const MONTH = 2629800;
const YEAR = String(new Date().getYear()).substr(1);
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHSL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const LONG = {
    NOW: "just now",
    MIN: " minute ago",
    MINS: " minutes ago",
    HOUR: " hour ago",
    HOURS: " hours ago",
    DAY: "yesterday",
    DAYS: " days ago",
    WEEK: ' week ago',
    WEEKS: ' weeks ago'
};
const MID = {
      NOW: "now",
      MIN: "min",
      MINS: "mins",
      HOUR: "hr",
      HOURS: "hrs",
      DAY: "dy",
      DAYS: "dys",
      WEEK: 'wk',
      WEEKS: 'wks'
};
const SHORT = {
      NOW: "n",
      MIN: "m",
      MINS: "m",
      HOUR: "h",
      HOURS: "h",
      DAY: "d",
      DAYS: "d",
      WEEK: 'w',
      WEEKS: 'w'
};

class TimeLapsed{
    static get version(){
        return VERSION;
    }

    static fromTimestamp(seconds, notation=undefined, unsafe=true){
        if (isNaN(seconds) && unsafe) {
            throw new Error("Bad timestamp");
        }else if(isNaN(seconds) && !unsafe){
            return 'N/A';
        }

        let secondsLapsed = (Date.now() - Number(seconds)) / 1000;
        return this.deductSeconds(secondsLapsed, 'timestampStr', seconds, notation);
    }
    
    static fromDateString(dateStr, notation=undefined, unsafe=true){
        if (isNaN(Date.parse(String(dateStr))) && unsafe) {
            throw new Error("Bad datestring");
        }else if (isNaN(Date.parse(String(dateStr))) && !unsafe){
            return 'N/A';
        }

        let secondsLapsed = (Date.now() - Date.parse(String(dateStr))) / 1000;
        return this.deductSeconds(secondsLapsed, 'dateStrStr', dateStr, notation);
    }
    
    static parsedateStr(rawObj, type, notation){
        let thedateStr = undefined
        if (type === 'dateStrStr') {
            thedateStr = new Date(String(rawObj));
        }else if (type === 'timestampStr') {
            thedateStr = new Date(Number(rawObj));
        }else{
            throw new Error("Unknown datetime format!");
        }

        let theDate = thedateStr.getDate();
        let timestrings = undefined;
        let monthStr = undefined;
        if (notation === 'twitter' || notation === 'mid') {
            monthStr = MONTHS;
        }else if (notation === 'lng' || notation === undefined || notation === null){
            monthStr = MONTHSL;
        }else{
            throw new Error("Unknown notation format!");
        }

        let theMonth = monthStr[thedateStr.getMonth()];
        let theYear = String(thedateStr.getYear()).substr(1);
        if (theYear < YEAR)
            return theDate + ' ' + theMonth + ' ' + theYear;
        else{
            if (theDate < 10)
                return '0' + theDate + ' ' + theMonth;
            else
                return theDate + ' ' + theMonth;
        }
    }

    static floorTimeCalc(timeCalced){
        return Math.floor(timeCalced);
    }

    static deductSeconds(secondsLapsed, type, rawObj, notation){
        let timestrings = undefined;
        if (notation === 'twitter') {
            timestrings = SHORT;
        }else if (notation === 'mid'){
            timestrings = MID;
        }else if (notation === 'lng' || notation === undefined || notation === null){
            timestrings = LONG;
        }else{
            throw new Error("Unknown notation format!");
        }
        
        let postTime = undefined;
        if (secondsLapsed < MINUTE) {
            postTime = timestrings.NOW;
        }else if (secondsLapsed >= MINUTE && secondsLapsed < HOUR) {
            postTime = secondsLapsed / MINUTE;
            postTime = this.floorTimeCalc(postTime);
            if (postTime === 1) {
                postTime += timestrings.MIN;
            }else{
                postTime += timestrings.MINS;
            }
        }else if (secondsLapsed >= HOUR && secondsLapsed < DAY) {
            postTime = secondsLapsed / HOUR;
            postTime = this.floorTimeCalc(postTime);
            if (postTime === 1) {
                postTime += timestrings.HOUR;
            }else{
                postTime += timestrings.HOURS;
            }
        }else if (secondsLapsed >= DAY && secondsLapsed < WEEK) {
            postTime = secondsLapsed / DAY;
            postTime = this.floorTimeCalc(postTime);
            if (postTime === 1) {
                if (timestrings === LONG)
                    postTime = timestrings.DAY;
                else
                    postTime += timestrings.DAY;
            }else{
                postTime += timestrings.DAYS;
            }
        }else if (secondsLapsed >= WEEK && secondsLapsed < MONTH) {
            postTime = secondsLapsed / WEEK;
            postTime = this.floorTimeCalc(postTime);
            if (postTime === 1) {
                if (timestrings === LONG)
                    postTime += timestrings.WEEK;
                else
                    postTime += timestrings.WEEK;
            }else{
                postTime += timestrings.WEEKS;
            }
        }else{
            if (type === 'dateStrStr') {
                postTime = this.parsedateStr(rawObj, type='dateStrStr', notation);
            }else if (type === 'timestampStr') {
                postTime = this.parsedateStr(rawObj, type='timestampStr', notation);
            }
        }
        return postTime;
    }
}

module.exports = TimeLapsed;