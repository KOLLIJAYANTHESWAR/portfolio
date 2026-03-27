# Portfolio Website - Kolli Jayanth Eswar

A modern, professional portfolio website built with React and Express.js. Features smooth animations, responsive design, and a clean user experience optimized for recruiters and developers.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations and micro-interactions
- **Project Showcase** - Interactive project cards with detailed modal views
- **Skills Section** - Categorized skills for easy scanning
- **Dark Mode Support** - Automatic dark mode detection
- **Performance Optimized** - Fast loading and smooth scrolling
- **SEO Ready** - Proper metadata and semantic HTML
- **Accessibility** - WCAG compliant with proper ARIA labels

## Tech Stack

- **Frontend**: React 18, JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Features**: Smooth scroll, responsive grid layouts, modal components
- **No dependencies**: Pure CSS styling (no Tailwind or UI libraries)

## Project Structure

```
portfolio/
├── server.js                 # Express server
├── package.json             # Server dependencies
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── components/
│   │       ├── Navigation.js
│   │       ├── Hero.js
│   │       ├── About.js
│   │       ├── Skills.js
│   │       ├── Projects.js
│   │       ├── ProjectModal.js
│   │       ├── Experience.js
│   │       ├── Certifications.js
│   │       ├── Contact.js
│   │       ├── Footer.js
│   │       └── [component-specific CSS files]
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Development

Run the development servers:

**Terminal 1 - Start Express server (runs on port 5000)**
```bash
npm run dev
```

**Terminal 2 - Start React development server (runs on port 3000)**
```bash
npm run client
```

The React app will automatically proxy API requests to the Express server.

### Production Build

Build the React app for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

The React build will be served from the Express server at `http://localhost:5000`.

## Customization

### Update Personal Information

Edit `client/src/components/Hero.js`:
- Update name, title, location, CGPA
- Add resume link (Google Drive or cloud PDF)
- Update social media links

### Change Colors

Edit `client/src/index.css` CSS variables:
```css
:root {
  --primary-color: #0f172a;
  --accent-color: #3b82f6;
  /* ... other colors ... */
}
```

### Add/Remove Projects

Edit `client/src/components/Projects.js` - modify the `projects` array with your project details.

### Add/Remove Skills

Edit `client/src/components/Skills.js` - modify the `skillCategories` array.

### Update Profile Photo

Replace the placeholder in `Hero.js` with an actual image path.

## Sections

### Navigation
- Fixed navbar with smooth scroll navigation
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero
- Full viewport height introduction
- CTA buttons (View Projects, Download Resume)
- Social media links
- Profile photo placeholder

### About
- Personal introduction
- Quick facts (location, degree, graduation, interests)
- Two-column responsive layout

### Skills
- Categorized skills (Languages, Frontend, Backend, Cloud & DevOps, Core CS)
- Interactive skill cards
- Hover effects

### Projects
- Project cards with tech stack
- "View More" modal for detailed project information
- GitHub and Live Demo links
- Project features, architecture, and learnings

### Experience
- Timeline-based experience display
- AWS Cloud Club mentorship role
- Impact-focused descriptions

### Certifications & Achievements
- AWS and Azure certifications
- Competitive programming highlights
- DSA problem-solving achievements

### Contact
- Email, phone, LinkedIn, GitHub, YouTube links
- Copy-to-clipboard email functionality
- Call-to-action section

### Footer
- Copyright information
- "Back to Top" link
- Professional tagline

## Performance Optimizations

- Smooth scroll behavior
- CSS transitions for micro-interactions
- Optimized images and lazy loading
- Minimal JavaScript for maximum performance
- CSS Grid and Flexbox layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus states for all interactive elements
- High contrast color support
- Reduced motion support

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect and build your React app

### Deploy to Heroku

1. Create a Heroku account and install Heroku CLI
2. Run `heroku create`
3. Deploy with `git push heroku main`

### Deploy to Other Platforms

The Express server serves the static React build from the `client/build` directory. Most platforms support this Node.js + static file pattern.

## License

This project is open source and available under the MIT License.

## Contact

Reach out to Kolli Jayanth Eswar through the contact section on the portfolio website.

---

**Built with React & Express.js** | Always learning, always building.
