const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

async function fuelKerala() {
  try {
    const url = 'https://parkplus.io/fuel-price/kerala';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const prices = [];
    $('tbody tr').each((index, element) => {
      const price = $(element).find('td:nth-child(2) div:nth-child(1) span:nth-child(1)').text().trim();
      if (price) {
        prices.push(price);
      }
    });
    return prices;
  } catch (e) {
    console.error('Error loading data:', e);
    throw new Error('Error loading data');
  }
}

const districts = [
  'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 
  'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thrissur', 'Trivandrum', 'Wayanad', 'Thiruvananthapuram'
];

districts.forEach((district, index) => {
  app.get(`/api/${district.toLowerCase()}`, async (req, res) => {
    try {
      const prices = await fuelKerala();
      const fuelPrice = prices.at(index);
      if (fuelPrice) {
        res.json({ 'fuelPrice': fuelPrice });
      } else {
        res.status(404).json({ error: `No data found for ${district}` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});

app.listen(8080, '0.0.0.0', () => {
  console.log('Server is running on port 8080');
});
