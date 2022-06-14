const getWeekDay = function (date) {
  let newDate = new Date(date);
  let days = [
    'Saturday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];

  return days[newDate.getDay()];
}

export default getWeekDay;