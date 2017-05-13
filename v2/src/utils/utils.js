import moment from 'moment';

export const formatDate = (dateString, format = "MMMM Do, YYYY") => {
  return moment(dateString).format(format);
};

export const currencyFormatter = new Intl.NumberFormat(
  'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
