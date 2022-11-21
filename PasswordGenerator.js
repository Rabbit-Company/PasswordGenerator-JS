/*
PasswordGenerator-JS v1.0.0
https://github.com/Rabbit-Company/PasswordGenerator-JS
License: GPL-3.0
*/

class PasswordGenerator{

	static lcase = "abcdefghijklmnopqrstuvwxyz";
	static ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	static numb = "1234567890";
	static symbols = "!@#$%?&*";

	static randRange(min, max) {
		var range = max - min;
		var requestBytes = Math.ceil(Math.log2(range) / 8);
		if (!requestBytes) return min;
	
		var maxNum = Math.pow(256, requestBytes);
		var ar = new Uint8Array(requestBytes);
	
		while (true) {
			window.crypto.getRandomValues(ar);
			var val = 0;
			for (var i = 0;i < requestBytes;i++) val = (val << 8) + ar[i];
			if (val < maxNum - maxNum % range) return min + (val % range);
		}
	}

	static generate(length = 10, upperCase = true, numbers = true, specials = true){
		let password = "";
		for (let i = 0; i < length; i++) password += this.lcase.charAt(this.randRange(0, this.lcase.length));
		password = password.split("");

		if(upperCase){
			let ucase_amount = this.randRange(1, Math.floor(length / 2) + 1);
			for (let i = 0; i < ucase_amount; i++) {
				password[this.randRange(0, password.length)] = this.ucase.charAt(this.randRange(0, this.ucase.length));
			}
		}

		if (numbers) {
			let numbers_amount = this.randRange(1, Math.floor(length / 2) + 1);
			for (let i = 0; i < numbers_amount; i++) {
				password[this.randRange(0, password.length)] = this.numb.charAt(this.randRange(0, this.numb.length));
			}
		}

		if (specials) {
			let specials_amount = this.randRange(1, 3);
			for (let i = 0; i < specials_amount; i++) {
				password[this.randRange(0, password.length)] = this.symbols.charAt(this.randRange(0, this.symbols.length));
			}
		}

		password = password.join("");
		return password;
	}
}