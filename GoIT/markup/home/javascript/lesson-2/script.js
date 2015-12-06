var myArr = [];

 for(i = 0; i < 5; i++) {

  myArr[i] = prompt('Insert name ' + i);
}

var name = prompt('Insert login');

for(i = 0; i < myArr.length; i++) {
  
  if (name == myArr[i]){
   
    alert(name+' Loginned nicely');
	
	var isLoginned = true;
	
	break;

	}
	
  else {
	 
    isLoginned = false;
  }
}

if (isLoginned != true) alert('Wrong login');
