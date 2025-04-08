// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon i');
            
            // Toggle the active class on the content
            content.classList.toggle('active');
            
            // Toggle the icon if it exists
            if (icon) {
                if (icon.classList.contains('fa-plus')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
            
            // Close other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('.toggle-icon i');
                    
                    otherContent.classList.remove('active');
                    if (otherIcon && otherIcon.classList.contains('fa-minus')) {
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                }
            });
        });
    });

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4d74e6'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4d74e6',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
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
