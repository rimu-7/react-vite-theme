* Project features (Navbar + Dark/Light Mode)
* Clean setup instructions for **Mac/Linux** and **Windows**
* One-liner commands for cloning, installing, and removing Git history

---

````markdown
# 🌗 React + Vite Theme App

A fast, modern React app starter built with **Vite** and **Tailwind CSS**, featuring:

- ✅ A responsive, reusable Navbar component
- 🌙 Dark and Light Mode toggle (with system preference support)
- ⚡ Lightning-fast development experience via Vite
- 🎨 Tailwind CSS for easy styling

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Dark Mode Toggle with localStorage & system preference

---

## 🚀 Getting Started

### Clone, install dependencies, and start fresh (one-liner):


#### 🪟 Windows (PowerShell):

```powershell
git clone https://github.com/rimu-7/react-vite-theme.git; cd react-vite-theme; npm install; Remove-Item -Recurse -Force .git
```

#### 💻 Mac/Linux (bash/zsh):
```bash
git clone https://github.com/rimu-7/react-vite-theme.git  && cd react-vite-theme  && rm -rf .git && npm install
````
# it will install all the packages including, lucide-react, react-router-dom, tailwindcss

---

## 🧪 Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
my-repo/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── theme/
│   │   └── ThemeToggole.jsx
│   ├── pages/
│   │    └── Home.jsx
│   │    └── About.jsx
│   │    └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js
├── index.html
├── package.json
└── README.md
```

---

## 🎯 Features

* 🌗 Theme toggle with system preference detection
* 📱 Responsive design
* 🧩 Modular component structure
* 🧼 Clean setup to start your own project

