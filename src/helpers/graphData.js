import moment from "moment";
import Chart from "chart.js";

export default function getGraphData(rawData) {
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

  console.log(rawData);
  //set labels for the data
  const thelabels = Object.keys(rawData.cases);
  cookedData.labels = [...thelabels];

  const graphLines = Object.keys(rawData);

  //chart color helpers
  const color = Chart.helpers.color;
  console.log(color);
  //options and options for dataset
  graphLines.forEach((set, index) => {
    console.log(color(colors[index]).alpha(.5).rgbString());
    const dataset = {
      label: set,
      backgroundColor: color(colors[index]).alpha(.5).rgbString(),
      borderColor: colors[index],
      data: Object.values(rawData[set])
    };

    cookedData.datasets.push(dataset);
  });

  // rawData.forEach(country=>{
  //   console.log(country);
  // });
  console.log(cookedData);
  return cookedData;
}
