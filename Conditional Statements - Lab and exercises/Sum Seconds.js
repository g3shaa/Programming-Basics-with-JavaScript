function race(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let time = first+second+third;
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (seconds<10){
    console.log(minutes+":0"+seconds);
    } else{
        console.log(String(minutes)+":"+String(seconds));
    }
    
}
race (["50",
"50",
"49"])
