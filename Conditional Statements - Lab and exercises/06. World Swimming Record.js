function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    // Calculate resistance
    let resistance = Math.floor(distanceMeters / 15) * 12.5;

    // Calculate Ivancho's time and check if it's a new record or not
    let ivanchoTime = (distanceMeters * timePerMeter) + resistance;

    if (ivanchoTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`);
    } else {
        let difference = Math.abs(recordSeconds - ivanchoTime);
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}