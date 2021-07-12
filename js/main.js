function askName() {
    let name = prompt("Enter Your Name");
    document.getElementById("myName").innerHTML = name;
}

function showTime() {

    const today = new Date();
    let dayList = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    let date = addZero(today.getDate());
    let month = addZero(today.getMonth() + 1);
    let year = addZero(today.getFullYear());
    let day = today.getDay();
    let hour = addZero(today.getHours());
    let minute = addZero(today.getMinutes());
    let second = addZero(today.getSeconds());


    let currentTime = `  ${date} / ${month} / ${year}  -  ${dayList[day]} ${hour}:${minute} :${second}  `;


    console.log(currentTime);
    document.getElementById("myClock").innerHTML = currentTime;

    setInterval(showTime, 1000);

};

function addZero(num) {
    return num < 10 ? `0${num}` : num;
};


askName();
showTime();
