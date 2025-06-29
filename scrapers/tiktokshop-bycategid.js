const puppeteer = require('puppeteer');
const axios = require('axios');

async function getTokenAndCookies(categoryId) {
  const url = `https://shop-id.tokopedia.com/search?st=product&catid=${categoryId}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  const cookies = await page.cookies();
  const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');

  const msToken = await page.evaluate(() => {
    const match = window.location.href.match(/msToken=([a-zA-Z0-9-_]+)/);
    return match ? match[1] : localStorage.getItem('msToken');
  });

  await browser.close();
  return { msToken, cookie: cookieHeader };
}

async function scrapeByCategId(categoryId) {
  const tokenData = await getTokenAndCookies(categoryId);

  const response = await axios.post(
    'https://shop-id.tokopedia.com/api/shop/home/product_list',
    {
      category_id: categoryId,
      exclude_product_ids: []
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'msToken': tokenData.msToken,
        'Cookie': tokenData.cookie,
        'x-platform': 'shop',
        'x-device': 'desktop'
      }
    }
  );

  return response.data;
}

module.exports = scrapeByCategId;