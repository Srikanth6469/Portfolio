document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});
const words = [ "Welcome to my Portfolio" ,"Thanks for visiting" ,];
const typingTextElement = document.getElementById('typing-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    const currentWord = words[wordIndex];
    const displayedText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

    typingTextElement.innerHTML = displayedText;

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 500; // Pause at the end of the word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        delay = 100; // Pause before typing the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    } else {
        delay = isDeleting ? 100: 200; // Adjust typing and deleting speed
    }

    setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});
