function glob(){

    let jumscare = document.querySelector("body")
    const audio = new Audio("media/globglab.mp3")

    audio.play()
        window.alert("Glob Glab")

        
        body.style.backgroundImage = "url(style/jumscare.png)";
        
        
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



