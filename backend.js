document.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("themeMode");
    if (mode === "light") {
        applyLightMode();
    } else {
        applyDarkMode();
    }


    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

document.getElementById("DarkLightModeBtn").onclick = function () {
    if (localStorage.getItem("themeMode") === "light") {
        applyDarkMode();
        localStorage.setItem("themeMode", "dark");
    } else {
        applyLightMode();
        localStorage.setItem("themeMode", "light");
    }
};

function applyLightMode() {

    document.body.classList.remove("switchBackgroundToDark");
    document.body.classList.add("switchBackgroundToLight");
    document.getElementById("lightDarkModePic").src = "./icons8-sun-96.png";

    const navBar = document.getElementById("navBar");
    if (navBar) {
        navBar.classList.remove("switchBackgroundToDarkNavBar");
        navBar.classList.add("switchBackgroundToLightNavBar");
    }

    document.querySelectorAll('#text').forEach(text => {
        text.classList.remove("switchTextColorForDarkMode");
        text.classList.add("switchTextColorForLightMode");
    });

    document.querySelectorAll('#cardBackground').forEach(card => {
        card.classList.remove("cardForDark");
        card.classList.add("cardForLight");
    });

    document.querySelectorAll('#moreInfo').forEach(infoBtn => {
        infoBtn.classList.remove("btn-dark");
        infoBtn.classList.add("btn-light");
    });

    document.querySelectorAll(".formText").forEach(form => {
        form.classList.remove("formTextDark");
        form.classList.add("formTextLight");
    });

    document.querySelectorAll('#timelineLeftContainer').forEach(text => {
        text.classList.remove("timelineLeftDarkContainer");
        text.classList.add("timelineLeftLightContainer");
    });
    document.querySelectorAll('#timelineRightContainer').forEach(text => {
        text.classList.remove("timelineRightDarkContainer");
        text.classList.add("timelineRightLightContainer");
    });
    document.querySelectorAll(".skills-usedDark").forEach(form => {
        form.classList.remove("skills-usedDark");
        form.classList.add("skills-usedLight");
    });

    const contactName = document.getElementById("name");
    const contactEmail = document.getElementById("email");
    const contactMessage = document.getElementById("message");

    if (contactName) contactName.classList.remove("formCheckDark", "formCheckLight", "formCheckDark");
    if (contactEmail) contactEmail.classList.remove("formCheckDark", "formCheckLight", "formCheckDark");
    if (contactMessage) contactMessage.classList.remove("formCheckDark", "formCheckLight", "formCheckDark");


    if (contactName) contactName.classList.add("formCheckLight");
    if (contactEmail) contactEmail.classList.add("formCheckLight");
    if (contactMessage) contactMessage.classList.add("formCheckLight");
    const inputs = document.querySelectorAll("#name, #email, #message");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.classList.add("formTextLight");
            input.classList.remove("formTextDark");
        });
        input.addEventListener("blur", () => {
            input.classList.add("formTextLight");
            input.classList.remove("formTextDark");
        });
    });
}

function applyDarkMode() {

    document.body.classList.remove("switchBackgroundToLight");
    document.body.classList.add("switchBackgroundToDark");
    document.getElementById("lightDarkModePic").src = "./icons8-moon-96.png";

    const navBar = document.getElementById("navBar");
    if (navBar) {
        navBar.classList.remove("switchBackgroundToLightNavBar");
        navBar.classList.add("switchBackgroundToDarkNavBar");
    }

    document.querySelectorAll('#text').forEach(text => {
        text.classList.remove("switchTextColorForLightMode");
        text.classList.add("switchTextColorForDarkMode");
    });

    document.querySelectorAll('#cardBackground').forEach(card => {
        card.classList.remove("cardForLight");
        card.classList.add("cardForDark");
    });

    document.querySelectorAll('#moreInfo').forEach(infoBtn => {
        infoBtn.classList.remove("btn-light");
        infoBtn.classList.add("btn-dark");
    });

    document.querySelectorAll(".formText").forEach(form => {
        form.classList.remove("formTextLight");
        form.classList.add("formTextDark");
    });
    document.querySelectorAll('#timelineLeftContainer').forEach(text => {
        text.classList.remove("timelineLeftLightContainer");
        text.classList.add("timelineLeftDarkContainer");
    });
    document.querySelectorAll('#timelineRightContainer').forEach(text => {
        text.classList.remove("timelineRightLightContainer");
        text.classList.add("timelineRightDarkContainer");
    });
    document.querySelectorAll('#timelineRightContainer').forEach(text => {
        text.classList.remove("timelineRightLightContainer");
        text.classList.add("timelineRightDarkContainer");
    });

    document.querySelectorAll(".skills-usedLight").forEach(form => {
        form.classList.remove("skills-usedLight");
        form.classList.add("skills-usedDark");
    });


    const contactName = document.getElementById("name");
    const contactEmail = document.getElementById("email");
    const contactMessage = document.getElementById("message");

    if (contactName) contactName.classList.remove("formCheckDark", "formCheckLight", "formCheckLight");
    if (contactEmail) contactEmail.classList.remove("formCheckDark", "formCheckLight", "formCheckLight");
    if (contactMessage) contactMessage.classList.remove("formCheckDark", "formCheckLight", "formCheckLight");


    if (contactName) contactName.classList.add("formCheckDark");
    if (contactEmail) contactEmail.classList.add("formCheckDark");
    if (contactMessage) contactMessage.classList.add("formCheckDark");
    const inputs = document.querySelectorAll("#name, #email, #message");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.classList.add("formTextDark");
            input.classList.remove("formTextLight");
        });
        input.addEventListener("blur", () => {
            input.classList.add("formTextDark");
            input.classList.remove("formTextLight");
        });
    });
}

function clearForm() {
    document.getElementById("contactForm").reset();
}