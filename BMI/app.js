console.log('BMI');

const height = document.querySelector('.inputHeight');
const weight = document.querySelector('.inputWeight');
const calculateBtn = document.querySelector('.bmiBtn');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');
let bmi;

document.querySelector(".bmiBtn").addEventListener("click", function () {
    this.classList.add("pop-up");
 
    setTimeout(() => {
        this.classList.remove("pop-up");
    }, 200);
});
 
document.querySelector(".reset").addEventListener("click", function () {
    this.classList.add("pop-up");
 
    setTimeout(() => {
        this.classList.remove("pop-up");
    }, 200);
});

calculateBtn.addEventListener('click', _ => {
    if (isNaN(parseFloat(height.value)) && !isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid height';           
        result.style.color = 'white';     
    } else if (!isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid weight'; 
        result.style.color = 'white';
    } else if (isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid height and weight';
        result.style.color = 'white';
    } else {
        bmi = parseFloat(weight.value)/((parseFloat(height.value)/100)*(parseFloat(height.value)/100));

        if (bmi < 18.5) {
            result.innerText = `Underweight👻: ${bmi.toFixed(2)}`;
            result.style.color = 'gold';
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerText = `Normal👍: ${bmi.toFixed(2)}`;
            result.style.color = 'green';
        } else if (bmi >= 25 && bmi < 40) {
            result.innerText = `Overweight🍔: ${bmi.toFixed(2)}`;
            result.style.color = 'crimson';
        } else {  result.innerText = `Obese🦛: ${bmi.toFixed(2)}`;
            result.style.color = 'black';
        };
        resetBtn.style.display = 'block';
        console.log('bmi: ',bmi);
    }
});

resetBtn.addEventListener('click', _ => {
    height.value = '';
    weight.value = '';
    result.innerText = 'Provide a valid height and weight';  
    result.style.color = 'white';
    resetBtn.style.display = 'none';
 
});

