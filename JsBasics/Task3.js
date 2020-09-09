fibonacciRec(0, 1, 5, 0);

function fibonacciRec(prev, current, size, iteration) {
    if (iteration !== size) {
        let previousNumber = prev;
        let currentNumber = current;
        iteration++;
        placeholder = 0;
        console.log(previousNumber + currentNumber);
        placeholder = currentNumber;
        currentNumber = previousNumber + currentNumber;
        previousNumber = placeholder;
        fibonacciRec(previousNumber, currentNumber, size, iteration);
    }

    
}