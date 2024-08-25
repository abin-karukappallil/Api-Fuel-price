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
 
app.get('/api/alappuzha', async (req, res) => {
  try {
    const alappuzha = await fuelKerala();
    const alapuzhaa = alappuzha.at(0);
    res.json({ 'fuelPrice-Alappuzha': alapuzhaa });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/ernakulam', async (req, res) => {
  try {
    const ekm = await fuelKerala();
    const ekmm = ekm.at(1);
    res.json({ 'fuelPrice-Eranakulam': ekmm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/idukki', async (req, res) => {
  try {
    const id = await fuelKerala();
    const idk = id.at(2);
    res.json({ 'fuelPrice-Idukki': idk });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/kannur', async (req, res) => {
  try {
    const knr = await fuelKerala();
    const knnr = knr.at(3);
    res.json({ 'fuelPrice-Kannur': knnr });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Kasaragod', async (req, res) => {
  try {
    const Kasaragod = await fuelKerala();
    const Kasaragodd = Kasaragod.at(4);
    res.json({ 'fuelPrice-Kasaragod': Kasaragodd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Kollam', async (req, res) => {
  try {
    const Kollam = await fuelKerala();
    const Kollamm = Kollam.at(5);
    res.json({ 'fuelPrice-Kollam': Kollamm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});app.get('/api/Kottayam', async (req, res) => {
  try {
    const Kottayam = await fuelKerala();
    const Kottayamm = Kottayam.at(6);
    res.json({ 'fuelPrice-Kottayam': Kottayamm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Kozhikode', async (req, res) => {
  try {
    const Kozhikode = await fuelKerala();
    const Kozhikodee = Kozhikode.at(7);
    res.json({ 'fuelPrice-Kozhikode': Kozhikodee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Malappuram', async (req, res) => {
  try {
    const Malappuram = await fuelKerala();
    const Malappuramm = Malappuram.at(8);
    res.json({ 'fuelPrice-Malappuram': Malappuramm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Palakkad', async (req, res) => {
  try {
    const Palakkad = await fuelKerala();
    const Palakkadd = Palakkad.at(9);
    res.json({ 'fuelPrice-Palakkad': Palakkadd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Pathanamthitta', async (req, res) => {
  try {
    const Pathananthitta = await fuelKerala();
    const Pathananthittaa = Pathananthitta.at(10);
    res.json({ 'fuelPrice-Pathanamthitta': Pathananthittaa });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Thrissur', async (req, res) => {
  try {
    const Thrissur = await fuelKerala();
    const Thrissurr = Thrissur.at(11);
    res.json({ 'fuelPrice-Thrissur': Thrissurr});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Trivandrum', async (req, res) => {
  try {
    const Trivandrum = await fuelKerala();
    const Trivandrumm = Trivandrum.at(12);
    res.json({ 'fuelPrice-Trivandrum': Trivandrumm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Wayanad', async (req, res) => {
  try {
    const Wayanad = await fuelKerala();
    const Wayanadd = Wayanad.at(13);
    res.json({ 'fuelPrice-Wayanad': Wayanadd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Thiruvananthapuram', async (req, res) => {
  try {
    const Thiruvananthapuram = await fuelKerala();
    const Thiruvananthapuramm = Thiruvananthapuram.at(14);
    res.json({ 'fuelPrice-Thiruvananthapuram': Thiruvananthapuramm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(8080, '0.0.0.0', () => {
  console.log('Server is running on port 8080');
});
