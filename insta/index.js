const puppeteer = require("puppeteer");
const secret = require("./Secret.js");

// const LOGIN = constants.LOGIN;
// const PASSWORD = constants.PASSWORD;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();

  await page.goto("http://instagram.com/");
  //   await page.waitForTimeout(1000);
  await page.waitForSelector("input");

  //all input on page
  const inputs = await page.$$("input");
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
  await page.waitForSelector("button");
  const SaveButton = (await page.$$("button"))[1];
  await SaveButton.click();
  //we in page insta

  //dont now
  await page.waitForTimeout(4000);
  const dontNow = (
    await page.$x("/html/body/div[4]/div/div/div/div[3]/button[2]")
  )[0];
  await dontNow.click();
  //dont now
  await page.waitForTimeout(4000);
  //click Story
  const buttonStory = (
    await page.$x(
      '//*[@id="react-root"]/section/main/section/div/div[1]/div/div/div/div/ul/li[3]/div/button'
    )
  )[0];
  await buttonStory.click();

  await page.waitForTimeout(4000);

  const nextStory = (
    await page.$x(
      '//*[@id="react-root"]/section/div[1]/div/section/div/button[2]'
    )
  )[0];

  try {
    while (true) {
      await page.waitForTimeout(1000);
      await nextStory.click();
    }
  } catch {
    console.log("all Good and Cancel");
    await browser.close();
  }

  //   await browser.close();
})();

//see story
