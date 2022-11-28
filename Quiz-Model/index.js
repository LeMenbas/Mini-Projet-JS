const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector('#btn-2');
const btn3 = document.getElementById("btn-3");
const response = document.getElementById('reponse-1');
const section1 = document.querySelector("section")
const choix = document.getElementById("choise")


// click event 

btn1.addEventListener("click",() => {
    choix.style.visibility = 'visible'
    choix.innerHTML = "Super !"
    response.style.visibility = "visible"
    response.style.border = "2px solid green"
})
btn2.addEventListener("click",() => {
    choix.style.visibility= "visible"
    choix.innerHTML = "vous avez choisi : 'Osaka' "
    response.style.visibility = "visible"
    response.style.border = "2px solid red"
})
btn3.addEventListener("click",() => {
    choix.style.visibility= "visible"
    choix.innerHTML = "Vous avez choisi : 'Kyoto' "
    response.style.visibility = "visible"
    response.style.border = "2px solid red"
})


// click event question 2

const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector('#btn-5');
const btn6 = document.getElementById("btn-6");
const response2 = document.getElementById('reponse-2');
const section2 = document.querySelector("#question2");
const choix2 = document.getElementById("choise2");

btn4.addEventListener("click",() => {
    choix2.style.visibility = 'visible'
    choix2.innerHTML = "Vous avez choisi : 'Marseille'"
    response2.style.visibility = "visible"
    response2.style.border = "2px solid red"
})
btn5.addEventListener("click",() => {
    choix2.style.visibility= "visible"
    choix2.innerHTML = "vous avez choisi : 'Lyon' "
    response2.style.visibility = "visible"
    response2.style.border = "2px solid red"
})
btn6.addEventListener("click",() => {
    choix2.style.visibility= "visible"
    choix2.innerHTML = "Super"
    response2.style.visibility = "visible"
    response2.style.border = "2px solid green"
})