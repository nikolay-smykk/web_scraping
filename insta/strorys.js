const puppeteer = require('puppeteer');
const secret = require('./Secret.js');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  const page = await browser.newPage();

  await page.goto('http://instagram.com/');
  //   await page.waitForTimeout(1000);
  await page.waitForSelector('input');

  //all input on page
  const inputs = await page.$$('input');
  await inputs[0].type(secret.LOGIN);
  await inputs[1].type(secret.PASSWORD);

  //   const LoginButton = (await page.$$("button"))[1];
  const LoginButton = (
    await page.$x('//*[@id="loginForm"]/div/div[3]/button')
  )[0];
  await LoginButton.click();
  //logint Good

  //go to page
  await page.waitForTimeout(4000);
  await page.waitForSelector('button');
  await (await page.$$('button'))[1].click();

  //we in page insta
  console.log('we in page');
  //dont now
  await page.waitForTimeout(4000);
  await (
    await page.$x('/html/body/div[4]/div/div/div/div[3]/button[2]')
  )[0].click();
  console.log('1');

  //dont now

  await page.waitForTimeout(2000);
  //click Story
  console.log('2');
  await page.waitForTimeout(6000);

  const storysss = await page.$$('ul li button');

  await storysss[2].click();
  console.log('3');

  await page.waitForTimeout(2000);
  //====================================================

  await page.waitForTimeout(4000);

  while (true) {
    try {
      const nextStory = await page.$$('section button');
      const nextSTOREEEE = await nextStory[4];
      await page.waitForTimeout(2000);
      await nextSTOREEEE.click();
    } catch {
      await page.close();
    }
  }
})();
