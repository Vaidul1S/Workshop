const users = [];
const btn = document.querySelector('[data-button]');

btn.addEventListener('click', e =>{
    e.preventDefault();

    let validation = true;

    const name = document.querySelector('[data-name]');    
    if (!/^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž]{2,30}$/.test(name.value)) {        
        name.value = '';
        name.placeholder = 'Neteisingai įvestas vardas!';
        validation = false;
    }

    const email = document.querySelector('[data-email]');    
    if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(email.value)) {        
        email.value = '';
        email.placeholder = 'Neteisingai įvestas El. paštas!';
        validation = false;
    }

    const age = document.querySelector('[data-age]');
    if (isNaN(age.value) || age.value < 18 || age.value > 120) {
        age.value = '';
        age.placeholder = 'Neteisingai įvestas amžius!';
        validation = false;
    }

    const phone = document.querySelector('[data-phone]');
    if (!/^\+\d{3} \d{3} \d{5}$/.test(phone.value)) {
        phone.value = '';
        phone.placeholder = 'Neteisingai įvestas telefono numeris!';
        validation = false;
    }

    const psw = document.querySelector('[data-password]');
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(psw.value)) {
        psw.value = '';
        psw.placeholder = 'Neteisingai įvestas slaptažodis!';
    }

    const pswCheck = document.querySelector('[data-password-check]');
    if (psw.value !== pswCheck.value) {
        pswCheck.value = '';
        pswCheck.placeholder = 'Slaptažodžiai nesutampa!';
        validation = false;
    }

    const popUp = document.querySelector('[data-popUp]');    
    if (validation) {
        users.push({name: name.value, email: email.value, age: age.value, phone: phone.value, password: psw.value});
        name.value = '';
        name.placeholder = '';
        email.value = '';
        email.placeholder = '';
        age.value = '';
        age.placeholder = '';
        phone.value = '';
        phone.placeholder = '';
        psw.value = '';
        psw.placeholder = '';
        pswCheck.value = '';  
        pswCheck.placeholder = '';      
        popUp.style.display = 'block';        
        setTimeout( _ => {                
            popUp.style.display = 'none';
        }, 4000);
    }
    console.log('Users:', users);
    
});