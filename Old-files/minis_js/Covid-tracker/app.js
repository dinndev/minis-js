const xhr = new XMLHttpRequest();
const input = document.querySelector('.country-input');
const button = document.querySelector('.submit');
const form = document.querySelector('form');

const track = _ => {
xhr.onreadystatechange = function(){
  console.log(this)
}
xhr.open('GET' ,`https://disease.sh/v3/covid-19/countries/${country}` ,true);
xhr.send();
}

form.addEventListener('submit',track())
console.log(xhr.onload)

