
const input = document.querySelector('.country-input');
const button = document.querySelector('.submit');
const form = document.querySelector('form');


 function track(e) {
  e.preventDefault();
  const country = input.value
  axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(res => {
    country === '' ?  alert() : getChart(res.data); 
  })
  .catch(err => window.alert(err));
  
 input.value = ''
}
const getChart = (data) => {
  const ctx = document.querySelector('#myChart').getContext('2d');
  const container = document.querySelector('.data-container');
  container.style.opacity = 1; //showing the chart
   cards(data)  // show supporting details
  if(window.myCharts != undefined)
   window.myCharts.destroy();
   window.myCharts = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Recoveries', 'Deaths' ,'Cases' ,'Active'],
          datasets: [{
              data: [data.recovered,data.deaths ,data.cases ,data.active],
              backgroundColor: [
                  '#ADE194',
                  '#EF5261',
                  '#E5E5E5',
                  '#A6E7F0'
              ],
              
          }],
      },
      options: {
         title: {
           display: true,
            text: `${data.country}`,
            fontSize: 20,
            fontFamily: 'Montserrat',
            fontColor: '#655A5A'
         },
         legend: {
           display: false,
         },
         maintainAspectRatio : false

      }
  });
}
const cards = data => {
  const card = document.querySelector('.card-container');
  card.innerHTML  = `<div style="background-color: #EDF4F7;" class="flex justify-between tests
    p-6 w-full rounded-lg">
  <div>  
  <h2 style="font-family:Montserrat" class="text-md">Test</h2>
  <p class="mt-6">${data.tests}</p>
  </div>
  <img class="sm:hidden lg:block" src="./Svg/Tests.svg">
  </div>
  <div style="background-color:#EDF4F7" class="flex populations
  p-6 w-full rounded-lg justify-between">
  <div>
  <h2 style="font-family:Montserrat" class="text-md">Populations</h2>
  <p class="text-lg mt-6">${data.population}</p>
  </div>
  <img class="sm:hidden lg:block" src="./Svg/populations.svg">
  </div>
  `
}


button.addEventListener('click', track);
