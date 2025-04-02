// Methodology Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize modals
    initModals();
    
    // Initialize charts if Chart.js is available
    if(typeof Chart !== 'undefined') {
        initMeasureCategoryChart();
        initRacialIdentityChart();
        initParticipantDemographicsChart();
    }
});

// Modal functionality
function initModals() {
    // Get all buttons that open a modal
    const modalButtons = document.querySelectorAll('.view-details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Add click event to all modal buttons
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                // Prevent scrolling on the background
                document.body.style.overflow = 'hidden';
            }
        });
    });

const ctx = document.getElementById('racialIdentityChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ['White', 'Black', 'Mixed', 'Indigenous', 'Asian', 'Not Disclosed'],
    datasets: [{
        data: [51, 17.1, 20, 6, 3, 3],
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f', '#bab0ab']
    }]
    },
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: 'left',
        },
        tooltip: {
        callbacks: {
            label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.parsed}%`;
            }
        }
        }
    }
    }
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        const expanded = details.style.maxHeight && details.style.maxHeight !== "0px";

        if (expanded) {
        details.style.maxHeight = "0";
        btn.textContent = "Details";
        } else {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.textContent = "Hide";
        }
    });
    });
    
    // Add click event to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                // Re-enable scrolling
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// Chart for Measure Categories
function initMeasureCategoryChart() {
    const ctx = document.getElementById('measureCategoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Mental Health', 'Physical Health', 'Social Support', 'Service Utilization', 'Trauma & PTSD'],
            datasets: [{
                data: [8, 5, 4, 3, 5],
                backgroundColor: [
                    '#4d74e6', // Primary color
                    '#3498db', // Accent color
                    '#9b59b6', // Purple
                    '#2ecc71', // Green
                    '#e74c3c'  // Red
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Distribution of Survey Measures by Category',
                    font: {
                        size: 16
                    }
                }
            },
            cutout: '50%'
        }
    });
}

// Chart for Racial Identity
function initRacialIdentityChart() {
    const ctx = document.getElementById('racialIdentityChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['White', 'Black/African American', 'Hispanic/Latino', 'Asian', 'Multiracial', 'Other'],
            datasets: [{
                data: [42, 28, 15, 8, 5, 2],
                backgroundColor: [
                    '#4d74e6', // Primary color
                    '#3498db', // Accent color
                    '#9b59b6', // Purple
                    '#2ecc71', // Green
                    '#e74c3c', // Red
                    '#f39c12'  // Orange
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Participant Racial Identity (%)',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Chart for Participant Demographics
function initParticipantDemographicsChart() {
    const ctx = document.getElementById('participantDemographicsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Female', 'Male', '18-25', '26-35', '36-45', '46+', 'Urban', 'Suburban', 'Rural'],
            datasets: [{
                label: 'Percentage (%)',
                data: [68, 32, 24, 38, 27, 11, 52, 36, 12],
                backgroundColor: [
                    '#4d74e6', '#4d74e6', // Gender - Primary color
                    '#3498db', '#3498db', '#3498db', '#3498db', // Age - Accent color
                    '#9b59b6', '#9b59b6', '#9b59b6' // Location - Purple
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Demographic Categories',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Participant Demographics',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            const index = item.dataIndex;
                            if (index <= 1) return 'Gender';
                            if (index <= 5) return 'Age Group';
                            return 'Location';
                        }
                    }
                }
            },
            barPercentage: 0.7
        }
    });
}
