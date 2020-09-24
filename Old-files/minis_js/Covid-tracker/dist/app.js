
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



button.addEventListener('click', track);
