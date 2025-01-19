const fs = require('fs');
const csv = require('csv-parser');

// Delete existing files if they exist
['canada.txt', 'usa.txt'].forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted existing ${file}`);
  }
});

const canadaData = [];
const usaData = [];

// Read the CSV file and filter data
fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
      canadaData.push(row);
    } else if (row.country.toLowerCase() === 'united states') {
      usaData.push(row);
    }
  })
  .on('end', () => {
    if (canadaData.length > 0) {
      const canadaContent = canadaData.map(row => `${row.country},${row.year},${row.population}`).join('\n');
      fs.writeFileSync('canada.txt', `country,year,population\n${canadaContent}`);
      console.log('canada.txt has been created');
    }

    if (usaData.length > 0) {
      const usaContent = usaData.map(row => `${row.country},${row.year},${row.population}`).join('\n');
      fs.writeFileSync('usa.txt', `country,year,population\n${usaContent}`);
      console.log('usa.txt has been created');
    }

    console.log('CSV file processing completed');
  });
