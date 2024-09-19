/**
 * The `PasswordGenerator` namespace provides utilities for generating random, secure passwords.
 *
 * Developers can customize the characters used for generating passwords by modifying
 * the properties `lcase`, `ucase`, `numb`, and `symbols`.
 */
namespace PasswordGenerator {
	/**
	 * Lowercase letters used for password generation. Developers can customize this string.
	 * Default: "abcdefghijklmnopqrstuvwxyz".
	 * @type {string}
	 */
	export let lcase: string = "abcdefghijklmnopqrstuvwxyz";
	/**
	 * Uppercase letters used for password generation. Developers can customize this string.
	 * Default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
	 * @type {string}
	 */
	export let ucase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	/**
	 * Numbers used for password generation. Developers can customize this string.
	 * Default: "1234567890".
	 * @type {string}
	 */
	export let numb: string = "1234567890";
	/**
	 * Symbols used for password generation. Developers can customize this string.
	 * Default: "!@#$%?&*".
	 * @type {string}
	 */
	export let symbols: string = "!@#$%?&*";

	/**
	 * Generates a cryptographically secure random number within a specified range.
	 *
	 * @param {number} [min=0] - The minimum value of the range (inclusive).
	 * @param {number} [max=100] - The maximum value of the range (exclusive).
	 * @returns {number} A random number within the specified range.
	 */
	export function randRange(min: number = 0, max: number = 100): number {
		var range = max - min;
		var requestBytes = Math.ceil(Math.log2(range) / 8);
		if (!requestBytes) return min;

		var maxNum = Math.pow(256, requestBytes);
		var ar = new Uint8Array(requestBytes);

		while (true) {
			globalThis.crypto.getRandomValues(ar);
			var val = 0;
			for (var i = 0; i < requestBytes; i++) val = (val << 8) + ar[i];
			if (val < maxNum - (maxNum % range)) return min + (val % range);
		}
	}

	/**
	 * Generates a random password based on specified criteria.
	 *
	 * @param {number} [length=20] - The length of the password.
	 * @param {boolean} [upperCase=true] - Include uppercase letters in the password.
	 * @param {boolean} [numbers=true] - Include numbers in the password.
	 * @param {boolean} [specials=true] - Include special characters in the password.
	 * @returns {string} The generated password.
	 */
	export function generate(length: number = 20, upperCase: boolean = true, numbers: boolean = true, specials: boolean = true): string {
		let password: string[] = [];
		for (let i = 0; i < length; i++) password.push(lcase.charAt(randRange(0, lcase.length)));

		if (upperCase) {
			let ucase_amount = randRange(1, Math.floor(length / 2) + 1);
			for (let i = 0; i < ucase_amount; i++) {
				password[randRange(0, password.length)] = ucase.charAt(randRange(0, ucase.length));
			}
		}

		if (numbers) {
			let numbers_amount = randRange(1, Math.floor(length / 2) + 1);
			for (let i = 0; i < numbers_amount; i++) {
				password[randRange(0, password.length)] = numb.charAt(randRange(0, numb.length));
			}
		}

		if (specials) {
			let specials_amount = randRange(1, 3);
			for (let i = 0; i < specials_amount; i++) {
				password[randRange(0, password.length)] = symbols.charAt(randRange(0, symbols.length));
			}
		}

		return password.join("");
	}
}

export default PasswordGenerator;
