const adviceQuote = document.getElementById('advice-quote');
const diceButton = document.getElementById('dice-button');
const adviceId = document.getElementById('advice-id');


const fetchAdvice = async function(){
    try{
        const fetchAdvice = await fetch("https://api.adviceslip.com/advice")
        const response = await fetchAdvice.json();
        const advice = await response.slip;
        return advice;
    }
    catch(err){
        alert(err);
    } 
}

const generateAdvice = async function(){
    const advice = await fetchAdvice();
    adviceQuote.innerText = advice.advice;
    adviceId.innerText = advice.id;
}

generateAdvice();

diceButton.addEventListener('click', function(){
    generateAdvice();
})

