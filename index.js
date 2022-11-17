const endDate = new Date('Nov 20, 2022 22:00:00').getTime();

const englishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
};



const countDownTimer = setInterval(() => {

    const now = new Date().getTime();

    const remainingTime = endDate - now;

    const second = 1000;

    const minute = second * 60;

    const hour = minute * 60;

    const day = hour * 24;

    const daysLeft = Math.floor(remainingTime / day);
    const banglaDaysLeft = daysLeft.toLocaleString('bn-BD');

    const hoursLeft = Math.floor((remainingTime % day) / hour);
    const banglaHoursLeft = hoursLeft.toLocaleString('bn-BD');

    const minutesLeft = Math.floor((remainingTime % hour) / minute);
    const banglaMinutesLeft = minutesLeft.toLocaleString('bn-BD');

    const secondsLeft = Math.floor((remainingTime % minute) / second);
    const banglaSecondsLeft = secondsLeft.toLocaleString('bn-BD');

    document.querySelector('#days').innerHTML = banglaDaysLeft;

    document.querySelector('#hours').innerHTML = banglaHoursLeft;

    document.querySelector('#minutes').innerHTML = banglaMinutesLeft;

    document.querySelector('#seconds').innerHTML = banglaSecondsLeft;

    if (remainingTime <= 0) {

        document.write('Time Up!');

    }

}, 1000);