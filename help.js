// Ожидание полной загрузки DOM структуры страницы
document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.querySelector('.send-btn');

    // Функция отрисовки сообщений на экране
    function appendMessage(text, sender) {
        if (!chatMessages) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerText = text;
        chatMessages.appendChild(messageDiv);
        
        // Автоматический скролл вниз
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Универсальный ответ бота на любые входящие сообщения
    function getBotResponse() {
        return "Я зафиксировал твой запрос и уже обрабатываю его. Пожалуйста, подожди несколько минут, пока подключится живой агент поддержки.";
    }

    // Обработчик отправки сообщения пользователем
    function sendMessage() {
        if (!userInput) return;
        const text = userInput.value.trim();
        if (text === "") return;

        appendMessage(text, 'user');
        userInput.value = "";

        // Имитация задержки ответа системы
        setTimeout(() => {
            const reply = getBotResponse();
            appendMessage(reply, 'bot');
        }, 800);
    }

    // Привязка события клика к кнопке "Отправить"
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Привязка события нажатия клавиши Enter в текстовом поле
    if (userInput) {
        userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Глобальная функция обработки нажатия на кнопки-подсказки
    window.sendQuick = function(text) {
        appendMessage(text, 'user');
        setTimeout(() => {
            const reply = getBotResponse();
            appendMessage(reply, 'bot');
        }, 600);
    };
});

