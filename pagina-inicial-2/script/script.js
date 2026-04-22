function glob(){

    const audio = new Audio("media/reducedglobglab.mp3")

    audio.play()

    document.body.style.backgroundImage = "url(style/jumscare.png)";

    let segundosRestantes = 10
    const timer = setInterval (() => {
        segundosRestantes--
        if (segundosRestantes <=0){
            document.body.style.backgroundImage = 'linear-gradient(to top, #3d6fda, #89b9e6)'
            audio.pause()
            clearInterval(timer)
        }
    }, 1000)
}

function convToCash(i){

    let v = i.value.replace(/\D/g, '');
    v = (v/100).toFixed(2)
    v = v.replace(".", ",")
    v = v.replace (/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
    v = v.replace (/(\d)(\d{3}),/g, "$1.$2,")
    
    i.value = `R$ ${v}`
}

function changeGameLayout(){

    let playerCountF = document.querySelector('#playerCount')
    let playerCount = Number(playerCountF.value)


    //document.querySelector('#p1').style.display = 'none'

    switch (playerCount) {
        case 2:
            document.querySelector('#p3').style.display = 'none'
            document.querySelector('#p4').style.display = 'none'
            document.querySelector('#p5').style.display = 'none'
            document.querySelector('#p6').style.display = 'none'
            
            break;
    
        case 3:
            document.querySelector('#p3').style.display = 'block'
            document.querySelector('#p4').style.display = 'none'
            document.querySelector('#p5').style.display = 'none'
            document.querySelector('#p6').style.display = 'none'

            break

        case 4:
            document.querySelector('#p3').style.display = 'block'
            document.querySelector('#p4').style.display = 'block'
            document.querySelector('#p5').style.display = 'none'
            document.querySelector('#p6').style.display = 'none'

            break

        case 5:
            document.querySelector('#p3').style.display = 'block'
            document.querySelector('#p4').style.display = 'block'
            document.querySelector('#p5').style.display = 'block'
            document.querySelector('#p6').style.display = 'none'

            break

        case 6:
            document.querySelector('#p3').style.display = 'block'
            document.querySelector('#p4').style.display = 'block'
            document.querySelector('#p5').style.display = 'block'
            document.querySelector('#p6').style.display = 'block'

            break

    }
    
}

function startGame(){

    document.querySelector('#initPage').style.display = 'none'
    document.querySelector('#gamePage').style.display = 'flex'
}




