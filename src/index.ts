import PasswordGenerator from "./password-generator.js";

const perfElement = document.getElementById("perf");
const resultElement = document.getElementById("result");
const amountInput = document.getElementById("amount") as HTMLInputElement | null;
const lengthInput = document.getElementById("length") as HTMLInputElement | null;
const upperCaseInput = document.getElementById("upperCase") as HTMLInputElement | null;
const numbersInput = document.getElementById("numbers") as HTMLInputElement | null;
const symbolsInput = document.getElementById("symbols") as HTMLInputElement | null;

if(resultElement) resultElement.innerText = PasswordGenerator.generate();

document.getElementById("length")?.addEventListener('change', () => {
	const labelElement = document.getElementById("label-length");

	if(lengthInput && labelElement) labelElement.innerText = lengthInput.value;
});

document.getElementById("generate")?.addEventListener('click', () => {
	if(!lengthInput || !upperCaseInput || !numbersInput || !symbolsInput || !resultElement) return;

	const length = parseInt(lengthInput.value, 10);
	const upperCase = upperCaseInput.checked;
	const numbers = numbersInput.checked;
	const symbols = symbolsInput.checked;

	resultElement.innerText = PasswordGenerator.generate(length, upperCase, numbers, symbols);
});

document.getElementById("btn-start")?.addEventListener('click', () => {
	if (!amountInput || !perfElement || !lengthInput || !upperCaseInput || !numbersInput || !symbolsInput) return;

	const length = parseInt(lengthInput.value, 10);
	const upperCase = upperCaseInput.checked;
	const numbers = numbersInput.checked;
	const symbols = symbolsInput.checked;

	let amount = parseInt(amountInput.value, 10);
	if(amount < 1) amount = 1;
	if(amount > 100000) amount = 100000;

	perfElement.innerText = "1. Performance test has started.\n";

	const timer = Date.now();
	for(let i = 0; i < amount; i++){
		PasswordGenerator.generate(length, upperCase, numbers, symbols);
	}

	perfElement.innerText += "2. " + amount + " random passwords generated in " + calcT(timer) + " milliseconds.\n";
	perfElement.innerText += "3. Performance test has completed in " + calcT(timer) + " milliseconds.\n";
});

function calcT(timer: number){
  return Date.now() - timer;
}