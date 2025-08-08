# Personal Profile & Blog Platform

A beautiful, modern personal profile and blog platform built with Next.js, TypeScript, and Tailwind CSS. Automatically deploys to GitHub Pages with every commit.

## Features

- 🚀 **Beautiful Landing Page** - Modern, animated homepage with gradient backgrounds
- 📝 **Blog System** - Markdown-based blog with full article management
- 👤 **About Page** - Professional profile showcase with skills and experience
- 📊 **Admin Dashboard** - Overview of your content and statistics
- 🎨 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast & Optimized** - Static site generation for blazing-fast performance
- 🔄 **Auto-Deploy** - GitHub Actions workflow for automatic deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-profile.git
cd personal-profile
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Adding Content

### Writing Blog Posts

1. Create a new markdown file in `data/articles/` directory
2. Use the following frontmatter format:

```markdown
---
title: Your Article Title
slug: your-article-slug
excerpt: Brief description of your article
date: 2024-01-20T00:00:00.000Z
published: true
views: 0
---

# Your Article Content

Write your article content in markdown...
```

3. Commit and push to GitHub - the site will automatically rebuild

### Updating Profile Information

- Edit the components in `app/page.tsx` for the homepage
- Edit `app/about/page.tsx` for the about page
- Customize colors and styles in `app/globals.css`

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Enable GitHub Pages
4. Select "GitHub Actions" as the source

### Manual Build

To build the site locally:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Project Structure

```
personal-profile/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── data/
│   └── articles/          # Markdown blog posts
├── .github/
│   └── workflows/         # GitHub Actions
│       └── deploy.yml     # Auto-deployment workflow
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies

```

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 262.1 83.3% 57.8%;
  --secondary: 220 14.3% 95.9%;
  /* ... other colors */
}
```

### Updating Social Links

Edit the social media links in:
- `app/page.tsx` - Homepage social icons
- `app/about/page.tsx` - About page social links

### Modifying Navigation

Update the navigation menu in each page component's nav section.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Markdown** - Markdown rendering
- **Lucide React** - Beautiful icons
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Free hosting

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this project for your own personal profile!

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and deployed on GitHub Pages