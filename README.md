# Ishini Ekanayake — Portfolio

A modern minimalist portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Then open: http://localhost:5173

---

## ✏️ How to Customize

**All your editable content lives in one file:**

```
src/data/portfolioData.js
```

Open that file and follow the `✏️ EDIT` comments for:
- Personal info, email, phone, location
- Social media links (GitHub, LinkedIn, Instagram, Facebook)
- Education history
- Certifications (title, issuer, image, verify link)
- Volunteer work (events, certificates)
- Projects (title, image, GitHub link, live demo link)
- Skill levels
- Activities & events

---

## 🖼️ Adding Your Photos & Images

Place your files in these folders (create them if they don't exist):

| Folder | What goes here |
|--------|---------------|
| `src/assets/images/` | Profile photo (`profile.jpg`) |
| `src/assets/certificates/` | Certificate images or PDFs |
| `src/assets/volunteer/` | Volunteer event photos |
| `src/assets/projects/` | Project screenshots |
| `src/assets/outgoing/` | Activity/event photos |

Then in `portfolioData.js`, update the `image` field for each item.

**Example:**
```js
// Before
image: null,

// After
image: "/src/assets/projects/myproject.png",
```

---

## 🔗 Adding Links

All links are in `portfolioData.js`. Search for `// ✏️ EDIT` to find every link placeholder.

- **GitHub/LinkedIn/etc.** → `personalInfo` object at the top
- **Project GitHub & live demo** → `projects` array, `github` and `live` fields
- **Certificate verify links** → `certifications` array, `link` field
- **Volunteer certificate links** → `volunteerWork` array, `certificate` field
- **Activity links** → `outgoingWorks` array, `link` field

---

## 📬 Setting Up the Contact Form

The form currently shows a success simulation. To make it actually send emails:

**Option A — EmailJS (free, easy):**
1. Sign up at https://emailjs.com
2. Create a service + template
3. Install: `npm install @emailjs/browser`
4. Replace the simulation in `Contact.jsx` with EmailJS send call

**Option B — Formspree (easiest):**
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Change the form's action URL

---

## 🌙 Dark Mode

Dark mode is toggled via the moon/sun icon in the navbar. Your preference is saved in localStorage.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        ← sticky nav with mobile hamburger
│   └── Footer.jsx        ← footer with social links
├── sections/
│   ├── Hero.jsx          ← full-viewport hero
│   ├── About.jsx         ← about + stats cards
│   ├── Education.jsx     ← timeline
│   ├── Certifications.jsx← cert cards + modal
│   ├── Volunteer.jsx     ← event cards + modal + certificate link
│   ├── Projects.jsx      ← project cards + GitHub/live links
│   ├── Skills.jsx        ← animated skill bars by category
│   ├── OutgoingWorks.jsx ← masonry activity grid
│   └── Contact.jsx       ← contact form + social icons
├── data/
│   └── portfolioData.js  ← ⭐ ALL YOUR CONTENT LIVES HERE
├── hooks/
│   ├── useDarkMode.js
│   └── useScrollSpy.js
├── utils/
│   └── animations.js     ← Framer Motion variants
├── App.jsx
├── main.jsx
└── index.css
```
