function daysBetweenDates(date1, date2) {
  const diffTime = Math.abs(new Date(date2) - new Date(date1)); // Find the absolute difference in time
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
}
console.log(daysBetweenDates("2025-1-12","2025-1-22"));