var num = prompt('Insert number', num);
var degree = prompt('Inesert degree', degree);

pow(num, degree);

function pow(num, degree) {  

  var degreeAbs = Math.abs(degree);
  var result = 1;
  
  for(i = 0; i < degreeAbs; i++) {
    	
    result = result*num; } 

	if (degree >= 0) {
      
      console.log(result); 
     
      alert('Result = '+ result);

    } else {
    	
    	console.log(1/result);

    	alert('Result = ' + 1/result); }
  }	