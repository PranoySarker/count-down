var endDate = new Date('Nov 20, 2022 22:00:00').getTime();

var countDownTimer = setInterval(() => {

    var now = new Date().getTime();

    var remainingTime = endDate - now;

    const second = 1000;

    const minute = second * 60;

    const hour = minute * 60;

    const day = hour * 24;

    daysLeft = Math.floor(remainingTime / day);

    hoursLeft = Math.floor((remainingTime % day) / hour);

    minutesLeft = Math.floor((remainingTime % hour) / minute);

    secondsLeft = Math.floor((remainingTime % minute) / second);

    document.querySelector('#days').innerHTML = daysLeft;

    document.querySelector('#hours').innerHTML = hoursLeft;

    document.querySelector('#minutes').innerHTML = minutesLeft;

    document.querySelector('#seconds').innerHTML = secondsLeft;

    if (remainingTime <= 0) {

        document.write('Time Up!');

    }

}, 1000);