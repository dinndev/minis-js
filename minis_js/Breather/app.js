const container = document.querySelector('.container');

const text = document.querySelector('#text');

const totalTime = 7500 ;
const breatheTime = (totalTime / 5) * 2 ;
const holdTime = (totalTime / 5);

breathAnimation()
function breathAnimation(){
  text.innerText = 'Breath in!'
  container.className = "container grow"
   setTimeout(_=> {
       text.innerText = 'Hold'
       setTimeout( _=> {
           container.className = "container shrink"
         text.innerText = 'Breath out'
       },holdTime)
   },breatheTime)
}



setInterval(breathAnimation , totalTime);