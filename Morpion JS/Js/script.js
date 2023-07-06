function saisieValeurInputJ1(){
    let inputSaisie = document.getElementById("popUpPseudoInput").value
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
    globalThis.container = document.querySelector(".container")
    
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

function replay(){
    const buttonReplayDel = document.getElementsByClassName("buttonReplay")
    buttonReplayDel[0].remove()

    for(let i = 1; i <=9; i++){
        let boxReset = document.querySelector("#box"+i)
        boxReset.classList.remove("clicked-X")
        boxReset.classList.remove("clicked-O")
        boxReset.classList.remove("victoireClickedO")
        boxReset.classList.remove("victoireClickedX")
        boxReset.classList.add("box")
    }

    spanDivTurn1 = document.getElementById("spanDivTurn1")
    spanDivTurn2 = document.getElementById("spanDivTurn2")
    spanDivTurn1.innerHTML = "Au tour de "
    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo")
    spanDivTurn2.innerHTML = " de joué."
    turnSymbole.setAttribute("src", "./img/x.png")
    
    divTurn.classList.remove("victoireTopInfo")
    divTurn.classList.remove("egaliteTopInfo")



    start()
}

function boutonReplay(){
    const replayButton = document.createElement("button")
    replayButton.classList.add("buttonReplay")
    replayButton.onclick = replay
    container.appendChild(replayButton)
    replayButton.innerText = "Replay"
}

function victoireX(){
    localStorage.setItem("score", ++scoreJ1)

    document.getElementById("pseudoTour").innerHTML = ""
    turnSymbole.setAttribute("src", "./img/x.png")
    spanDivTurn1 = document.getElementById("spanDivTurn1")
    spanDivTurn2 = document.getElementById("spanDivTurn2")
    spanDivTurn1.innerHTML = "Victoire de "+ localStorage.getItem("pseudo")
    spanDivTurn2.innerHTML = ""
    document.getElementById("scoreJ1").innerHTML = localStorage.getItem("score")
}

function victoireO(){
    localStorage.setItem("score2", ++scoreJ2)

    document.getElementById("pseudoTour").innerHTML = ""
    turnSymbole.setAttribute("src", "./img/letter-o.png")
    spanDivTurn1 = document.getElementById("spanDivTurn1")
    spanDivTurn2 = document.getElementById("spanDivTurn2")
    spanDivTurn1.innerHTML = "Victoire de "+ localStorage.getItem("pseudo2")
    spanDivTurn2.innerHTML = ""
    document.getElementById("scoreJ2").innerHTML = localStorage.getItem("score2")
}

function victoire(){
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")
    const box4 = document.getElementById("box4")
    const box5 = document.getElementById("box5")
    const box6 = document.getElementById("box6")
    const box7 = document.getElementById("box7")
    const box8 = document.getElementById("box8")
    const box9 = document.getElementById("box9")

    const divTurn = document.getElementById("divTurn")

    if(box1.classList.contains("clicked-X") && box2.classList.contains("clicked-X") && box3.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedX")
        box2.classList.add("victoireClickedX")
        box3.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
        
    }
    if(box1.classList.contains("clicked-X") && box4.classList.contains("clicked-X") && box7.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedX")
        box4.classList.add("victoireClickedX")
        box7.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box4.classList.contains("clicked-X") && box5.classList.contains("clicked-X") && box6.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box4.classList.add("victoireClickedX")
        box5.classList.add("victoireClickedX")
        box6.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box7.classList.contains("clicked-X") && box8.classList.contains("clicked-X") && box9.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box7.classList.add("victoireClickedX")
        box8.classList.add("victoireClickedX")
        box9.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box2.classList.contains("clicked-X") && box5.classList.contains("clicked-X") && box8.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box2.classList.add("victoireClickedX")
        box5.classList.add("victoireClickedX")
        box8.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box3.classList.contains("clicked-X") && box6.classList.contains("clicked-X") && box9.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box3.classList.add("victoireClickedX")
        box6.classList.add("victoireClickedX")
        box9.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box1.classList.contains("clicked-X") && box5.classList.contains("clicked-X") && box9.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedX")
        box5.classList.add("victoireClickedX")
        box9.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }
    if(box3.classList.contains("clicked-X") && box5.classList.contains("clicked-X") && box7.classList.contains("clicked-X")){
        divTurn.classList.add("victoireTopInfo")
        box3.classList.add("victoireClickedX")
        box5.classList.add("victoireClickedX")
        box7.classList.add("victoireClickedX")

        boutonReplay()
        victoireX()
    }

    if(box1.classList.contains("clicked-O") && box2.classList.contains("clicked-O") && box3.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedO")
        box2.classList.add("victoireClickedO")
        box3.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box1.classList.contains("clicked-O") && box4.classList.contains("clicked-O") && box7.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedO")
        box4.classList.add("victoireClickedO")
        box7.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box4.classList.contains("clicked-O") && box5.classList.contains("clicked-O") && box6.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box4.classList.add("victoireClickedO")
        box5.classList.add("victoireClickedO")
        box6.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box7.classList.contains("clicked-O") && box8.classList.contains("clicked-O") && box9.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box7.classList.add("victoireClickedO")
        box8.classList.add("victoireClickedO")
        box9.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box2.classList.contains("clicked-O") && box5.classList.contains("clicked-O") && box8.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box2.classList.add("victoireClickedO")
        box5.classList.add("victoireClickedO")
        box8.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box3.classList.contains("clicked-O") && box6.classList.contains("clicked-O") && box9.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box3.classList.add("victoireClickedO")
        box6.classList.add("victoireClickedO")
        box9.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box1.classList.contains("clicked-O") && box5.classList.contains("clicked-O") && box9.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box1.classList.add("victoireClickedO")
        box5.classList.add("victoireClickedO")
        box9.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    if(box3.classList.contains("clicked-O") && box5.classList.contains("clicked-O") && box7.classList.contains("clicked-O")){
        divTurn.classList.add("victoireTopInfo")
        box3.classList.add("victoireClickedO")
        box5.classList.add("victoireClickedO")
        box7.classList.add("victoireClickedO")

        boutonReplay()
        victoireO()
    }
    else if(nbclick == 9){
        divTurn.classList.add("egaliteTopInfo")

        document.getElementById("pseudoTour").innerHTML = ""
        turnSymbole.setAttribute("src", "./img/equal.png")
        spanDivTurn1 = document.getElementById("spanDivTurn1")
        spanDivTurn2 = document.getElementById("spanDivTurn2")
        spanDivTurn1.innerHTML = "Egalité entre "+ localStorage.getItem("pseudo") + " et " +  localStorage.getItem("pseudo2")
        spanDivTurn2.innerHTML = ""
        boutonReplay()
    }

    
}

globalThis.scoreJ1 = 0
globalThis.scoreJ2 = 0

globalThis.pseudoVerif = 0

const figSymbole = document.querySelector(".figureTurnSymbole")
    
globalThis.turnSymbole = document.createElement("img")
turnSymbole.setAttribute("src", "./img/x.png")
figSymbole.appendChild(turnSymbole)

function start(){
    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo")

    localStorage.setItem("score", scoreJ1)
    localStorage.setItem("score2", scoreJ2)
    
    document.getElementById("scoreJ1").innerHTML = localStorage.getItem("score")
    document.getElementById("scoreJ2").innerHTML = localStorage.getItem("score2")
    
    document.getElementById("spanScoreJ1").innerHTML = "score de "+ localStorage.getItem("pseudo") +"<br>"
    document.getElementById("spanScoreJ2").innerHTML = "score de "+ localStorage.getItem("pseudo2")+ "<br>"

    globalThis.turn = 0
    
    globalThis.nbclick = 0


    for(let i = 1; i <= 9; i++){
        let box = document.querySelector("#box"+i)

        if(i == 9 && i == 8){
            box.classList.add("boxO")
        }
        else{
            box.classList.add("boxX")
        }

        box.addEventListener("click", function(){
            if(turn == 0){
                if(box.classList.contains("clicked-O") || box.classList.contains("clicked-X")){ 
                    return
                }
                else{
                    box.classList.add("clicked-X")
                    document.getElementById("pseudoTour").innerHTML = localStorage.getItem("pseudo2")
                    turnSymbole.setAttribute("src", "./img/letter-o.png")
                    nbclick++
                    turn++
                    victoire()
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
                    nbclick++
                    turn--
                    victoire()
                }
            }
           
        })
    }
}


popUpJ1()
