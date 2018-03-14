const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

let hashPassword = '$2a$10$aUk5wDQAmgwPelu28lxJp.6HugZJNyrDUfd5kI29ckfdC2FzCGMSS';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});
