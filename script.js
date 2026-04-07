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
    "Xtel - Promotions Management": {
        images: [
            "/images/xtel1.png",
            "/images/xtel2.png",
            "/images/xtel3.png",
            "/images/xtel4.png"
        ],
        description: `
            <p><strong>Xtel</strong> is a high-performance Promotions Management System engineered with a <strong>Microservices</strong> and <strong>Microfrontend Architecture</strong>. The system provides a centralized platform for managing complex promotional campaigns and secure user authentication (SSO).</p>
            <p><strong>Key Technical Highlights:</strong></p>
            <ul>
                <li>Implemented <strong>Clean Architecture (Onion Architecture)</strong> principles with a focus on Domain-Driven Design (DDD).</li>
                <li>Utilized the <strong>CQRS Pattern (MediatR)</strong> to effectively segregate command and query logic, optimizing data handling and application scalability.</li>
                <li>Architected a <strong>Microfrontend</strong> setup using <strong>Vite</strong> and <strong>Module Federation</strong>, enabling independent development and deployment of UI modules (Host + Remote Apps).</li>
                <li>Developed a robust backend powered by <strong>.NET 8</strong>, incorporating specialized modules for Identity & Access Management (SSO) and dynamic Promotions.</li>
                <li>Designed a centralized <strong>API Gateway</strong> for secure routing, authentication, and load balancing across various microservices.</li>
                <li>Containerized the entire ecosystem using <strong>Docker</strong> and <strong>Docker-Compose</strong> for seamless deployment and orchestration.</li>
                <li>Leveraged <strong>Entity Framework Core</strong> for efficient SQL Server database management with migration support.</li>
            </ul>
        `
    },
    "Smart Tales and Task App": {
        images: [
            "/images/sm1.png",
            "/images/SM2.png",
            "/images/sm3.png",
            "/images/sm4.png",
            "/images/sm5.png"
        ],
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
        images: [
            "/images/g1.jpeg",
            "/images/g2.jpeg",
            "/images/g3.jpeg",
            "/images/g4.jpeg",
            "/images/g5.jpeg",
            "/images/g6.jpeg"
        ],
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
        images: [
            "/images/sabes1.png",
            "/images/sabes2.png",
            "/images/sabes3.png",
            "/images/sabes4.png"


        ],
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
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalIndicators = document.getElementById('modal-indicators');

let currentProjectImages = [];
let currentImageIndex = 0;

function updateModalGallery() {
    // Fade out
    modalImg.style.opacity = '0';

    setTimeout(() => {
        // Change source
        modalImg.src = currentProjectImages[currentImageIndex];

        // Update indicators
        document.querySelectorAll('.indicator').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });

        // Fade in
        modalImg.style.opacity = '1';
    }, 300);

    // Toggle navigation buttons visibility if only one image
    const showNav = currentProjectImages.length > 1;
    modalPrev.style.display = showNav ? 'flex' : 'none';
    modalNext.style.display = showNav ? 'flex' : 'none';
}

function initGallery(images) {
    currentProjectImages = images;
    currentImageIndex = 0;

    // Clear and build indicators
    modalIndicators.innerHTML = '';
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('indicator');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentImageIndex = index;
            updateModalGallery();
        });
        modalIndicators.appendChild(dot);
    });

    updateModalGallery();
}

modalPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateModalGallery();
});

modalNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
    updateModalGallery();
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;

        const titleElement = card.querySelector('.project-title');
        const techList = card.querySelector('.project-tech');
        const projectTitle = titleElement.innerText;

        if (titleElement && projectDetails[projectTitle]) {
            const data = projectDetails[projectTitle];

            modalTitle.innerText = projectTitle;
            const techs = Array.from(techList.querySelectorAll('li')).map(li => li.innerText).join(' • ');
            modalTech.innerText = techs;
            modalDesc.innerHTML = data.description;

            // Initialize Gallery
            initGallery(data.images);

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
