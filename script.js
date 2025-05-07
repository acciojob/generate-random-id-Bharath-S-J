function makeid(l) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

	
  for (let i = 0; i < l; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
  // write your code here
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
