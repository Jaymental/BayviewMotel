// Bayview Motel JavaScript-Dokument

const CODE = '&#100;&#97;&#114;&#107;&#115;&#105;&#100;&#101;';

function toggleTo(topicId) {
    const allTopics = document.querySelectorAll('.topic');

    allTopics.forEach(topic => {
        topic.classList.add('hideEffect');
        setTimeout(function () { topic.classList.add('hidden') }, 500);
    });

    const activeTopic = document.getElementById(topicId);

    if (activeTopic) {
        setTimeout(function () { activeTopic.classList.remove('hidden'); }, 500);
        setTimeout(function () { activeTopic.classList.remove('hideEffect'); }, 600);
    }
}

function toggleMenu(status) {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('visible');
}

function checkCode(input) {
    let code = input.trim().toLowerCase();
    console.log(code);
    if(code == decodeHtmlEntities(CODE)) {
        window.location.href = "hidden.html";
    } else {
        alert("Falsche Code!");
    }
}

function decodeHtmlEntities(encodedString) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encodedString;
    return textarea.textContent;
}