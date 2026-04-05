// Create floating particles
function createParticles() {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = 10 + Math.random() * 10 + 's';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        document.body.appendChild(particle);
    }
}
createParticles();

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Dark/Light mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}

// Resume download
document.getElementById('resumeBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    // Create a text version of CV
    const cvContent = `Ilanthiraiyan Sivagnanamoorthy
Aerospace Engineering Graduate

Contact: 07492 700454 | ilansiva30@gmail.com
Location: Harrow, HA7 4TT

Education:
- QMUL MEng Aerospace Engineering (Predicted 1st Class)
- Harrow High School: A* A* A* in Maths, Physics, CS

Experience:
- Mechanical Engineer at GE Aerospace (2025-Present)
- Undergraduate Researcher (Cornell Collaboration)
- Maths Curriculum Developer

Publications: 3 peer-reviewed papers
Awards: IMechE Best Student, Drapers' Company Prize, and more`;

    const blob = new Blob([cvContent], {type: 'text/plain'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Ilanthiraiyan_Sivagnanamoorthy_CV.txt';
    link.click();
    URL.revokeObjectURL(link.href);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});
