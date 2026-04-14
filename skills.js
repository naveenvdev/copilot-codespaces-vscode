function calculateNumbers(var1, var2, operator = "+") {
	const num1 = Number(var1);
	const num2 = Number(var2);

	if (Number.isNaN(num1) || Number.isNaN(num2)) {
		throw new Error("Both inputs must be valid numbers.");
	}

	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			if (num2 === 0) {
				throw new Error("Division by zero is not allowed.");
			}
			return num1 / num2;
		default:
			throw new Error("Operator must be one of: +, -, *, /");
	}
}

module.exports = { calculateNumbers };