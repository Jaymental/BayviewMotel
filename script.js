// Bayview Motel JavaScript-Dokument

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