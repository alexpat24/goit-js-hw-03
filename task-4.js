const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  const salarys = Object.values(employees);
  let total = 0;
  for (const salary of salarys) {
    total += salary;
  }
  return total;
};

<script type="module-3"></script>;
