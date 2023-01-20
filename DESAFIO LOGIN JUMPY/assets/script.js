
const user = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const cpf = document.getElementById("cpf")

const form = document.getElementById("form-site")

const smallText = document.getElementById("small-text-button")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    validForm()
})

function validForm(){

    const userValue = user.value
    const emailValue = email.value
    const phoneValue = phone.value
    const passwordValue = password.value
    const cpfValue = cpf.value

    if(userValue === ''){
        validError(user)
    }else{
        validSucess(user)
    }

    if(emailValue === ''){
        validError(email)
    }else{
        validSucess(email)
    }

    if(phoneValue === ''){
        validError(phone)
    }else if(phoneValue.length < 11){
        validError(phone)
        document.getElementById('small-text-phone').innerHTML = '*Por favor, digite o telefone corretamente*'
    }else{
        validSucess(phone)
    }

    if(cpfValue === ''){
        validError(cpf)
    }else if(cpfValue.length < 11){
        validError(cpf)
        document.getElementById('small-text-cpf').innerHTML = '*Por favor, digite o CPF corretamente*'
    }else{
        validSucess(cpf)
    }

    if(passwordValue === ''){
        validError(password)
    }else{
        validSucess(password)
    }
}


function validError(input){

    const formInput = input.parentElement;

    formInput.className = "form-input error"
    smallText.innerHTML = "Campos obrigatórios não registrados."
    smallText.className = "small-text errorForm"
}

function validSucess(input){

    const formInput = input.parentElement;

    formInput.className = "form-input"
    smallText.innerHTML = "Sucesso!"
    smallText.className = "small-text sucessForm"
    
}

