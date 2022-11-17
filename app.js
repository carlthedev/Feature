// points
// start at 20 and decrease car1speed depening on selection
// max points are soft, mercedes and airflow 

let startButton = document.querySelector('.startRace');
let car1SpeedStart = 20;
let car1SpeedFinish = `${car1SpeedStart}s`;
let tyreSelection = document.querySelector("#tyres");
let engineSelection = document.querySelector("#engine");
let aeroSelection = document.querySelector("#aero");

startButton.addEventListener('click', () => {

  if (tyreSelection.value === "Soft" && engineSelection.value === "Mercedes" && aeroSelection.value === "Airflow") {
    car1SpeedStart -= 15;
  } else {
    let randomNum = Math.floor(Math.random() * (14 - 6) + 6);
    car1SpeedStart = randomNum;
  };

  let car1SpeedFinish = `${car1SpeedStart}s`;

  document.querySelector('.car1').className = "car1-toggle";
  document.querySelector('.car1-toggle').style.animationDuration = car1SpeedFinish;
  document.querySelector('.car2').className = "car2-toggle";
  document.querySelector('.car3').className = "car3-toggle";

});