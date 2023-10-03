// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    // Define the width of the container (adjust as needed)
    const containerWidth = 400; // You should replace this with the actual container width
  
    // Define the DODGER's width (adjust as needed)
    const dodgerWidth = 40; // You should replace this with the actual DODGER width
  
    // Calculate the maximum allowed right position
    const maxRightPosition = containerWidth - dodgerWidth;
  
    if (right < maxRightPosition) {
      dodger.style.left = `${right + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  