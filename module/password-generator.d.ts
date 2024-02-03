export default class PasswordGenerator {
	/**
	 * Lowercase letters used for password generation. Developers can customize this string.
	 * Default: "abcdefghijklmnopqrstuvwxyz".
	 * @type {string}
	*/
	static lcase: string;
	/**
	 * Uppercase letters used for password generation. Developers can customize this string.
	 * Default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
	 * @type {string}
	*/
	static ucase: string;
	/**
	 * Numbers used for password generation. Developers can customize this string.
	 * Default: "1234567890".
	 * @type {string}
	*/
	static numb: string;
	/**
	 * Symbols used for password generation. Developers can customize this string.
	 * Default: "!@#$%?&*".
	 * @type {string}
	*/
	static symbols: string;
	/**
	 * Generates a cryptographically secure random number within a specified range.
	 *
	 * @param {number} [min=0] - The minimum value of the range (inclusive).
	 * @param {number} [max=100] - The maximum value of the range (exclusive).
	 * @returns {number} A random number within the specified range.
	*/
	static randRange(min?: number, max?: number): number;
	/**
	 * Generates a random password based on specified criteria.
	 *
	 * @param {number} [length=10] - The length of the password.
	 * @param {boolean} [upperCase=true] - Include uppercase letters in the password.
	 * @param {boolean} [numbers=true] - Include numbers in the password.
	 * @param {boolean} [specials=true] - Include special characters in the password.
	 * @returns {string} The generated password.
	*/
	static generate(length?: number, upperCase?: boolean, numbers?: boolean, specials?: boolean): string;
}

export {};
