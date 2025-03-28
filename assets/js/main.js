// Site functionality and animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate awareness background elements
    if (document.querySelector('.awareness-background')) {
        initAwarenessBackground();
    }

    // Mobile Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Scroll Animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    window.addEventListener('load', checkScroll);

    // Initialize charts if they exist
    if (typeof Chart !== 'undefined' && document.getElementById('researchChart')) {
        initializeCharts();
    }
    
    // Load research summary if on index page
    if (document.querySelector('.key-questions-section')) {
        loadResearchSummary();
    }
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
});

// Initialize awareness background with subtle animations
function initAwarenessBackground() {
    const background = document.querySelector('.awareness-background');
    const symbols = document.querySelectorAll('.awareness-symbol');
    const lines = document.querySelectorAll('.awareness-line');
    
    // Create additional awareness symbols dynamically
    for (let i = 0; i < 15; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'awareness-symbol';
        
        // Choose supportive icons randomly
        const icons = [
            'fa-heart', 'fa-hand-holding-heart', 'fa-hands-holding', 
            'fa-ribbon', 'fa-dove', 'fa-shield-heart', 'fa-star',
            'fa-handshake', 'fa-people-group', 'fa-house-heart'
        ];
        
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const size = 10 + Math.random() * 30;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const rotation = Math.random() * 20 - 10;
        const delay = Math.random() * 10;
        
        symbol.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        symbol.style.fontSize = `${size}px`;
        symbol.style.top = `${top}%`;
        symbol.style.left = `${left}%`;
        symbol.style.transform = `rotate(${rotation}deg)`;
        symbol.style.opacity = '0.05';
        symbol.style.color = '#4d74e6';
        
        // Add subtle pulse animation
        symbol.style.animation = `pulse 20s infinite ease-in-out ${delay}s`;
        
        background.appendChild(symbol);
    }
    
    // Create additional horizontal lines for connection symbolism
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'awareness-line';
        
        const top = 10 + Math.random() * 80;
        const width = 50 + Math.random() * 50;
        const left = Math.random() * (100 - width);
        const delay = Math.random() * 5;
        
        line.style.top = `${top}%`;
        line.style.left = `${left}%`;
        line.style.width = `${width}%`;
        line.style.animation = `fadeInOut 15s infinite ${delay}s`;
        
        background.appendChild(line);
    }
    
    // Add subtle pulse animation keyframes if they don't exist
    if (!document.querySelector('#awareness-animations')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'awareness-animations';
        styleSheet.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 0.05; transform: scale(1) rotate(0deg); }
                50% { opacity: 0.1; transform: scale(1.1) rotate(5deg); }
            }
            
            @keyframes fadeInOut {
                0%, 100% { opacity: 0.05; }
                50% { opacity: 0.2; }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Load research summary data
function loadResearchSummary() {
    fetch('assets/data/research-summary.json')
        .then(response => response.json())
        .then(data => {
            // Could be used to dynamically populate research questions and findings
            console.log('Research summary loaded successfully');
        })
        .catch(error => {
            console.error('Error loading research summary:', error);
        });
}

// Dashboard Charts (if dashboard page is loaded)
function initializeCharts() {
    // Health data for CSE youth vs general population
    const ctx1 = document.getElementById('researchChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Poor Health', 'Physical Health Issues', 'Mental Health Issues', 'Limited Healthcare Access', 'Substance Use'],
            datasets: [
                {
                    label: 'CSE-Involved Youth (%)',
                    data: [26.9, 22.5, 50.5, 32.0, 28.7],
                    backgroundColor: 'rgba(77, 116, 230, 0.7)',
                    borderColor: 'rgba(77, 116, 230, 1)',
                    borderWidth: 1
                },
                {
                    label: 'General Youth Population (%)',
                    data: [12.5, 15.2, 25.3, 18.9, 14.2],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Health Outcomes Comparison',
                    font: {
                        size: 16,
                        family: 'Playfair Display'
                    }
                },
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    },
                    max: 60
                },
                x: {
                    title: {
                        display: true,
                        text: 'Health Indicators'
                    }
                }
            }
        }
    });
}
