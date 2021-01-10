export const fetchRates = selectedTable => {
  const url = `http://api.nbp.pl/api/exchangerates/tables/${selectedTable}?format=json`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const today = new Date().toLocaleDateString();
      const rates = data[0].rates;
      localStorage.setItem(`${selectedTable}table`, JSON.stringify(rates));
      localStorage.setItem('lastDate', JSON.stringify(today));
      console.log('fetch');
      return rates;
    })
    .catch(err => {
      return err;
    });
};
