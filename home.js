document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// View More functionality for problem statements
const viewMoreBtn = document.getElementById('view-more-btn');
const problemCards = document.querySelectorAll('.problem-card');
let isExpanded = false;

function handleViewMore() {
    isExpanded = true;
    problemCards.forEach(card => card.classList.add('show'));
    viewMoreBtn.style.display = 'none';
}

function checkProblemCards() {
    if (window.innerWidth <= 768 && !isExpanded) {
        viewMoreBtn.style.display = 'block';
        problemCards.forEach((card, index) => {
            if (index >= 2) {
                card.classList.remove('show');
            } else {
                card.classList.add('show');
            }
        });
    } else {
        viewMoreBtn.style.display = 'none';
        problemCards.forEach(card => card.classList.add('show'));
    }
}

viewMoreBtn.addEventListener('click', handleViewMore);
window.addEventListener('load', checkProblemCards);
window.addEventListener('resize', checkProblemCards);