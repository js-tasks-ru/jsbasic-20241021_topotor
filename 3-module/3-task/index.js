function camelize(str) {
  let arr = str.split('-');
	  for (let i = 1; i < arr.length; i++) {
   		 arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1) 
	  };
	  //let strNew = arr.join('');
	  return arr.join('')
}
