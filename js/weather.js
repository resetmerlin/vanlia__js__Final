// const API_KEY="9fdaa51a7d462e759f20f8c407f57cda";








function onGeoOk(poistion){
    const latitude = poistion.coords.latitude;
    const longitude = poistion.coords.longitude;
    console.log(poistion);
    console.log("You live in", latitude, longitude);
    //이 숫자들을 제대로 어디있는지 확인하고 싶으면? : ex: 대한민국 수지구 
    //https://openweathermap.org/
}

function onGeoError(){
    alert("Can't find you. No weather for u");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
// getCurrentPosition() 2개의 인수가 필요하다
// 하나는 모든게 잘 됐을 때 실행 될 함수다.
// 나머지 하나는 에러가 발생했을 때 실행 될 함수다.