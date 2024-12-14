type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count = init;
    function increment() {
        return ++count
    }
    function reset() {
        return (count = init)
    }
    function decrement() {
        return --count
    }

    return { increment, reset, decrement }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */