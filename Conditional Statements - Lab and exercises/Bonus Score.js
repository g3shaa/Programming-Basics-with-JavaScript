function BonusScore(input) {
    let initialScore = Number(input[0]);
    let bonusScore = 0;
    let even = 0;
    let endsWithFive = 0;

    if (initialScore <= 100) {
        bonusScore = 5;
    } else if (initialScore > 1000) {
        bonusScore = initialScore * 0.1;
    } else {
        bonusScore = initialScore * 0.2;
    }

    if (initialScore % 2 === 0) {
        even = 1;
    }

    if (initialScore % 10 === 5) {
        endsWithFive = 2;
    }

    let output1 = bonusScore + even + endsWithFive;
    let output2 = initialScore + bonusScore + even + endsWithFive;

    console.log(output1);
    console.log(output2);
}

BonusScore([175]);