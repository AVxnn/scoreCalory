let men = document.querySelector('.men');
let women = document.querySelector('.women');

let age = document.querySelector('.input_age');
let height = document.querySelector('.input_height');
let ves = document.querySelector('.input_ves');

let activityChecks = document.querySelectorAll('.check');

let buttonResult = document.querySelector('.button_result');

let help = document.querySelector('.last_very_help');

let down = document.querySelector('.last_very_down');

let up = document.querySelector('.last_very_up');


let stats = [];

men.addEventListener('click', function(){
    if (women.classList.contains('activette')){
        women.classList.remove('activette');
        men.classList.add('activette');
    } else {
        men.classList.add('activette');
    }
    stats[0] = 'men';
})

women.addEventListener('click', function(){
    if (men.classList.contains('activette')){
        men.classList.remove('activette');
        women.classList.add('activette');
    } else {
        women.classList.add('activette');
    }
    stats[0] = 'women';
})

age.addEventListener('keyup', function(){
    stats[1] = age.value;
})

height.addEventListener('keyup', function(){
    stats[2] = height.value;
})

ves.addEventListener('keyup', function(){
    stats[3] = ves.value;
})


for (let check of activityChecks){
    check.addEventListener('click', function(){
        document.querySelector('.text_lower').classList.remove('checkeding');
        document.querySelector('.text_medium').classList.remove('checkeding');
        document.querySelector('.text_high').classList.remove('checkeding');
        document.querySelector('.text_very_high').classList.remove('checkeding');
        document.querySelector('.text_minimal').classList.remove('checkeding');
        if (check.getAttribute('id') === '1'){
            document.querySelector('.text_minimal').classList.add('checkeding');
            stats[4] = 1.2;
        } else if (check.getAttribute('id') === '2'){
            document.querySelector('.text_lower').classList.add('checkeding');
            stats[4] = 1.375;
        } else if (check.getAttribute('id') === '3'){
            document.querySelector('.text_medium').classList.add('checkeding');
            stats[4] = 1.55;
        } else if (check.getAttribute('id') === '4'){
            document.querySelector('.text_high').classList.add('checkeding');
            stats[4] = 1.7;
        } else if (check.getAttribute('id') === '5'){
            document.querySelector('.text_very_high').classList.add('checkeding');
            stats[4] = 1.9;
        }

    })

}

buttonResult.addEventListener('click', function (){
    if (stats[1] < 13){
        alert('Введите возраст больше 13 лет')
    } else if (stats[1] > 80){
        alert('Введите возраст меньше 80 лет')
    }
    if (stats[0] === 'men'){
        stats[5] = (10 * stats[3] + 6.25 * stats[2] + 5 * stats[1] + 5) * stats[4]

    }
    if (stats[0] === 'women'){
        stats[5] = (10 * stats[3] + 6.25 * stats[2] + 5 * stats[1] - 161) * stats[4]
    }
    help.innerHTML = Math.round(stats[5]);
    down.innerHTML = Math.round(stats[5] * 0.7);
    up.innerHTML = Math.round(stats[5] * 1.3);
})