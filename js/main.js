// Main JavaScript file for DPTR website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements
    initializeDataFlow();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to initialize the interactive data flow visualization
function initializeDataFlow() {
    const sourceItems = document.querySelectorAll('.source-item');
    const destinationItems = document.querySelectorAll('.destination-item');
    
    // Add click event listeners to source items
    sourceItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Reset all items
            sourceItems.forEach(i => i.classList.remove('active'));
            destinationItems.forEach(i => i.classList.remove('active'));
            
            // Activate this item
            this.classList.add('active');
            
            // Activate corresponding destination (if exists)
            if (index < destinationItems.length) {
                destinationItems[index].classList.add('active');
            }
            
            // Animate flow line
            animateFlowLine(index);
        });
    });
}

// Function to animate the flow line between source and destination
function animateFlowLine(index) {
    // This would be implemented with more complex animations
    // For now, we'll just log the action
    console.log(`Animating flow line for item ${index}`);
}

// Function to handle mobile navigation toggle
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
