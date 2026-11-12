# ლაშა მძინარიშვილი — პერსონალური პორტფოლიო (React)

ეს პროექტი გადაყვანილია **React**-ზე და ორგანიზებულია მოდულური კომპონენტების არქიტექტურით. დიზაინი, სტილები (`styles.css`) და სრული ფუნქციონალი (მობილური მენიუ, სექციების აქტიური გამოკვეთა, ელ-ფოსტის კოპირება) სრულად შენარჩუნებულია.

---

## 📁 კომპონენტების სტრუქტურა

```
src/
├── components/
│   ├── common/               # მრავალჯერადი (Reusable) კომპონენტები Props-ებით
│   │   ├── SectionHeader.jsx # სექციების სათაურის ბლოკი (label, title, description)
│   │   ├── MetricCard.jsx    # Hero მეტრიკების ბარათი (icon, label, value)
│   │   ├── BentoCard.jsx     # Bento სტილის ბარათი About სექციაში (icon, title, description)
│   │   ├── SkillCard.jsx     # უნარების ბარათი (icon, statusBadge, title, description, tags, progress)
│   │   ├── ProjectCard.jsx   # პროექტის ბარათი (badge, year, imageUrl, narrative, highlights, tags)
│   │   ├── TimelineItem.jsx  # განათლების თაიმლაინის ბარათი (dotClass, period, badge, title, desc)
│   │   └── GoalCard.jsx      # მიზნების ბარათი (icon, title, description)
│   ├── Navbar.jsx            # ზედა ნავიგაცია (Desktop)
│   ├── MobileDrawer.jsx      # მობილური მენიუ (Drawer & Overlay)
│   ├── Hero.jsx              # მთავარი (Hero) სექცია & ტერმინალი
│   ├── About.jsx             # ჩემ შესახებ სექცია
│   ├── Skills.jsx            # უნარებისა და ტექნოლოგიების სექცია
│   ├── Projects.jsx          # პროექტების სექცია
│   ├── Education.jsx         # განათლებისა და კურსების სექცია
│   ├── Goals.jsx             # მიზნებისა და გეგმების სექცია
│   ├── Contact.jsx           # საკონტაქტო სექცია & კოპირების ფუნქციონალი
│   └── Footer.jsx            # საიტის ფუტერი
├── data/
│   └── portfolioData.js      # სტრუქტურირებული მონაცემები კომპონენტებისთვის
├── App.jsx                   # ძირითადი App კომპონენტი (State & Scroll Spy)
└── main.jsx                  # React-ის ჩამტვირთავი ფაილი
```

---

## 🚀 გაშვება & ბილდი

### 1. დეველოპმენტ სერვერის გაშვება:
```bash
npm run dev
```

### 2. საიტის საბოლოო ბილდი:
```bash
npm run build
```

### 3. აწყობილი საიტის წინასწარი გადახედვა (Preview):
```bash
npm run preview
```

