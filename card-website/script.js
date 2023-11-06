const nome = document.querySelector("#name")
const numbercard = document.querySelector("#numbercard")
const numberInput = document.querySelector("#cardnumber")
const nometext = document.querySelector("#nametext")

// Date
const mmdate = document.querySelector("#mmdate")
const yydate = document.querySelector("#yydate")
const datetext = document.querySelector("#datetext")
const yeartext = document.querySelector("#yeartext")

//cvc

const cvc = document.querySelector(".back p")
const inputcvc = document.querySelector("#cvc")

function verifyDate(){
    if(mmdate.value == "")
    mmdate.value = mmdate.value.replace(/[^0-9]/gi, "")
        if(Number(mmdate.value) > 12){
            mmdate.value = mmdate.value.slice(0, mmdate.value.length - 1)
        }else{
            datetext.textContent = mmdate.value
        }
}

function verifyYear(){
    yydate.value = yydate.value.replace(/[^0-9]/gi, "")
    yeartext.textContent = yydate.value
}

function verifyCVC(){
    inputcvc.value = inputcvc.value.replace(/[^0-9]/gi, "")
    cvc.textContent = inputcvc.value
}

function formatCard(){
    if(numberInput.value === ""){
        numbercard.textContent = "0000 0000 0000 0000"
    }
    let txt = numberInput.value
    let regex = txt.match(/[0-9]{1,4}/g)
    if(regex !== null){
        let regexFormat = regex.join(" ")
        numberInput.value = regexFormat
        numbercard.textContent = regexFormat
    }else{

    }
}


function verify(tecla){
    let first = numberInput.value
    if(isNaN(first[0])){
        numberInput.value = first.slice(0, first.length - 1)
    }
}

//Mudando o nome

function verifyName(tecla){
    nome.value = nome.value.replace(/[^a-z\s]/gi, "")
    nometext.textContent = nome.value
}



// test
function test(){
    alert("sss")
}