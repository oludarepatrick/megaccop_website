# 🏦 MegaCoop Website

> **Save, Borrow, and Shop Smarter All in One App**

A modern, responsive website for MegaCoop - a comprehensive financial cooperative platform that helps members save, borrow, and access everyday essentials with ease.

## 🌟 Features

- 💰 **Smart Financial Services** - Savings, loans, and payment solutions
- 🛍️ **Shop Now, Pay Later** - Buy essential items with flexible payments
- 🏠 **Housing Support** - Home ownership through NHF integration
- 🔒 **Bank-Grade Security** - Secure transactions with encryption
- 📱 **Mobile-First Design** - Responsive across all devices
- 🎨 **Smooth Animations** - Enhanced UX with Framer Motion
- ♿ **Accessibility** - WCAG compliant design

## 🚀 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Routing:** React Router v7
- **SEO:** Unhead for meta management
- **Icons:** Lucide React
- **Code Quality:** ESLint + TypeScript ESLint

## 📦 Project Structure

```
megacoop/
├── public/
│   ├── Logo.svg
│   ├── Megacoop-logo.svg
│   └── robots.txt
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   │   ├── ServiceComponents/  # Service-specific components
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utility functions and SEO config
│   ├── pages/           # Route components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── Layout.tsx
│   ├── routes.tsx
│   └── main.tsx
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oludarepatrick/megaccop_website.git
   cd megacoop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |


## 🌐 Routing

The application uses React Router v7 with lazy loading:

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## 📱 Responsive Design

Tailwind CSS breakpoints:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Follow component naming conventions
- Write meaningful commit messages

## 🚀 Deployment

The project is configured for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📊 Performance

- **Lazy Loading** - Route-based code splitting
- **Image Optimization** - Optimized asset loading
- **Bundle Analysis** - Vite bundle analyzer
- **Caching** - Static asset caching

## 🔍 SEO

- **Meta Tags** - Dynamic meta management with Unhead
- **Semantic HTML** - Proper HTML structure
- **Sitemap** - Auto-generated sitemap
- **Robots.txt** - Search engine directives

## 📄 License

This project is private and proprietary to MegaCoop.

## 👥 Team

- **Frontend Development** - [Team Members]
- **UI/UX Design** - [Design Team]
- **Project Management** - [PM Team]

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section

---

**Built with ❤️ for MegaCoop members**
