const allCards = document.getElementsByClassName('card');
// console.log(allCards);

let titleCounter = 1;
let totalPriceSum = 0;
for (let card of allCards) {
    card.addEventListener('click', function (e) {
        // get title
        const title = card.querySelector('h3').innerText;
        // get price
        const price = card.querySelector('span').innerText.split(' ')[1];
        const priceConvertNumber = parseFloat(price);



        // show title in sidebar
        const titleContainer = document.querySelector('#title-container');
        const li = document.createElement('li');

        li.innerText = `${titleCounter} . ${title}`;
        titleCounter++;
        titleContainer.appendChild(li);

        // total price 
        const totalPrice = document.getElementById('total-price');
        totalPriceSum += priceConvertNumber;
        totalPrice.innerText = totalPriceSum;


    })

}

// apply button
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {

    // get the value from input
    const inputField = document.getElementById('input-field').value;
    const inputCouponCode = inputField.split(' ').join('').toUpperCase();
    if (totalPriceSum >= 200) {
        if (inputCouponCode === 'SELL200') {
            // get discount
            const discount = document.getElementById('discountPrice');
            const totalDiscount = totalPriceSum * 0.2;
            discount.innerText = totalDiscount.toFixed(2);

            // get full total rest discount
            const restDiscount = discount.innerText;
            const restDiscountNumber = parseFloat(restDiscount);
            const allTotal = totalPriceSum - restDiscountNumber;

            const total = document.getElementById('total');
            total.innerText = allTotal;

        } else {
            alert('Invalid coupon code');
        }

    } else {
        alert('Please buy at least $200');
    }

    // empty input field
    document.getElementById('input-field').value = '';

})

const body = document.getElementById('body')
const main = document.getElementById('main');
const btn = document.getElementById('purchase-btn');
const popup = document.getElementById('popup');
btn.addEventListener('click', function () {
    popup.classList.remove('hidden');
    main.classList.add('main-sec');
    body.classList.add('overflow-hidden');


})

const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function () {
    popup.classList.add('hidden');
    main.classList.remove('main-sec');
    body.classList.remove('overflow-hidden');
})