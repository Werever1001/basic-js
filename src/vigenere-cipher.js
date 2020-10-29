const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    if (!message || !key) throw Error('Missing argument');		
		let keyString = key.repeat( Math.ceil( message.length / key.length ) ).toUpperCase(),
				messageString = message.toUpperCase(),
				cipherString = new Array(messageString.length);
		for (let i = 0, j = 0; i < messageString.length; i++, j++) {
			if (messageString.charCodeAt(i) >= 65 
					&& messageString.charCodeAt(i) <= 90) {
			cipherString[i] = String.fromCharCode( ((messageString.charCodeAt(i) + keyString.charCodeAt(j) - 130) % 26) + 65 );
			} else {
				cipherString[i] = messageString[i];
				j--;
			}
		};
    return this.type ? cipherString.join('').toUpperCase() : cipherString.reverse().join('').toUpperCase();
  }    
  decrypt() {
    if (!message || !key) throw Error('Missing argument');
		let keyString = key.repeat( Math.ceil( message.length / key.length ) ).toUpperCase(),
				messageString = message.toUpperCase(),
				cipherString = new Array(messageString.length);
		for (let i = 0, j = 0; i < messageString.length; i++, j++) {
			if (messageString.charCodeAt(i) >= 65 
					&& messageString.charCodeAt(i) <= 90) {
			cipherString[i] = String.fromCharCode( ((messageString.charCodeAt(i) + 26 - keyString.charCodeAt(j)) % 26) + 65 );
			} else {
				cipherString[i] = messageString[i];
				j--;
			}
		};
		return this.type ? cipherString.join('').toUpperCase() : cipherString.reverse().join('').toUpperCase();
  
  }
}

module.exports = VigenereCipheringMachine;
