let idOfMoscow = "524894";
let objectMain = {
  s1: document.querySelector('.s-1'),
  out1: document.querySelector('.out-1')
};
function concatString(a) {
  let b = 'https://api.openweathermap.org/data/2.5/weather?id=';
  let c = '&appid=8940e5ef0e53a52a848430a215691da4';
  return `${b}${a}${c}`;
}
function gValueOfS1() {
  return objectMain.s1.value;
}
function getWeather() {
  fetch(concatString(gValueOfS1()))
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      objectMain.out1.innerHTML = `${Math.round(data.main.temp - 273)}&deg;`;
      console.log(data);
    })
    .catch(function () {
    });
}
objectMain.s1.addEventListener("change", getWeather);
window.onload = function getWeather() {
  fetch(concatString(idOfMoscow))
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      objectMain.out1.innerHTML = `${Math.round(data.main.temp - 273)}&deg;`;
      console.log(data);
    })
    .catch(function () {
    });
}
