const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://jgentes-crime-data-v1.p.rapidapi.com/crime',
  params: {
    startdate: '01/01/2022',
    enddate: '08/15/2022',
    long: '-76.1474244',
    lat: '43.0481221'
  },
  headers: {
    'X-RapidAPI-Key': 'e26d226c81mshd939f36f16c5146p14f120jsn3fa50489b2f6',
    'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});