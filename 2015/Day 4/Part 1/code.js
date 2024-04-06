const crypto = require('crypto');
let n = 0;
while (crypto.createHash('md5').update('bgvyzdsv' + n).digest('hex').substring(0, 5) != '00000'){
  n++;
}
console.log(n);