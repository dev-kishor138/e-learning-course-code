// Search Function
const searchButton = () => {
  const searchInput = document.getElementById("searchInput");
  const searchText = searchInput.value;
  searchInput.value = "";
  const allCountry = document.querySelector(".all-country");
  allCountry.textContent = "";
  const countryDetails = document.querySelector(".country-details");
  countryDetails.textContent = "";
  const url = `https://restcountries.com/v3.1/name/${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((countries) => {
      // console.log(countries);
      const searchContainer = document.querySelector(".search-result");
      searchContainer.textContent = "";
      countries.forEach((country) => {
        // console.log(country);
        const div = document.createElement("div");
        div.classList = "col-md-3";
        div.innerHTML = `
                <div class="card my-3 bg-dark text-white" style="width: 18rem;">
                    <img src="${country.flags.png}" height="150px" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <a href="#" onclick="getDetails('${country.name.common}')" class="btn btn-primary">More Details</a>
                    </div>
                </div>
            `;
        searchContainer.appendChild(div);
      });
    });
};

// get all Data to data
const getData = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((countries) => {
      const container = document.querySelector(".all-country");
      container.textContent = "";
      countries.forEach((country) => {
        // console.log(country);
        const div = document.createElement("div");
        div.classList = "col-md-3";
        div.innerHTML = `
            <div class="card my-3 bg-dark text-white" style="width: 18rem;">
                <img src="${country.flags.png}" height="150px" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${country.name.common}</h5>
                  <a href="#" onclick="getDetails('${country.name.common}')" class="btn btn-primary m-auto">More Detals</a>
                </div>
              </div>
            `;
        container.appendChild(div);
      });
    });
};
getData();

// const displayData = countries => {
//     // console.log(countries);
//     const container = document.querySelector('.all-country');
//     container.textContent = '';
//     countries.forEach(country => {
//         // console.log(country);
//         const div = document.createElement('div');
//         div.classList = 'col-md-3'
//         div.innerHTML = `
//         <div class="card my-3 bg-dark text-white" style="width: 18rem;">
//             <img src="${country.flags.png}" height="150px" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${country.name.common}</h5>
//               <a href="#" onclick="getDetails('${country.name.common}')" class="btn btn-primary">More Detals</a>
//             </div>
//           </div>
//         `;
//         container.appendChild(div);
//     })
// }

// Country Details
const getDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};

const displayDetails = (countries) => {
  // console.log(countries);
  const details = document.querySelector(".details");
  // details.textContent = '';
  countries.forEach((country) => {
    // console.log(country);
    // const div = document.createElement('div');
    // div.classList = 'w-25 m-auto my-5';
    const div = document.querySelector(".country-details");
    div.innerHTML = `
            <div class="card bg-dark text-white">
            <img src="${
              country.flags.png
            }" height="250px" class="card-img-top" alt="...">
            <h3 class="text-center my-3">${country.name.common}</h3>
            <div class="card-body">
                <h5 class="card-title">Capital: ${country.capital}</h5>
                <p class="card-text">Area: ${country.area}</p>
                <p class="card-text">Continents: ${country.continents}</p>
                <p class="card-text">Population: ${country.population}</p>
                <p>Language: ${Object.values(country.languages)}</p>
                <p>Curency: ${
                  country.currencies[Object.keys(country.currencies)].name
                }</p>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Sub Region: ${country.subregion}</p>
                <p class="card-text">Timezone: ${country.timezones[0]}</p>
            </div>
            </div>
            `;
    details.appendChild(div);
  });
};
