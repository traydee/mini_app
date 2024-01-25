function sendMessage(message) {
    fetch('/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .then(response => {
        if (response.ok) {
            alert(`Сообщение "${message}" отправлено!`);
        } else {
            alert('Произошла ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
}
