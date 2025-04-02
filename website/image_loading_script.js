// Image loading optimization script
document.addEventListener('DOMContentLoaded', function() {
  // Add loading class to all case study images
  const caseStudyImages = document.querySelectorAll('.case-study-image');
  caseStudyImages.forEach(container => {
    container.classList.add('loading');
    
    // Get the image inside the container
    const img = container.querySelector('img');
    if (img) {
      // Create a backup image element with data URI fallback
      const backupImg = document.createElement('img');
      backupImg.style.display = 'none';
      backupImg.alt = img.alt;
      backupImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
      
      // Add error handling
      img.onerror = function() {
        console.log('Error loading image:', img.src);
        img.style.display = 'none';
        backupImg.style.display = 'block';
        container.appendChild(backupImg);
      };
      
      // Add load event to remove loading state
      img.onload = function() {
        container.classList.remove('loading');
        console.log('Image loaded successfully:', img.src);
      };
      
      // Force reload the image to trigger onload/onerror
      const currentSrc = img.src;
      img.src = '';
      setTimeout(() => {
        img.src = currentSrc + '?t=' + new Date().getTime();
      }, 50);
    }
  });
  
  // Detect browser compatibility issues
  const detectCompatibilityIssues = function() {
    const issues = [];
    
    // Check if browser supports modern image formats
    const webpSupport = document.createElement('canvas')
      .toDataURL('image/webp').indexOf('data:image/webp') === 0;
    if (!webpSupport) {
      issues.push('WebP image format not supported');
    }
    
    // Check if CSS animations are supported
    const animationSupport = typeof document.createElement('div').style.animation !== 'undefined';
    if (!animationSupport) {
      issues.push('CSS animations not supported');
    }
    
    // Check if browser is Internet Explorer
    const isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.indexOf('Trident/') !== -1;
    if (isIE) {
      issues.push('Internet Explorer detected, which may have limited support for modern web features');
    }
    
    // Log any detected issues
    if (issues.length > 0) {
      console.log('Browser compatibility issues detected:', issues);
    }
    
    return issues;
  };
  
  const compatibilityIssues = detectCompatibilityIssues();
  if (compatibilityIssues.length > 0) {
    console.log('Consider using the troubleshooting guide for optimal viewing experience');
  }
});
