function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line

  let result = 0;
  for (const product of array) {
    if (prop === product.name) {
      result += product.price * product.quantity;
    }
  }
  return result;
}
// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

//console.log(calculateTotalPrice(products, "Радар"));
// 9080

//console.log(calculateTotalPrice(products, "Сканер"));
// 10200

//console.log(calculateTotalPrice(products, "Захват"));
// 2400

//console.log(calculateTotalPrice(products, "Дроид"));
// 2800

<script type="module-3"></script>;
