// FIZZBUZZ

var elFormFizz = document.querySelector(".fizzbuzz-form");
var elInputFizz = elFormFizz.querySelector(".fizzbuzz-input");
var elDescFizz = elFormFizz.querySelector(".fizzbuzz-desc");

elFormFizz.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValFizz = elInputFizz.value;
    
    elDescFizz.textContent = fizzbuzz(elInputValFizz);
})

function fizzbuzz(num) {
    if(num % 3 == 0 && num % 5 == 0) {
        return "Fizzbuzz"
    }else if(num % 3 == 0) {
        return "Fizz"
    }else if(num % 5 == 0) {
        return "Buzz"
    }else {
        return "FizzBuzz uchun to'gri son emas"
    }
}

// FIZZBUZZ 



// RANDOM NUMBER 

var elFormRan = document.querySelector(".rannum-form");
var elInputRan = elFormRan.querySelector(".rannum-input");
var elAttemptRan = elFormRan.querySelector(".rannum-attempt");
var nearNumber = elFormRan.querySelector(".rannum-near");


var attemptNum = 6;
var randomNum = Math.round(Math.random() * 100);
console.log(randomNum);



elFormRan.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValRan = elInputRan.value;
    
    --attemptNum;
    elAttemptRan.textContent =`Urunishlar soni:  ${attemptNum}`;
    
    if(elInputValRan == randomNum) {
        nearNumber.textContent = "Siz go'lib bo'ldingiz!";
        elInputRan.disabled = true;
    }else if(attemptNum == 0) {
        elAttemptRan.textContent ="Urunishlaringiz soni tugadi!"
        elInputRan.disabled = true;
    }else if(elInputValRan > randomNum) {
        nearNumber.textContent = "Siz kiritgan sondan kichik"
    }else if(elInputValRan < randomNum) {
        nearNumber.textContent = "Siz kiritgan sondan katta"
    }
})

// RANDOM NUMBER 