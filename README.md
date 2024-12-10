# ⛽Fuel Price API

This repository features an API that delivers the latest fuel prices(petrol) in JSON format. The API allows users to retrieve up-to-date information about various types of fuel, such as gasoline and diesel, including details like the fuel type, current price, location, and timestamp of the data. By providing this information in a structured and easily readable JSON format, the API facilitates seamless integration into applications or services that need real-time fuel price updates.

## API Endpoint

You can access the fuel price using the following endpoint:
  
https://api.abinthomas.dev/api/wayanad

### Example Request

```http
GET https://api.abinthomas.dev/api/kottayam
```
### Example Response
```http
{
  "fuelPrice-Kottayam": "105.67"
}
```
## Installation🛠️
### Prerequisites
 * Node.js (v14.x or later)<br>
 * npm (v6.x or later)<br>
 * Git
## Clone Repo📋

```bash
git clone https://github.com/abin-karukappallil/Api-Fuel-price
cd Api-Fuel-price
```
### Install Dependencies🔧

```bash
npm install
```

### Run code🏃‍➡️

```bash
node main.js
```
### Accessing the API🔓
```bash
http://localhost:8080/api/{city-name}
```
## Available cities with fuel price details
-----------------------
| Available cities    |
|---------------------|
| Thiruvananthapuram  |
| Kollam              |
| Pathanamthitta      |
| Alappuzha           |
| Kottayam            |
| Idukki              |
| Ernakulam           |
| Thrissur            |
| Palakkad            |
| Malappuram          |
| Kozhikode           |
| Wayanad             |
| Kannur              |
| Kasaragod           |
| Thrissur            |
-----------------------

## Features sucessfully implemented✅

* **Region-Wise Price List:** Expanded the API to support querying fuel prices for multiple regions. Users will be able to      
                             retrieve fuel prices based on specific location in kerala.✅
## Upcoming features🚀

* **State wise Price List:** Expand the API to support querying fuel prices for multiple states in India.<br>
* **Adding Diesel Price List:** Expand the API to support querying diesel prices also for multiple regions.<br>
* **Adding Previous Price Data:** Expand the api to get the previous fuel price data of the specified region.


## License📝
This project is licensed under the MIT License.
