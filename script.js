const display = document.getElementById('display'); // by id
// const equalButton = document.querySelector('.equals-btn'); (by class)

//function that show an alert if the operation is not implemented
function NotImplemented(){
    alert('This opration is not implemented yet!!')
}


//function that show the number on the input frame
function appendNumber(num) {
    document.getElementById('display').value += num;
}


//function the show the operator on the input frame
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}
  

  function appendParenthesis(parenthesis) {
    document.getElementById('display').value += parenthesis;
  }


  function deleteLastCharacter() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  

  function calculate() {
    try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  //function that calculate 1/x
  function calculateInverse() {
    var displayValue = document.getElementById('display').value;
    var result = 1 / parseFloat(displayValue);
    document.getElementById('display').value = result;
  }
  

  function calculateAbsolute() {
    var displayValue = document.getElementById('display').value;
    var result = Math.abs(parseFloat(displayValue));
    document.getElementById('display').value = result;
  }
  
  function calculatePowerOf10() {
    var displayValue = document.getElementById('display').value;
    var result = Math.pow(10, parseFloat(displayValue));
    document.getElementById('display').value = result;
  }

  function calculatePowerOf2() {
    var displayValue = document.getElementById('display').value;
    var result = Math.pow(parseFloat(displayValue), 2);
    document.getElementById('display').value = result;
  }
  
  function calculateFactorial() {
    var displayValue = document.getElementById('display').value;
    var num = parseInt(displayValue);
    if (num < 0) {
      document.getElementById('display').value = 'Error';
    } else {
      var result = 1;
      for (var i = 1; i <= num; i++) {
        result *= i;
      }
      document.getElementById('display').value = result;
    }
  }
  
  /*function calculatePowerOfY() {
    var displayValue = document.getElementById('display').value;
    var parts = displayValue.split('^');
    //display.value+='^';
  
    // Ensure there are two parts (x and y) separated by '^'
    if (parts.length === 2) {
      var base = parseFloat(parts[0]);
      var exponent = parseFloat(parts[1]);
  
      // Check if the values are valid numbers
      if (!isNaN(base) && !isNaN(exponent)) {
        var result = Math.pow(base, exponent);
        document.getElementById('display').value = result;
        return result;
      }
    }
  
    // If the input is not in the correct format, show an error
    //document.getElementById('display').value = 'Error';
  }*/
  
  
 /* function toggleSign() {
    var displayValue = document.getElementById('display').value;
    var result = -parseFloat(displayValue);
    document.getElementById('display').value = result;
  }*/


  
  