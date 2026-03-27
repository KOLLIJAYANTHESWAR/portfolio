# Portfolio Setup & Deployment Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js v18+ installed
- npm or yarn package manager

### Installation & Running

```bash
# 1. Clone and navigate to project
git clone <your-repo-url>
cd portfolio

# 2. Install server dependencies
npm install

# 3. Install client dependencies
cd client
npm install
cd ..

# 4. Start development servers
# Terminal 1: Start Express backend
npm run dev

# Terminal 2: Start React frontend (new terminal window)
npm run client
```

Visit `http://localhost:3000` in your browser.

---

## Project Structure

```
portfolio/
├── server.js                      # Express server entry point
├── package.json                   # Server dependencies
├── README.md                      # Main documentation
├── LINKS_VERIFICATION.md          # All links verification
├── SETUP_GUIDE.md                 # This file
├── .gitignore                     # Git ignore rules
└── client/                        # React application
    ├── public/
    │   └── index.html             # HTML entry point
    ├── src/
    │   ├── index.js               # React DOM render
    │   ├── index.css              # Global styles & CSS variables
    │   ├── App.js                 # Main App component
    │   ├── App.css                # App styles
    │   └── components/            # Reusable components
    │       ├── Navigation.js       # Top navigation bar
    │       ├── Hero.js            # Hero section with intro
    │       ├── About.js           # About section with highlights
    │       ├── Skills.js          # Skills section
    │       ├── Projects.js        # Project cards
    │       ├── ProjectModal.js    # Project detail modal
    │       ├── Experience.js      # Experience timeline
    │       ├── Certifications.js  # Certifications & achievements
    │       ├── Blog.js            # Blog section (coming soon)
    │       ├── Contact.js         # Contact section
    │       ├── Footer.js          # Footer
    │       └── [component].css    # Component-specific styles
    └── package.json               # Client dependencies
```

---

## Customization Guide

### 1. Update Personal Information

**File:** `client/src/components/Hero.js`

```javascript
// Update these values:
const heroTitle = "Kolli Jayanth Eswar"
const heroSubtitle = "Cloud Engineer | MERN Stack Developer | AI Systems Builder"
const heroLocation = "Andhra Pradesh, India"
```

### 2. Change Color Scheme

**File:** `client/src/index.css`

```css
:root {
  /* Primary brand color */
  --primary-color: #0f172a;        /* Dark slate blue */
  
  /* Accent color for highlights */
  --accent-color: #3b82f6;         /* Bright blue */
  --accent-light: #60a5fa;         /* Light blue */
  
  /* Backgrounds */
  --background: #ffffff;           /* White */
  --light-gray: #f1f5f9;          /* Light gray */
  
  /* Text colors */
  --text-primary: #0f172a;         /* Dark text */
  --text-secondary: #64748b;       /* Gray text */
  
  /* UI elements */
  --border-color: #e2e8f0;         /* Light borders */
  --success: #10b981;              /* Green success */
}
```

### 3. Update Projects

**File:** `client/src/components/Projects.js`

Find the `projects` array and modify:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description",
    techStack: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/...",
      youtube: "https://youtu.be/...",
      linkedin: "https://linkedin.com/posts/...",
    },
    // ... other fields
  },
  // Add more projects...
]
```

### 4. Update Skills

**File:** `client/src/components/Skills.js`

Modify the `skillCategories` array to add/remove skills:

```javascript
const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "Java", "SQL"]
  },
  // ... more categories
]
```

### 5. Update Certifications

**File:** `client/src/components/Certifications.js`

```javascript
const certifications = [
  {
    name: "Your Certification Name",
    issuer: "Issuing Organization",
    year: "2024",
    icon: "🏆",
    link: "https://..." 
  },
  // ... more certifications
]
```

### 6. Update Contact Information

**File:** `client/src/components/Contact.js`

```javascript
const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  // ... more contact links
]
```

### 7. Update Social Links

**File:** `client/src/components/Hero.js`

Look for the social links section and update URLs:

```javascript
<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

---

## Styling Tips

### Add Custom Fonts

**File:** `client/src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-family: 'Your Font', sans-serif;
}

body {
  font-family: var(--font-family);
}
```

### Adjust Spacing

Use the existing CSS custom properties in `index.css`:

```css
/* Modify these to adjust spacing throughout */
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
```

### Change Animation Speeds

Look for `transition` properties and modify:

```css
transition: all 0.3s ease;  /* Change 0.3s to your preferred duration */
```

---

## Development Commands

```bash
# Start development server
npm run dev

# Start client development
npm run client

# Build client for production
npm run client-build

# Full build (builds client, then ready to run with npm start)
npm run build

# Start production server
npm start
```

---

## Environment Variables

Create a `.env` file in the root directory if needed:

```
PORT=5000
NODE_ENV=development
REACT_APP_API_URL=http://localhost:5000
```

---

## Deployment Options

### Deploy to Vercel (Recommended for React)

1. Push code to GitHub
2. Go to vercel.com and connect your repo
3. Vercel automatically detects and builds your React app
4. For the Express server, use Vercel Serverless Functions or deploy separately

### Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy to Railway/Render

1. Connect GitHub repository
2. Set Node.js as runtime
3. Set build command: `npm run build`
4. Set start command: `npm start`

### Self-Hosted (VPS/Dedicated Server)

```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install
cd client && npm install && cd ..

# Build client
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start server.js --name "portfolio"

# View status
pm2 status
```

---

## Performance Optimization

### Enable Gzip Compression

Add to `server.js`:

```javascript
const compression = require('compression');
app.use(compression());
```

### Optimize Images

- Use WebP format when possible
- Compress images with tools like TinyPNG
- Use lazy loading for images

### Minimize CSS/JS

- Production build automatically minifies assets
- Verify with: `npm run build`

---

## SEO Optimization

Update meta tags in `client/public/index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, portfolio, cloud, AI">
<meta name="author" content="Your Name">
```

---

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm start
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules client/node_modules
npm install
cd client && npm install && cd ..
npm run build
```

### Styles Not Loading

- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file paths are correct
- Verify CSS variables are defined in `index.css`

### Links Not Working

- Ensure links use full URLs (https://...)
- Check target="_blank" and rel="noopener noreferrer"
- Verify links in components haven't been modified incorrectly

---

## Security Best Practices

1. Keep dependencies updated: `npm update`
2. Use environment variables for sensitive data
3. Never commit `.env` files
4. Enable CORS only for trusted domains
5. Validate all user input
6. Use HTTPS in production

---

## Monitoring & Analytics

Add Google Analytics to `client/public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Support & Resources

- React Documentation: https://react.dev
- Express.js Guide: https://expressjs.com
- Node.js Docs: https://nodejs.org/docs
- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS

---

## License

This project is open source under the MIT License.

---

**Last Updated:** 2026-01-01
**Status:** Ready for Production
