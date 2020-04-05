import api from "../api/index"
import $ from 'jquery';

const table = document.querySelector('table.countries>tbody')
const titleCountryName = document.querySelector('.country-name')
const pActive = document.querySelector('p.active')
const pDeath = document.querySelector('p.death')
const pRecovered = document.querySelector('p.recovered')
const pTotalCases = document.querySelector('p.total-cases')
const countryDiv = document.querySelector('.country')
async function all(){
  const all = await api.getAll(); 

  // console.log(all[0]);
  all.sort((a,b)=>b.cases-a.cases).forEach((country,index)=>{
    const tr = document.createElement("tr")
    const tds = `
    <td>${index+1}</td>
    <td data-toggle="modal" data-country="${country.country}">${country.country}</td>
    <td>${country.cases}</td>
    <td>${country.deaths}</td>
    <td>${country.recovered}</td>
    `
    tr.innerHTML = tds
    table.append(tr)
    tr.addEventListener('click',async (e)=>{
      const countryname = e.target.dataset['country']
      if(!countryname) return;
      const country = await api.getCountry(countryname);
      console.log(country);
      const img = document.createElement('img');
      img.style.width='50px'
      img.src=country.countryInfo.flag
      titleCountryName.innerText = country.country
      titleCountryName.append(img)
      
      pActive.innerText = country.active
      pDeath.innerText = country.deaths
      pRecovered.innerText = country.recovered
      pTotalCases.innerText = country.cases
      $('.countryDetailsModal').modal({
        show:true
      })
    });
  })

  
  // const div = document.createElement('div')
  // const casesInfo = `<p>
  // <span>Cases:${country.cases}</span>
  // <span>Today's Cases:${country.todayCases}</span>
  // </p>`;
  // const deathInfo = `<p>
  // <span>Death:${country.deaths}</span>
  // <span>Recovered:${country.critical}</span>
  // <span>Recovered:${country.recovered}</span>
  // </p>`;
  // const countryInfo = `<p>name: ${country.country} <img src="${country.countryInfo.flag}"></p>`;

  // countryDiv.innerHTML = countryInfo + casesInfo + deathInfo   
}

all()