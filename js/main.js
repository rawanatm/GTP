/* =====================================================
   Player Gate - Main JavaScript
   Features: i18n (AR/EN), scroll effects, animations,
             counter, form handling, mobile menu
   ===================================================== */

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_how: "كيف نعمل",
    nav_why: "لماذا نحن",
    nav_contact: "انضم الآن",
    nav_join: "انضم الآن",
    lang_switch: "EN",
    hero_title_a: "المواهب لا تُصنع، بل",
    hero_title_b: "تُكتشف، تُصقل،",
    hero_title_c: "وتُقدَّم للعالم.",

    hero_desc: "في بوابة اللاعب نفتح لك الأبواب التي تحتاجها لتصل، من أول خطوة إلى الاحتراف.",
    hero_btn1: "ابدأ رحلتك",
    hero_btn2: "ابدأ رحلتك",
    stat1_num: "+200",
    stat1_label: "الباقة الأساسية ريال / سنوياً",
    stat2_num: "+500",
    stat2_label: "الباقة المتقدمة ريال / سنوياً",
    stat3_num: "+1000",
    stat3_label: "الباقة الاحترافية ريال / سنوياً",
    stat4_num: "+1",
    stat4_label: "منصة تجمع كل ما يحتاجه اللاعب",
    about_title: "من نحن",
    about_desc1: "بوابة اللاعب هي منصة سعودية متخصصة في اكتشاف وتطوير وربط لاعبي كرة القدم بالفرص الحقيقية محلياً وعالمياً.",
    about_desc2: "نعمل كحلقة وصل بين اللاعب وكل ما يحتاجه للنجاح: أكاديميات ومعسكرات عالمية، مدربين متخصصين، كشافين ووكلاء معتمدين، وفرص احتراف وشراكات.",
    about_tag1: "كرة القدم",
    about_tag2: "الاحتراف",
    about_tag3: "أكاديميات ومعسكرات عالمية",
    about_tag4: "تطوير اللاعبين",
    vision_title: "أكاديميات ومعسكرات عالمية",
    vision_text: "نفتح للاعب الطريق للوصول إلى بيئات تدريب وتطوير عالمية تناسب مرحلته وطموحه.",
    mission_title: "مدربين وكشافين ووكلاء",
    mission_text: "نربط اللاعب بمدربين متخصصين وكشافين ووكلاء معتمدين لتوسيع فرصه الرياضية.",
    believe_title: "مهمتنا",
    believe_text: "ربط اللاعب بالفرص الحقيقية وتسهيل طريقه الرياضي للاحتراف.",
    services_title: "خدماتنا",
    services_sub: "نقدم خدمات متخصصة للاعبين المحترفين والهواة لفتح آفاق جديدة نحو الاحتراف",
    s1_title: "إدارة وتطوير الملف الاحترافي",
    s1_desc: "نساعد اللاعبين المحترفين والهواة في إنشاء وإدارة ملف لاعب احترافي يعكس المستوى الحقيقي ويدعم فرص الوصول للأندية والأكاديميات.",
    s2_title: "تسويق اللاعب وربطه بالفرص",
    s2_desc: "نربط اللاعبين بفرص الرعاية والإعلانات، وتجارب الأداء، والأندية، والأكاديميات، والكشافين والوكلاء المعتمدين.",
    s3_title: "معسكرات خارجية وعالمية",
    s3_desc: "نوفر الوصول إلى أفضل المعسكرات العالمية الفردية والجماعية، ومعسكرات خارجية في أفضل الأكاديميات العالمية.",
    s4_title: "مدربين ووكلاء وكشافين",
    s4_desc: "نفتح لك أبواب الوصول إلى مدربين خاصين متخصصين، ووكلاء وكشافين معتمدين لدعم مسيرتك الرياضية.",
    s5_title: "تحليل وتطوير فردي",
    s5_desc: "نقدم تحليل أداء بالفيديو، وخطط تطوير فردية حسب مستوى اللاعب، ودعم نفسي وذهني وتطوير ذاتي.",
    s6_title: "مزايا وشراكات حصرية",
    s6_desc: "نوفر مراكز تأهيل وعلاج طبيعي داخل وخارج المملكة، واستشارات مالية وإدارية، وخصومات ومزايا حصرية مع شركائنا.",
    how_title: "كيف نعمل",
    how_sub: "نقدم باقات مرنة تناسب كل لاعب حسب مرحلته",
    step1_title: "الباقة الأساسية – 200 ريال / سنوياً",
    step1_desc: "إنشاء ملف لاعب أساسي، الوصول للفرص العامة، خصومات من شركائنا، ومحتوى تعليمي وتطويري.",
    step2_title: "الباقة المتقدمة – 500 ريال / سنوياً",
    step2_desc: "كل ما في الباقة الأساسية، تسويق اللاعب للأندية، الوصول لمدربين ووكلاء، أولوية في المعسكرات، واستشارات تطوير.",
    step3_title: "الباقة الاحترافية – 1000 ريال / سنوياً",
    step3_desc: "إدارة متقدمة لملف اللاعب، فرص تجارب أداء داخل وخارج السعودية، تحليل أداء احترافي + فيديو، دعم بناء الهوية الشخصية، وربط مباشر مع كشافين ووكلاء.",
    step4_title: "أولوية قصوى في الفرص",
    step4_desc: "يحصل اللاعب في الباقة الاحترافية على أولوية قصوى في جميع الفرص المتاحة.",
    step5_title: "مزايا حصرية VIP",
    step5_desc: "مزايا وخدمات حصرية مع شركائنا لدعم اللاعب في رحلته نحو الاحتراف.",
    why_title: "لماذا بوابة اللاعب؟",
    why_sub: "فرص حقيقية وليست وعود، ودعم مستمر لتطوير اللاعب",
    w1_title: "شبكة علاقات قوية محلياً وعالمياً",
    w1_desc: "نمتلك شبكة علاقات تساعد اللاعب على الوصول إلى فرص حقيقية داخل المملكة وخارجها.",
    w2_title: "فهم عميق لسوق كرة القدم",
    w2_desc: "نفهم متطلبات سوق كرة القدم ونساعد اللاعب على اتخاذ خطوات واضحة ومناسبة.",
    w3_title: "منصة تجمع كل ما يحتاجه اللاعب",
    w3_desc: "نجمع الخدمات والفرص والدعم في مكان واحد لتسهيل طريق اللاعب نحو الاحتراف.",
    w4_title: "فرص حقيقية وليست وعود",
    w4_desc: "نركز على ربط اللاعب بفرص عملية وحقيقية تساعده في بناء مسيرته الرياضية.",
    w5_title: "دعم مستمر لتطوير اللاعب",
    w5_desc: "نرافق اللاعب في مراحل تطوره ونساعده على تحسين مستواه وبناء مسار واضح.",
    w6_title: "طريق واضح نحو الاحتراف",
    w6_desc: "نفتح لك الأبواب التي تحتاجها لتصل من أول خطوة إلى الاحتراف.",
    cta_title: "رحلتك تبدأ بقرار — خذ الخطوة اليوم",
    cta_desc: "انضم الآن إلى بوابة اللاعب وابدأ رحلتك نحو الفرص الحقيقية والاحتراف",
    cta_btn1: "انضم الآن",
    cta_btn2: "ابدأ رحلتك",
    contact_title: "انضم الآن",
    contact_sub: "رحلتك تبدأ بقرار — خذ الخطوة اليوم",
    contact_info_title: "ابدأ رحلتك مع بوابة اللاعب",
    contact_info_desc: "نفتح لك الأبواب التي تحتاجها لتصل، من أول خطوة إلى الاحتراف.",
    contact_email: "info@playergate.com",
    contact_phone: "+966 5X XXX XXXX",
    contact_location: "المملكة العربية السعودية",
    form_name: "الاسم الكامل",
    form_phone: "رقم الجوال",
    form_email: "البريد الإلكتروني",
    form_message: "رسالتك",
    form_name_ph: "أدخل اسمك الكامل",
    form_phone_ph: "05XXXXXXXX",
    form_email_ph: "example@email.com",
    form_message_ph: "اكتب رسالتك هنا...",
    form_submit: "إرسال الرسالة",
    form_success: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    footer_desc: "منصة سعودية تربط لاعبي كرة القدم بالفرص الحقيقية محلياً وعالمياً.",
    footer_links: "روابط سريعة",
    footer_contact: "انضم الآن",
    footer_rights: "جميع الحقوق محفوظة",
    footer_brand: "Player Gate",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_how: "How We Work",
    nav_why: "Why Us",
    nav_contact: "Join Now",
    nav_join: "Join Now",
    lang_switch: "عربي",
    hero_title_a: "Talents are not made, but",
    hero_title_b: "discovered, refined,",
    hero_title_c: "and presented to the world.",

    hero_desc: "At Player Gate, we open the doors you need to reach your goal, from the first step to professionalism.",
    hero_btn1: "Start Your Journey",
    hero_btn2: "Start Your Journey",
    stat1_num: "+200",
    stat1_label: "Basic Package SAR / Yearly",
    stat2_num: "+500",
    stat2_label: "Advanced Package SAR / Yearly",
    stat3_num: "+1000",
    stat3_label: "Professional Package SAR / Yearly",
    stat4_num: "+1",
    stat4_label: "Platform with everything a player needs",
    about_title: "About Us",
    about_desc1: "Player Gate is a Saudi platform specialized in discovering, developing, and connecting football players with real opportunities locally and globally.",
    about_desc2: "We act as the connection between the player and everything needed for success: global academies and camps, specialized coaches, certified scouts and agents, and professional opportunities and partnerships.",
    about_tag1: "Football",
    about_tag2: "Professionalism",
    about_tag3: "Global Academies and Camps",
    about_tag4: "Player Development",
    vision_title: "Global Academies and Camps",
    vision_text: "We open the way for players to access global training and development environments that fit their stage and ambition.",
    mission_title: "Coaches, Scouts, and Agents",
    mission_text: "We connect players with specialized coaches, certified scouts, and agents to expand their sports opportunities.",
    believe_title: "Our Mission",
    believe_text: "To connect players with real opportunities and make their athletic path to professionalism easier.",
    services_title: "Our Services",
    services_sub: "We provide specialized services for professional and amateur players to open new horizons toward professionalism",
    s1_title: "Professional Profile Management and Development",
    s1_desc: "We help professional and amateur players create and manage a professional player profile that reflects their true level and supports access to clubs and academies.",
    s2_title: "Player Marketing and Opportunity Connection",
    s2_desc: "We connect players with sponsorships, advertising opportunities, trials, clubs, academies, certified scouts, and agents.",
    s3_title: "External and Global Camps",
    s3_desc: "We provide access to the best global individual and group camps, as well as external camps in top international academies.",
    s4_title: "Coaches, Agents, and Scouts",
    s4_desc: "We open access to specialized private coaches, certified agents, and scouts to support your sports career.",
    s5_title: "Individual Analysis and Development",
    s5_desc: "We provide video performance analysis, individual development plans based on the player's level, and psychological, mental, and self-development support.",
    s6_title: "Exclusive Benefits and Partnerships",
    s6_desc: "We provide rehabilitation and physiotherapy centers inside and outside the Kingdom, financial and administrative consultations, discounts, and exclusive partner benefits.",
    how_title: "How We Work",
    how_sub: "We offer flexible packages that fit every player according to their stage",
    step1_title: "Basic Package – SAR 200 / Yearly",
    step1_desc: "Basic player profile creation, access to public opportunities, partner discounts, and educational and development content.",
    step2_title: "Advanced Package – SAR 500 / Yearly",
    step2_desc: "Everything in the Basic Package, player marketing to clubs, access to coaches and agents, camp priority, and development consultations.",
    step3_title: "Professional Package – SAR 1000 / Yearly",
    step3_desc: "Advanced player profile management, trial opportunities inside and outside Saudi Arabia, professional performance analysis + video, personal brand support, and direct connection with scouts and agents.",
    step4_title: "Highest Priority in Opportunities",
    step4_desc: "Players in the Professional Package receive the highest priority in all available opportunities.",
    step5_title: "Exclusive VIP Benefits",
    step5_desc: "Exclusive benefits and services with our partners to support the player’s journey toward professionalism.",
    why_title: "Why Player Gate?",
    why_sub: "Real opportunities, not promises, with continuous support for player development",
    w1_title: "A Strong Local and Global Network",
    w1_desc: "We have a network that helps players access real opportunities inside and outside the Kingdom.",
    w2_title: "Deep Understanding of the Football Market",
    w2_desc: "We understand the requirements of the football market and help players take clear and suitable steps.",
    w3_title: "A Platform with Everything a Player Needs",
    w3_desc: "We bring services, opportunities, and support together in one place to make the player’s path toward professionalism easier.",
    w4_title: "Real Opportunities, Not Promises",
    w4_desc: "We focus on connecting players with practical and real opportunities that help them build their sports career.",
    w5_title: "Continuous Player Development Support",
    w5_desc: "We support players throughout their development stages and help them improve their level and build a clear path.",
    w6_title: "A Clear Path Toward Professionalism",
    w6_desc: "We open the doors you need to reach professionalism from the very first step.",
    cta_title: "Your journey starts with a decision — take the step today",
    cta_desc: "Join Player Gate now and start your journey toward real opportunities and professionalism",
    cta_btn1: "Join Now",
    cta_btn2: "Start Your Journey",
    contact_title: "Join Now",
    contact_sub: "Your journey starts with a decision — take the step today",
    contact_info_title: "Start Your Journey with Player Gate",
    contact_info_desc: "We open the doors you need to reach your goal, from the first step to professionalism.",
    contact_email: "info@playergate.com",
    contact_phone: "+966 5X XXX XXXX",
    contact_location: "Saudi Arabia",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_email: "Email Address",
    form_message: "Your Message",
    form_name_ph: "Enter your full name",
    form_phone_ph: "+966 5X XXX XXXX",
    form_email_ph: "example@email.com",
    form_message_ph: "Write your message here...",
    form_submit: "Send Message",
    form_success: "Your message was sent successfully! We'll get back to you soon.",
    footer_desc: "A Saudi platform connecting football players with real opportunities locally and globally.",
    footer_links: "Quick Links",
    footer_contact: "Join Now",
    footer_rights: "All Rights Reserved",
    footer_brand: "Player Gate",
  }
};

let currentLang = 'ar';

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initTheme();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initStepsLine();
  initForm();
  initParticles();
  initBackToTop();
  initActiveNav();
});

function initLang() {
  const saved = localStorage.getItem('pg_lang') || 'ar';
  setLang(saved);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pg_lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-en', lang === 'en');
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations(lang);
  const icon = document.getElementById('heroBtnIcon');
  if (icon) {
    icon.className = lang === 'ar' ? 'fa fa-arrow-left' : 'fa fa-arrow-right';
  }
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'BUTTON') {
        const icon = el.querySelector('i');
        el.textContent = t[key];
        if (icon) el.prepend(icon);
      } else {
        el.textContent = t[key];
      }
    }
  });
}

window.toggleLang = function() {
  setLang(currentLang === 'ar' ? 'en' : 'ar');
};

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  hamburger?.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const text = el.textContent;
  const prefix = text.match(/^[+]/) ? '+' : '';
  const suffix = text.match(/[^0-9+]+$/) ? text.match(/[^0-9+]+$/)[0] : '';
  const target = parseInt(text.replace(/[^0-9]/g, ''));
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initStepsLine() {
  const fill = document.querySelector('.steps-line-fill');
  if (!fill) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => fill.style.width = '100%', 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const section = document.getElementById('how');
  if (section) observer.observe(section);
}

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = translations[currentLang].form_submit;
      form.reset();
      showToast(translations[currentLang].form_success);
    }, 1500);
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = '<span class="toast-icon">✓</span><span id="toastMsg"></span>';
    document.body.appendChild(toast);
  }
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

function initParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:absolute;
      width:${2 + Math.random() * 3}px;
      height:${2 + Math.random() * 3}px;
      background:rgba(201,168,76,${0.2 + Math.random() * 0.4});
      border-radius:50%;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation: float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite;
      pointer-events:none;
    `;
    hero.appendChild(dot);
  }
}




function setTheme(theme) {
  document.body.classList.remove('theme-green', 'theme-blue', 'theme-red');
  document.body.classList.add(`theme-${theme}`);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`.theme-${theme}-btn`);
  if (activeBtn) activeBtn.classList.add('active');

  localStorage.setItem('pg_theme', theme);
}

function initTheme() {
  document.querySelector('.theme-green-btn')?.addEventListener('click', () => setTheme('green'));
  document.querySelector('.theme-blue-btn')?.addEventListener('click', () => setTheme('blue'));
  document.querySelector('.theme-red-btn')?.addEventListener('click', () => setTheme('red'));

  let savedTheme = localStorage.getItem('pg_theme') || 'green';
  if (savedTheme === 'gold') savedTheme = 'green';
  setTheme(savedTheme);
}