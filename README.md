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
GET /tiktok/product-detail?productId=<CATEGORY_ID>
```
```
GET http://localhost:3000/tiktok/product-detail?productId=1729385818970687402
```
Response:
```
{
    "success": true,
    "product": {
        "title": "Lily Kulot Knit Rajut HighWaist (Tanpa Saku) Celana Wanita",
        "seller": "TOMETOH ID",
        "price": "Rp82.900",
        "description": "Yang dulu pernah beli ukuran KNIT = ALLSIZE. (Hanya ganti nama varian saja).\nTolong abaikan varian ukuran ...
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
        "code": 0,
        "message": "success",
        "data": {
            "productList": [
                {
                    "product_id": "1731535811462268101",
                    "title": "CELANA BUSA PINGGUL NYAMAN DIPAKAI",
                    "image": {
                        "height": 800,
                        "width": 800,
                        "uri": "tos-alisg-i-aphluv4xwc-sg/7234f5d735fa44d8b35cf46cfff5a678",
                        "url_list": [
                            "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7234f5d735fa44d8b35cf46cfff5a678~tplv-aphluv4xwc-crop-webp:800:800.webp?dr=15592&from=2378011839&idc=my&ps=933b5bde&shcp=e0b1d153&shp=8dbd94bf&t=555f072d",
                            "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7234f5d735fa44d8b35cf46cfff5a678~tplv-aphluv4xwc-crop-webp:800:800.webp?dr=15592&from=2378011839&idc=my&ps=933b5bde&shcp=e0b1d153&shp=8dbd94bf&t=555f072d"
                        ]
                    },
                    "product_price_info": {
                        "sku_id": "1731536065872561349",
                        "symbol_position": 1,
                        "show_currency_space": false,
                        "currency_show_mode": 1,
                        "currency_name": "IDR",
                        "currency_symbol": "Rp",
                        "sale_price_decimal": "69000",
                        "sale_price_format": "69.000",
                        "single_product_price_format": "69.000",
                        "single_product_price_decimal": "69000",
                        "promotion_deduction_details": {}
                    },
                    "rate_info": {
                        "score": 4.4,
                        "review_count": "292"
                    },
                    "sold_info": {
                        "sold_count": 3072
                    },
                    "seller_info": {
                        "seller_id": "7496187918986610885",
                        "shop_name": "BFsecret",
                        "shop_logo": {
                            "height": 300,
                            "width": 300,
                            "uri": "tos-alisg-i-aphluv4xwc-sg/eb8d7eb4308f4b71bba3bf6d2e8ab5e2",
                            "url_list": [
                                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/eb8d7eb4308f4b71bba3bf6d2e8ab5e2~tplv-aphluv4xwc-resize-png:300:300.png?dr=15580&from=2422056039&idc=my&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d",
                                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/eb8d7eb4308f4b71bba3bf6d2e8ab5e2~tplv-aphluv4xwc-resize-png:300:300.png?dr=15580&from=2422056039&idc=my&ps=933b5bde&shcp=d9d491bf&shp=905da467&t=555f072d"
                            ]
                        }
                    },
                    "seo_url": {
                        "updated_at": "1749997434558",
                        "canonical_url": "https://shop-id.tokopedia.com/pdp/celana-dalam-busa-pinggul-chelyne-nyaman-dan-mudah-dicuci/1731535811462268101",
                        "slug": "celana-dalam-busa-pinggul-chelyne-nyaman-dan-mudah-dicuci",
                        "type": 2,
                        "version": 2
                    },
                    "seo_pdp_url": "https://shop-id.tokopedia.com/pdp/celana-dalam-busa-pinggul-chelyne-nyaman-dan-mudah-dicuci/1731535811462268101"
                },
```
