# ✅ GOVINDAPURAM GOSHALA - CUSTOMIZATION CHECKLIST

Use this checklist to ensure you've customized everything before going live.

## 📞 Contact Information

- [ ] **WhatsApp Number**
  - File: `components/WhatsAppButton.tsx` (Line 14)
  - Current: `919999999999`
  - Update to: `__________________`

- [ ] **Phone Number**
  - File: `components/Footer.tsx` (Line 84)
  - File: `app/contact/page.tsx` (Line 46)
  - Current: `+91-XXXXXXXXXX`
  - Update to: `__________________`

- [ ] **Email Address**
  - File: `components/Footer.tsx` (Line 89)
  - File: `app/contact/page.tsx` (Line 54)
  - Current: `info@govindapuramgoshala.com`
  - Update to: `__________________`

- [ ] **Full Address**
  - File: `components/Footer.tsx` (Line 79-81)
  - File: `app/contact/page.tsx` (Line 36-40)
  - Current: `Govindapuram Village, District, State - India`
  - Update to: `__________________`

## 🏢 Business Information

- [ ] **Goshala Name Confirmation**
  - Is it "Govindapuram" or "Govardhanapuram"? `__________________`

- [ ] **Year Started**
  - File: `app/about/page.tsx`
  - Year: `__________________`

- [ ] **Number of Cows**
  - File: `app/about/page.tsx`
  - Count: `__________________`

- [ ] **Uncle's Name & Role**
  - File: `app/about/page.tsx`
  - Name: `__________________`
  - Role: `__________________`

- [ ] **Daily Milk Production**
  - Liters per day: `__________________`

- [ ] **Monthly Ghee Production**
  - Liters per month: `__________________`

## 💰 Product Information

- [ ] **Ghee Price (1 Liter)**
  - File: `app/products/page.tsx`
  - Price: ₹ `__________________`

- [ ] **Certifications**
  - [ ] FSSAI License Number: `__________________`
  - [ ] Organic Certification: `__________________`
  - [ ] Trust Registration: `__________________`

- [ ] **Nutritional Information**
  - File: `app/products/page.tsx`
  - Verify and update if needed

## 📍 Location & Maps

- [ ] **Village Name**: `__________________`
- [ ] **District**: `__________________`
- [ ] **State**: `__________________`
- [ ] **PIN Code**: `__________________`

- [ ] **Google Maps Embed**
  - File: `app/contact/page.tsx` (Line 155)
  - Steps:
    1. Go to Google Maps
    2. Find your goshala location
    3. Click "Share" → "Embed a map"
    4. Copy the iframe code
    5. Replace placeholder in contact page

## 📸 Images to Add

Create folder: `/public/images/`

### Essential Images:
- [ ] `hero-cows.jpg` - Main hero image (1920x1080px recommended)
- [ ] `ghee-bottle.jpg` - Your ghee bottle product shot
- [ ] `about-goshala.jpg` - Goshala overview photo
- [ ] `logo.png` - Your goshala logo (if you have one)

### Process Images (6 images):
- [ ] `process-1-milk.jpg` - Fresh milk collection
- [ ] `process-2-curd.jpg` - Curd formation
- [ ] `process-3-churning.jpg` - Bilona churning
- [ ] `process-4-butter.jpg` - Butter extraction
- [ ] `process-5-heating.jpg` - Slow heating
- [ ] `process-6-packing.jpg` - Final packaging

### Gallery Images (at least 12):
- [ ] Cows grazing photos (3-4 images)
- [ ] Ghee making process (3-4 images)
- [ ] Women making dhoop sticks (2-3 images)
- [ ] Village/community photos (2-3 images)

### After adding images:
- [ ] Replace Unsplash URLs in all pages with your images
- [ ] Test that all images load correctly
- [ ] Optimize images (compress to reduce file size)

## 🔗 Social Media

- [ ] **Instagram Handle**
  - File: `components/Footer.tsx` (Line 58)
  - URL: `__________________`

- [ ] **Facebook Page**
  - File: `components/Footer.tsx` (Line 61)
  - URL: `__________________`

- [ ] **Twitter/X Handle**
  - File: `components/Footer.tsx` (Line 64)
  - URL: `__________________`

## 💳 Payment Integration (Future)

- [ ] Razorpay Account Setup
  - Merchant ID: `__________________`
  - API Key: `__________________`

- [ ] Bank Account Details for Direct Transfer
  - Account Name: `__________________`
  - Account Number: `__________________`
  - IFSC Code: `__________________`
  - Bank Name: `__________________`

## 🌐 Domain & Hosting

- [ ] **Domain Name Registered**
  - Domain: `__________________`
  - Registrar: `__________________`
  - Expiry Date: `__________________`

- [ ] **AWS S3 Bucket Created**
  - Bucket Name: `__________________`
  - Region: `__________________`

- [ ] **CloudFront Distribution**
  - Distribution ID: `__________________`
  - Domain: `__________________`

- [ ] **SSL Certificate**
  - [ ] Certificate issued
  - [ ] HTTPS enabled

## 📝 Content Updates

- [ ] Review and update About Us story
- [ ] Add real testimonials (if any)
- [ ] Update product descriptions
- [ ] Add any special offers or promotions
- [ ] Review all WhatsApp message templates

## ✅ Pre-Launch Testing

- [ ] Test on desktop browser
- [ ] Test on mobile (iPhone)
- [ ] Test on mobile (Android)
- [ ] Test on tablet
- [ ] Click all navigation links
- [ ] Test WhatsApp button
- [ ] Submit contact form test
- [ ] Check all images load
- [ ] Verify phone number is clickable
- [ ] Verify email is clickable
- [ ] Test page load speed
- [ ] Check spelling and grammar

## 🚀 Launch Checklist

- [ ] All customizations complete
- [ ] All images replaced
- [ ] Contact information verified
- [ ] Social media links working
- [ ] WhatsApp integration tested
- [ ] Website builds successfully (`npm run build`)
- [ ] Deployed to S3
- [ ] CloudFront configured
- [ ] Domain DNS pointing correctly
- [ ] HTTPS working
- [ ] Final mobile/desktop testing

## 📊 Post-Launch

- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Set up Google My Business
- [ ] Share website on social media
- [ ] Print QR codes for product labels
- [ ] Monitor orders and inquiries

---

## 🎯 Priority Order

**DO FIRST (Critical):**
1. Update WhatsApp number
2. Update phone & email
3. Add your ghee bottle photo
4. Update address & add Google Maps

**DO SECOND (Important):**
1. Add process photos
2. Update About Us content
3. Add pricing
4. Add certifications

**DO THIRD (Nice to Have):**
1. Add gallery photos
2. Set up social media links
3. Add testimonials
4. Optimize SEO

---

## 📞 Contact for Technical Support

If you need help with customization, deployment, or any technical issues, refer to:
- `README.md` - Complete documentation
- `QUICKSTART.md` - Quick reference guide
- Your AWS DevOps expertise! 😊

---

**Remember:** This website is production-ready. Just add your content and deploy!

Good luck with Govindapuram Goshala! 🐄🌿✨
