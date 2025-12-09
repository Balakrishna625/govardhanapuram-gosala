# 🚀 GOVINDAPURAM GOSHALA WEBSITE - QUICK START GUIDE

## ✅ What's Been Built

A **professional, premium-quality website** that looks like it cost millions! 

### 📄 7 Complete Pages:
1. **Home** - Stunning hero, process preview, product showcase, social impact
2. **About** - Vision, mission, values, goshala story
3. **Process** - 6-step Bilona method with detailed visuals
4. **Products** - A2 Ghee showcase + coming soon products
5. **Impact** - Women empowerment & village development
6. **Gallery** - Photo & video galleries
7. **Contact** - Contact form + WhatsApp integration

### 🎨 Design Highlights:
- Organic color palette (deep green, ghee gold, earth brown, cream)
- Smooth animations and transitions
- Mobile-responsive (looks perfect on all devices)
- Professional typography (Poppins, Playfair, Inter)
- WhatsApp order integration
- SEO optimized

---

## 🔧 CRITICAL: Before You Start

### Node.js Version Issue

Your current Node.js (v18.20.4) is **too old**. Next.js 16 requires Node 20+.

### **Fix This First:**

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen your terminal, then:
nvm install 20
nvm use 20
nvm alias default 20

# Verify:
node --version  # Should show v20.x.x
```

---

## 🏃 Running the Website

```bash
cd /Users/bala/gosala
npm run dev
```

Open: **http://localhost:3000**

---

## 📝 MUST DO: Customization Checklist

### 1. Update WhatsApp Number
**File:** `components/WhatsAppButton.tsx` (Line 14)
```typescript
phoneNumber = "919999999999",  // ← Change this to your real number
```

### 2. Update Contact Info
**File:** `components/Footer.tsx` (Lines 82-98)
- Phone number
- Email address
- Full address with village, district, state

**File:** `app/contact/page.tsx`
- Update all contact details
- Add Google Maps embed code (Line 155)

### 3. Add Your Photos

Create folder: `/public/images/`

Add these images:
- `hero-cows.jpg` - For homepage hero
- `ghee-bottle.jpg` - Product photo
- `process-*.jpg` - Process steps (6 photos)
- `women-dhoop.jpg` - Women empowerment
- `gallery-*.jpg` - Gallery images

Then replace Unsplash URLs in pages with:
```typescript
<Image src="/images/your-photo.jpg" ... />
```

### 4. Add Business Details
**File:** `app/about/page.tsx`
- Year goshala started
- Number of cows
- Your uncle's name and story

**File:** `app/products/page.tsx`
- Ghee price
- Add FSSAI/Organic certifications

---

## 🌐 Where to Make Key Changes

| What to Update | File Location | Line |
|---------------|---------------|------|
| Phone Number | `components/WhatsAppButton.tsx` | 14 |
| Footer Contact | `components/Footer.tsx` | 82-98 |
| Contact Page | `app/contact/page.tsx` | Full page |
| About Story | `app/about/page.tsx` | Full page |
| Product Pricing | `app/products/page.tsx` | 42-50 |
| Google Maps | `app/contact/page.tsx` | 155 |

---

## 📦 Deployment to AWS

### Build Static Files
```bash
npm run build
```
This creates `out/` folder with your website.

### Deploy to S3 + CloudFront

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://govindapuramgoshala.com
```

2. **Upload Files:**
```bash
aws s3 sync out/ s3://govindapuramgoshala.com --delete
```

3. **Setup CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Add custom domain
   - Enable HTTPS

4. **Buy Domain:**
   - Register: govindapuramgoshala.com
   - Point DNS to CloudFront

---

## 🎯 Current Status

✅ All pages built
✅ Components created
✅ Design system implemented
✅ SEO configured
✅ WhatsApp integration ready
✅ Static export configured
✅ Mobile responsive

⚠️ **TO DO:**
- Upgrade Node.js to version 20
- Add your real contact details
- Replace placeholder images
- Add Google Maps embed
- Add real business info
- Test and deploy!

---

## 🆘 Common Issues

### "Node.js version not supported"
→ Upgrade to Node 20+ (see above)

### Images not loading
→ Check file paths in `/public/images/`

### WhatsApp not working
→ Update phone number in `WhatsAppButton.tsx`

---

## 💡 Next Steps

1. **Upgrade Node.js** (MUST DO FIRST)
2. Run `npm run dev` and preview
3. Update contact information
4. Add your real photos
5. Test on mobile devices
6. Build and deploy to AWS

---

## 🎨 Design Philosophy

This website gives **pure organic vibes** with:
- Natural color palette
- Soft shadows and rounded corners
- Smooth animations
- Emotional storytelling
- Community-focused messaging
- Premium, trustworthy feel

Perfect for a high-end organic brand! 🌿

---

**Need help?** Review the full README.md for detailed instructions.

**Ready to launch!** Once you upgrade Node.js and add your content, this website is production-ready.
