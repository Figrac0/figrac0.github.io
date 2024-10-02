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

                    // Показ галочки
                    var successMessage = document.getElementById("success-message");
                    successMessage.style.display = 'block'; // Показываем галочку

                    // Очистка полей ввода
                    document.getElementById("name").value = '';
                    document.getElementById("email").value = '';
                    document.getElementById("message").value = '';

                    // Скрываем галочку через 1 секунду
                    setTimeout(function() {
                        successMessage.style.display = 'none'; // Скрываем галочку
                    }, 1000);
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Ошибка при отправке сообщения.");
                }
            );
    });
