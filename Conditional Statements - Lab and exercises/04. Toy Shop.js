function toyShop(input) {
  // Define prices per unit for each toy
  let pyzel = 2.6;
  let talkingDoll = 3;
  let plushToyBear = 4.1;
  let minion = 8.2;
  let truck = 2;

  // Get input values, assume they are all numbers
  let excursionPrice = Number(input[0]);
  let quantityOfPyzel = Number(input[1]);
  let quantityOfTalkingDolls = Number(input[2]);
  let quantityOfPlushToyBears = Number(input[3]);
  let quantityOfMinions = Number(input[4]);
  let quantityOfTrucks = Number(input[5]);

  // Calculate total number of products ordered
  let totalQuantityOfProducts = quantityOfTrucks + quantityOfTalkingDolls +
    quantityOfPlushToyBears + quantityOfMinions + quantityOfPyzel;

  // Calculate total cost before discount
  let totalCostBeforeDiscount = quantityOfTrucks * truck +
    quantityOfTalkingDolls * talkingDoll +
    quantityOfPlushToyBears * plushToyBear +
    quantityOfMinions * minion +
    quantityOfPyzel * pyzel;

  // Calculate total cost after discount
  if (totalQuantityOfProducts >= 50) {
    totalCostBeforeDiscount = totalCostBeforeDiscount - totalCostBeforeDiscount * 0.25;
  }

  totalCostBeforeDiscount = totalCostBeforeDiscount - totalCostBeforeDiscount * 0.1;

  let remainingMoney = totalCostBeforeDiscount - excursionPrice;
  if (totalCostBeforeDiscount >= excursionPrice) {
    console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
  } else if (excursionPrice > remainingMoney) {
    let deficit = excursionPrice - totalCostBeforeDiscount;
    console.log(`Not enough money! ${deficit.toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);