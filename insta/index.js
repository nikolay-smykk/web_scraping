const puppeteer = require('puppeteer');
const secret = require('./Secret.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: `${Date.now()}.csv`,
  header: [
    { id: 'name', title: 'Name' },
    { id: 'publich', title: 'publich' },
    { id: 'folower', title: 'folower' },
    { id: 'folowers', title: 'folowers' },
    { id: 'imgScr', title: 'imgScr' },
  ],
});
const data = [];
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
  await likeProfile(page);
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

async function likeProfile(page) {
  //go to akk
  const USERNAMES = ['nikolay_smyk', 'goida_atelier'];

  for (let USERNAME of USERNAMES) {
    await page.goto(`http://instagram.com/${USERNAME}`);
    await page.waitForTimeout(4000);
    const imgScr = await page.$eval('img', (el) => el.getAttribute('src'));

    const headerDate = await page.$$eval('header li', (els) =>
      els.map((el) => el.textContent)
    );
    const publich = headerDate[0];
    const folower = headerDate[1];
    const folowers = headerDate[2];
    // const folow = headerDate.split(',');
    console.log(headerDate[0]);
    const name = await page.$eval('header h1', (el) => el.textContent);

    data.push({ name, publich, folower, folowers, imgScr });
  }
  await csvWriter
    .writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));
}
//DataProfile/////////////////////////////////////////likeProfile/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////

//seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////
async function seeStory(page) {
  await page.waitForTimeout(4000);
  //click Story
  const buttonStory = (
    await page.$x(
      '//*[@id="react-root"]/section/main/section/div/div[1]/div/div/div/div/ul/li[3]/div/button'
    )
  )[0];
  await page.waitForTimeout(1000);
  await buttonStory.click();

  await page.waitForTimeout(4000);

  const nextStory = (
    await page.$x(
      '//*[@id="react-root"]/section/div[1]/div/section/div/button[2]'
    )
  )[0];

  try {
    while (true) {
      await page.waitForTimeout(2000);
      await nextStory.click();
      console.log(nextStory);
    }
  } catch {
    console.log('all Good and Cancel');
  }

  //   await browser.close();
}

//seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory/////////////////////////////////////////seeStory///////////////////////////////////////
