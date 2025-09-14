function calculate() {

    // YOUR CODE GOES HERE
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    var sum = parseFloat(num1) + parseFloat(num2);
    // console.log(sum);
    var calcSum = document.getElementById("result");
    calcSum.innerText = "The sum is: " + sum;
}