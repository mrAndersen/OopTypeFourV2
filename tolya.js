Tolya = function () {

    this.logContainer = null;

    this.init = function () {
        this.logContainer = document.querySelector("#log-container");
    };

    this.generateAnswer = function (playerMessage) {
        playerMessage = playerMessage.toLowerCase();
        let result = "Извини друг, я тебя не понял, возможно я глупый и не умею отвечать на задаваемые вопросы :( \
        Могу обсудить с тобой ооп, стиль программирования, SOLID, вордпресс, PSR";

        if (/уебок/i.test(playerMessage)) {
            result = "Всё верно, уебок - это моё короткое имя, ты хотел что-то спросить?"
        }

        if (/(\s|^)ооп(\s|$)/i.test(playerMessage)) {
            result = "Все знают, что ООП бывает 4 типов, микросервисы, SOLID, макросы и конечно же анонимные функции!"
        }

        if (/программ/i.test(playerMessage)) {
            result = "Ооо! Я очень любюлю программирование, это как медленно разворачивать коробку конфет - никогда не знаешь \
            что будет внутри, SOLID, микросервисы ООП или хуки!"
        }

        if (/(\s|^)стиль(\s|$)/i.test(playerMessage)) {
            result = "Стиль программирования не должен нарушать законы GRASP, если стол стоит справа, то так и должно быть \
            у тебя в коде мой друг! Иначе произойдет принцип расхождения зависимотей пакетов байтов, а такого допускать нельзя"
        }

        if (/(\s|^)вордпресс(\s|$)/i.test(playerMessage)) {
            result = "Ворпдресс - это современный фреймворк, который придерживается парадигм  WSSA EMP OLE32DLL OPENGLAPI \
            MSEX1 KAL, а так же само собой SOLID, ведь большинство сайтов написаны на ВП, и это доказывает его состоятельность, приходи когда \
            выучишь ВП!"
        }

        if (/solid/i.test(playerMessage)) {
            result = "Файлы нужно организовыать согласно SOLID, расшифровывается как SUKA OHUEL LIMPOMPO IDIOT DEBIL, \
            поскольку любому разработчку очевидно что должна быть строгая иерархия в любом нормальном проекте"
        }

        if (/(\s|^)psr(\s|$)/i.test(playerMessage)) {
            result = "PSR - это паттерн программирования, само собой, что же это может быть еще. Когда я писал на ассемблере \
            я часто использовал его, но потом перешел на вордпресс и нужда в нём отпала"
        }

        return result;
    };


    this.processMessage = function (message) {
        this.pushPlayerMessage(message);
        this.pushAnswer(this.generateAnswer(message));

        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    };

    this.pushPlayerMessage = function (message) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add("player");
        messageDiv.innerHTML = message;

        this.logContainer.appendChild(messageDiv);
    };

    this.pushAnswer = function (answer) {
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("message");
        answerDiv.classList.add("tolya");
        answerDiv.innerHTML = answer;

        this.logContainer.appendChild(answerDiv);
    }


};
window.Tolya = new Tolya();


window.addEventListener('DOMContentLoaded', function () {
    window.Tolya.init();

    let messageBox = document.querySelector('#message');
    document.querySelector('#message').addEventListener('keyup', function (e) {
        if (e.key === "Enter" && messageBox.value) {
            window.Tolya.processMessage(messageBox.value);
            messageBox.value = "";
        }
    });
});


