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