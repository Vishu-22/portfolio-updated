# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a sleek design with smooth animations, gradient effects, and a fully functional contact form.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?logo=tailwind-css)

## ✨ Features

- 🏠 **Home Section** - Animated hero section with profile image and gradient borders
- 👤 **About Me** - Personal introduction with mission, philosophy, and approach
- 🎨 **Skills** - Interactive skill cards with progress bars and animations
- 💼 **Projects** - Showcase of projects with hover effects and technology tags
- 🏆 **Achievements** - Certifications and milestones display
- 📄 **Resume** - Downloadable resume/CV section
- 📞 **Contact** - Working contact form with EmailJS integration
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎭 **Modern UI/UX** - Smooth animations, gradients, and hover effects

## 🚀 Tech Stack

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **EmailJS** - Contact form email service
- **React DOM** - React rendering

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone the repository** (or download the project)
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Configuration

### EmailJS Setup (Optional but Recommended)

To enable email functionality for the contact form:

1. **Sign up for EmailJS**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create a free account
   - Verify your email

2. **Create an Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to Email Templates → Create New Template
   - Use this template structure:
   ```
   Subject: Portfolio Contact: {{name}}
   
   Content: (Your HTML template)
   ```
   - Variables: `{{name}}`, `{{message}}`, `{{time}}`, `{{from_email}}`
   - Copy the **Template ID**

4. **Get Public Key**
   - Go to Account → General
   - Copy your **Public Key**

5. **Create `.env` file**
   Create a `.env` file in the project root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Restart dev server**
   ```bash
   npm run dev
   ```

**Note:** If EmailJS is not configured, the form will use a mailto fallback.

### Customization

#### Update Personal Information

1. **Home Section** (`src/components/Home.jsx`)
   - Update name, title, and bio
   - Add your profile image to `/public/profile.jpg`

2. **About Section** (`src/components/About.jsx`)
   - Update personal description
   - Modify mission, philosophy, and approach

3. **Skills Section** (`src/components/Skills.jsx`)
   - Update skill categories and proficiency levels
   - Add/remove skills as needed

4. **Projects Section** (`src/components/Projects.jsx`)
   - Replace placeholder projects with your actual projects
   - Update project links, descriptions, and technologies

5. **Achievements Section** (`src/components/Achievements.jsx`)
   - Update certifications and achievements
   - Modify stats (projects, clients, experience, etc.)

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update email, WhatsApp, LinkedIn, and GitHub links
   - Update the mailto fallback email address

7. **Resume Section** (`src/components/Resume.jsx`)
   - Replace `Karan Resume.pdf` with your actual resume file
   - Place your resume PDF in the `/public` folder

8. **Footer** (`src/components/Footer.jsx`)
   - Update social media links

#### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Color scheme: Update gradient colors in components or Tailwind config

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg          # Your profile image
│   └── Karan Resume.pdf     # Your resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section
│   │   ├── Achievements.jsx # Achievements section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Home.jsx          # Home/hero section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Resume.jsx        # Resume download
│   │   └── Skills.jsx       # Skills section
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables (create this)
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
└── vite.config.js            # Vite configuration
```

## 🚀 Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   The `dist` folder contains the production-ready files that can be deployed to:
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [GitHub Pages](https://pages.github.com/)
   - Any static hosting service

## 🎨 Customization Guide

### Changing Colors

The portfolio uses a blue-purple-pink gradient theme. To change colors:

1. **Update Tailwind Config** (`tailwind.config.js`)
   ```javascript
   colors: {
     primary: {
       // Your custom colors
     }
   }
   ```

2. **Update CSS Gradients** (`src/index.css`)
   - Modify `.text-gradient` class
   - Update gradient colors in components

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Animations

Custom animations are defined in:
- `tailwind.config.js` - Animation keyframes
- `src/index.css` - Utility classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Contact Form Not Working
- Check EmailJS credentials in `.env` file
- Verify EmailJS service and template IDs
- Check browser console for errors
- Ensure `.env` file is in the project root

### Images Not Loading
- Ensure images are in the `/public` folder
- Use correct path: `/profile.jpg` (not `/public/profile.jpg`)
- Check file extensions (case-sensitive)

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `rm -rf node_modules/.vite`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Karan**

- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

---

⭐ If you like this project, please give it a star!

