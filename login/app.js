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

    const date = document.querySelector('[data-age]').value;       
    const bDate = new Date(date);
    const today = new Date();       
        
    let age = today.getFullYear() - bDate.getFullYear();
    let months = today.getMonth() - bDate.getMonth();
    let days = today.getDay() - bDate.getMonth();
    if (months < 0 || (months === 0 && days < 0)) {
        age--;
    }     
    
    if (isNaN(age) || age < 18 || age > 120) {
        const ageText = document.querySelector('[data-age-text]');
        ageText.style.color = 'red';
        ageText.innerText = 'Neteisingai įvestas amžius!';
        setTimeout( _ => {                
            ageText.style.color = 'white';
            ageText.innerText = 'Registruotis gali tik gyvi ir pilnamečiai asmenys';
        }, 3000);
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
        users.push({name: name.value, email: email.value, date: date, phone: phone.value, password: psw.value});
        name.value = '';
        name.placeholder = '';
        email.value = '';
        email.placeholder = '';        
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