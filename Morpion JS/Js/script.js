function saisieValeurInputJ1(){
    let inputSaisie = document.getElementById("popUpPseudoInput").value
    localStorage.setItem("pseudo", inputSaisie)

    let popUpPseudoDel = document.getElementsByClassName("popUpPseudo")
    popUpPseudoDel[0].remove()

    popUpJ2()
}

function saisieValeurInputJ2(){
    let inputSaisie2 = document.getElementById("popUpPseudoInput").value
    localStorage.setItem("pseudo2", inputSaisie2)

    let popUpPseudoDel2 = document.getElementsByClassName("popUpPseudo")
    popUpPseudoDel2[0].remove()

    start()
}

function popUpJ1(){
    let container = document.querySelector(".container")
    
    let popUpPseudo = document.createElement("div")
    popUpPseudo.classList.add("popUpPseudo")
    container.appendChild(popUpPseudo)
    
    let popUpPseudoSpan = document.createElement("span")
    popUpPseudoSpan.setAttribute("id", "popUpPseudoSpan")
    popUpPseudo.appendChild(popUpPseudoSpan)
    
    document.getElementById("popUpPseudoSpan").innerHTML = "joueur 1 veuillez choisir votre pseudo"
    
    let popUpPseudoForm = document.createElement("form")
    popUpPseudoForm.setAttribute("id", "popUpPseudoForm")
    popUpPseudo.appendChild(popUpPseudoForm)
    
    let popUpPseudoInput = document.createElement("input")
    popUpPseudoInput.setAttribute("id", "popUpPseudoInput")
    popUpPseudoForm.appendChild(popUpPseudoInput)
    
    let popUpPseudoButton = document.createElement("button")
    popUpPseudoButton.setAttribute("id", "popUpPseudoButton")
    popUpPseudo.appendChild(popUpPseudoButton)
    popUpPseudoButton.onclick = saisieValeurInputJ1
    popUpPseudoButton.innerText = "jouer"
}

function popUpJ2(){
    let container = document.querySelector(".container")
    
    let popUpPseudo = document.createElement("div")
    popUpPseudo.classList.add("popUpPseudo")
    container.appendChild(popUpPseudo)
    
    let popUpPseudoSpan = document.createElement("span")
    popUpPseudoSpan.setAttribute("id", "popUpPseudoSpan")
    popUpPseudo.appendChild(popUpPseudoSpan)
    
    document.getElementById("popUpPseudoSpan").innerHTML = "joueur 2 veuillez choisir votre pseudo"
    
    let popUpPseudoForm = document.createElement("form")
    popUpPseudoForm.setAttribute("id", "popUpPseudoForm")
    popUpPseudo.appendChild(popUpPseudoForm)
    
    let popUpPseudoInput = document.createElement("input")
    popUpPseudoInput.setAttribute("id", "popUpPseudoInput")
    popUpPseudoForm.appendChild(popUpPseudoInput)
    
    let popUpPseudoButton = document.createElement("button")
    popUpPseudoButton.setAttribute("id", "popUpPseudoButton")
    popUpPseudo.appendChild(popUpPseudoButton)
    popUpPseudoButton.onclick = saisieValeurInputJ2
    popUpPseudoButton.innerText = "jouer"
}

function start(){
    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo")
}


popUpJ1()
