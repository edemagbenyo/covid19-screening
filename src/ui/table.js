import api from "../api/index"


const table = document.querySelector('table')
const countryDiv = document.querySelector('.country')
async function all(){
  const all = await api.getAll(); 

  // console.log(all[0]);
  all.forEach(country=>{
    const tr = document.createElement("tr")
    const tds = `<td>${country.country}</td><td>${country.cases}</td><td>${country.deaths}</td><td>${country.recovered}</td>`
    tr.innerHTML = tds
    table.append(tr)
  })

  const country = await api.getCountry();
const div = document.createElement('div')
  const casesInfo = `<p>
  <span>Cases:${country.cases}</span>
  <span>Today's Cases:${country.todayCases}</span>
  </p>`;
  const deathInfo = `<p>
  <span>Death:${country.deaths}</span>
  <span>Recovered:${country.critical}</span>
  <span>Recovered:${country.recovered}</span>
  </p>`;
  const countryInfo = `<p>name: ${country.country} <img src="${country.countryInfo.flag}"></p>`;
  // div.append(countryInfo);
  // console.log(div);
  countryDiv.innerHTML = countryInfo + casesInfo + deathInfo 


  
}

all()