// JavaScript for card animations and chart visualizations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Check if element is in viewport
            if (elementTop < window.innerHeight * 0.9 && elementBottom > 0) {
                element.classList.add('is-visible');
                
                // Handle circle progress charts
                if (element.querySelector('.circle-progress')) {
                    const circleProgress = element.querySelector('.circle-progress');
                    const percentage = circleProgress.getAttribute('data-percentage');
                    circleProgress.style.background = `conic-gradient(var(--primary-color) 0% ${percentage}%, #eee ${percentage}% 100%)`;
                }
            }
        });
    };
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize any interactive elements in cards
    const initializeCardInteractions = function() {
        // Add any interactive functionality for cards here
        
        // Example: Add hover effects to bars
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.addEventListener('mouseenter', function() {
                const value = this.style.height.replace('%', '');
                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.textContent = value + '%';
                this.appendChild(tooltip);
            });
            
            bar.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    };
    
    initializeCardInteractions();
});
