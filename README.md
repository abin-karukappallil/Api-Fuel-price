# Fuel Price API

This repository contains a simple Express.js application that scrapes the current fuel price in Kottayam from a specified webpage. The API provides the latest fuel price as JSON data.

## API Endpoint

You can access the fuel price using the following endpoint:

https://api.abinthomas.dev/api/fuel-price

### Example Request

```http
GET https://api.abinthomas.dev/api/fuel-price

{
  "fuelPrice": "105.67"
}
```
# Installation
## Prerequisites
 -> Node.js (v14.x or later)
 -> npm (v6.x or later)
 -> Git
# Clone Repo

```bash
git clone https://github.com/abin-karukappallil/Api-Fuel-price
cd Api-Fuel-price
```
## Install Dependencies

```bash
npm install
```

## Run code

```bash
node main.js
```
## Accessing the API
```bash
http://localhost:8080/api/fuel-price
```
# License
This project is licensed under the MIT License.
