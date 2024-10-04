let btn = document.querySelector(".submit-btn");
let result = document.querySelector("#result");
let degrees = document.querySelector("#temperature");
let select = document.querySelector("#unit");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    convertemp();
})
function convertemp (){
     let inputvalue = degrees.value;
     if(select.value === "Fahrenheit"){
        const celciustofahrenit = (inputvalue - 32) * (5/9);
        result.innerHTML=`${celciustofahrenit.toFixed(3)}`;
     }
     else if(select.value === "Kelvin"){
        const celciustokelvin = inputvalue - 273.15;
        result.innerHTML=`${celciustokelvin.toFixed(3)}`;
     }
     else{
        alert("fun");
     }
}