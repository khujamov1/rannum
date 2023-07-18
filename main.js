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

var randomNum = Math.floor(Math.random() * 100)
var elFormRan = document.querySelector(".rannum-form");
var elInputRan = elFormRan.querySelector(".rannum-input");
var elAttemptRan = elFormRan.querySelector(".rannum-attempt");
var nearNumber = elFormRan.querySelector(".rannum-near");
var attemptNum = 6;
elAttemptRan.textContent ="Urunishlar soni: " + attemptNum
console.log(randomNum);



elFormRan.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValRan = elInputRan.value;
    closeNum(elInputValRan, randomNum, nearNumber);
    
    attemptNum--;
    if(attemptNum <= 0) {
        elAttemptRan.textContent = "Game Over";
    }
    else(
        elAttemptRan.textContent ="Urunishlar soni: " + attemptNum
        )
    })
    
    // RANDOM NUMBER 
    
    
    function closeNum(son, randomSon, text) {
        if(son > randomSon) {
            text.textContent = "Siz tanlagan sondan kichik"
        }else if(son < randomSon) {
            text.textContent = "Siz tanlagan sondan katta"
        }else {
            text.textContent = "You win";
        }
    };