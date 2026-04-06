// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.7)';
        navbar.style.background = 'rgba(18, 18, 22, 0.85)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(18, 18, 22, 0.6)';
    }
});

// --- Mobile Menu Toggle ---
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// --- Typing Effect ---
const texts = ["Scalable APIs", "Enterprise Systems", "Secure Microservices", ".NET Architectures"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delay = 1500;

const typElement = document.getElementById('typing-text');

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    typElement.textContent = letter;

    let timeout = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && letter.length === currentText.length) {
        timeout = delay;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        timeout = 500;
    }

    setTimeout(type, timeout);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', type);

// --- Scroll Animation (Intersection Observer) ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach((element) => {
    observer.observe(element);
});

// --- Project Modal Logic ---
const projectDetails = {
    "MyCompany Services": {
        description: `
            <p>An enterprise-level backend system featuring highly scalable APIs built on a microservices architecture. Designed to handle large volumes of concurrent traffic securely and efficiently.</p>
            <p><strong>Key Features & Contributions:</strong></p>
            <ul>
                <li>Implemented comprehensive <strong>JWT authentication</strong> and <strong>Single Session Management</strong> mechanisms to ensure secure user access across all services.</li>
                <li>Integrated <strong>SSO (Single Sign-On)</strong> capabilities for seamless enterprise user onboarding.</li>
                <li>Architected a robust <strong>API Gateway</strong> and integrated it with <strong>Azure APIM</strong> to centralize routing, enforce rate limiting, and apply security policies globally.</li>
                <li>Developed custom <strong>Middlewares</strong> for request validation, structured error handling, and centralized logging.</li>
                <li>Built specialized business logic modules such as dynamic <strong>Promotions</strong>.</li>
                <li>Containerized services using <strong>Docker</strong> and established automated <strong>CI/CD</strong> deployment pipelines leading into <strong>Azure</strong>.</li>
            </ul>
        `
    },
    "Smart Tales and Task App": {
        description: `
            <p>A comprehensive learning and assignment management application tailored for educational institutions, enabling seamless interaction between teachers and students.</p>
            <p><strong>Key Features & Contributions:</strong></p>
            <ul>
                <li>Developed using <strong>Blazor Hybrid MAUI</strong> allowing the app to run efficiently natively on both desktop and mobile platforms with a shared codebase.</li>
                <li>Implemented a secure role-based dashboard allowing Teachers to upload educational stories directly to the platform.</li>
                <li>Built assignment management functionality where students can receive, interact with, and submit assignments, while teachers track granular progress.</li>
                <li>Integrated a seamless push notification system to keep users alerted regarding deadlines and new materials.</li>
                <li>Utilized <strong>SQLite</strong> for robust local edge data caching, and styled the UI extensively using <strong>Tailwind CSS</strong> for a responsive, modern feel.</li>
            </ul>
        `
    },
    "GateSale": {
        description: `
            <p>An intuitive online student marketplace designed to foster a circular economy within campuses by enabling students to seamlessly buy and sell second-hand products securely.</p>
            <p><strong>Key Features & Contributions:</strong></p>
            <ul>
                <li>Designed and developed a cohesive ecosystem featuring a complete <strong>admin dashboard</strong> and a cross-platform <strong>mobile application</strong>.</li>
                <li>Built leveraging <strong>Blazor .NET</strong> and <strong>Bootstrap</strong> for lightning-fast, highly responsive user interfaces.</li>
                <li>Engineered an extensive SQL Server backend architecture strictly managing highly relational data concerning users, listed items, transactions, and categories.</li>
                <li>Implemented robust, secure user authentication systems ensuring only verified students can access specific marketplace features.</li>
                <li>Both the admin dashboard and mobile application backend services were successfully deployed and operate live on <strong>AWS (Amazon Web Services)</strong> infrastructure.</li>
            </ul>
        `
    },
    "SABES - Electric Store POS App": {
        description: `
            <p>A specialized, high-performance point-of-sale system created specifically for an electronic and hardware retail store. Designed to modernize out-dated billing processes and improve business tracking.</p>
            <p><strong>Key Features & Contributions:</strong></p>
            <ul>
                <li>Built natively using the state-of-the-art <strong>Blazor Hybrid MAUI</strong> framework built on <strong>.NET 8</strong>, enabling simultaneous deployment across Windows desktop and mobile devices.</li>
                <li>Engineered a streamlined, rapid-entry billing system tailored for fast-paced retail checkout flows.</li>
                <li>Implemented complex mathematical logic to handle dynamic cart discounts, bulk-pricing, and generating professional PDF quotations automatically.</li>
                <li>Created a robust invoice management panel capable of tracking, sorting, and alerting on pending vs. paid invoices.</li>
                <li>Integrated local resilient data storage with <strong>SQLite</strong> ensuring system uptime even without internet access, encapsulated in a beautiful <strong>Tailwind CSS</strong> interface.</li>
            </ul>
        `
    }
};

const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalTech = document.getElementById('modal-tech');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent opening if clicking on a link
        if(e.target.closest('a')) return;
        
        // Extract data from the clicked card
        const titleElement = card.querySelector('.project-title');
        const imgElement = card.querySelector('img');
        const techList = card.querySelector('.project-tech');
        
        if (titleElement && projectDetails[titleElement.innerText]) {
            // Populate modal
            modalTitle.innerText = titleElement.innerText;
            modalImg.src = imgElement.src;
            modalImg.alt = imgElement.alt;
            
            // Reconstruct tech stack string for the modal subtitle
            const techs = Array.from(techList.querySelectorAll('li')).map(li => li.innerText).join(' • ');
            modalTech.innerText = techs;
            
            // Inject extensive HTML description
            modalDesc.innerHTML = projectDetails[titleElement.innerText].description;
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close Modal functions
const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', closeModal);

// Close when clicking outside modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});
