import api from "../api/index";
import $ from "jquery";
import { numberFormat, getCountryGraphData } from "../helpers";

const table = document.querySelector("table.countries>tbody");
const titleCountryName = document.querySelector(".country-name");
const pActive = document.querySelector(".active");
const pDeath = document.querySelector(".death");
const pRecovered = document.querySelector(".recovered");
const pTotalCases = document.querySelector(".total-cases");
const countryDiv = document.querySelector(".country");
var ctx = document.getElementById('country');

async function all() {
  const all = await api.getAll();

  let chart=null;

  all
    .sort((a, b) => b.cases - a.cases)
    .forEach((country, index) => {
      //load countries in table
      const tr = document.createElement("tr");
      const tds = `
    <td>${index + 1}</td>
    <td data-toggle="modal" data-country="${country.country}">${
        country.country
      }</td>
    <td>${country.cases}</td>
    <td>${country.deaths}</td>
    <td>${country.recovered}</td>
    `;
      tr.innerHTML = tds;
      table.append(tr);

      // Load data in modal
      tr.addEventListener("click", async (e) => {
        // TODO show modal first and add a spinning image
        const countryname = e.target.dataset["country"];
        if (!countryname) return;
        const country = await api.getCountry(countryname);
        //flag image

        console.log(country);
        const img = document.createElement("img");
        img.style.width = "50px";
        img.src = country.countryInfo.flag;
        titleCountryName.innerText = country.country;
        titleCountryName.append(img);

        pActive.innerText = numberFormat(country.active);
        pDeath.innerText = numberFormat(country.deaths);
        pRecovered.innerText = numberFormat(country.recovered);
        pTotalCases.innerText = numberFormat(country.cases);
        $(".countryDetailsModal").modal({
          show: true,
        });

        //Display periodic graph
        //Get the historical raw data
        const history = await api.historical(false,country.country);
        //transform the data for graphjs to understand
        let graphData = getCountryGraphData(history);
        
        if(chart){
            addData(chart,country.country,graphData.datasets)
        }else{
          chart = new Chart(ctx, {
            type: "line",
            data: graphData,
            options: {},
          });
        }
      });
    });
}

function addData(chart, label, data) {
  chart.data.datasets=data
  chart.update();
}

all();
