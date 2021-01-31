let like = $x(
  '/html/body/div[5]/div[2]/div/article/div[3]/section[1]/span[1]/button'
);

let next = $x('/html/body/div[5]/div[1]/div/div/a[2]');

// повторить с интервалом 2 секунды
function like() {
  let link = $x(
    '/html/body/div[5]/div[2]/div/article/div[3]/section[1]/span[1]/button'
  );

  link[0].click();
}
function next() {
  const link = $x('/html/body/div[5]/div[1]/div/div/a[2]');
  link[0].click();
}

setInterval(() => like(), 5000);

setInterval(() => next(), 6000);
// setInterval(() => folow[0].click(), 6000);

// const folow = $x(
//   '/html/body/div[5]/div[2]/div/article/header/div[2]/div[1]/div[2]/button'
// );

setInterval(
  () =>
    $x(
      '/html/body/div[5]/div[2]/div/article/div[3]/section[1]/span[1]/button'
    )[0].click(),
  5000
);

setInterval(() => $x('/html/body/div[5]/div[1]/div/div/a[2]')[0].click(), 6000);
