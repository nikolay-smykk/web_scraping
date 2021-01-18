const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();