document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to handle accordion click
    function handleAccordionClick(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-button i');
        
        // Toggle this accordion
        content.classList.toggle('active');
        
        // Toggle the icon
        if (icon) {
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }
        
        // Get all sibling accordion headers
        const parent = header.closest('.tab-content');
        const siblings = parent.querySelectorAll('.accordion-header');
        
        // Close other accordions in this tab
        siblings.forEach(sibling => {
            if (sibling !== header) {
                const siblingContent = sibling.nextElementSibling;
                const siblingIcon = sibling.querySelector('.accordion-button i');
                
                siblingContent.classList.remove('active');
                if (siblingIcon) {
                    siblingIcon.classList.remove('fa-chevron-up');
                    siblingIcon.classList.add('fa-chevron-down');
                }
            }
        });
    }
    
    // Override the default accordion behavior for tab content
    document.querySelectorAll('.tab-content .accordion-header').forEach(header => {
        // Remove existing event listeners by cloning the node
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
        
        // Add our custom event listener
        newHeader.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleAccordionClick(this);
        });
    });
    
    function activateTab(tabId) {
        // Hide all tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Deactivate all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Activate the selected tab and button
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add('active');
        
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        activeButton.classList.add('active');
        
        // Reset all accordions in the active tab
        activeTab.querySelectorAll('.accordion-content').forEach(content => {
            content.classList.remove('active');
        });
        
        activeTab.querySelectorAll('.accordion-button i').forEach(icon => {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        });
    }
    
    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
    
    // Activate the first tab by default
    if (tabButtons.length > 0) {
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        activateTab(firstTabId);
    }
});
