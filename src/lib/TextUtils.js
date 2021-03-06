function addPrecedingZero(number) {
  if (Number(number) < 10) {
    return `0${number}`;
  }
  return String(number);
}

export default {
  getDateString(date) {
    if (date && typeof date === 'object') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = addPrecedingZero(date.getDate());
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = addPrecedingZero(date.getHours());
      const minutes = addPrecedingZero(date.getMinutes());
      
      return `${day} ${month} ${year} ${hours}:${minutes}`;
    }

    return '';
  },
};
