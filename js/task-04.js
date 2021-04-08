

const counterEl = document.querySelector('#counter');
// console.log('counterEl :', counterEl);
const actionDecrement = counterEl.firstElementChild;
const actionIncrement = counterEl.lastElementChild;

const counterValue = document.querySelector('#value');

const counter = {
    value: 0,
    increment() {
        // console.log('increment => this :', this);
        this.value += 1;
    },
    decrement() {
        // console.log('decrement => this :', this);
        this.value -= 1;
    },
};

actionDecrement.addEventListener("click", function () {
    // console.log("кликнули на декримент - 1");
    counter.decrement();
    // console.log(counter);
    counterValue.textContent = counter.value;
})

actionIncrement.addEventListener('click', function () {
    // console.log("кликнули на iкримент + 1");
    counter.increment();
    // console.log(counter);
    counterValue.textContent = counter.value;
})
