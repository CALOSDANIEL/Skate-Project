const form = document.getElementById('formulario');
const credenciales = {
    admi : {
        user : 'admi@correo.com',
        pass : '123456'
    },
    user : {
        user : 'user@correo.com',
        pass : '654321'
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('username').value
    const pass = document.getElementById('pass').value
    
    // JSON 

    let Users = JSON.parse(localStorage.getItem('users')) || []
    let UserValid = Users.find(user => user.email === email && user.password === pass)

    
    if(email === credenciales.user.user && pass === credenciales.user.pass||UserValid){
        localStorage.setItem('login__success', JSON.stringify(UserValid))
        form.action = 'index__user.html'
    }else if(email === credenciales.admi.user && pass === credenciales.admi.pass){
        form.action = 'index__admi.html'
    }else{
        alert('Las credenciales son incorrectas')
    }

    form.submit();


})

