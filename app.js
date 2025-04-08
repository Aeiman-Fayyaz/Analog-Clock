const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const minute = document.querySelector(".minute")
const hours = document.querySelector(".hours")

for (let i = 0 ; i < 60 ; i++){
    const mElement = document.createElement("i")
    const sElement = document.createElement("i")
    mElement.className = "element"
    sElement.className = "element"
    mElement.style = "--rotate:${6 * i}deg"
    sElement.style = "--rotate:${6 * i}deg"
    mElement.setAttribute('data-i' , i)
    sElement.setAttribute('data-i' , i)

    seconds.append(sElement)
    minutes.append(mElement)
}

let minuteAngle = 0
let secondAngle = 0

function getTime() {
    let date = new date();
    const s = date.getSeconds();
    const m = date.getMinutes();

    hours.textContent = date.getHours();
    minute.textContent = m;

    minuteAngle += s === 0 ? 6 : 0 ;
    minutes.style = '--dRotate:${minuteAngle}deg';

    secondAngle += 6;
    seconds.style = '--dRotate:${secondAngle}deg';
}

getTime();
setInterval(getTime , 1000)

