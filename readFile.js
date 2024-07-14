const fs = require('fs');

// Read data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
