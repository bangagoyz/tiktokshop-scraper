const express = require('express');
const scrapeByProductId = require('./scrapers/tiktokshop-byproductid');
const scrapeByCategId = require('./scrapers/tiktokshop-bycategid')

const app = express();
const PORT = 3000;

app.get('/tiktok/product-detail', async (req, res) => {
  const { productId } = req.query;

  if (!productId) {
    return res.status(400).json({ success: false, message: 'Missing productId in query' });
  }

  try {
    const data = await scrapeByProductId(productId);
    res.json({ success: true, product: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


app.get('/tiktok/api-category', async (req, res) => {
  const { categoryId } = req.query;

  if (!categoryId) {
    return res.status(400).json({ success: false, message: 'Missing categoryId' });
  }

  try {
    const products = await scrapeByCategId(parseInt(categoryId));
    res.json({ success: true, products });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

