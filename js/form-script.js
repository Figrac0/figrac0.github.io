// Инициализация EmailJS с вашим публичным ключом
emailjs.init("ZU9yROUk5h6WjQdHm");

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        // Собираем данные формы
        var templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Отправляем письмо с помощью EmailJS
        emailjs
            .send("service_m8d4va8", "template_oxdgylw", templateParams)
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Сообщение отправлено успешно!");
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Ошибка при отправке сообщения.");
                }
            );
    });
