# TO-FARSI
Simple npm package to convert your english digits to farsi/arabic digits.
## Quick Start📦
install `to-farsi` via npm package
```bash
npm i to-farsi
```
import `to-farsi` in your file
```typescript
import toFarsiNumbers from "to-farsi";
```
then use it like this
```typescript
console.log(toFarsiNumbers(987654321)); // output: "۹۸۷۶۵۴۳۲۱"
```
or in your front structure
```html
<p>{toFarsiNumbers(123456789)}</p>
```

> I don't recommend to pass non-English digits to your database or in your logs and just use it when you want to show the number to your users.
## <3
give it a star if it was helpful! ⭐
MIT © [ cwpslxck ](https://github.com/cwpslxck)