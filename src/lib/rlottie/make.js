const pako = require('pako');
const fs = require('fs');

fs.readFile('src/assets/json/love.json', null, function (err, data) {
  if (err) {
    console.log(err);
  }
  try {
    const buffer = pako.deflate(data, {level: 9});
    fs.writeFile('src/assets/tgs/love.tgs', buffer, 'binary', function (err) {
      console.log(err);
    })
  } catch (e) {
    console.log(e);
  }
})
