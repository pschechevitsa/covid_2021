 let button = document.querySelector('.button');
 let input = document.querySelector('.input');
 let column = document.getElementsByClassName('column');
 let howmuch = document.getElementsByClassName('column').length;
 let arr = [];

input.onclick = function(){
	input.value = ''
}

 button.onclick = function(){
 		function myFunction(maxNum, myNum){
  		maxNum = Math.max(...arr);
  		myNum = input.value;
  		return (myNum * 300)/maxNum;
  	}

 		arr.push(input.value);
	  	let div = document.createElement('div');
		div.className = "column"; 
		box.append(div);
		document.getElementsByClassName('column')[howmuch].style.height = myFunction()+'px';
		//document.getElementsByClassName('column')[2].style.height = '20px';
		howmuch++;

		for(let i = 0; i <= howmuch; i++){
 			function myFunction2(maxNum, myNum){
	  		maxNum = Math.max(...arr);
	  		myNum = arr[i];
	  		return (myNum * 300)/maxNum;
	}
			document.getElementsByClassName('column')[i].style.height = myFunction2()+'px';
	}

		
}




  	

