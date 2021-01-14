export const loadTable = selectedTable => {
  const today = JSON.stringify(new Date().toLocaleDateString());
  const storageDate = localStorage.getItem('lastDate');
  if (today === storageDate) {
    return JSON.parse(localStorage.getItem(`${selectedTable}table`));
  }
};
