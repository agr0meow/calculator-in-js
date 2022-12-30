let a = ''; // первое числоы
let b = ''; // второе число
let sign = ''; //  операция
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран 
const out = document.querySelector('.screen p');

function clearAll () {
    a = ''; // первое число и результат
    b = ''; // second number 
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // проверка на не нажатую кнопку
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получение нажатой кнопку
    const key = event.target.textContent;

    //   клавиша 0-9 и .
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        // console.table(a, b , sign);
        return;
    }

     // клавиша + - / *
     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        // console.table(a, b , sign);
        return;
    }


    //  =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b , sign);
    }

}