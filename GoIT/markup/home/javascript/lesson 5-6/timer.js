var button = document.querySelector('input');
var msecond = document.querySelector('.msecond');
var second = document.querySelector('.seconds');
var minute = document.querySelector('.minutes');
var hour = document.querySelector('.houres');

function mSeconds(){
  if (msecond.innerText < 999) {
   
    msecond.innerText = +msecond.innerText + 4; }
  
  else {
  
    msecond.innerText = 0;
  
    }
    }

function Seconds(){  
  
  if(second.innerText != 59) {
  	
  	second.innerText++;  }
  	
  	else {
  		
  		second.innerText = 00;
  	} 
}    
function Minutes(){  
 
  if(minute.innerText != 59) {
 
  	minute.innerText++;  }
 
  	else {
 
  		minute.innerText = 00;
  	} 
}    


  var mSecInterval = 0;
  var SecInterval = 0;
  var MinInterval = 0;

function handler() { 

  if (button.value == 'Start') {
    
    mSecInterval = setInterval(mSeconds, 1);
    SecInterval = setInterval(Seconds, 1000);
    MinInterval = setInterval(Minutes, 60000);
    
    button.value = 'Pause';
    button.style = 'background-color: red';
								
								} 
  else {

	clearInterval(mSecInterval);
	clearInterval(SecInterval);
	clearInterval(MinInterval);
	
	console.log('azazaz');
	
	button.value = 'Start';
	button.style = 'background-color: rgb(80, 200, 200)';
		}
}

button.addEventListener('click', handler);

   
    

