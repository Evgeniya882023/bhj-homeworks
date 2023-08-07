const chatWidget = document.querySelector('.chat-widget');
const inputMessage = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const botAnswers = [
	'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
	'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
	'Кто тут?',
	'Где Ваша совесть?',
	'Добрый день! До свидания!',
	'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
	'Мы ничего не будем Вам продавать!'
];

function openChat() {
	if (!chatWidget.classList.contains('chat-widget_active')) {
		chatWidget.classList.add('chat-widget_active');
	}
}

document.addEventListener('click', openChat);

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
const allTime = hours + ':' + minutes;

function bot() {
	index = Math.floor(Math.random() * botAnswers.length);
	return botAnswers[index];
}

inputMessage.addEventListener('keydown', e => {
	if (inputMessage.value) {
		if (e.key == 'Enter') {
			messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + allTime + `</div>
                    <div class="message__text">` + inputMessage.value + `</div>
                </div>`;
			inputMessage.value = ``;
		} else {
			return false
		}
		messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">` + allTime + `</div>
                        <div class="message__text">` + bot() + `</div>
                    </div>`;
		inputMessage.value = ``;
	}
});
