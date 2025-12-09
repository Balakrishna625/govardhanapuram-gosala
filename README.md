# Govindapuram Goshala - Professional Website

A premium, organic-themed website for Govindapuram Goshala showcasing pure A2 Organic Bilona Cow Ghee and community empowerment initiatives.

## 🌿 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design with beautiful animations
- **SEO Optimized**: Meta tags, OpenGraph, semantic HTML
- **Professional Design**: Organic color palette (deep green, ghee gold, earth brown)
- **7 Complete Pages**:
  - Home (Hero, About Preview, Process, Products, Social Impact)
  - About Us (Vision, Mission, Values)
  - Our Process (Traditional Bilona Method - 6 Steps)
  - Products (A2 Ghee + Coming Soon items)
  - Social Impact (Women Empowerment, Skill Development)
  - Gallery (Photo & Video showcases)
  - Contact (Form + WhatsApp integration)

## 🚀 Quick Start

### Prerequisites

**IMPORTANT**: You need Node.js 20.9.0 or higher for Next.js 16.

Check your current Node.js version:
```bash
node --version
```

If you're on Node.js 18, upgrade using:

#### Using nvm (Recommended)
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen terminal, then:
nvm install 20
nvm use 20
nvm alias default 20
```

#### Using Homebrew (macOS)
```bash
brew update
brew upgrade node
```

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to http://localhost:3000

## 📝 Customization Guide

### 1. Update Contact Information

**components/WhatsAppButton.tsx** - Line 14
Replace phoneNumber with your real WhatsApp number

**components/Footer.tsx** - Update phone, email, address

**app/contact/page.tsx** - Update all contact details

### 2. Add Real Images

1. Create `/public/images/` folder
2. Add your photos (cows, ghee, process, team)
3. Replace Unsplash URLs in all pages with `/images/your-photo.jpg`

### 3. Update Business Info

- Add real phone numbers
- Add Google Maps embed code
- Update product pricing
- Add certifications (FSSAI, etc.)

## 🏗️ Build for Production

```bash
npm run build
```

Creates `out/` folder for deployment.

## ☁️ AWS Deployment

1. Create S3 bucket
2. Upload `out/` contents
3. Configure CloudFront
4. Setup domain DNS

See full deployment guide in README.

---

**Built with ❤️ for sustainable living**
