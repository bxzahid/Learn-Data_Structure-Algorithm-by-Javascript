/*
    Fibonacci Calculation in JavaScript
    -----------------------------------

    As fibonacci numbers follow the pattern of:
        Fib[n] = Fib[n-1] + Fib[n-2]
    (having the base case of starting values-> Fib[0] = 0 and Fib[1] = 1)
    We can easily calculate n-th fibonacci number calculating
    all the previous values by this formula.

    NOTE: remember that, the Fibonacci[N] can be very large
        for a very small value of N (You can safely calculate almost upto N=97).
        So always be careful about the result being overflowed of Number limit.
        Calculating large values of Fibonacci needs some extra
        optimization and tricks based on the task to be solved.
*/

function fibonacci(n) {
    var fib, a = 0, b = 1;

	while(n--) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}


/************ Testing Fibonacci ***************/
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));
