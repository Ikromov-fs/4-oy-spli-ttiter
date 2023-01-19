let __form = document.querySelector('#form');
let __moneyInput = document.querySelector('#sumInput');
let __people = document.querySelector('#people');
let __rezultMoney = document.querySelector('#rezultSum');
let __lastMoney = document.querySelector('#lastSum');
let __btn = document.querySelector('#btn');
let __matches1 = document.querySelector('#matches1');
let __matches2 = document.querySelector('#matches2');


__matches1.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.matches('#fife')) {
        console.log('5%');
        // a = 5
        __form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(money);
            let money = __moneyInput.value
            let people = __people.value
            let sum = (((money * 5) / 100) + (+money)) / people
            let prosent = (((money * 5) / 100) / people)

            __lastMoney.textContent = sum.toFixed(2) + '$';
            __rezultMoney.textContent = prosent.toFixed(2) + '$'

            __moneyInput.value = '';
            __people.value = '';
        })

    }
    else if (e.target.matches('#ten')) {
        console.log('10%');
        __form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(money);
            let money = __moneyInput.value
            let people = __people.value
            let sum = (((money * 10) / 100) + (+money)) / people
            let prosent = (((money * 10) / 100) / people)

            __lastMoney.textContent = sum.toFixed(2) + '$';
            __rezultMoney.textContent = prosent.toFixed(2) + '$'

            __moneyInput.value = '';
            __people.value = '';
        })

    }
    else if (e.target.matches('#fifeTen')) {
        console.log('15%');
        __form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(money);
            let money = __moneyInput.value
            let people = __people.value
            let sum = (((money * 15) / 100) + (+money)) / people
            let prosent = (((money * 15) / 100) / people)

            __lastMoney.textContent = sum.toFixed(2) + '$';
            __rezultMoney.textContent = prosent.toFixed(2) + '$'

            __moneyInput.value = '';
            __people.value = '';
        })

    }
});

__matches2.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.matches('#chorak')) {
        console.log('20%');
        __form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(money);
            let money = __moneyInput.value
            let people = __people.value
            let sum = (((money * 20) / 100) + (+money)) / people
            let prosent = (((money * 20) / 100) / people)

            __lastMoney.textContent = sum.toFixed(2) + '$';
            __rezultMoney.textContent = prosent.toFixed(2) + '$'

            __moneyInput.value = '';
            __people.value = '';
        })

        
    }
    else if (e.target.matches('#chorak2')) {
        console.log('25%');
        __form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(money);
            let money = __moneyInput.value
            let people = __people.value
            let sum = (((money * 25) / 100) + (+money)) / people
            let prosent = (((money * 25) / 100) / people)

            __lastMoney.textContent = sum.toFixed(2) + '$';
            __rezultMoney.textContent = prosent.toFixed(2) + '$'

            __moneyInput.value = '';
            __people.value = '';
        })
    }
});

__btn.addEventListener('click', () => {
    // e.preventDefault()
    __lastMoney.textContent = '0.0'
    __rezultMoney.textContent = '0.0'
})





