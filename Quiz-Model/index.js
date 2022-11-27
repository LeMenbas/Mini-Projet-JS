const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector('#btn-2');
const btn3 = document.getElementById("btn-3");
const response = document.getElementById('reponse-1');
const section1 = document.querySelector("section")


// click event 

btn1.addEventListener("click",() => {
    response.style.visibility = "visible"
    response.style.border = "2px solid green"
})
btn2.addEventListener("click",() => {
    response.style.visibility = "visible"
    response.style.border = "2px solid red"
})
btn3.addEventListener("click",() => {
    response.style.visibility = "visible"
    response.style.border = "2px solid orange"
})