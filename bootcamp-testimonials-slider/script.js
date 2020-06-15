// feedbackArray database (this would idealy be loaded from an external API
const feedbackArray = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        picture: "images/image-tanya.jpg",
        feedback:
            "I’ve been interested in coding for a while but never taken the jump, until now." +
            "I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about" +
            "the future."
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        picture: "images/image-john.jpg",
        feedback:
            "If you want to lay the best foundation possible I’d recommend taking this course." +
            "The depth the instructors go into is incredible. I now feel so confident about starting" +
            "up as a professional developer."
    },
];

const userPicture = document.querySelector('[data-user-picture]');
const userQuote = document.querySelector('[data-user-quote]');
const userName = document.querySelector('[data-user-name]');
const userJob = document.querySelector('[data-user-job]');

const prevBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');

let userProfile = 0;
let eventClick = 'click';
window.addEventListener('DOMContentLoaded', function () {
    showFeedback();
});

function showFeedback() {
    const profile = feedbackArray[userProfile];
    userPicture.src = profile.picture;
    userQuote.textContent = profile.feedback;
    userName.textContent = profile.name;
    userJob.textContent = profile.job;
}

prevBtn.addEventListener(eventClick, ()  => {
    userProfile--;
    if (userProfile < 0) {
        userProfile = feedbackArray.length - 1;
    }
    showFeedback(userProfile);
});

nextBtn.addEventListener(eventClick, () => {
    userProfile++;
    if (userProfile > feedbackArray.length - 1) {
        userProfile = 0;
    }
    showFeedback(userProfile);
});
