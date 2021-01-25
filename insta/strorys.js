const puppeteer = require('puppeteer');
const secret = require('./Secret.js');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  const page = await browser.newPage();
  await authCall(page);
  await seeStory(page);
})();

//auth/////////////////////////////////////////auth/////////////////////////////////////////auth/////////////////////////////////////////auth///////////////////////////////////////
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
//auth/////////////////////////////////////////auth/////////////////////////////////////////auth///////////////////////////////////////

//DataProfile/////////////////////////////////////////likeProfile/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////

//seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////
async function seeStory(page) {
  await page.waitForTimeout(4000);
  //click Story
  const story = await page.$$('ul li button');
  story[1].click();

  await page.waitForTimeout(1000);
  await buttonStory.click();
  console.log('1');
  await page.waitForTimeout(4000);

  const nextStory = (
    await page.$x(
      '//*[@id="react-root"]/section/div[1]/div/section/div/button[2]'
    )
  )[0];
  await page.waitForTimeout(4000);
  try {
    while (true) {
      await page.waitForTimeout(2000);
      await nextStory.click();
    }
  } catch {
    console.log('all Good and Cancel');
  }

  //   await browser.close();
}

//seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////
