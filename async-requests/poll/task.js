let title = document.querySelector(".poll__title")
let answers = document.querySelector(".poll__answers")
let xhr = new XMLHttpRequest()

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")
xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let answer = JSON.parse(xhr.responseText)
        let titleAnswer = answer.data.answers
        
        title.insertAdjacentHTML("beforeEnd", answer.data.title)
                
        for (let key in titleAnswer) {
                answers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${titleAnswer[key]}</button>`)
            }
            
            let buttons = Array.from(document.getElementsByClassName('poll__answer'));
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', clickButton);
            }
        }
        
        function clickButton() {
            alert(`Спасибо. Ваш голос защитан! Ваш ответ: ${this.innerText}`);
        } 
    
})
xhr.send()