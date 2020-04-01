import Chart from 'chart.js';
import api from "../api/index"
import getGraphData from "../helpers/graphData"
var ctx = document.getElementById('myChart');

(async function(){

  //Get the historical raw data
  const history = await api.historical();
  
  //transform the data for graphjs to understand
  const graphData = getGraphData(history)


  var myChart = new Chart(ctx, {
    type: 'line',
    data: graphData,
    options: {
        
    }
  });
})()