// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
var jButton= document.getElementById("justin-btn");
jButton.addEventListener("mouseover", mOver);
jButton.addEventListener("mouseout", mOut);
function mOver() {
    var obj = document.getElementById("result");
    obj.innerText = "Welcome to My Heart";
    obj.style = "color:blue; background-color: pink";
}

function mOut() {
    var obj = document.getElementById("result");
    obj.innerText = "Don't Leave Me Please";
    obj.style = "color:red; background-color: black";
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
