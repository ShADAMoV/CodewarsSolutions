/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/
function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }
  
  let year = 0, day = 0, hour = 0, minute = 0, second = 0;

  if (Math.floor(seconds / (60 * 60 * 24 * 365)) > 0) {
    if (Math.floor(seconds / (60 * 60 * 24 * 365)) > 1) {
      year = `${Math.floor(seconds / (60 * 60 * 24 * 365))} years,`;
      seconds = seconds - 60 * 60 * 24 * 365 * Math.floor(seconds / (60 * 60 * 24 * 365));
    } else {
      year = `${Math.floor(seconds / (60 * 60 * 24 * 365))} year,`;
      seconds = seconds - 60 * 60 * 24 * 365 * Math.floor(seconds / (60 * 60 * 24 * 365));
    }
  }

  if (Math.floor(seconds / (60 * 60 * 24)) > 0) {
    if (Math.floor(seconds / (60 * 60 * 24)) > 1) {
      day = `${Math.floor(seconds / (60 * 60 * 24))} days,`;
      seconds = seconds - 60 * 60 * 24 * Math.floor(seconds / (60 * 60 * 24));
    } else {
      day = `${Math.floor(seconds / (60 * 60 * 24))} day,`;
      seconds = seconds - 60 * 60 * 24 * Math.floor(seconds / (60 * 60 * 24));
    }

  }

  if (Math.floor(seconds / (60 * 60)) > 0) {
    if (Math.floor(seconds / (60 * 60)) > 1) {
      hour = `${Math.floor(seconds / (60 * 60))} hours,`;
      seconds = seconds - 60 * 60 * Math.floor(seconds / (60 * 60));
    } else {
      hour = `${Math.floor(seconds / (60 * 60))} hour,`;
      seconds = seconds - 60 * 60 * Math.floor(seconds / (60 * 60));
    }

  }

  if (Math.floor(seconds / 60) > 0) {
    if (Math.floor(seconds / 60) > 1) {
      minute = `${Math.floor(seconds / 60)} minutes`;
      seconds = seconds - 60 * Math.floor(seconds / 60);
    } else {
      minute = `${Math.floor(seconds / 60)} minute`;
      seconds = seconds - 60 * Math.floor(seconds / 60);
    }
  }

  if (seconds > 1) {
    second = `${seconds} seconds`;
  } else if (seconds === 1) { 
    second = `${seconds} second`; 
  }

  let result = [year, day, hour, minute, second].filter((item) => item ? true : false);
  let resultLength = result.length;
  
  if (resultLength > 1) {
    result.splice(-1, 0, 'and');
  }
  
  result = result.join(' ');

  if (resultLength >= 2 && (second === 0 || minute === 0)) {
    let lastIndexOfDot = result.lastIndexOf(',');
    result = result.slice(0, lastIndexOfDot) + result.slice(lastIndexOfDot + 1)
  }

  if (result[result.length - 1] === ',') {
    return result.slice(0, result.length - 1)
  }
  
  return result;
}
