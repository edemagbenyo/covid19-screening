import moment from "moment";
import Chart from "chart.js";

export function getGraphData(rawData) {
  var timeFormat = "MM/DD/YYYY HH:mm";
  function newDate(days) {
    return moment()
      .add(days, "d")
      .format(timeFormat);
  }
  let colors = [
    "rgb(75, 192, 192)",
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)"
  ];

  //final data to return
  let cookedData = {
    labels: [],
    datasets: []
  };

  //set labels for the data
  const thelabels = Object.keys(rawData.cases);
  cookedData.labels = [...thelabels];

  const graphLines = Object.keys(rawData);

  //chart color helpers
  const color = Chart.helpers.color;
  //options and options for dataset
  graphLines.forEach((set, index) => {
    const dataset = {
      label: set,
      backgroundColor: color(colors[index]).alpha(.5).rgbString(),
      borderColor: colors[index],
      data: Object.values(rawData[set])
    };

    cookedData.datasets.push(dataset);
  });
  return cookedData;
}

export function getCountryGraphData(rawData) {
  var timeFormat = "MM/DD/YYYY HH:mm";
  function newDate(days) {
    return moment()
      .add(days, "d")
      .format(timeFormat);
  }
  console.log(rawData);
  let colors = [
    "rgb(0, 123, 255)",
    "rgb(52, 58, 64)",
    "rgb(40, 167, 69)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)"
  ];

  //final data to return
  let cookedData = {
    labels: [],
    datasets: []
  };

  //set labels for the data
  const thelabels = Object.keys(rawData.timeline.cases);
  cookedData.labels = [...thelabels];
  
  const graphLines = Object.keys(rawData.timeline);

  //chart color helpers
  const color = Chart.helpers.color;
  //options and options for dataset
  graphLines.forEach((set, index) => {
    const dataset = {
      label: set,
      backgroundColor: color(colors[index]).alpha(.5).rgbString(),
      borderColor: colors[index],
      data: Object.values(rawData.timeline[set])
    };

    cookedData.datasets.push(dataset);
  });


  return cookedData;
}
