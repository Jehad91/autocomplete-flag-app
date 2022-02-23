// Get Countries From Json File
const countryList = document.getElementById('countryList');
const result = document.querySelector('.result');
const search = document.getElementById('search');

const searchcountry = (searchBox) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const countries = JSON.parse(xhr.responseText);
      // Get Entered Data
      let fits = countries.filter((country) => {
        const regex = new RegExp(`^${searchBox}`, 'gi');
        return country.name.match(regex) || country.abbr.match(regex);
      });
      if (searchBox.length === 0) {
        fits = [];
        countryList.innerHTML = '';
      }
      // eslint-disable-next-line no-use-before-define
      countryInput(fits);
    }
  };
  xhr.open('GET', '../../src/contries.json', true);
  xhr.send();
};
// show results in HTML
const countryInput = (fits) => {
  if (fits.length > 0) {
    const html = fits.map((fit) => `<li class = 'country-name' data-name = '${fit.name}' data-capital = '${fit.capital}'>${fit.name} (${fit.abbr})</li>`).join('');
    countryList.innerHTML = html;
    // eslint-disable-next-line no-use-before-define
    showFlag();
  }
};

const showFlag = () => {
  const allCountriesSearch = document.querySelectorAll('#countryList > li');
  allCountriesSearch.forEach((element) => {
    element.addEventListener('click', (e) => {
      result.innerHTML = '';
      const countryName = document.createElement('h2');
      countryName.appendChild(document.createTextNode(e.srcElement.dataset.name));
      const flagImage = document.createElement('img');
      flagImage.src = `https://countryflagsapi.com/png/${e.srcElement.dataset.name}`;
      const capitalCountry = document.createElement('h2');
      capitalCountry.className = 'capital';
      const span = document.createElement('span');
      span.appendChild(document.createTextNode('Capital: '));
      capitalCountry.appendChild(span);
      capitalCountry.appendChild(document.createTextNode(`${e.srcElement.dataset.capital}`));
      result.append(countryName, flagImage, capitalCountry);
      countryList.style.display = 'none';
      search.value = '';
    });
  });
};

search.addEventListener('input', () => {
  searchcountry(search.value);
  countryList.style.borderColor = '#ccc';
  countryList.style.display = 'block';
});
