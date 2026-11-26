/* ===== EDIT THESE: central contact settings ===== */
const CONFIG = {
  whatsapp: "93700000000",          // international format, digits only
  email: "hello@zenaistudio.com",
  instagram: "zenaistudio",         // handle without @
  github: "your-github-username"    // GitHub username
};

/* Persian translations (English is read from the HTML itself) */
const FA = {
  n1: "خانه", n2: "درباره ما", n3: "خدمات", n4: "نمونه‌کارها", n6: "تیم", n7: "تماس", nc: "رزرو تماس",
  hb: "استودیوی حرفه‌ای توسعه وب",
  h1: "توسعه وب فرانت‌اند و بک‌اند",
  hs: "ما وب‌سایت‌های سریع و واکنش‌گرا و سیستم‌های پایدار سمت سرور را طراحی و پیاده‌سازی می‌کنیم. از رابط‌های تمیز تا API و پایگاه داده امن، محصول کامل وب تحویل می‌دهیم.",
  hb1: "مشاهده پروژه‌ها", hb2: "خدمات ما",
  ah: "استودیویی کوچک با نگاهی بزرگ به امکانات وب",
  a1: "زن‌ای‌آی استودیو یک استودیوی خلاق فناوری دیجیتال در افغانستان است که با مشتریان سراسر جهان کار می‌کند. ما طراحی، برنامه‌نویسی و هوش مصنوعی را در یک تیم گرد هم آورده‌ایم تا ایده‌ی شما میان طراح و برنامه‌نویس گم نشود.",
  a2: "ما رابط کاربری طراحی می‌کنیم، وب‌سایت و برنامه‌های وب می‌سازیم و نگهداری می‌کنیم و هر جا هوش مصنوعی واقعاً در وقت مردم صرفه‌جویی کند آن را به کار می‌گیریم. فاصله برای ما مانع نیست: مشتریان ما آنلاین سفارش می‌دهند، آنلاین کار را بررسی می‌کنند و همان توجهی را می‌گیرند که در یک دفتر مشترک می‌گرفتند.",
  vt: "چشم‌انداز", vp: "اینکه وقتی کسی فناوری‌ای دقیق، سریع و انسانی می‌خواهد، استودیوی مورد اعتمادش باشیم؛ ساخته‌شده در افغانستان برای همه‌ی جهان.",
  mt: "مأموریت", mp: "تبدیل ایده‌ها به محصولات دیجیتال کامل و کارآمد، با ارتباط شفاف و زمان‌بندی صادقانه از اولین پیام تا روز انتشار.",
  p1t: "خلق کن", p1: "هر پروژه با شنیدن شروع می‌شود. مخاطب شما را می‌شناسیم و هویتی بصری می‌سازیم که مخصوص خود شماست، نه یک قالب آماده.",
  p2t: "نوآوری کن", p2: "ابزارهای تازه، از جمله هوش مصنوعی، را می‌آزماییم و فقط وقتی به کار می‌بریم که نتیجه را بهتر، سریع‌تر یا ساده‌تر برای نگهداری کند.",
  p3t: "بساز", p3: "کد تمیز، طراحی واکنش‌گرا و بارگذاری سریع. کاری تحویل می‌دهیم که روی موبایل، تبلت و لپ‌تاپ یکسان خوب عمل کند.",
  wh: "چرا مشتریان ما را انتخاب می‌کنند",
  w1t: "طراحی و برنامه‌نویسی زیر یک سقف.", w1: "آنچه طراحی می‌شود همان چیزی است که ساخته می‌شود.",
  w2t: "دوزبانه از ابتدا.", w2: "فارسی و انگلیسی، با چیدمان درست راست‌به‌چپ و چپ‌به‌راست.",
  w3t: "ارتباط مستقیم.", w3: "با خودِ افرادی که کار را انجام می‌دهند در واتساپ یا ایمیل صحبت می‌کنید.",
  w4t: "ساخته‌شده برای سرعت.", w4: "صفحه‌های سبک که با هر اینترنتی سریع باز می‌شوند.",
  sb: "هنر در حرکت", sh: "طراحی، کد و هوش مصنوعی در کنار هم",
  c1: "کدنویسی تمیز و سریع فرانت‌اند", c2: "رابط کاربری، پیش از ساخت طراحی می‌شود", c3: "هوش مصنوعی در دل فرایندهای واقعی",
  sv: "خدمات توسعه وب، از ابتدا تا انتها", svp: "استراتژی، طراحی، کدنویسی و بهینه‌سازی از یک تیم متمرکز.",
  s1t: "توسعه فرانت‌اند", s1: "رابط‌های سریع و در دسترس با HTML، CSS و جاوااسکریپت مدرن.",
  s2t: "توسعه بک‌اند", s2: "API، پایگاه داده و منطق سرور امن که همراه با محصول شما رشد می‌کند.",
  s3t: "توسعه فول‌استک", s3: "یک تیم از رابط کاربری تا زیرساخت، برای تحویل برنامه‌های کامل وب.",
  s4t: "طراحی وب واکنش‌گرا", s4: "چیدمان‌هایی که روی موبایل، تبلت و دسکتاپ یکسان خوب کار می‌کنند.",
  s5t: "طراحی UI/UX", s5: "رابط‌های روشن و کاربردی که بر اساس رفتار واقعی کاربران طراحی می‌شوند.",
  s6t: "بهینه‌سازی وب‌سایت", s6: "بهبود سرعت، سئو و عملکرد برای صفحات سریع‌تر و رتبه بهتر.",
  cs: "پروژه‌هایی ساخته‌شده برای عملکرد", csp: "نمونه‌هایی از رابط‌ها، سیستم‌ها و برنامه‌هایی که تحویل می‌دهیم.",
  tm: "با تیم آشنا شوید", tmp: "توسعه‌دهندگان و طراحانی که پشت پروژه شما هستند",
  ct: "بگویید چه چیزی می‌خواهید بسازید", ctp: "در واتساپ یا ایمیل پیام بدهید، یا کارهای ما را در اینستاگرام دنبال کنید.",
  fn: "نام شما", fm: "درباره‌ی پروژه‌تان بنویسید", k1: "صفحات سریع و در دسترس با کامپوننت‌های تمیز، تعامل‌های روان و سیستم طراحی یکپارچه.", k2: "APIهای امن REST، احراز هویت و طراحی پایگاه داده برای رشد آینده.", k3: "برنامه‌های کامل از ویرایشگر کد تا استقرار، با توجه به تست و عملکرد.",
  r1: "بنیان‌گذار و توسعه‌دهنده ارشد", r2: "توسعه‌دهنده فرانت‌اند", r3: "توسعه‌دهنده بک‌اند", r4: "طراح UI/UX",
  rights: "تمامی حقوق محفوظ است."
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = "en";

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  /* ---- Language (EN/FA) with RTL/LTR ---- */
  const keep = (el, attr) => { el.dataset.en = attr ? el.getAttribute(attr) : el.textContent; };
  $$("[data-i18n]").forEach(el => keep(el));
  $$("[data-i18n-ph]").forEach(el => keep(el, "placeholder"));
  const titleEn = document.title;

  function setLang(l) {
    lang = l;
    const fa = l === "fa";
    document.documentElement.lang = l;
    document.documentElement.dir = fa ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(el => { el.textContent = fa ? (FA[el.dataset.i18n] ?? el.dataset.en) : el.dataset.en; });
    $$("[data-i18n-ph]").forEach(el => { el.placeholder = fa ? (FA[el.dataset.i18nPh] ?? el.dataset.en) : el.dataset.en; });
    document.title = fa ? "زن‌ای‌آی استودیو - خلق کن. نوآوری کن. بساز." : titleEn;
    $("#langToggle").textContent = fa ? "English" : "فارسی";
    try { localStorage.setItem("zen-lang", l); } catch (e) {}
  }
  $("#langToggle").addEventListener("click", () => setLang(lang === "en" ? "fa" : "en"));
  let saved = "en";
  try { saved = localStorage.getItem("zen-lang") || "en"; } catch (e) {}
  if (saved === "fa") setLang("fa");

  /* ---- Mobile menu ---- */
  const menuToggle = $("#menuToggle"), navLinks = $("#navLinks");
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("active"); menuToggle.setAttribute("aria-expanded", "false");
  }));

  /* ---- Contact (WhatsApp / Email / Instagram) ---- */
  const wa = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
  $("#igLink").href = $("#socIg").href = `https://instagram.com/${CONFIG.instagram}`;
  $("#socWa").href = wa("Hi!");
  $("#socMail").href = `mailto:${CONFIG.email}`;
  $("#socGh").href = `https://github.com/${CONFIG.github}`;
  const composed = () => {
    const n = $("#cName").value.trim(), m = $("#cMsg").value.trim();
    return `${n ? "Hi, I'm " + n + ". " : "Hi! "}${m}`.trim();
  };
  $("#sendWa").addEventListener("click", () => window.open(wa(composed()), "_blank", "noopener"));
  $("#sendMail").addEventListener("click", () => {
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Project inquiry - Zen AI Studio")}&body=${encodeURIComponent(composed())}`;
  });

  /* ---- Reveal on scroll ---- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));

  /* ---- Play videos only while visible ---- */
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting && !reduceMotion) v.play().catch(() => {}); else v.pause();
  }), { threshold: 0.2 });
  $$(".hero-gallery video").forEach(v => vio.observe(v));

  /* ---- Code typing panel ---- */
  const out = $("#codeOut");
  const code = "const studio = {\n  name: 'Zen AI Studio',\n  based: 'Afghanistan',\n  works: 'worldwide',\n  motto: 'Create. Innovate. Build.'\n};\n\nstudio.launch(idea);";
  if (reduceMotion) out.textContent = code;
  else {
    let i = 0, timer, visible = false;
    const tick = () => {
      out.textContent = code.slice(0, ++i);
      if (i >= code.length) { clearInterval(timer); setTimeout(() => { i = 0; if (visible) timer = setInterval(tick, 45); }, 2500); }
    };
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting; clearInterval(timer);
      if (visible) timer = setInterval(tick, 45);
    }).observe(out);
  }

  /* ---- AI network canvas (light, pauses off-screen) ---- */
  const cv = $("#aiCanvas"), ctx = cv.getContext("2d");
  let W, H, nodes = [], raf, on = false;
  const size = () => {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    nodes = Array.from({ length: W < 320 ? 22 : 30 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    nodes.forEach((a, i) => {
      if (!reduceMotion) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 80) { ctx.strokeStyle = `rgba(127,199,161,${(1 - d / 80) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      ctx.fillStyle = "#7FC7A1"; ctx.beginPath(); ctx.arc(a.x, a.y, 2.2, 0, 7); ctx.fill();
    });
    if (on && !reduceMotion) raf = requestAnimationFrame(draw);
  };
  size(); draw();
  addEventListener("resize", () => { size(); draw(); });
  new IntersectionObserver(([e]) => { on = e.isIntersecting; cancelAnimationFrame(raf); if (on) draw(); }).observe(cv);
});
