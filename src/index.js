function updateTime() {
  //paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector(".date");
  let parisTimeElement = document.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM, Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss a");

  //lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");

  let lisbonTime = moment().tz("Europe/Lisbon");
  lisbonDateElement.innerHTML = lisbonTime.format("MMMM, Do, YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss a");

  //berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");

  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM, Do, YYYY");
  berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss a");
}

updateTime();
setInterval(updateTime, 1000);
