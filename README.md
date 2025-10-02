# 🌐 Md Taaj Uddin - Portfolio Website  

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)  
[![Framer Motion](https://img.shields.io/badge/Framer%2520Motion-10.16.4-purple)](https://www.framer.com/motion/)  
![Responsive](https://img.shields.io/badge/Design-Responsive-green)  
![Deployment](https://img.shields.io/badge/Deployed-GitHub%2520Pages-success)  

A modern, responsive portfolio website built with **React** featuring smooth animations, glass morphism design, and excellent user experience.  

---

## 🚀 Live Demo  
👉 [Visit Portfolio](https://taajuddin.github.io/portfolio-taaj/)  

---

## ✨ Features  

- **Modern UI/UX Design** – Glass morphism with gradient backgrounds  
- **Smooth Animations** – Powered by Framer Motion  
- **Fully Responsive** – Works across all devices and screen sizes  
- **Interactive Elements** – Hover effects, scroll animations, micro-interactions  

### 📑 Professional Sections  
- 🏠 **Hero** – Animated developer profile, social links, CTA buttons  
- 👨‍💻 **About** – Personal story, education timeline  
- 💻 **Skills** – Animated progress bars, category-based skills  
- 🚀 **Projects** – Filterable showcase with overlays & demo links  
- 💼 **Experience** – Work & internship history with timeline  
- 📞 **Contact** – Interactive contact info with animations  

---

## 🛠️ Technologies Used  

- **Frontend Framework**: React 18.2.0  
- **Animation**: Framer Motion 10.16.4  
- **Icons**: React Icons  
- **Styling**: CSS3 (Grid, Flexbox, Custom Properties)  
- **Deployment**: GitHub Pages  

---
- **Project Structure**
```
portfolio-taaj/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   └── Footer.js & Footer.css
│   ├── sections/
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Experience.js & Experience.css
│   │   └── Contact.js & Contact.css
│   ├── assets/
│   │   ├── taaj.jpg
│   │   └── Md_Taaj_uddin_MERN_5_Years_Exp.pdf
│   ├── App.js & App.css
│   └── index.js
└── package.json
```
---

## 📦 Installation & Setup  

### Prerequisites  
- Node.js (v14 or higher)  
- npm or yarn  
### Deployements
- This portfolio is deployed via GitHub Pages with automated GitHub Actions.
**Manual Deployment**
```js
npm run build
npm run deploy
```
**package.json Deployment Config**
```js
{
  "homepage": "https://taajuddin.github.io/portfolio-taaj",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
### Local Development  

```bash
# Clone repository
git clone https://github.com/taajuddin/portfolio-taaj.git
cd portfolio-taaj

# Install dependencies
npm install

# Start development server
npm start
```
