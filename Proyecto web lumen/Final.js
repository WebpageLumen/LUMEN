
document.addEventListener("DOMContentLoaded", function () {

    const pantalla_1_a_4 =
        document.getElementById("pantalla-1-a-4");

    const actividad5 =
        document.getElementById("actividad-5");

    const actividad6 =
        document.getElementById("actividad-6");

    const activity7 =
        document.getElementById("activity7");

    const activity8 =
        document.getElementById("activity8");

    function mostrarActividad(numero) {

        pantalla_1_a_4.classList.add("hidden-activity");
        actividad5.classList.add("hidden-activity");
        actividad6.classList.add("hidden-activity");
        activity7.classList.add("hidden-activity");
        activity8.classList.add("hidden-activity");

        if (numero === 4) {
            pantalla_1_a_4.classList.remove("hidden-activity");
        }

        if (numero === 5) {
            actividad5.classList.remove("hidden-activity");
        }

        if (numero === 6) {
            actividad6.classList.remove("hidden-activity");
        }

        if (numero === 7) {
            activity7.classList.remove("hidden-activity");
        }

        if (numero === 8) {
            activity8.classList.remove("hidden-activity");
        }

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    const backBtn =
        document.getElementById("backBtn");

    const progressCounter =
        document.getElementById("progressCounter");

    const progressDots =
        document.getElementById("progressDots");

    const activityTitle =
        document.getElementById("activityTitle");

    const instruction =
        document.getElementById("instruction");

    const normalContent =
        document.getElementById("normalContent");

    const childImage =
        document.getElementById("childImage");

    const choiceAnswers =
        document.getElementById("choiceAnswers");

    const pareoContent =
        document.getElementById("pareoContent");

    const feedbackContent =
        document.getElementById("feedbackContent");

    const continueBtn =
        document.getElementById("continueBtn");

    const continueText =
        document.getElementById("continueText");

    const activity4Content =
        document.getElementById("activity4Content");

    const activity4Image =
        document.getElementById("activity4Image");

    const activity4Answers =
        document.getElementById("activity4Answers");

    const activity4Panel =
        document.getElementById("activity4Panel");

    const helpImageTop =
        document.getElementById("helpImageTop");

    const helpImageBottom =
        document.getElementById("helpImageBottom");

    const helpMessage =
        document.getElementById("helpMessage");

    const activities = [

        {
            type: "choice",

            title:
                "1. ¿Por qué podría sentirse así?",

            instruction:
                "Elige la situación que podría estar provocando esta emoción.",

            image:
                "Imagenes/30 (2).png",

            options: [

                {
                    text: "Feliz",
                    image: "Imagenes/31 (2).png",
                    correct: false
                },

                {
                    text: "Triste",
                    image: "imagenes/32 (2).png",
                    correct: true
                },

                {
                    text: "Enojado",
                    image: "imagenes/33 (2).png",
                    correct: false
                },

                {
                    text: "Sorprendido",
                    image: "imagenes/34 (2).png",
                    correct: false
                }

            ],

            hintTitle:
                "¡Casi lo logras!",

            hint:
                "Observa nuevamente la imagen. A veces las emociones pueden ser difíciles de entender."
        },

        {
            type: "choice",

            title:
                "2. ¿Qué situación podría causar esta emoción?",

            instruction:
                "Elige la situación que podría estar provocando esta emoción.",

            image:
                "Imagenes/30 (2).png",

            options: [

                {
                    text:
                        "Se le rompió su juguete.",

                    image:
                        "Imagenes/41.png",

                    correct: true
                },

                {
                    text:
                        "Recibió un regalo.",

                    image:
                        "Imagenes/42.png",

                    correct: false
                },

                {
                    text:
                        "Ganó un premio.",

                    image:
                        "Imagenes/43.png",

                    correct: false
                },

                {
                    text:
                        "Va de vacaciones.",

                    image:
                        "Imagenes/44.png",

                    correct: false
                }

            ],

            hintTitle:
                "RECUERDA",

            hint:
                "Las emociones ocurren por algo que nos pasa."
        },

        {
            type: "pareo",

            title:
                "3. Relaciona cada situación con la emoción correcta.",

            instruction:
                "Arrastra cada situación hasta la emoción que corresponde."
        },

        {
            type: "activity4",

            title:
                "4. ¿Qué harías tú?",

            instruction:
                "Tu amigo está triste porque perdió su cartuchera. ¿Qué podrías hacer?",

            image:
                "imagenes/q.png",

            options: [

                {
                    text:
                        "Ignorarlo.",

                    image:
                        "imagenes/64.png",

                    correct: false
                },

                {
                    text:
                        "Reírte de él.",

                    image:
                        "imagenes/65.png",

                    correct: false
                },

                {
                    text:
                        "Ayudarlo a buscar su cartuchera.",

                    image:
                        "imagenes/66.png",

                    correct: true
                }

            ]
        }

    ];

    let currentActivity = 0;
    let answeredCorrectly = false;
    let draggedSituation = null;
    let matchedPairs = 0;

    function init() {
        createProgressDots();
        setupPareoEvents();
        renderActivity();
    }

    function createProgressDots() {

        progressDots.innerHTML = "";

        for (let i = 0; i < 8; i++) {

            const dot =
                document.createElement("span");

            if (i === currentActivity) {
                dot.classList.add("active");
            }

            progressDots.appendChild(dot);
        }
    }

    function updateProgress() {

        progressCounter.textContent =
            `${currentActivity + 1}/8`;

        [...progressDots.children].forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentActivity
                );

            }
        );

        backBtn.disabled =
            currentActivity === 0;
    }

    function renderActivity() {

        const activity =
            activities[currentActivity];

        answeredCorrectly = false;
        draggedSituation = null;
        matchedPairs = 0;

        updateProgress();

        activityTitle.textContent =
            activity.title;

        instruction.textContent =
            activity.instruction;

        choiceAnswers.innerHTML = "";
        activity4Answers.innerHTML = "";
        feedbackContent.innerHTML = "";

        pareoContent.classList.remove("active");
        activity4Content.classList.remove("active");
        activity4Panel.classList.remove("active");

        activity4Panel.classList.remove(
            "incorrect-mode"
        );

        normalContent.style.display = "none";

        continueBtn.classList.add("hidden");

        continueText.textContent =
            currentActivity === activities.length - 1
                ? "Finalizar"
                : "Siguiente";

        if (activity.type === "choice") {
            renderChoiceActivity(activity);
            return;
        }

        if (activity.type === "pareo") {
            renderPareoActivity();
            return;
        }

        if (activity.type === "activity4") {
            renderActivity4(activity);
        }
    }

    function renderChoiceActivity(activity) {

        normalContent.style.display = "grid";

        childImage.src =
            activity.image;

        activity.options.forEach(
            option => {

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className = "choice-answer";

                const image =
                    document.createElement("img");

                image.src =
                    option.image;

                image.alt =
                    option.text;

                const text =
                    document.createElement("span");

                text.textContent =
                    option.text;

                button.appendChild(image);
                button.appendChild(text);

                button.addEventListener(
                    "click",
                    () =>
                        handleChoice(
                            option,
                            button,
                            activity
                        )
                );

                choiceAnswers.appendChild(button);
            }
        );
    }

    function handleChoice(
        option,
        button,
        activity
    ) {

        if (answeredCorrectly) {
            return;
        }

        if (option.correct) {

            answeredCorrectly = true;

            button.classList.add("correct");

            [...choiceAnswers.children]
                .forEach(
                    item =>
                        item.disabled = true
                );

            showSuccess();

        } else {

            button.classList.add("incorrect");

            showChoiceHint(activity);

            setTimeout(
                () =>
                    button.classList.remove("incorrect"),
                700
            );
        }
    }

    function showChoiceHint(activity) {

        feedbackContent.innerHTML = `

            <div class="feedback-image-slot">

                <img
                    src="imagenes/35 (2).png"
                    alt="Ayuda">

            </div>

            <div class="feedback-title">
                💭 ${activity.hintTitle}
            </div>

            <div class="feedback-text">
                ${activity.hint}
            </div>

        `;
    }

    function renderPareoActivity() {

        pareoContent.classList.add("active");

        resetPareoCards();
    }

    function setupPareoEvents() {

        document
            .querySelectorAll(".situation-card")
            .forEach(card => {

                card.addEventListener(
                    "dragstart",
                    handleDragStart
                );

                card.addEventListener(
                    "dragend",
                    handleDragEnd
                );

            });

        document
            .querySelectorAll(".image-drop-zone")
            .forEach(zone => {

                zone.addEventListener(
                    "dragover",
                    handleDragOver
                );

                zone.addEventListener(
                    "dragleave",
                    handleDragLeave
                );

                zone.addEventListener(
                    "drop",
                    handleDrop
                );

            });
    }

    function handleDragStart(event) {

        if (
            activities[currentActivity].type !==
                "pareo" ||
            answeredCorrectly
        ) {

            event.preventDefault();
            return;
        }

        draggedSituation =
            event.currentTarget;

        if (
            draggedSituation.classList.contains(
                "matched"
            )
        ) {

            event.preventDefault();
            draggedSituation = null;
            return;
        }

        draggedSituation.classList.add("dragging");

        event.dataTransfer.effectAllowed =
            "move";

        event.dataTransfer.setData(
            "text/plain",
            draggedSituation.dataset.id
        );
    }

    function handleDragEnd() {

        if (draggedSituation) {

            draggedSituation.classList.remove(
                "dragging"
            );
        }
    }

    function handleDragOver(event) {

        if (
            activities[currentActivity].type !==
                "pareo" ||
            answeredCorrectly
        ) {
            return;
        }

        event.preventDefault();

        event.currentTarget.classList.add(
            "highlight"
        );

        event.dataTransfer.dropEffect =
            "move";
    }

    function handleDragLeave(event) {

        event.currentTarget.classList.remove(
            "highlight"
        );
    }

    function handleDrop(event) {

        event.preventDefault();

        const zone =
            event.currentTarget;

        zone.classList.remove(
            "highlight"
        );

        if (
            activities[currentActivity].type !==
                "pareo" ||
            answeredCorrectly ||
            !draggedSituation
        ) {
            return;
        }

        if (
            draggedSituation.classList.contains(
                "matched"
            )
        ) {

            draggedSituation = null;
            return;
        }

        if (
            draggedSituation.dataset.match ===
            zone.dataset.drop
        ) {

            placeSituationInZone(
                draggedSituation,
                zone
            );

            matchedPairs++;

            if (matchedPairs === 4) {

                answeredCorrectly = true;
                showSuccess();
            }

        } else {

            showPareoHint();
        }

        draggedSituation = null;
    }

    function placeSituationInZone(
        situation,
        zone
    ) {

        const clone =
            situation.cloneNode(true);

        clone.removeAttribute("draggable");

        clone.classList.remove("dragging");
        clone.classList.add("matched");

        clone.style.cssText =
            "width:100%;height:100%;min-height:0;padding:5px 8px;border:none;border-radius:12px;box-shadow:none;background:transparent;cursor:default;";

        const imageSlot =
            clone.querySelector(
                ".situation-image-slot"
            );

        if (imageSlot) {

            imageSlot.style.cssText =
                "width:90px;height:90px;min-width:90px;border:none;background:transparent;border-radius:0;";
        }

        const text =
            clone.querySelector(
                ".situation-text"
            );

        if (text) {
            text.style.display = "none";
        }

        zone.innerHTML = "";
        zone.appendChild(clone);
        zone.classList.add("filled");

        situation.classList.add("matched");
    }

    function resetPareoCards() {

        document
            .querySelectorAll(".situation-card")
            .forEach(card => {

                card.classList.remove(
                    "matched",
                    "dragging"
                );

                card.style.cssText = "";

                const imageSlot =
                    card.querySelector(
                        ".situation-image-slot"
                    );

                if (imageSlot) {
                    imageSlot.style.cssText = "";
                }

                const text =
                    card.querySelector(
                        ".situation-text"
                    );

                if (text) {
                    text.style.display = "";
                }

            });

        document
            .querySelectorAll(".image-drop-zone")
            .forEach(zone => {

                zone.innerHTML =
                    '<span class="drop-placeholder">Coloca aquí</span>';

                zone.classList.remove(
                    "filled",
                    "highlight"
                );

            });
    }

    function showPareoHint() {

        feedbackContent.innerHTML = `

            <div class="feedback-image-slot">

                <img
                    src="imagenes/52.png"
                    alt="Ayuda">

            </div>

            <div class="feedback-title">
                🌱 Veamos juntos
            </div>

            <div class="feedback-text">
                Las personas pueden sentirse diferentes según lo que les sucede.
            </div>

        `;
    }

    function renderActivity4(activity) {

        activity4Content.classList.add("active");

        activity4Image.src =
            activity.image;

        activity.options.forEach(
            option => {

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className = "activity4-answer";

                const imageBox =
                    document.createElement("span");

                imageBox.className =
                    "activity4-answer-image";

                const image =
                    document.createElement("img");

                image.src =
                    option.image;

                image.alt =
                    option.text;

                imageBox.appendChild(image);

                const text =
                    document.createElement("span");

                text.className =
                    "activity4-answer-text";

                text.textContent =
                    option.text;

                button.appendChild(imageBox);
                button.appendChild(text);

                button.addEventListener(
                    "click",
                    () =>
                        handleActivity4Answer(
                            option,
                            button
                        )
                );

                activity4Answers.appendChild(button);
            }
        );
    }

    function handleActivity4Answer(
        option,
        button
    ) {

        if (answeredCorrectly) {
            return;
        }

        if (option.correct) {

            answeredCorrectly = true;

            button.classList.add("correct");

            [...activity4Answers.children]
                .forEach(
                    item =>
                        item.disabled = true
                );

            showActivity4Success();

        } else {

            button.classList.add("incorrect");

            showActivity4Incorrect();

            setTimeout(
                () =>
                    button.classList.remove("incorrect"),
                700
            );
        }
    }

    function showActivity4Incorrect() {

        feedbackContent.innerHTML = "";

        activity4Panel.classList.add(
            "active",
            "incorrect-mode"
        );

        helpMessage.textContent =
            "💡 A veces, un pequeño gesto de apoyo puede hacer una gran diferencia.";

        helpImageTop.src =
            "imagenes/69.png";

        helpImageBottom.src =
            "imagenes/67.png";

        continueBtn.classList.add("hidden");
    }

    function showActivity4Success() {

        feedbackContent.innerHTML = "";

        activity4Panel.classList.add("active");

        activity4Panel.classList.remove(
            "incorrect-mode"
        );

        helpMessage.textContent =
            "✨ ¡Buena elección!";

        helpImageTop.src =
            "imagenes/69.png";

        helpImageBottom.src =
            "imagenes/68.png";

        continueBtn.classList.remove("hidden");
    }

    function showSuccess() {

        activity4Panel.classList.remove("active");

        feedbackContent.innerHTML = `

            <div class="success-icon">
                ✓
            </div>

            <div class="success-title">
                ${
                    currentActivity === 0
                        ? "🌟 ¡Perfecto!"
                        : "🎉 ¡Genial!"
                }
            </div>

            <img
                class="uca"
                src="imagenes/Las personas pueden sentirse diferentes según lo que les sucede..png"
                alt="Personaje celebrando">

        `;

        continueBtn.classList.remove("hidden");
    }

    continueBtn.addEventListener(
        "click",
        () => {

            if (!answeredCorrectly) {
                return;
            }

            if (
                currentActivity <
                activities.length - 1
            ) {

                currentActivity++;

                renderActivity();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;
            }

            mostrarActividad(5);
        }
    );

    backBtn.addEventListener(
        "click",
        () => {

            if (currentActivity <= 0) {
                return;
            }

            currentActivity--;

            renderActivity();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

    init();

    function iniciarActividad5() {

        const answersContainer =
            document.getElementById("answers5");

        const helpPanel =
            document.getElementById("helpPanel5");

        const backBtn5 =
            document.getElementById("backBtn5");

        const nextButton =
            document.getElementById("nextButton5");

        const answers =
            answersContainer.querySelectorAll(".answer");

        function showSuccessPanel() {

            helpPanel.classList.remove(
                "incorrect-mode",
                "hidden"
            );

            document.getElementById(
                "helpMessage5"
            ).textContent =
                "🌟 ¡Muy bien!";

            document.getElementById(
                "helpImageTop5"
            ).src =
                "Imagenes/yy.png";

            document.getElementById(
                "helpImageBottom5"
            ).src =
                "Imagenes/114.png";

            document.getElementById(
                "helpBottomSlot5"
            ).style.display =
                "flex";

            nextButton.style.display =
                "flex";
        }

        function showIncorrectPanel() {

            helpPanel.classList.add(
                "incorrect-mode"
            );

            helpPanel.classList.remove(
                "hidden"
            );

            document.getElementById(
                "helpMessage5"
            ).textContent =
                "💡 Puede sentirse nerviosa porque va a exponer frente a toda la clase.";

            document.getElementById(
                "helpImageTop5"
            ).src =
                "Imagenes/aa.png";

            document.getElementById(
                "helpBottomSlot5"
            ).style.display =
                "none";

            nextButton.style.display =
                "none";
        }

        answers.forEach(
            answer => {

                answer.addEventListener(
                    "click",
                    function () {

                        if (answer.disabled) {
                            return;
                        }

                        const isCorrect =
                            answer.dataset.correct ===
                            "true";

                        if (isCorrect) {

                            answer.classList.add("correct");

                            answers.forEach(
                                a =>
                                    a.disabled = true
                            );

                            showSuccessPanel();

                        } else {

                            answer.classList.add("incorrect");

                            showIncorrectPanel();

                            setTimeout(
                                () =>
                                    answer.classList.remove(
                                        "incorrect"
                                    ),
                                600
                            );
                        }

                    }
                );

            }
        );

        nextButton.addEventListener(
            "click",
            () => {
                mostrarActividad(6);
            }
        );

        backBtn5.addEventListener(
            "click",
            () => {
                mostrarActividad(4);
            }
        );
    }

    function iniciarActividad6() {

        const answersContainer =
            document.getElementById("answers6");

        const helpPanel =
            document.getElementById("helpPanel6");

        const backBtn6 =
            document.getElementById("backBtn6");

        const nextButton =
            document.getElementById("nextButton6");

        const answers =
            answersContainer.querySelectorAll(".answer");

        function showSuccessPanel() {

            helpPanel.classList.remove(
                "incorrect-mode",
                "hidden"
            );

            document.getElementById(
                "helpMessage6"
            ).textContent =
                "🌟 ¡Muy bien!";

            document.getElementById(
                "helpImageTop6"
            ).src =
                "Imagenes/yy.png";

            document.getElementById(
                "helpImageBottom6"
            ).src =
                "Imagenes/67.png";

            document.getElementById(
                "helpBottomSlot6"
            ).style.display =
                "flex";

            nextButton.style.display =
                "flex";
        }

        function showIncorrectPanel() {

            helpPanel.classList.add(
                "incorrect-mode"
            );

            helpPanel.classList.remove(
                "hidden"
            );

            document.getElementById(
                "helpMessage6"
            ).textContent =
                "💭 ¡Buen intento! A veces es difícil saber lo que otra persona está pensando. Observa la situación otra vez y busca una pista.";

            document.getElementById(
                "helpImageTop6"
            ).src =
                "Imagenes/84.png";

            document.getElementById(
                "helpBottomSlot6"
            ).style.display =
                "none";

            nextButton.style.display =
                "none";
        }

        answers.forEach(
            answer => {

                answer.addEventListener(
                    "click",
                    function () {

                        if (answer.disabled) {
                            return;
                        }

                        const isCorrect =
                            answer.dataset.correct ===
                            "true";

                        if (isCorrect) {

                            answer.classList.add("correct");

                            answers.forEach(
                                a =>
                                    a.disabled = true
                            );

                            showSuccessPanel();

                        } else {

                            answer.classList.add("incorrect");

                            showIncorrectPanel();

                            setTimeout(
                                () =>
                                    answer.classList.remove(
                                        "incorrect"
                                    ),
                                600
                            );
                        }

                    }
                );

            }
        );

        nextButton.addEventListener(
            "click",
            () => {
                mostrarActividad(7);
            }
        );

        backBtn6.addEventListener(
            "click",
            () => {
                mostrarActividad(5);
            }
        );
    }

    function iniciarActividad7() {

        const answers =
            Array.from(
                document.querySelectorAll(
                    "#answers7 .answer"
                )
            );

        const helpPanel7 =
            document.getElementById("helpPanel7");

        const continue7 =
            document.getElementById("continue7");

        const btnBack7 =
            document.getElementById("btnBack7");

        let activity7Completed = false;

        function showIncorrect7() {

            helpPanel7.classList.add(
                "incorrect-mode"
            );

            helpPanel7.classList.remove(
                "hidden"
            );

            document.getElementById(
                "helpMessage7"
            ).textContent =
                "💛 ¡Intentémoslo otra vez! Piensa cuál respuesta haría sentir mejor a la otra persona.";

            document.getElementById(
                "helpImage7"
            ).src =
                "Imagenes/tt.png";

            document.getElementById(
                "helpBottom7"
            ).style.display =
                "none";

            continue7.style.display =
                "none";
        }

        function showCorrect7() {

            helpPanel7.classList.remove(
                "incorrect-mode",
                "hidden"
            );

            document.getElementById(
                "helpMessage7"
            ).textContent =
                "✨ ¡Muy bien!";

            document.getElementById(
                "helpImage7"
            ).src =
                "Imagenes/yy.png";

            document.getElementById(
                "helpBottomImage7"
            ).src =
                "Imagenes/Las personas pueden sentirse diferentes según lo que les sucede..png";

            document.getElementById(
                "helpBottom7"
            ).style.display =
                "flex";

            continue7.style.display =
                "flex";
        }

        answers.forEach(
            answer => {

                answer.addEventListener(
                    "click",
                    function () {

                        if (answer.disabled) {
                            return;
                        }

                        const isCorrect =
                            answer.dataset.correct ===
                            "true";

                        if (isCorrect) {

                            answer.classList.add("correct");

                            answers.forEach(
                                a =>
                                    a.disabled = true
                            );

                            activity7Completed =
                                true;

                            showCorrect7();

                        } else {

                            answer.classList.add("incorrect");

                            showIncorrect7();

                            setTimeout(
                                () => {

                                    answer.classList.remove(
                                        "incorrect"
                                    );

                                    if (
                                        !activity7Completed
                                    ) {

                                        helpPanel7.classList.add(
                                            "hidden"
                                        );
                                    }

                                },
                                1200
                            );
                        }

                    }
                );

            }
        );

        continue7.addEventListener(
            "click",
            () => {

                if (activity7Completed) {
                    mostrarActividad(8);
                }

            }
        );

        btnBack7.addEventListener(
            "click",
            () => {
                mostrarActividad(6);
            }
        );
    }

    function iniciarActividad8() {

        const feedbackPanel8 =
            document.getElementById("feedbackPanel8");

        const incorrectState8 =
            document.getElementById("incorrectState8");

        const correctState8 =
            document.getElementById("correctState8");

        const confettiLayer =
            document.getElementById("confettiLayer");

        const leftPills =
            Array.from(
                document.querySelectorAll(
                    "#activity8 .pill--left"
                )
            );

        const rightPills =
            Array.from(
                document.querySelectorAll(
                    "#activity8 .pill--right"
                )
            );

        const btnBack8 =
            document.getElementById("btnBack8");

        let selectedLeftPill = null;
        let matchedCount = 0;
        let activity8Completed = false;
        let errorTimer = null;

        function hideFeedback8() {

            if (errorTimer) {
                clearTimeout(errorTimer);
                errorTimer = null;
            }

            feedbackPanel8.classList.add("hidden");
            incorrectState8.classList.add("hidden");
            correctState8.classList.add("hidden");
        }

        function showIncorrectFeedback8() {

            feedbackPanel8.classList.remove("hidden");

            incorrectState8.classList.remove("hidden");
            correctState8.classList.add("hidden");
        }

        function showCorrectFeedback8() {

            feedbackPanel8.classList.remove("hidden");

            incorrectState8.classList.add("hidden");
            correctState8.classList.remove("hidden");
        }

        leftPills.forEach(
            pill => {

                pill.addEventListener(
                    "click",
                    function () {

                        if (
                            activity8Completed ||
                            pill.classList.contains(
                                "is-matched"
                            )
                        ) {
                            return;
                        }

                        hideFeedback8();

                        leftPills.forEach(
                            item =>
                                item.classList.remove(
                                    "is-selected"
                                )
                        );

                        pill.classList.add("is-selected");

                        selectedLeftPill =
                            pill;
                    }
                );

            }
        );

        rightPills.forEach(
            pill => {

                pill.addEventListener(
                    "click",
                    function () {

                        if (
                            activity8Completed ||
                            pill.classList.contains(
                                "is-matched"
                            ) ||
                            !selectedLeftPill
                        ) {
                            return;
                        }

                        const correct =
                            pill.dataset.pair ===
                            selectedLeftPill.dataset.pair;

                        if (correct) {

                            selectedLeftPill.classList.remove(
                                "is-selected"
                            );

                            selectedLeftPill.classList.add(
                                "is-matched"
                            );

                            pill.classList.add("is-matched");

                            selectedLeftPill.disabled =
                                true;

                            pill.disabled =
                                true;

                            selectedLeftPill =
                                null;

                            matchedCount++;

                            if (
                                matchedCount ===
                                leftPills.length
                            ) {

                                activity8Completed =
                                    true;

                                showCorrectFeedback8();
                                lanzarConfeti();
                            }

                        } else {

                            selectedLeftPill.classList.add(
                                "is-incorrect"
                            );

                            pill.classList.add(
                                "is-incorrect"
                            );

                            showIncorrectFeedback8();

                            const oldLeft =
                                selectedLeftPill;

                            errorTimer =
                                setTimeout(
                                    () => {

                                        oldLeft.classList.remove(
                                            "is-incorrect",
                                            "is-selected"
                                        );

                                        pill.classList.remove(
                                            "is-incorrect"
                                        );

                                        selectedLeftPill =
                                            null;

                                        hideFeedback8();

                                        errorTimer =
                                            null;

                                    },
                                    1200
                                );
                        }

                    }
                );

            }
        );

        function lanzarConfeti(
            cantidad = 80
        ) {

            const colores = [
                "#ffd85e",
                "#2f7fd1",
                "#b7f0a0",
                "#f28b82",
                "#ffffff",
                "#f4c430"
            ];

            for (
                let i = 0;
                i < cantidad;
                i++
            ) {

                const pieza =
                    document.createElement("span");

                pieza.className =
                    "confetti-piece";

                pieza.style.left =
                    Math.random() * 100 + "%";

                pieza.style.backgroundColor =
                    colores[
                        Math.floor(
                            Math.random() *
                            colores.length
                        )
                    ];

                pieza.style.animationDuration =
                    (
                        2.5 +
                        Math.random() * 2
                    ) + "s";

                pieza.style.animationDelay =
                    (
                        Math.random() * .6
                    ) + "s";

                pieza.style.borderRadius =
                    Math.random() > .5
                        ? "50%"
                        : "2px";

                confettiLayer.appendChild(pieza);

                pieza.addEventListener(
                    "animationend",
                    () => pieza.remove()
                );
            }
        }

        btnBack8.addEventListener(
            "click",
            () => {
                mostrarActividad(7);
            }
        );
    }

    iniciarActividad5();
    iniciarActividad6();
    iniciarActividad7();
    iniciarActividad8();

    mostrarActividad(4);

});