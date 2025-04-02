// DPTR Website JavaScript Functionality

// Terminal animation for data flow visualization
document.addEventListener('DOMContentLoaded', function() {
  // Get the terminal element
  const terminal = document.querySelector('.terminal-content');
  
  if (terminal) {
    const lines = [
      '> Connecting to data sources...',
      '> Analyzing data structures...',
      '> Identifying entity relationships...',
      '> Applying human-centered schema...',
      '> Creating unified data model...',
      '> Establishing real-time connections...',
      '> Data unification complete.',
      '> AI-ready foundation established.'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    let isTyping = true;
    
    // Function to simulate typing
    function typeWriter() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          currentLine += lines[lineIndex].charAt(charIndex);
          terminal.innerHTML = terminal.innerHTML.replace(/<p>[^<]*<\/p>$/, '') + 
                              '<p>' + currentLine + '</p>';
          charIndex++;
          setTimeout(typeWriter, 50);
        } else {
          charIndex = 0;
          lineIndex++;
          currentLine = '';
          if (lineIndex < lines.length) {
            setTimeout(typeWriter, 500);
          }
        }
      }
    }
    
    // Start the typing animation
    setTimeout(typeWriter, 1000);
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
});
