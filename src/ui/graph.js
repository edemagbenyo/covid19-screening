import Chart from 'chart.js';
import api from "../api/index"
import {getGraphData} from "../helpers/index"
var ctx = document.getElementById('global');

(async function(){

  //Get the historical raw data
  const history = await api.historical();
  
  //transform the data for graphjs to understand
  const graphData = getGraphData(history)

  let aspectRatio = 1;
  const windowWidth = window.screen.width;
  if (windowWidth > 450 && windowWidth <= 700) {
    aspectRatio = 2;
  } else if (windowWidth > 700 && windowWidth <= 1000) {
    aspectRatio = 3;
  } else if (windowWidth > 1000) {
    aspectRatio = 4;
  }

  var myChart = new Chart(ctx, {
    type: 'line',
    data: graphData,
    options: {
        maintainAspectRatio:true,
        aspectRatio
    }
  });
})()