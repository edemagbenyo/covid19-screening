import api from "../api/index"

const table = document.querySelector('table')

async function all(){
  const all = await api.getAll(); 

  all.forEach(country=>{
    console.log(country)
    const tr = document.createElement("tr")
    const tds = `<td>${country.country}</td><td>${country.cases}</td>`
    tr.innerHTML = tds
    table.append(tr)
  })
}

all()