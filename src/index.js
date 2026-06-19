function updateTime() {
  //paris
  let parisElement = document.querySelector("#paris");
  if (paris) {
    let parisDateElement = document.querySelector(".date");
    let parisTimeElement = document.querySelector(".time");

    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM, Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss a");
  }

  //lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbon) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");

    let lisbonTime = moment().tz("Europe/Lisbon");
    lisbonDateElement.innerHTML = lisbonTime.format("MMMM, Do, YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss a");
  }

  //berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlin) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");

    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM, Do, YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss a");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM, Do,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss a")} </small></div>
        </div>
      </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
