# Running Anurag Singh Portfolio on macOS

## Prerequisites

Before getting started, ensure you have the following installed:

### 1. Install Node.js and npm
Visit [nodejs.org](https://nodejs.org/) and download the LTS (Long Term Support) version. This will automatically install npm (Node Package Manager).

Verify installation:
```bash
node --version
npm --version
```

### 2. Install Git (Optional but recommended)
```bash
brew install git
```

## Setup Instructions

### Step 1: Clone or Download the Project

**Option A: If you have a GitHub repository**
```bash
git clone <your-repository-url>
cd anurag-singh-portfolio
```

**Option B: If you have a ZIP file**
1. Extract the ZIP file
2. Open Terminal and navigate to the project folder:
```bash
cd /path/to/anurag-singh-portfolio
```

### Step 2: Install Dependencies

Install all required packages using npm:
```bash
npm install
```

This will read the `package.json` file and install all dependencies listed there.

### Step 3: Run the Development Server

Start the Next.js development server:
```bash
npm run dev
```

You'll see output like:
```
> next dev
  ▲ Next.js 16.0.3
  - Local:        http://localhost:3000
```

### Step 4: View in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

Your portfolio is now running locally! You can make changes to files, and the browser will auto-refresh.

## Available Commands

### Development
```bash
npm run dev        # Start development server with hot reload
```

### Production Build
```bash
npm run build      # Create optimized production build
npm start          # Run production build locally
```

### Linting
```bash
npm run lint       # Check code quality
```

## File Structure

```
anurag-singh-portfolio/
├── app/
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/
│   ├── about-section.tsx
│   ├── resume-section.tsx
│   ├── portfolio-section.tsx
│   ├── contact-section-new.tsx
│   ├── profile-sidebar.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── portfolio-data.ts  # All portfolio content
├── public/
│   ├── robots.txt
│   └── [images]
├── package.json
└── next.config.mjs
```

## Editing Your Portfolio

### Update Personal Information

Edit `/lib/portfolio-data.ts` to change:
- Name, title, contact info in `profileData`
- Bio and services in `aboutData`
- Education, certifications, internships in `resumeData`
- Projects in `portfolioData`
- Contact information in `contactData`

### Customize Styling

Edit `/app/globals.css` to modify:
- Color scheme (design tokens)
- Fonts and typography
- Global animations

### Modify Components

Individual sections are in `/components/` directory:
- `about-section.tsx` - About and expertise
- `resume-section.tsx` - Experience and skills
- `portfolio-section.tsx` - Projects showcase
- `contact-section-new.tsx` - Contact information
- `profile-sidebar.tsx` - Left sidebar with profile
- `theme-toggle.tsx` - Dark/light mode toggle

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is busy, use a different port:
```bash
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`

### Dependencies Not Installing
Try clearing npm cache and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Module Not Found Error
Ensure all file paths use correct case sensitivity (especially important on macOS):
```bash
# Run linting to catch issues
npm run lint
```

## Building for Production

### Local Testing
```bash
npm run build
npm start
```

### Deployment Options

1. **Vercel** (Recommended - free for personal projects)
   - Push code to GitHub
   - Connect repository to Vercel
   - Automatic deployments on push

2. **GitHub Pages**
   - Export as static site
   - Push to gh-pages branch

3. **Other Hosts**
   - Use `npm run build` to create production build
   - Deploy the `.next` folder

## Useful Terminal Shortcuts (macOS)

- `Cmd + C` - Stop the development server
- `Cmd + T` - Open new Terminal tab
- `Cmd + D` - Split Terminal pane
- `ls` - List files in current directory
- `cd ..` - Go up one directory
- `pwd` - Print current directory path

## Getting Help

- Check Terminal output for error messages
- Visit [Next.js Documentation](https://nextjs.org/docs)
- Check [React Documentation](https://react.dev)
- Review component files for usage examples

## Next Steps

1. Customize `portfolio-data.ts` with your actual information
2. Update images in `/public` folder
3. Modify colors and fonts in `/app/globals.css`
4. Test all sections by clicking navigation tabs
5. Deploy to production when ready
