// Year
document.getElementById("year").textContent = new Date().getFullYear();

// i18n dictionary
const dict = {
  ar: {
    dir: "rtl",
    lang: "ar",
    "nav.about": "عنّي",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    "nav.cv": "السيرة الذاتية",
    "hero.badge": "✨ مطوّرة واجهات أمامية",
    "hero.hi": "مرحباً، أنا",
    "hero.tagline": "مصممه مواقع حديثة، سريعة، وسهلة الاستخدام.",
    "hero.lead": "أركز على : تجربة المستخدم، الأداء، وإتاحة الوصول",
    "hero.cta1": "مشاريعي",
    "hero.cta2": "تواصل معي",
    "about.title": "عنّي",
    "about.text":
      " أنا مطوّرة واجهات أمامية بقديم مواقع سريعة، متجاوبة، وسهلة الاستخدام. بشوف كل مشروع فرصة للتعلّم والإبداع، وأسعى دائما للتطوير لمواكبه أحدث التقنيات في عالم الويب.",
    "skills.title": "المهارات",
    "skills.s1": "بنية نظيفة وسهلة القراءة",
    "skills.s2": "تصميمات مرنة ومتجاوبة",
    "skills.s3": "تفاعلات بسيطة ولطيفة",
    "skills.s4": "إدارة الإصدارات والنشر",
    "skills.s5": "تحسين السرعة و الـ SEO",
    "skills.s6": "تجربة عادلة للجميع",
    "projects.title": "المشاريع",
    "projects.p1.title": "متجر",
    "projects.p1.desc":"متجر تجريبي",
    "projects.p2.title": "مطعم",
    "projects.p2.desc": "صفحه تجريبه لمطعم",
    "projects.p3.title": "تطبيق",
    "projects.p3.desc": "تطبيق واقع معزز يتيح لك معاينة الأثاث في مساحتك قبل الشراء.",
    "projects.live": "معاينة",
    "projects.code": "الكود على GitHub",
    "contact.title": "تواصل معي",
    "contact.lead": "لو محتاج موقع لشغلك أو عايز نتعاون في مشروع، ابعت رسالة.",
    "contact.name": "الاسم",
    "contact.email": "الإيميل",
    "contact.msg": "الرسالة",
    "contact.send": "إرسال",
    "contact.quick": "معلومات سريعة",
    "contact.city": "مصر",
    "contact.whatsapp": "واتساب",
    "footer.text": "© <span id='year'></span> Bondoaa كل الحقوق محفوظة",
  },
  en: {
    dir: "ltr",
    lang: "en",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Resume",
    "hero.badge": "✨ Front-End Developer",
    "hero.hi": "Hi, I'm",
    "hero.tagline": "I build modern, fast and accessible websites.",
    "hero.lead":
      "I focus on UX, performance and accessibility. Here’s a selection of my work.",
    "hero.cta1": "My Work",
    "hero.cta2": "Contact Me",
    "about.title": "About",
    "about.text":
      "“I’m a Front-End Developer dedicated to building fast, responsive, and user-friendly websites. I view every project as an opportunity to learn and innovate, and I continuously strive to grow and stay aligned with the latest advancements in web technologies.”",
    "skills.title": "Skills",
    "skills.s1": "Clean, semantic structure",
    "skills.s2": "Flexible, responsive layouts",
    "skills.s3": "Delightful interactions",
    "skills.s4": "Versioning & deployment",
    "skills.s5": "Speed & SEO optimization",
    "skills.s6": "Inclusive experiences",
    "projects.title": "Projects",
    "projects.p1.title": "store",
    "projects.p1.desc": "Test Store",
    "projects.p2.title": "resturant",
    "projects.p2.desc": "A sample restaurant landing page",
    "projects.p3.title": "App",
    "projects.p3.desc": "Bring your dream furniture to life with our AR app-see it in home before you shop!",
    "projects.live": "Live",
    "projects.code": "Code on GitHub",
    "contact.title": "Contact",
    "contact.lead": "Need a website or want to collaborate? Send a message.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.msg": "Message",
    "contact.send": "Send",
    "contact.quick": "Quick Info",
    "contact.city": "Egypt",
    "contact.whatsapp": "WhatsApp",
    "footer.text": "© <span id='year'></span> Bondoaa. All rights reserved.",
  },
};

// Apply i18n text for current lang
function applyLang(langKey) {
  const set = dict[langKey];
  document.documentElement.dir = set.dir;
  document.documentElement.lang = set.lang;

  // Update text nodes with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (set[key] !== undefined) {
      // keep inner HTML when translation intentionally contains tags (like footer year span)
      el.innerHTML = set[key];
    }
  });

  // Toggle button label to the OTHER language
  document.getElementById("langToggle").textContent =
    langKey === "ar" ? "EN" : "AR";
}

// Toggle handler
const toggleBtn = document.getElementById("langToggle");
let currentLang = document.documentElement.lang === "en" ? "en" : "ar";
applyLang(currentLang);

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLang(currentLang);
});

// Simple contact handler (mailto fallback)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("msg").value.trim();
  const subject = encodeURIComponent("Website inquiry from " + name);
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
  window.location.href = `mailto:Bondoaa.beboo@gmail.com?subject=${subject}&body=${body}`;
});
