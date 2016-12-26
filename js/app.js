async function getCurrencies() {
  let url = 'https://openexchangerates.org/api/currencies.json'
  fetch(url).then(function(response) {
    return response.json().then(currencies => {
        let html='';
        Object.keys(currencies).forEach(function (key) {
          html += `<li value='${key}'><a href="#">${currencies[key]}</a></li>`;
        });
        document.getElementById("exchange-from").innerHTML = html;
    });
  }).catch(function(error) {
    console.log(error);
  });
}

getCurrencies();