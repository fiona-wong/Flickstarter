import moment from 'moment';

export const getDaysRemaining = project => {
  let formattedDate = project.goal_deadline.slice(6) + project.goal_deadline.slice(0, 2) + project.goal_deadline.slice(3, 5);
  let eventDate = moment(formattedDate);
  let todaysDate = moment();
  return eventDate.diff(todaysDate, 'days');
}

export const commafy = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
