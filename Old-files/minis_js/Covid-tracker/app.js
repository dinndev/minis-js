const xhr = new XMLHttpRequest();
const input = document.querySelector('.country-input');
const button = document.querySelector('.submit');
const form = document.querySelector('form');


const track = function(e) {
  e.preventDefault();
  xhr.onreadystatechange = function(){
if(this.readyState === 4 && this.status === 200){
  const response = JSON.parse(this.responseText);
  getChart(response);
}
}

// open the api
const country = input.value
 xhr.open('GET' ,`https://disease.sh/v3/covid-19/countries/${country}` , true);
 xhr.send();
 input.value = ''
}
const getChart = (data) => {
  const ctx = document.querySelector('#myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Recoveries', 'Deaths', 'Cases' ,'Active'],
          datasets: [{
              label: 'Covid Data',
              data: [data.recovered,data.deaths, data.cases ,data.active],
              backgroundColor: [
                  '#ADE194',
                  '#EF5261',
                  '#EDF2F7',
                  '#A6E7F0'
              ],
              
          }],
      },
      options: {
         title: {
           display: true,
            text: `${data.country}`,
            fontSize: 20,
         }
      }
  });

}



button.addEventListener('click', track);
