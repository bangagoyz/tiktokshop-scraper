const puppeteer = require('puppeteer');

async function scrapeByProductId(productId) {
  const url = `https://shop-id.tokopedia.com/pdp/${productId}?source=homepage_h5`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  );

  await page.goto(url, { waitUntil: 'networkidle2' });

  try {
    await page.waitForSelector('h1.title-v0v6fK', { timeout: 5000 });

    const data = await page.evaluate(() => {
      const getText = (selector) => document.querySelector(selector)?.innerText?.trim() || 'N/A';

      const title = getText('h1.title-v0v6fK');
      let sellerRaw = getText('div.seller-c27aRQ');
      let seller = sellerRaw.replace(/^Sold by\s*/i, '').trim()
      const price = getText('div.price-w1xvrw span');
      
      const descBlocks = Array.from(document.querySelectorAll('div.text-nu9zLI'));
      const description = descBlocks.map(el => el.innerText.trim()).filter(Boolean).join('\n');

      return { title, seller, price, description };
    });

    await browser.close();
    return data;
  } catch (err) {
    await browser.close();
    throw new Error('Failed to extract product info: ' + err.message);
  }
}

module.exports = scrapeByProductId;
