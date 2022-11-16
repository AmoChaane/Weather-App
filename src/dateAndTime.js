import fromUnixTime from 'date-fns/fromUnixTime';


function formatDate(unix, offset, dateFormat = 'full') {
    const date = fromUnixTime(unix + offset).toUTCString();
    let dayOfWeek = date.slice(0, 3);
    let dayOfMonth = date.slice(5, 7);
    const month = date.slice(8, 11);
    const year = date.slice(14, 16);
    let suffix;
  
    // change 01 to 1 etc
    if (dayOfMonth < 10) {
      dayOfMonth = dayOfMonth.slice(1);
    }
  
    // generate corect date suffix
    if (dayOfMonth.slice(-1) === '1') {
      suffix = 'st';
    } else if (dayOfMonth.slice(-1) === '2') {
      suffix = 'nd';
    } else if (dayOfMonth.slice(-1) === '3') {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
  
    // those pesky 11, 12, 13 ths
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      suffix = 'th';
    }
  
    // convert short day name to full day name
    if (dayOfWeek === 'Mon') {
      dayOfWeek = 'Monday';
    } else if (dayOfWeek === 'Tue') {
      dayOfWeek = 'Tuesday';
    } else if (dayOfWeek === 'Wed') {
      dayOfWeek = 'Wednesday';
    } else if (dayOfWeek === 'Thu') {
      dayOfWeek = 'Thursday';
    } else if (dayOfWeek === 'Fri') {
      dayOfWeek = 'Friday';
    } else if (dayOfWeek === 'Sat') {
      dayOfWeek = 'Saturday';
    } else if (dayOfWeek === 'Sun') {
      dayOfWeek = 'Sunday';
    }
  
    // return only the day of week
    if (dateFormat === 'day') {
      return dayOfWeek;
    }
  
    // return full date string
    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} '${year}`;
}

function formatTime(unix, offset, timeFormat = 'full') {
  const date = fromUnixTime(unix + offset).toUTCString();
  console.log(`unix: ${unix}, offset: ${offset}`);
  console.log('result from using date-fns function, fromUnixTime(). ', fromUnixTime(unix + offset));
  console.log('date from converting to UTC String: ', date);
  let hour = date.slice(17, 19);
  console.log('hour: ', hour);
  const minute = date.slice(20, 22);
  console.log('minute: ', minute);
  let amOrPm;

  if (hour > 11) {
    amOrPm = 'pm';
  } else {
    amOrPm = 'am';
  }

  // change 24hr to 12hr time
  if (hour > 12) {
    hour -= 12;
  }

  // change am times to 12hr time
  if (hour < 10 && amOrPm === 'am') {
    hour = hour.slice(1, 2);
  }

  // midnight formating
  if (hour === '0') {
    hour = 12;
  }

  // return just the hour
  if (timeFormat === 'hour') {
    return `${hour} ${amOrPm}`;
  }
  return `${hour}:${minute} ${amOrPm}`;
}

export { formatDate, formatTime }


