const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if(!error) callback(data);
  });
};

const printFile = breed => {
  console.log('Return Value: ', breed);
}
const bombay = breedDetailsFromFile('Bombay',printFile);