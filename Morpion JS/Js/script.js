function saisieValeurInputJ1(){
    inputSaisie = document.getElementById("popUpPseudoInput").value
    localStorage.setItem("pseudo", inputSaisie)

    let popUpPseudoDel = document.getElementsByClassName("popUpPseudo")
    popUpPseudoDel[0].remove()

    popUpJ2()
}

function saisieValeurInputJ2(){
    let inputSaisie2 = document.getElementById("popUpPseudoInput").value
    if(inputSaisie2 == localStorage.getItem("pseudo")){
        alert("Vous avez choisie le même pseudo que le Joueur 1 veuillez changer s'il vous plaît.")
        return
    }
    else{
        localStorage.setItem("pseudo2", inputSaisie2)
    }

    let popUpPseudoDel2 = document.getElementsByClassName("popUpPseudo")
    popUpPseudoDel2[0].remove()

    start()
}

function popUpJ1(){
    const container = document.querySelector(".container")
    
    const popUpPseudo = document.createElement("div")
    popUpPseudo.classList.add("popUpPseudo")
    container.appendChild(popUpPseudo)
    
    const popUpPseudoSpan = document.createElement("span")
    popUpPseudoSpan.setAttribute("id", "popUpPseudoSpan")
    popUpPseudo.appendChild(popUpPseudoSpan)
    
    document.getElementById("popUpPseudoSpan").innerHTML = "joueur 1 veuillez choisir votre pseudo"
    
    const popUpPseudoForm = document.createElement("form")
    popUpPseudoForm.setAttribute("id", "popUpPseudoForm")
    popUpPseudo.appendChild(popUpPseudoForm)
    
    const popUpPseudoInput = document.createElement("input")
    popUpPseudoInput.setAttribute("id", "popUpPseudoInput")
    popUpPseudoForm.appendChild(popUpPseudoInput)
    
    const popUpPseudoSpanSymbole = document.createElement("span")
    popUpPseudoSpanSymbole.setAttribute("id", "popUpPseudoSpanSymbole")
    popUpPseudo.appendChild(popUpPseudoSpanSymbole)
    
    document.getElementById("popUpPseudoSpanSymbole").innerHTML = "Votre Symbole sera:"

    const popUpPseudoFig = document.createElement("figure")
    popUpPseudoFig.setAttribute("id", "popUpPseudoFig")
    popUpPseudo.appendChild(popUpPseudoFig)

    const popUpImg = document.createElement("img")
    popUpImg.setAttribute("src", "./img/x.png")
    popUpPseudoFig.appendChild(popUpImg)

    const popUpPseudoButton = document.createElement("button")
    popUpPseudoButton.setAttribute("id", "popUpPseudoButton")
    popUpPseudo.appendChild(popUpPseudoButton)
    popUpPseudoButton.onclick = saisieValeurInputJ1
    popUpPseudoButton.innerText = "jouer"
}

function popUpJ2(){
    const container = document.querySelector(".container")
    
    const popUpPseudo = document.createElement("div")
    popUpPseudo.classList.add("popUpPseudo")
    container.appendChild(popUpPseudo)
    
    const popUpPseudoSpan = document.createElement("span")
    popUpPseudoSpan.setAttribute("id", "popUpPseudoSpan")
    popUpPseudo.appendChild(popUpPseudoSpan)
    
    document.getElementById("popUpPseudoSpan").innerHTML = "joueur 2 veuillez choisir votre pseudo"
    
    const popUpPseudoForm = document.createElement("form")
    popUpPseudoForm.setAttribute("id", "popUpPseudoForm")
    popUpPseudo.appendChild(popUpPseudoForm)
    
    const popUpPseudoInput = document.createElement("input")
    popUpPseudoInput.setAttribute("id", "popUpPseudoInput")
    popUpPseudoForm.appendChild(popUpPseudoInput)

    const popUpPseudoSpanSymbole = document.createElement("span")
    popUpPseudoSpanSymbole.setAttribute("id", "popUpPseudoSpanSymbole")
    popUpPseudo.appendChild(popUpPseudoSpanSymbole)
    
    document.getElementById("popUpPseudoSpanSymbole").innerHTML = "Votre Symbole sera:"

    const popUpPseudoFig = document.createElement("figure")
    popUpPseudoFig.setAttribute("id", "popUpPseudoFig")
    popUpPseudo.appendChild(popUpPseudoFig)

    const popUpImg = document.createElement("img")
    popUpImg.setAttribute("src", "./img/letter-o.png")
    popUpPseudoFig.appendChild(popUpImg)

    
    const popUpPseudoButton = document.createElement("button")
    popUpPseudoButton.setAttribute("id", "popUpPseudoButton")
    popUpPseudo.appendChild(popUpPseudoButton)
    popUpPseudoButton.onclick = saisieValeurInputJ2
    popUpPseudoButton.innerText = "jouer"
}

function victoire(numeroCaseVic, turnVic){
    
}

function start(){
    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo")
    
    const figSymbole = document.querySelector(".figureTurnSymbole")

    const turnSymbole = document.createElement("img")
    turnSymbole.setAttribute("src", "./img/x.png")
    figSymbole.appendChild(turnSymbole)

    let turn = 0

    for(let i = 1; i <= 9; i++){
        const box = document.querySelector("#box"+i)


        box.addEventListener("click", function(){

            if(turn == 0){ 
                if(box.classList.contains("clicked-O") || box.classList.contains("clicked-X")){ 
                    return
                }
                else{
                    box.classList.add("clicked-X")
                    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo2")
                    turnSymbole.setAttribute("src", "./img/letter-o.png")
                    turn++
                    victoire(i, turn)
                }

            }
            else{
                if(box.classList.contains("clicked-X") || box.classList.contains("clicked-O") ){
                    return
                }
                else{
                    box.classList.add("clicked-O")
                    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo")
                    turnSymbole.setAttribute("src", "./img/x.png")
                    turn--
                }
            }
           
        })
    }
}


popUpJ1()
