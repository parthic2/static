// import { on } from '@htmx/htmx';
//
// // Set the API endpoint URL
// const apiUrl = '/api/navbar_search';
//
// on('#myInput', 'change', () => {
//   const searchQuery = document.getElementById('navbar_query').value;
//   htmx.get(apiUrl + `?q=${searchQuery}`, (data) => {
//       const options = data.map((item) => `<option value="${item.value}">${item.text}</option>`).join('');
//     document.getElementById('myDataList').innerHTML = options;
//
//   });
// });
// // Set a timer to fetch new data every 2 seconds
// setInterval(() => {
//   htmx.get(apiUrl, (data) => {
//     const options = data.map((item) => `<option value="${item.value}">${item.text}</option>`).join('');
//     document.getElementById('myDataList').innerHTML = options;
//   });
// }, 2000);
//
