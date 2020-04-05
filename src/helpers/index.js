// export function getLocation(track){
//   if ("geolocation" in navigator) {
//     // check if geolocation is supported/enabled on current browser
//      navigator.geolocation.getCurrentPosition(
//      function success(position) {
//        // for when getting location is a success
//        const latLong =  {lat:position.coords.latitude, long:position.coords.longitude}
//        console.log(latLong);
//      },
//     function error(error_message) {
//       // for when getting location results in an error
//       console.error(`An error has occured while retrieving
//                     location`, error_message)
//     }  
//   );}
//   else {
//     // geolocation is not supported
//     // get your location some other way
//     console.log('geolocation is not enabled on this browser')
//   }
// }

export function numberFormat(number){
  return (Intl.NumberFormat('en-US')).format(number)
}