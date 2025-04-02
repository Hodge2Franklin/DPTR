# DPTR Website Restoration Documentation

This document provides detailed instructions for restoring the DPTR website from the repository. It includes step-by-step procedures, file explanations, and troubleshooting guidance to ensure the website can be completely restored in case of any issues.

## Prerequisites

Before beginning the restoration process, ensure you have:

1. Access to the GitHub repository: https://github.com/Hodge2Franklin/DPTR
2. Git installed on your local machine
3. A web server or hosting service for deployment
4. Basic knowledge of HTML, CSS, and JavaScript

## Restoration Process

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Hodge2Franklin/DPTR.git

# Navigate to the repository directory
cd DPTR
```

### 2. Select the Correct Branch

The repository contains multiple branches for different versions of the website. The main branches are:

- `main`: The primary branch with the stable version
- `Rev02`: The second revision of the website
- `REV-03`: The third revision of the website

To switch to the desired branch:

```bash
# Switch to the desired branch (e.g., Rev02)
git checkout Rev02
```

### 3. Verify File Structure

Ensure the repository has the following structure:

```
DPTR/
├── website/              # Main website files
│   ├── index.html        # Homepage HTML
│   ├── styles.css        # Main stylesheet
│   └── scripts.js        # JavaScript functionality
├── assets/               # Website assets
│   └── images/           # Image files including logo and icons
│       └── dptr-logo.svg # DPTR logo
└── docs/                 # Documentation
```

### 4. Deploy the Website

#### Option A: Deploy to a Static Web Server

1. Copy the contents of the `website` directory and the `assets` directory to your web server's root directory.
2. Ensure the file structure is maintained, with the `assets` directory at the same level as the HTML files.

#### Option B: Deploy to GitHub Pages

1. If using GitHub Pages, configure the repository settings to deploy from the desired branch.
2. Set the root directory or the `/docs` folder as the source for GitHub Pages, depending on your repository structure.

#### Option C: Deploy to a Hosting Service

1. Upload the contents of the `website` directory and the `assets` directory to your hosting service.
2. Ensure all file paths are correctly maintained.

### 5. Verify Deployment

After deployment, verify that:

1. The website loads correctly
2. All images and assets are displayed properly
3. Interactive elements function as expected
4. The website is responsive on different screen sizes

## File Explanations

### HTML Files

- `index.html`: The main HTML file that contains the structure of the website, including the hero section, value proposition cards, data flow visualization, case studies, testimonials, and CTA section.

### CSS Files

- `styles.css`: Contains all styling for the website, including:
  - Variables for colors, fonts, and spacing
  - Layout styling using flexbox and grid
  - Component-specific styling for cards, buttons, etc.
  - Responsive design rules for different screen sizes

### JavaScript Files

- `scripts.js`: Contains all interactive functionality, including:
  - Terminal animation in the data flow visualization
  - Navigation functionality
  - Any interactive elements or animations

### Asset Files

- `assets/images/dptr-logo.svg`: The DPTR logo used in the header
- Other image files for icons, backgrounds, and visual elements

## Troubleshooting

### Common Issues and Solutions

1. **Missing Images**
   - Ensure the paths to image files are correct
   - Check that all image files are present in the `assets/images` directory
   - Verify file permissions allow the web server to access the images

2. **Styling Issues**
   - Ensure the CSS file is properly linked in the HTML
   - Check for any CSS syntax errors
   - Verify that the browser supports all CSS features used

3. **JavaScript Functionality Not Working**
   - Ensure the JavaScript file is properly linked in the HTML
   - Check the browser console for any JavaScript errors
   - Verify that the browser supports all JavaScript features used

4. **Responsive Design Issues**
   - Test the website on different devices and screen sizes
   - Use browser developer tools to simulate different screen sizes
   - Check for any media queries that might be causing issues

## Backup and Recovery

It's recommended to maintain regular backups of the website files. To create a backup:

```bash
# Create a zip archive of the website files
zip -r dptr_website_backup_$(date +%Y%m%d).zip website/ assets/
```

To restore from a backup:

```bash
# Extract the backup archive
unzip dptr_website_backup_YYYYMMDD.zip
```

## Contact Information

If you encounter any issues during the restoration process, please contact:

- GitHub Repository Owner: Hodge2Franklin
- Repository URL: https://github.com/Hodge2Franklin/DPTR

## Version History

For a complete history of changes to the website, refer to the git commit history and the release notes document.
