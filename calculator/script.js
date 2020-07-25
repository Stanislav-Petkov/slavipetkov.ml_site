function getHistory() {
	return document.getElementById("history-value").innerText;
}
function printHistory(num) {
	document.getElementById("history-value").innerText = num;
}
function getOutput() {
	return document.getElementById("output-value").innerText;
}
function printOutput(num) {
	if (num == "") {
		document.getElementById("output-value").innerText = num;
	} else {
		document.getElementById("output-value")
			.innerText = getFormattedNumber(num);
	}
}
function getFormattedNumber(num) {
	if (num == "-") { // Without the check if backspace is clicked for the last digit of a negative number NaN was displayed
		return "";
	}
	var n = Number(num);
	/* set format : 55,555 */
	var value = n.toLocaleString("en");
	return value;
}
/* Replace , to ' ' */
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}
/* Get list of operators and access them one by one */
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	/* Add event listener to all of them */
	operator[i].addEventListener('click', function () {
		/* What action to perform when user clicks on the operator */
		// The clear button removes both history and result
		if (this.id == "clear") {
			printHistory("");// Print with empty character
			printOutput("");
		}
		else if (this.id == "backspace") {
			var output = reverseNumberFormat(getOutput()).toString();
			if (output) {// If output has a value
				output = output.substr(0, output.length - 1); // Removes the last element
				printOutput(output);
			}
		}
		else {
			var output = getOutput();
			var history = getHistory();
			if (output == "" && history != "") {
				// Check if the last character is an operator
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}

			// Check if output is not empty
			if (output != "" || history != "") {
				output = output == "" ? output : output = reverseNumberFormat(output);
				// When an operator is clicked the output value is first added to the history
				history = history + output;
				// If = is clicked the result is evaluated
				if (this.id == "=") {
					var result = eval(history);
					printOutput(result);
					printHistory(""); // History is set to empty string
				}
				else {// For the other operators the output is added to the history and the output is set to empty
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}

	});
}

/* Get list of numbers and access them one by one */
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
		var output = reverseNumberFormat(getOutput()); // Get the number without ,
		if (output != NaN) {//if output is a number
			output = output + this.id; // Concatenate the newly clicked number to the old one
			printOutput(output)
		}
	})
}