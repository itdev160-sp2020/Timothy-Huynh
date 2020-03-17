//welcome message
var user = 'Timothy';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest PlayStation 4 reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 249.99,
    studentDiscount = .12,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);