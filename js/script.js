const counterSum = document.getElementById('counter-number');
const addOneValueButton = document.getElementById('addOneValueButton');
const addTenValueButton = document.getElementById('addTenValueButton');
const addHundredValueButton = document.getElementById('addHundredValueButton');
const counterResetButton = document.getElementById('resetButton');

const COUNTER_INIT_VALUE = 0;

let counter = COUNTER_INIT_VALUE;
counterSum.innerText = counter;

addOneValueButton.addEventListener('click', function () {
	counter += parseInt(addOneValueButton.dataset.value);

	counterSum.innerText = counter;
});

addTenValueButton.addEventListener('click', function () {
	counter += parseInt(addTenValueButton.dataset.value);

	counterSum.innerText = counter;
});

addHundredValueButton.addEventListener('click', function () {
	counter += parseInt(addHundredValueButton.dataset.value);

	counterSum.innerText = counter;
});

counterResetButton.addEventListener('click', function () {
	counter = COUNTER_INIT_VALUE;

	counterSum.innerText = counter;
});
