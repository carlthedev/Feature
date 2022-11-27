// points
// start at 20 and decrease car1speed depening on selection
// max points are soft, mercedes and airflow 

let startButton = document.querySelector('.startRace');
let results = document.querySelector('.popup');
let main = document.querySelector('.main');
let car1SpeedStart = 20; // car 1 starts at speed 20s
let car1SpeedFinish = `${car1SpeedStart}s`; // this just turn number 20 into string 20s for css
let tyreSelection = document.querySelector("#tyres");
let engineSelection = document.querySelector("#engine");
let aeroSelection = document.querySelector("#aero");

startButton.addEventListener('click', () => {

  if (tyreSelection.value === "Soft" && engineSelection.value === "Mercedes" && aeroSelection.value === "Airflow") { // if the right car setting are slected, max points of 15 seconds will be decucted from 20s, making it faster than the other 2 cars with preset speeds of 6s and 8s
    car1SpeedStart -= 15;
  } else { // or else generate a random number between 6 and 20, so that the car has a different random speed every time 
    let randomNum = Math.floor(Math.random() * (14 - 6) + 6);
    car1SpeedStart = randomNum;
  };

  let car1SpeedFinish = `${car1SpeedStart}s`;
  // 
  document.querySelector('.car1').className = "car1-toggle";
  document.querySelector('.car1-toggle').style.animationDuration = car1SpeedFinish;
  document.querySelector('.car2').className = "car2-toggle";
  document.querySelector('.car3').className = "car3-toggle";

  popupSpeed = car1SpeedStart * 1000 + 1000;

  reloadSpeed = 8000 + 5000;

  if (car1SpeedStart * 1000 < 6000) {
    results.innerHTML = "Winner!" ;
    results.style.backgroundColor = "green";
  } else {
    results.innerHTML = "You lost!";
  };

  if (car1SpeedStart > 8) {
    reloadSpeed = car1SpeedStart * 1000 + 5000;
  }

  setTimeout(function () {
    results.style.visibility = "visible";
    results.style.opacity = "0.8";
    main.style.opacity = "0.1";
  }, `${popupSpeed}`);

  setTimeout(function () {
    window.location.reload();
  }, `${reloadSpeed}`);

  startButton.style.display = "none";
  reset.style.display = "none";

});

// click counter



startButton.addEventListener('click', () => {
  if (typeof (Storage) != "undefined") {       // check if local storage IS supported by the browser you are using
    if (sessionStorage.clickCount) {
      //increment counter
      sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
    } else {
      //initialise counter
      sessionStorage.clickCount = 1;
    }
    document.querySelector(".counter").innerHTML = "Number of races attempted = " + sessionStorage.clickCount;
  } else {
    // if it is not supported display this friendly message for a better user experience
    document.querySelector(".counter").innerHTML = "Sorry, your browser does not support web storage...";
  }
});

let reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
  if (typeof (Storage) != "undefined") {
    //delete saved counter
    sessionStorage.removeItem("clickCount");
    document.querySelector(".counter").innerHTML = "Number of races attempted = 0";
  } else {
    document.querySelector(".counter").innerHTML = "Sorry, your browser does not support web storage..."; 
  };
  reset.style.display = "none";
});

if (sessionStorage.clickCount) {
  document.querySelector(".counter").innerHTML = "Number of races attempted = " + sessionStorage.clickCount;
}

// do not display blue counter if the inner html is empty
let count = document.querySelector(".counter");

if (count.innerHTML === "" ) {
  count.style.display = "none";
}