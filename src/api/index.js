const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();


const api = (function api(){
  async function getAll(){
    return await track.countries();
  }
  return {
    getAll
  }
})()

module.exports = api