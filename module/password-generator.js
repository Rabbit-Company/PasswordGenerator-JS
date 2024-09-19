// src/password-generator.ts
var PasswordGenerator;
((PasswordGenerator) => {
  PasswordGenerator.lcase = "abcdefghijklmnopqrstuvwxyz";
  PasswordGenerator.ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  PasswordGenerator.numb = "1234567890";
  PasswordGenerator.symbols = "!@#$%?&*";
  function randRange(min = 0, max = 100) {
    var range = max - min;
    var requestBytes = Math.ceil(Math.log2(range) / 8);
    if (!requestBytes)
      return min;
    var maxNum = Math.pow(256, requestBytes);
    var ar = new Uint8Array(requestBytes);
    while (true) {
      globalThis.crypto.getRandomValues(ar);
      var val = 0;
      for (var i = 0;i < requestBytes; i++)
        val = (val << 8) + ar[i];
      if (val < maxNum - maxNum % range)
        return min + val % range;
    }
  }
  PasswordGenerator.randRange = randRange;
  function generate(length = 20, upperCase = true, numbers = true, specials = true) {
    let password = [];
    for (let i = 0;i < length; i++)
      password.push(PasswordGenerator.lcase.charAt(randRange(0, PasswordGenerator.lcase.length)));
    if (upperCase) {
      let ucase_amount = randRange(1, Math.floor(length / 2) + 1);
      for (let i = 0;i < ucase_amount; i++) {
        password[randRange(0, password.length)] = PasswordGenerator.ucase.charAt(randRange(0, PasswordGenerator.ucase.length));
      }
    }
    if (numbers) {
      let numbers_amount = randRange(1, Math.floor(length / 2) + 1);
      for (let i = 0;i < numbers_amount; i++) {
        password[randRange(0, password.length)] = PasswordGenerator.numb.charAt(randRange(0, PasswordGenerator.numb.length));
      }
    }
    if (specials) {
      let specials_amount = randRange(1, 3);
      for (let i = 0;i < specials_amount; i++) {
        password[randRange(0, password.length)] = PasswordGenerator.symbols.charAt(randRange(0, PasswordGenerator.symbols.length));
      }
    }
    return password.join("");
  }
  PasswordGenerator.generate = generate;
})(PasswordGenerator ||= {});
var password_generator_default = PasswordGenerator;
export {
  password_generator_default as default
};
