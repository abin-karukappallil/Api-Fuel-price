# ⛽Fuel Price API

This repository features an API that delivers the latest fuel prices in JSON format. The API allows users to retrieve up-to-date information about various types of fuel, such as gasoline and diesel, including details like the fuel type, current price, location, and timestamp of the data. By providing this information in a structured and easily readable JSON format, the API facilitates seamless integration into applications or services that need real-time fuel price updates.

## API Endpoint

You can access the fuel price using the following endpoint:

https://api.abinthomas.dev/api/fuel-price

### Example Request

```http
GET https://api.abinthomas.dev/api/fuel-price
```
### Example Response
```http
{
  "fuelPrice": "105.67"
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
http://localhost:8080/api/fuel-price
```
## Upcoming Features

Here are some planned enhancements and additional features for future releases:

* **Region-Wise Price List:** Expand the API to support querying fuel prices for multiple regions. Users will be able to      
                             retrieve fuel prices based on specific locations or regions.

## License
This project is licensed under the MIT License.
