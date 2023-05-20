function godzila(input) {
  let budget = Number(input[0]);
  let extrasCount = Number(input[1]);
  let clothingCostPerExtra = Number(input[2]);

  // Calculate decoration cost
  let decorationCost = budget * 0.1;

  // Calculate clothing cost per extra
  if (extrasCount > 150) {
    clothingCostPerExtra *= 0.9;
  }
  let totalClothingCost = clothingCostPerExtra * extrasCount;

  // Calculate the difference between the budget and total cost
  let difference = Math.abs(budget - (totalClothingCost + decorationCost));

  // Output message based on the difference
  if (totalClothingCost + decorationCost > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
  } else if (totalClothingCost + decorationCost <= budget) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
  }
}

godzila(["20000", "120", "55.5"]);
