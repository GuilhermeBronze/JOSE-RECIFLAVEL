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
    
function lengthTest() {

    const fValue = document.querySelector("input#initCashF");

    if (fValue.value.length > 7) {

        fValue.value = fValue.value.slice(0, 7);
        
    }

    }

function initCashF(i){

    let v = i.value.replace(/\D/g, '');
    v = (v/100).toFixed(2)
    v = v.replace(".", ",")
    v = v.replace (/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
    v = v.replace (/(\d)(\d{3}),/g, "$1.$2,")
    
    i.value = `R$ ${v}`

}





