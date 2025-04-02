// JavaScript for the key findings charts
document.addEventListener('DOMContentLoaded', function() {
    // Health Concerns Chart
    if (document.getElementById('healthConcernsChart')) {
        const ctx = document.getElementById('healthConcernsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Poor Physical Health', 'Poor Mental Health', 'Headaches', 'Insomnia', 'Depression', 'Anxiety'],
                datasets: [{
                    label: 'Percentage (%)',
                    data: [22, 50, 51, 47, 61, 57],
                    backgroundColor: [
                        'rgba(77, 116, 230, 0.7)',
                        'rgba(77, 116, 230, 0.7)',
                        'rgba(77, 116, 230, 0.7)',
                        'rgba(77, 116, 230, 0.7)',
                        'rgba(77, 116, 230, 0.7)',
                        'rgba(77, 116, 230, 0.7)'
                    ],
                    borderColor: [
                        'rgba(77, 116, 230, 1)',
                        'rgba(77, 116, 230, 1)',
                        'rgba(77, 116, 230, 1)',
                        'rgba(77, 116, 230, 1)',
                        'rgba(77, 116, 230, 1)',
                        'rgba(77, 116, 230, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Health Status and Conditions',
                        font: { size: 16 }
                    },
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Percentage (%)' },
                        max: 70
                    }
                }
            }
        });
    }

    // Risk Behaviors Chart
    if (document.getElementById('riskBehaviorsChart')) {
        const ctx = document.getElementById('riskBehaviorsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Incarcerated Caregiver', 'Emotional Neglect', 'Caregiver Mental Illness', 'Verbal Abuse', 'Physical Abuse'],
                datasets: [
                    {
                        label: 'Reported Experience (%)',
                        data: [32, 73, 66, 44.3, 29.6],
                        backgroundColor: 'rgba(77, 116, 230, 0.7)',
                        borderColor: 'rgba(77, 116, 230, 1)',
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
                        text: 'Adverse Childhood Experiences & Relationship Abuse',
                        font: { size: 16 }
                    },
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Percentage (%)' },
                        max: 100
                    }
                }
            }
        });
    }

    // Healthcare Access Chart
    if (document.getElementById('healthcareAccessChart')) {
        const ctx = document.getElementById('healthcareAccessChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['No Healthcare Barriers', 'Healthcare Barriers'],
                datasets: [{
                    data: [32, 68],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(231, 76, 60, 0.7)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Healthcare Barriers Among CSE Survivors',
                        font: { size: 16 }
                    },
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // ACEs Chart
    if (document.getElementById('acesChart')) {
        const ctx = document.getElementById('acesChart').getContext('2d');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Experienced ACEs', 'Incarcerated Caregivers', 'Emotional Neglect', 'Physical Illness'],
                datasets: [{
                    label: 'Percentage (%)',
                    data: [85, 73, 70, 66],
                    backgroundColor: 'rgba(77, 116, 230, 0.7)',
                    borderColor: 'rgba(77, 116, 230, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Adverse Childhood Experiences',
                        font: { size: 16 }
                    },
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Percentage (%)' },
                        max: 100
                    }
                }
            }
        });
    }

    // Protective Factors Chart
    if (document.getElementById('protectiveFactorsChart')) {
        const ctx = document.getElementById('protectiveFactorsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Supportive Adult Relationships', 'Community Support Services', 'School Connection'],
                datasets: [{
                    label: 'Percentage (%)',
                    data: [58, 42, 37],
                    backgroundColor: [
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(46, 204, 113, 0.7)'
                    ],
                    borderColor: [
                        'rgba(46, 204, 113, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(46, 204, 113, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Protective Factors for CSE Survivors',
                        font: { size: 16 }
                    },
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Percentage (%)' },
                        max: 70
                    }
                }
            }
        });
    }
});
