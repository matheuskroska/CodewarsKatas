function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  let days = Math.floor(hours / 24);
  hours %= 24;
  let years = Math.floor(days / 365);
  days %= 365;

  let time = [];
  if (years > 0) time.push(years + (years === 1 ? " year" : " years"));
  if (days > 0) time.push(days + (days === 1 ? " day" : " days"));
  if (hours > 0) time.push(hours + (hours === 1 ? " hour" : " hours"));
  if (minutes > 0)
    time.push(minutes + (minutes === 1 ? " minute" : " minutes"));
  if (seconds > 0)
    time.push(seconds + (seconds === 1 ? " second" : " seconds"));

  if (time.length === 1) return time[0];

  let last = time.pop();
  return time.join(", ") + " and " + last;
}
