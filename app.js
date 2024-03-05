let textarea = document.getElementById('textarea')
let mensaje = document.getElementById('textarea2')
let matrixcodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"], ["a","ai"]  ]

// La letra "e" es convertida para "enter"
//letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//  La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function incriptar(){
let textoEncriptado = encriptardor(textarea.value)
mensaje.value = textoEncriptado
textarea.value = ""


}

function encriptardor(funsionincriptar) {

funsionincriptar = funsionincriptar.toLowerCase()
for (let i = 0; i < matrixcodigo.length; i++) {
    if (funsionincriptar.includes(matrixcodigo[i][0])) {
        funsionincriptar = funsionincriptar.replaceAll(matrixcodigo[i][0],matrixcodigo[i][1])
    }
    
}
return funsionincriptar
}

function desencripta(){
let textodesencriptado = desencriptador(textarea.value)
mensaje.value = textodesencriptado
textarea.value = ""

}





function desencriptador (funsiondesencriptar){
    let restableser = matrixcodigo.reverse();
    for (let i = 0; i < restableser.length; i++) {
        if (funsiondesencriptar.includes(restableser[i][0])){
            funsiondesencriptar = funsiondesencriptar.replaceAll(restableser[i][1],restableser[i][0])

        }
     
    }

   
 return funsiondesencriptar
   
}



function copiarTexto(){
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""

}