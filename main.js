const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const url = 'https://parkplus.io/fuel-price/petrol-diesel-price-in-kottayam';
async function getFuelPrice() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const priceSpan = $('td[itemprop="description"]').eq(1);
    if (priceSpan.length) {
      const fuelPrice = priceSpan.text().trim();
      return { fuelPrice };
    } else {
      throw new Error('not found');
    }
  } catch (error) {
    throw new Error(`Failed`);
  }
}
app.get('/api/fuel-price', async (req, res) => {
  try {
    const price = await getFuelPrice();
    res.json(price);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
