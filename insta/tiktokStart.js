const link = 'https://www.tiktok.com/';
const puppeteer = require('puppeteer');
const secret = require('./Secret.js');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  const page = await browser.newPage();

  await page.goto(link);

  await page.waitForTimeout(10000);
  await console.log('1');
  //all input on page
  const buttonAuth = await page.$x(
    '//*[@id="main"]/div[2]/div[1]/div/div[1]/div/div[1]/div[2]/button'
  );
  await buttonAuth[0].click();
  await page.waitForTimeout(4000);

  const tel = await page.$x(
    '//*[@id="root"]/div/div[1]/div/div[1]/div[2]/div[1]'
  );
  await tel[0].click();
  await page.waitForTimeout(4000);

  const next1 = await page.$x('//*[@id="root"]/div/div[1]/form/div[1]/a');
  await next1[0].click();
  await page.waitForTimeout(4000);

  const inputs = await page.$$('input');
  await inputs[0].type(secret.LOGIN);
  await inputs[1].type(secret.PASSWORD);
  await page.waitForTimeout(4000);
  const start = await page.$x('//*[@id="root"]/div/div[1]/form/button');
  await start[0].click();
})();
