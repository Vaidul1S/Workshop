const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', _ => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response =>response.json())
    .then(data => p.innerText = data.value)
        
});