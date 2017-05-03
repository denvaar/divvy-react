import moment from 'moment';

export const formatDate = (dateString, format = "MMMM Do, YYYY") => {
  return moment(dateString).format(format);
};
