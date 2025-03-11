document.getElementById('sendMessage').addEventListener('click', function() {
    const message = "Привет из Telegram Web App!";
    const url = `https://api.telegram.org/bot<8074045571:AAHR4QCGPR4my061KcR06iUhncZC2ky2O-I>/sendMessage?chat_id=<CHAT_ID>&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Сообщение отправлено!");
            } else {
                alert("Ошибка при отправке сообщения.");
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
        });
});