const {getLocation} = require('../helpers/index')
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();


const api = (function api(){
  
  async function getAll(){
    return await track.countries();
  }
  async function getCountry(countryName="Ghana"){
    let country = countryName;
    //TODO Do any check before searching
    // TODO we make user choose from a dropdown this is to assure we 
    try {
      return await track.countries(country)
    } catch (error) {
      
    }
  }

  async function historical(all=true,country=null){
    try {
      if(all){
        return await track.histroical(true)
      }else if(country){
        return await track.histroical(null,country)
      }
    } catch (error) {
      console.log(`An error occured ${error}`);
    }
  }
  return {
    getAll,
    getCountry,
    historical
  }
})()

module.exports = api