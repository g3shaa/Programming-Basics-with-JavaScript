function shopping(input) {
    let budget = Number(input[0]);
    let numberOfGPUs = Number(input[1]);
    let numberOfProcessors = Number(input[2]);
    let numberOfRamMemory = Number(input[3]);

    let gpuPrice = 250;
    let processorPrice = (gpuPrice * numberOfGPUs) * 0.35;
    let ramMemoryPrice = (gpuPrice * numberOfGPUs) * 0.10;
    let totalPrice = numberOfGPUs * gpuPrice + numberOfProcessors * processorPrice + numberOfRamMemory * ramMemoryPrice;

    if (numberOfGPUs >= numberOfProcessors) {
        totalPrice = totalPrice * 0.85;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shopping(["920.45",
    "3",
    "1",
    "1"
])