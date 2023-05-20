function time15minutes(input) {
  let h = Number(input[0]);
  let m = Number(input[1]);
  let extraTime = 15;
  let timeInSeconds = h * 60 + m + extraTime;
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;
  if (minutes > 23) {
    minutes = 0;
  }
  if (seconds < 10) {
    console.log(minutes + ":0" + seconds);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

time15minutes(["23", "59"]);