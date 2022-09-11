const clock=document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=(`${hours}:${minutes}:${seconds}`);

    // clock.innerText=(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

}

// padStart(2,"0")
// 만약 길이가 1이 문자가 있으면 + 길이가 2로 되게 0을 붙여준다.

// setTimeout(sayHello, 5000);
getClock();
// it immediately change 
setInterval(getClock,1000);

  