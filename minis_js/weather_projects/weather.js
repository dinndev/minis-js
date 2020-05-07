class Coordinates {
  constructor(latitude,longitude){
    this.latitude = latitude;
    this.longitude = longitude;
  }
}


const form = document.querySelector('.form-control');
form.addEventListener('submit',e =>{
 e.preventDefault();
 const latitude = document.querySelector('.latitude').value;
 const longitude = document.querySelector('.longitude').value;
  let long;
  let lat;
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector('.temperature-discription');
  let placeTimeZone = document.querySelector('.location-timezone')
  const degreesSection = document.querySelector('.degrees-section');
  const degreesTemp = document.querySelector('.degrees-section span')
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = 'https://secret-ocean-49799.herokuapp.com/'
     const api = `${proxy}https://api.darksky.net/forecast/ef8281640ee7f44398f35ad7cd338cd6/${latitude},${longitude}`;
     fetch(api)
     .then(async response => {
        const data = await response.json();
         const { temperature, summary, icon } = data.currently;
         //set dom to show the discription
         temperatureDegree.innerHTML = temperature;
         temperatureDescription.innerHTML = summary;
         placeTimeZone.innerHTML = data.timezone;
         //  set icons
         setIcons(icon, document.querySelector('.icon'));
        // get celcius 
        const celcius = (temperature - 32) * (5 / 9)
        // add click event to temperature
        degreesSection.addEventListener('click',_=>{
            if(degreesTemp.textContent === 'F'){
                degreesTemp.textContent = 'C'
                temperatureDegree.textContent = Math.floor(celcius)
            }else {
                degreesTemp.textContent = "F"
                temperatureDegree.textContent = temperature
            }
        });

     });
    });
    }
    function setIcons (icon , iconsId){
    const skycons = new Skycons({ color: "black"});
    const currentIcons = icon.replace(/-/g, "_").toUpperCase()
    skycons.play()
    return skycons.set(iconsId ,  Skycons[currentIcons]);
    }
});





