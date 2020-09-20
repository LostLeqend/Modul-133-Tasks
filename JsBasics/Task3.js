console.log("Task 3");

function fibonacci(n) {
    var result = [];

    for (var i = 0; i < n; i++) {
        if (i <= 1) {
            result.push(i);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }

    return result;
}

console.log(fibonacci(20));