export const filteredTransactions = (transactions, currentFilter) => (
  transactions.filter(obj => {
    switch (currentFilter) {
      case 'all':
        return true;
      case 'categorized':
        return obj.categorized === true;
      case 'uncategorized':
        return obj.categorized === false;
      default:
        return obj.categorized === false;
    }
  })
);
