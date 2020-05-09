// new Date()

date = new Date();
// document.write() to display on web page
document.write(date);
console.log(date);
// Sat May 09 2020 22:42:35 GMT+0800 (Philippine Standard Time)

// to display with hr
document.write("<hr>");

// --------------------------------------------------------------------------------------------------

// .toLocaleString()
date6 = new Date();
document.write(date6.toLocaleString());
console.log(date6.toLocaleString());
// 5/9/2020, 11:40:32 PM

document.write("<hr>");

// Options - It is also an optional parameter and
// contains properties that specify comparison options.
option = { hour12: false };
document.write(date6.toLocaleDateString("en-US", option));
console.log(date6.toLocaleDateString("en-US", option));
// 5/9/2020
document.write("<hr>");

// .toLocaleDateString()
date4 = new Date();
document.write(date4.toLocaleDateString());
console.log(date4.toLocaleDateString());
// 5 / 9 / 2020;

document.write("<hr>");

// Options - It is also an optional parameter and
// contains properties that specify comparison options.
options = {
  weekday: "long", //ouptut : Saturday
  //other option for weekday - "short" : Sat
  month: "short",
  day: "numeric",
  year: "numeric",
};
document.write(date4.toLocaleDateString("en-US", options));
console.log(date4.toLocaleDateString("en-US", options));
// Saturday, May 9, 2020

document.write("<hr>");

//NOTE : the good thing is that we can remove any particular field
options = {
  //   weekday: "long", //ouptut : Saturday
  // //other option for weekday - "short" : Sat
  month: "short",
  day: "numeric",
  year: "numeric",
};
document.write(date4.toLocaleDateString("en-US", options));
console.log(date4.toLocaleDateString("en-US", options));
// May 9, 2020
document.write("<hr>");

options = {
  weekday: "long", //ouptut : Saturday
  // //other option for weekday - "short" : Sat
  // month: "short",
  day: "numeric",
  year: "numeric",
};
document.write(date4.toLocaleDateString("en-US", options));
console.log(date4.toLocaleDateString("en-US", options));
// 9 Saturday 2020
document.write("<hr>");

options = {
  weekday: "long", //ouptut : Saturday
  // //other option for weekday - "short" : Sat
  month: "short",
  // day: "numeric",
  year: "numeric",
};
document.write(date4.toLocaleDateString("en-US", options));
console.log(date4.toLocaleDateString("en-US", options));
// May 2020 Saturday
document.write("<hr>");

options = {
  weekday: "long", //ouptut : Saturday
  // //other option for weekday - "short" : Sat
  month: "short",
  day: "numeric",
  // year: "numeric",
};
document.write(date4.toLocaleDateString("en-US", options));
console.log(date4.toLocaleDateString("en-US", options));
// Saturday, May 9

document.write("<hr>");

// .toLocaleTimeString()
date2 = new Date();
document.write(date2.toLocaleTimeString());
console.log(date2.toLocaleTimeString());
// 10:54:11 PM

document.write("<hr>");

// --------------------------------------------------------------------------------------------------

// UTC
utc = new Date();
document.write(utc.toUTCString());
console.log(utc.toUTCString());
// Sat, 09 May 2020 15:02:50 GMT

document.write("<hr>");

// GMT
gmt = new Date();
document.write(gmt.toGMTString());
console.log(gmt.toGMTString());
// Sat, 09 May 2020 15:04:15 GMT

document.write("<hr>");

// --------------------------------------------------------------------------------------------------

// Get Date Methods
date5 = new Date();
// getDate(): It is used to get the day as a number (1-31).
document.write(date5.getDate());
console.log(date5.getDate());
// 9
document.write("<hr>");
// getFullYear(): It is used to get the year.
document.write(date5.getFullYear());
console.log(date5.getFullYear());
// 2020
document.write("<hr>");
// getHours(): It is used to get the hour (0-23).
document.write(date5.getHours());
console.log(date5.getHours());
// 23
document.write("<hr>");
// getMilliseconds(): It is used to get the milliseconds (0-999).
document.write(date5.getMilliseconds());
console.log(date5.getMilliseconds());
// 942
document.write("<hr>");
// getMinutes(): It is used to get the minutes (0-59).
document.write(date5.getMinutes());
console.log(date5.getMinutes());
// 33
document.write("<hr>");
// getMonth(): It is used to get the month (0-11).
document.write(date5.getMonth());
console.log(date5.getMonth());
// 4
document.write("<hr>");
// getSeconds(): It is used to get the seconds (0-59).
document.write(date5.getSeconds());
console.log(date5.getSeconds());
// 8
document.write("<hr>");
// getTime(): It is used to get the time.
document.write(date5.getTime());
console.log(date5.getTime());
// 1589038464085
document.write("<hr>");
// getDay(): It is used to get the weekday as a number (0-6).
document.write(date5.getDay());
console.log(date5.getDay());
// 6
document.write("<hr>");
// getHours(): It is used to get the time.
document.write(date5.getHours());
console.log(date5.getHours());
// 23

document.write("<hr>");

date3 = new Date();
year = date3.getUTCFullYear();
month = date3.getUTCMonth();
day = date3.getUTCDate();
document.write(`${year} - ${month} - ${day}`);
// 2020 - 4 - 9
console.log(year);
console.log(month);
console.log(day);
// 2020
// 4
// 9

document.write("<hr>");

// we also have set methods but will not demo it
// https://www.geeksforgeeks.org/javascript-set-date-methods/?ref=rp

// --------------------------------------------------------------------------------------------------
