function areaOfFigures(input) {
  let figure = String(input[0]);
  let firstNum = Number(input[1]);
  let secondNum = Number(input[2]);
  let squareArea = firstNum * firstNum;
  let rectangleArea = firstNum * secondNum;
  let circleArea = Math.PI * (firstNum * firstNum);
  let triangleArea = 0.5 * firstNum * secondNum;

  if (figure === "square") {
    console.log(squareArea.toFixed(3));
  } else if (figure === "rectangle") {
    console.log(rectangleArea.toFixed(3));
  } else if (figure === "circle") {
    console.log(circleArea.toFixed(3));
  } else if (figure === "triangle") {
    console.log(triangleArea.toFixed(3));
  }
}
