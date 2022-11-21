document.getElementById("result").innerText = PasswordGenerator.generate();

document.getElementById("length").addEventListener('change', () => {
	document.getElementById("label-length").innerText = document.getElementById("length").value;
});

document.getElementById("generate").addEventListener('click', () => {
	let length = document.getElementById("length").value;
	let upperCase = document.getElementById("upperCase").checked;
	let numbers = document.getElementById("numbers").checked;
	let symbols = document.getElementById("symbols").checked;
	document.getElementById("result").innerText = PasswordGenerator.generate(length, upperCase, numbers, symbols);
});

function calcT(timer){
  return Date.now() - timer;
}

document.getElementById("btn-start").addEventListener('click', () => {
	let amount = document.getElementById("amount").value;
	if(amount < 1) amount = 1;
  if(amount > 100000) amount = 100000;
	let perf = document.getElementById("perf");
	let timerStart = Date.now();

	perf.innerText = "1. Performance test has started.\n";

	let timer = Date.now();
  for(let i = 0; i < amount; i++){
		PasswordGenerator.generate();
  }
  perf.innerText += "2. " + amount + " random passwords generated in " + calcT(timer) + " milliseconds.\n";

	perf.innerText += "3. Performance test has completed in " + calcT(timerStart) + " milliseconds.\n";
});