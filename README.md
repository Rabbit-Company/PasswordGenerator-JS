# PasswordGenerator-JS

Password generator implemented in JavaScript (ES6).

This library will auto generate random secure passwords.

## Usage

### 1. Download library
```bash
npm i --save @rabbit-company/password-generator
```

### 2. Import library
```js
import PasswordGenerator from "@rabbit-company/password-generator";
```

### 3. Generate Password
```js
/*

  Parameters:
  1. Length (Number) <10>
  2. Uppercase (Bool) <true>
  3. Numbers (Bool) <true>
  4. Symbols (Bool) <true>

*/

// Generate 10 character long password with Uppercase characters, Numbers and Symbols.
PasswordGenerator.generate();

// Generate 15 character long password with Uppercase characters, Numbers and Symbols.
PasswordGenerator.generate(15);

// Generate 20 character long password with Uppercase characters and Numbers.
PasswordGenerator.generate(20, true, true, false);
```