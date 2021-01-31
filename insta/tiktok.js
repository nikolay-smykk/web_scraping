// по карточки из хештегов

let timerId = setInterval(() => window.scroll(0, 1000000000), 6000);
setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 30000);

let like = $x(
  '//*[@id="main"]/div[2]/div[2]/div/main/div/div[2]/div[2]/div[2]/div[1]/div[1]/span[1]/span'
);
let folow = $x(
  '//*[@id="main"]/div[2]/div[2]/div/main/div/div[2]/div[2]/div[1]/div/button'
);
let next = $x(
  '//*[@id="main"]/div[2]/div[2]/div/main/div/div[2]/div[1]/img[1]'
);

(() => {
  let i = 0;
  i++;
  console.log(i);
  setInterval(() => like[0].click(), 6000);

  setInterval(() => next[0].click(), 6000);
})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Рекомендации
let timerId = setInterval(() => window.scroll(0, 1000000000), 6000);
setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 300000);

let allLike = $x(
  '//*[@id="main"]/div[2]/div[2]/div/div/main/div/div[1]/span/div/div/div[5]/div[2]/div[1]/div'
);

allLike.map((item, index) => {
  setTimeout(() => {
    item.click();
    console.log(index);
  }, 10000);
});

let allButton = $x(
  '//*[@id="main"]/div[2]/div/div/div/main/div/div/span/div/div/div/button'
);

allButton.map((item, index) => {
  setTimeout(() => {
    item.click();
    console.log(index);
  }, 10000);
});
