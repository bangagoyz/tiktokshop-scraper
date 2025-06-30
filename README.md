# TikTok Shop Scraper API (Tokopedia Version)

A web scraping API for fetching product details or product listings from TikTok Shop (merged with Tokopedia) using **Puppeteer** and **Axios**.

## 🚀 Features

- Retrieve product details using `productId`
- Retrieve product list using `categoryId`
- Uses headless browser (Puppeteer) to bypass anti-bot protection
- Runs as an Express-based API server

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/your-username/tiktokshop-scraper.git
```
cd tiktokshop-scraper

### 2. Install Dependencies
npm install

### 3. Run the Server
node server.js


## 📦 API Endpoints
### 1. Get Product Detail by Product ID
Endpoint:
GET /tiktok/product-detail?productId=<PRODUCT_ID>
Example:
```
GET http://localhost:3000/tiktok/product-detail?productId=1729385818970687402
```
Response:
```
{
  "success": true,
  "product": {
    "title": "Tas Totebag Estetik Wanita Jemina Kuliah Kulit Sintetis Muat Laptop",
    "seller": "JeminaStore",
    "price": "Rp150.000",
    "description": "Synthetic leather\nFits up to 14-inch laptop\nElegant and practical design\n..."
  }
}
```


### 2. 🗂️ Get Product List by Category ID
Endpoint :
```
GET /tiktok/api-category?categoryId=<CATEGORY_ID>
```
Example:
```
GET http://localhost:3000/tiktok/api-category?categoryId=601152
```
Example Response:
```
{
  "success": true,
  "products": {
    "data": [...],
    "count": 50
  }
}
```
