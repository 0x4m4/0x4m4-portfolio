# 0x4m4 Portfolio & Blog

## 🛡️ Overview

This website serves as both a portfolio and blog platform, showcasing my work in cybersecurity and ethical hacking. It features a distinctive cyberpunk aesthetic with terminal-inspired design elements and interactive animations.

## 🚀 Features

- **Terminal-Style Navigation**: Command-line inspired navigation system
- **Glitch Effects**: Custom animations and glitch effects for cyberpunk aesthetics
- **Responsive Design**: Fully responsive across all devices
- **Blog Platform**: Markdown-based blog with:
  - Syntax highlighting for code blocks
  - Tag-based filtering
  - SEO optimization
  - Math equation support (KaTeX)
- **Dynamic Content**: Interactive portfolio showcasing security projects
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Animations**: Custom CSS animations
- **Icons**: Lucide Icons
- **Math Rendering**: KaTeX
- **Syntax Highlighting**: rehype-highlight
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/0x4m4-portfolio.git

# Navigate to project directory
cd 0x4m4-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🗂️ Project Structure

```plaintext
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── blog/            # Blog pages
│   └── page.tsx         # Home page
├── components/          # Reusable components
├── content/            
│   └── blog/           # Blog post markdown files
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## 📝 Blog Post Format

Blog posts should be written in Markdown format with frontmatter:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Brief description"
tags: ["tag1", "tag2"]
---

Content goes here...
```

## 🔧 Configuration

Key configuration files:
- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `app/layout.tsx`: Root layout and metadata

## 🚀 Deployment

The site is automatically deployed via Vercel. Push to main branch to trigger deployment:

```bash
git push origin main
```

## 🌐 Live Site

Visit the live site at: [https://0x4m4.com](https://0x4m4.com)

## 📄 License

MIT License - feel free to use this code for your own portfolio, but please provide attribution.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Website: [0x4m4.com](https://0x4m4.com)
- GitHub: [@0x4m4](https://github.com/0x4m4)
- Twitter: [@0x4m4](https://twitter.com/0x4m4)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment

## 💻 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```plaintext
NEXT_PUBLIC_BASE_URL=your_site_url
```

## 📚 Additional Notes

- Blog posts are written in Markdown and stored in `content/blog`
- Images should be placed in `public/images`
- Custom components can be added to `components/`
