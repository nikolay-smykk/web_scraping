const puppeteer = require('puppeteer');
const secret = require('./Secret.js');

// const LOGIN = constants.LOGIN;
// const PASSWORD = constants.PASSWORD;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  const page = await browser.newPage();
  await authCall(page);

  //go to akk
  const USERNAME = 'nikolay_smyk';
  await page.goto(`http://instagram.com/${USERNAME}`);
  await page.waitForTimeout(4000);
  //click image

  await (await page.$('article a')).click();
  await page.waitForTimeout(4000);
  await (await page.$$('button'))[3].click();

  //   await browser.close();
})();

//see story

async function authCall(page) {
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

  //dont now
  await page.waitForTimeout(4000);
  await (
    await page.$x('/html/body/div[4]/div/div/div/div[3]/button[2]')
  )[0].click();

  //dont now
  await page.waitForTimeout(4000);
}
