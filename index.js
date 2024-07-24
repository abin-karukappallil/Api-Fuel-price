const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://parkplus.io/fuel-price/kerala';
async function getFuelPrice() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const priceDiv = $('span[itemprop="description"]').first();
    if (priceDiv.length) {
      const fuelPrice = priceDiv.text();
      console.log(`Current fuel price in Kerala: ${fuelPrice}`);
    } else {
      console.log('nothing to see');
    }
  } catch (error) {
    console.error(`Fetch faileeeddddddd: ${error.message}`);
  }
}
getFuelPrice();
