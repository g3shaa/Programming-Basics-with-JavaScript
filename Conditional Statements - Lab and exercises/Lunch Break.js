function lunchBreak(input) {
    let name = String(input[0]);
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime * (1 / 8);
    let restTime = breakTime * (1 / 4);

    let freeTime = (breakTime - lunchTime - restTime);
    let remainingTime = Math.abs(episodeTime - freeTime);

    if (episodeTime <= freeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(remainingTime)} minutes free time.`);
    } else if (episodeTime > freeTime) {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(remainingTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"
])