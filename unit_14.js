let cityArr = [
  { id: 524894, name: 'Moscow' },
  { id: 1496747, name: 'Novosibirsk' },
  { id: 1503901, name: 'Kemerovo' },
  { id: 1502026, name: 'Krasnoyarsk' },
  { id: 2013348, name: 'Vladivostok' },
  { id: 491422, name: 'Sochi' },
  { id: 1489425, name: 'Tomsk' },
  { id: 1496153, name: 'Omsk' }
];
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
  let valueOfS1 = objectMain.s1.value;
  for (let i = 0; i < cityArr.length; i++) {
    for (let key in cityArr[i]) {
      if (cityArr[i].name == valueOfS1) {
        return String(cityArr[i].id);
      }
    }
  }
}
function getWeather() {
  fetch(concatString(gValueOfS1()))
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      objectMain.out1.innerHTML = Math.round(data.main.temp - 273);
      console.log(data);
    })
    .catch(function () {
    });
}
objectMain.s1.addEventListener("change", getWeather);
