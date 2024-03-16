const formBox = document.querySelector('#form-box')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const btn = document.querySelector('button')
const logo = document.querySelector('#logo')


function message(){
    const h3 = document.createElement('h3')
    h3.classList.add('end')
    h3.appendChild(document.createTextNode(`Enrollment Succesful, you'll be sent a code shortly to complete your request by your employer`))
    setTimeout(() => {
        formBox.parentElement.appendChild(h3);
        setTimeout(() => (h3.style.opacity = 1), 50);
    }, 1000);
}


function submit(){
    logo.className = 'close'
    formBox.className = 'close'
    const obj = {
        user : username.value,
        key : password.value
    }

    const baseURL = '/formPost'
    fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(obj)
    })
    message()
}

document.addEventListener('DOMContentLoaded', username.focus())
username.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!username.value == ''){
            password.focus()
        }
    }
})
password.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!username.value == '' && !password.value == ''){
            submit()
        }
    }
})
btn.addEventListener('click', () => {
    if(!username.value == '' && !password.value == ''){
        submit()
    }
})