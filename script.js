(() => {
  const CONFIG = {
    email: "wonskkdesign@gmail.com",
    bookUrl: "https://app.cal.eu/quero/15min",
    internalPages: ["index.html", "work.html", "services.html", "about.html", "contact.html", "privacy.html", "legal.html"],
    defaultLang: "pl",
  };

  // Progressive enhancement gate for reveal animations
  document.documentElement.classList.add("js");

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const I18N = {
    pl: {
      // Titles / meta
      title_home: "Nikodem Kustusz Studio — Strony i panele premium",
      title_work: "Nikodem Kustusz Studio — Realizacje",
      title_services: "Nikodem Kustusz Studio — Usługi",
      title_about: "Nikodem Kustusz Studio — O mnie",
      title_contact: "Nikodem Kustusz Studio — Kontakt",
      desc_home: "Buduję premium strony i panele admin: szybko, bezpiecznie i z naciskiem na wynik.",
      desc_work: "Realizacje: strony, panele admin i marketing. Filtry i metryki.",
      desc_services: "Usługi: strony, panele admin i marketing. Deliverables i proces.",
      desc_about: "O mnie: podejście, focus i stack.",
      desc_contact: "Kontakt: umów call, wyślij brief albo wygeneruj mail",

      // Nav / global
      site_name: "Nikodem Kustusz Studio",
      hero_kicker: "Partner dla firm",
      nav_home: "Start",
      nav_work: "Realizacje",
      nav_services: "Usługi",
      nav_about: "O mnie",
      nav_contact: "Kontakt",
      book_call: "Umów call",
      see_work: "Zobacz realizacje",
      email_short: "E-mail",
      email_label: "E-mail",
      footer_claim: "Premium web + panele admin + marketing. Szybko. Bezpiecznie. Skutecznie.",
      footer_privacy: "Polityka prywatności",
      footer_legal: "Prawa autorskie",
      footer_rights: "Wszelkie prawa zastrzeżone.",
      calendar_load: "Załaduj kalendarz",
      calendar_loaded: "Kalendarz załadowany",
      calendar_open: "Otwórz w nowej karcie",
      calendar_notice: "Po kliknięciu załadujesz treść zewnętrzną z Cal.com, która może używać plików cookie i podobnych technologii.",
      cal_privacy_link: "Polityka prywatności Cal.com",
      title_privacy: "Polityka prywatności — Nikodem Kustusz Studio",
      title_legal: "Prawa autorskie — Nikodem Kustusz Studio",
      desc_privacy: "Polityka prywatności i informacje o plikach cookie.",
      desc_legal: "Informacje prawne, licencje i zastrzeżenia.",

      

      

      

      // Home
      home_h1: "Buduję panele admin i prowadzę kampanie reklamowe, które wyglądają premium i dowożą wynik.",
      home_p: "Strony, panele administracyjne i marketing nastawione na sprzedaż. Szybko, bezpiecznie, z naciskiem na efekt.",
      hero_tag: "Audit • Build • Scale",
      proof_fast: "Szybko",
      proof_secure: "Bezpiecznie",
      proof_sales: "Nastawione na sprzedaż",
      home_svc_web_meta: "Premium landing i strony multi‑page.",
      home_svc_admin_meta: "Dashboardy, role i automatyzacje.",
      home_svc_mkt_meta: "Landing + tracking + CRO.",
      home_goal_result_label: "Cel → wynik:",
      home_work_1_meta: "System zarządzania siłownią • PHP/MySQL/Docker",
      home_work_1_result: "panel admin + klient, role/permissions, przygotowanie pod RFID.",
      home_work_2_meta: "Multi‑page landing • UI/UX • performance",
      home_work_2_result: "czytelna oferta + CTA + sekcje konwersyjne.",
      home_work_3_meta: "Pre-mail brief + copy • UX detale",
      home_work_3_result: "mniejsze tarcie kontaktu, szybki start współpracy.",
      services_h2: "Usługi",
      work_h2: "Top realizacje",
      process_h2: "Proces",
      faq_h2: "FAQ",
      process_step1_t: "Call",
      process_step1_p: "Szybkie zrozumienie celu, brief i priorytety.",
      process_step2_t: "Plan",
      process_step2_p: "Propozycja struktury, copy i plan wdrożenia.",
      process_step3_t: "Build",
      process_step3_p: "Projekt + implementacja, iteracje i testy.",
      process_step4_t: "Launch",
      process_step4_p: "Publikacja, tracking i dopięcie detali.",
      view_case: "Zobacz szczegóły →",
      faq1_q: "Ile to trwa?",
      faq1_a: "Zależnie od zakresu: landing zwykle 1–2 tygodnie, większe strony 2–4 tygodnie, panel admin — do ustalenia.",
      faq2_q: "Jak wyglądają rozliczenia?",
      faq2_a: "Zwykle stała wycena za zakres + opcjonalny support/miesięczna opieka.",
      faq3_q: "Czy pomagasz z reklamami?",
      faq3_a: "Tak — przygotowuję landing pod kampanie, tracking, testy i optymalizacje (bez wchodzenia w platformy).",

      // Work
      work_page_h1: "Realizacje",
      work_page_p: "Wybrane projekty — krótko o roli, stacku i wyniku.",
      filter_all: "Wszystko",
      filter_web: "Strony",
      filter_admin: "Panele",
      filter_mkt: "Marketing",
      work_role_label: "Rola:",
      kpi_label: "KPI:",
      work_1_title: "UnderGround Gym — system",
      work_1_meta: "Fitness / SaaS",
      work_1_role: "Backend + DB + UI",
      work_1_desc: "Panel admin/klient, role, sesje, CSRF, karnety i cennik.",
      work_1_metric: "↓ czas obsługi",
      work_1_metric_tail: " / mniejsze błędy",
      work_2_title: "Landing sprzedażowy",
      work_2_meta: "Lead gen",
      work_2_role: "UI/UX + copy + tracking",
      work_2_desc: "Strona pod kampanię z trackingiem i optymalizacją konwersji.",
      work_2_metric: "↑ leady",
      work_2_metric_tail: " / wyższy CR",
      work_3_title: "Panel operacyjny",
      work_3_meta: "Ops / CRM",
      work_3_role: "Dashboard + role/permissions",
      work_3_desc: "Usprawnienie procesu: role, widoki, raporty, integracje.",
      work_3_metric: "↓ czas obsługi",
      work_3_metric_tail: " / lepsza kontrola",
      work_4_title: "Strona firmowa (multi-page)",
      work_4_meta: "Brand",
      work_4_role: "Design system + wdrożenie",
      work_4_desc: "Premium layout, performance, SEO i spójne komponenty.",
      work_4_metric: "↑ jakość leadów",
      work_4_metric_tail: "",

      // Services
      services_page_h1: "Usługi",
      services_page_p: "Strony, panele admin i marketing — dopasowane do celu i marki.",
      pack_h2: "Pakiety — proces (Audit → Build → Scale)",
      pack_p: "Dobieram zakres pod Twoją sytuację — możesz zacząć od małego pakietu i skalować.",
      pack1_t: "Audit",
      pack1_p: "Szybki audyt: cele, struktura, copy i plan wdrożenia.",
      pack2_t: "Build",
      pack2_p: "Projekt + implementacja, iteracje, testy i dopięcie jakości.",
      pack3_t: "Scale",
      pack3_p: "Optymalizacje, tracking, CRO i rozwój funkcji.",
      deliverables_h3: "Deliverables",
      ideal_h3: "Idealne, gdy…",
      price_from: "Od",
      price_quote_after_call: "Wycena po callu",
      price_depends_scope: "(zależnie od zakresu)",

      svc_web_h2: "Strony",
      svc_web_p: "Landing, multi-page, CMS, SEO, performance — premium UI z naciskiem na zaufanie i konwersję.",
      svc_web_d1: "Landing / multi-page",
      svc_web_d2: "CMS (opcjonalnie)",
      svc_web_d3: "SEO + performance",
      svc_web_deliv_1: "Landing / multi-page",
      svc_web_deliv_2: "Design system (komponenty)",
      svc_web_deliv_3: "SEO basics + performance (Core Web Vitals)",
      svc_web_deliv_4: "CMS (opcjonalnie)",
      svc_web_deliv_5: "Deploy (hosting + domena)",
      svc_web_ideal_1: "Potrzebujesz premium pierwszego wrażenia",
      svc_web_ideal_2: "Chcesz poprawić CR i wiarygodność",
      svc_web_ideal_3: "Masz kampanie i potrzebujesz szybkiego wdrożenia",

      svc_admin_h2: "Panele admin",
      svc_admin_p: "Dashboard, role/uprawnienia, analityka i integracje. Procesy, które realnie oszczędzają czas.",
      svc_admin_d1: "Dashboard + role/permissions",
      svc_admin_d2: "Analityka, raporty",
      svc_admin_d3: "Integracje / automatyzacje",
      svc_admin_deliv_1: "Dashboard + widoki danych",
      svc_admin_deliv_2: "Role/permissions (RBAC)",
      svc_admin_deliv_3: "Walidacja + bezpieczeństwo (sesje, CSRF)",
      svc_admin_deliv_4: "Raporty / analityka",
      svc_admin_deliv_5: "Integracje (np. e-mail, API)",
      svc_admin_ideal_1: "Masz chaos w procesie i potrzebujesz kontroli",
      svc_admin_ideal_2: "Chcesz oszczędzić czas zespołu",
      svc_admin_ideal_3: "Potrzebujesz ról i ograniczeń dostępu",

      svc_mkt_h2: "Marketing",
      svc_mkt_p: "Landing pod kampanie, tracking, CRO i automatyzacje. Skupienie na wyniku.",
      svc_mkt_d1: "Landing pod kampanie",
      svc_mkt_d2: "Tracking + eventy",
      svc_mkt_d3: "CRO / testy",
      svc_mkt_deliv_1: "Landing pod kampanie",
      svc_mkt_deliv_2: "Tracking + eventy",
      svc_mkt_deliv_3: "CRO / testy",
      svc_mkt_deliv_4: "Copy + oferta",
      svc_mkt_deliv_5: "Dashboard / raport",
      svc_mkt_ideal_1: "Masz ruch z ads i chcesz domknąć sprzedaż",
      svc_mkt_ideal_2: "Potrzebujesz mierzyć wynik (eventy, cele)",
      svc_mkt_ideal_3: "Chcesz testować ofertę i UX",

      // About
      about_h1: "O mnie",
      about_p1: "Buduję produkty webowe w podejściu end‑to‑end: UI, backend, baza danych i wdrożenie.",
      about_p2: "Stawiam na czytelny UX, performance i bezpieczeństwo (sesje, role, CSRF, hasła).",
      about_p3: "Lubię krótką komunikację i szybkie iteracje: plan → build → wdrożenie → optymalizacja.",
      why_h2: "Dlaczego ja",
      why_1: "Terminowość i dowożenie",
      why_2: "Security + performance jako standard",
      why_3: "Komunikacja i transparentny plan",
      about_stack_h3: "Stack",
      stack_php: "PHP 8",
      stack_mysql: "MySQL",
      stack_docker: "Docker",
      stack_uiux: "UI/UX",
      stack_security: "Security",

      // Contact
      contact_h1: "Kontakt",
      contact_p: "Wyślij krótki brief — wygeneruj mail z tematem i treścią. Możesz też napisać przez e‑mail.",
      book_h2: "Umów call",
      book_p: "Najprościej: 15 minut, żeby ustalić cel i zakres.",
      book_or: "albo wyślij brief",
      contact_brief_h2: "Brief (na maila)",
      contact_quick_h2: "Szybki kontakt",
      contact_quick_p: "Jeśli wolisz: napisz bez briefu — wystarczą 2–3 zdania o celu, budżecie i terminie.",
      open_mailto: "Otwórz mail (mailto)",
      copy_email: "Kopiuj e‑mail",
      copy_brief: "Kopiuj treść briefu",
      form_name: "Imię i firma",
      form_service: "Usługa",
      form_budget: "Budżet",
      form_deadline: "Termin",
      form_links: "Linki",
      form_desc: "Opis",
      service_website: "Strona",
      service_admin: "Panel admin",
      service_marketing: "Marketing",
      ph_company: "np. Acme",
      ph_budget: "np. 1500–3000 zł",
      ph_deadline: "np. 2 tygodnie",
      ph_links: "linki…",
      ph_desc: "co budujemy i jaki cel?",
      copied: "Skopiowano.",
    
      privacy_kicker: "Legal",
      privacy_h1: "Polityka prywatności",
      privacy_sub: "Jak przetwarzam dane i jak działa kalendarz.",
      legal_kicker: "Legal",
      legal_h1: "Prawa autorskie",
      legal_sub: "Zastrzeżenia, licencje i prawa do treści.",
},
    en: {
      // Titles / meta
      title_home: "Nikodem Kustusz Studio — Premium websites & admin panels",
      title_work: "Nikodem Kustusz Studio — Work",
      title_services: "Nikodem Kustusz Studio — Services",
      title_about: "Nikodem Kustusz Studio — About",
      title_contact: "Nikodem Kustusz Studio — Contact",
      desc_home: "I build premium websites and admin panels: fast, secure, outcome-driven.",
      desc_work: "Work: websites, admin dashboards, and marketing—filter by category and see key metrics.",
      desc_services: "Services: websites, admin panels and marketing. Deliverables and process.",
      desc_about: "About: approach, focus and stack.",
      desc_contact: "Contact: book a call, send a brief and generate a pre-filled mail.",

      // Nav / global
      site_name: "Nikodem Kustusz Studio",
      hero_kicker: "Business web partner",
      nav_home: "Home",
      nav_work: "Work",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      book_call: "Book a call",
      see_work: "See work",
      email_short: "Email",
      email_label: "Email",
      footer_claim: "Premium web + admin panels + marketing. Fast. Secure. Effective.",
      footer_privacy: "Privacy Policy",
      footer_legal: "Copyright & Legal",
      footer_rights: "All rights reserved.",
      calendar_load: "Load calendar",
      calendar_loaded: "Calendar loaded",
      calendar_open: "Open in a new tab",
      calendar_notice: "By clicking, you will load third-party content from Cal.com, which may use cookies and similar technologies.",
      cal_privacy_link: "Cal.com Privacy Policy",
      title_privacy: "Privacy Policy — Nikodem Kustusz Studio",
      title_legal: "Copyright — Nikodem Kustusz Studio",
      desc_privacy: "Privacy policy and cookie information.",
      desc_legal: "Legal notice, licensing and disclaimers.",

      // Home
      home_h1: "I design and build admin dashboards, and manage performance marketing campaigns focused on growth.",
      home_p: "Websites, admin panels and marketing focused on performance and conversion — fast, secure, outcome-driven.",
      hero_tag: "Audit • Build • Scale",
      proof_fast: "Fast",
      proof_secure: "Secure",
      proof_sales: "Sales-focused",
      home_svc_web_meta: "Premium landing pages and multi‑page sites.",
      home_svc_admin_meta: "Dashboards, roles and automations.",
      home_svc_mkt_meta: "Landing + tracking + CRO.",
      home_goal_result_label: "Goal → result:",
      home_work_1_meta: "Gym management system • PHP/MySQL/Docker",
      home_work_1_result: "admin + client panel, roles/permissions, RFID‑ready foundations.",
      home_work_2_meta: "Multi‑page landing • UI/UX • performance",
      home_work_2_result: "clear offer + CTA + conversion sections.",
      home_work_3_meta: "Mailto brief + copy • UX details",
      home_work_3_result: "less friction to contact, faster kickoff.",
      services_h2: "Services",
      work_h2: "Top case studies",
      process_h2: "Process",
      faq_h2: "FAQ",
      process_step1_t: "Call",
      process_step1_p: "Quick discovery, goals and priorities.",
      process_step2_t: "Plan",
      process_step2_p: "Structure, copy and implementation plan.",
      process_step3_t: "Build",
      process_step3_p: "Design + implementation, iterations and testing.",
      process_step4_t: "Launch",
      process_step4_p: "Launch, tracking and final polish.",
      view_case: "See details →",
      faq1_q: "How long does it take?",
      faq1_a: "Depends on scope: landing 1–2 weeks, multi-page 2–4 weeks, admin panel — agreed on call.",
      faq2_q: "How do you price projects?",
      faq2_a: "Fixed scope pricing + optional support/retainer.",
      faq3_q: "Do you help with ads?",
      faq3_a: "Yes — campaign landing pages, tracking, testing and CRO (platform-agnostic).",

      // Work
      work_page_h1: "Work",
      work_page_p: "Selected projects — role, stack and a concrete metric.",
      filter_all: "All",
      filter_web: "Websites",
      filter_admin: "Admin panels",
      filter_mkt: "Marketing",
      work_role_label: "Role:",
      kpi_label: "KPI:",
      work_1_title: "UnderGround Gym — system",
      work_1_meta: "Fitness / SaaS",
      work_1_role: "Backend + DB + UI",
      work_1_desc: "Admin/client panels, roles, sessions, CSRF, memberships and pricing.",
      work_1_metric: "↓ handling time",
      work_1_metric_tail: " / fewer errors",
      work_2_title: "Sales landing page",
      work_2_meta: "Lead gen",
      work_2_role: "UI/UX + copy + tracking",
      work_2_desc: "Campaign page with tracking and conversion optimization.",
      work_2_metric: "↑ leads",
      work_2_metric_tail: " / higher CR",
      work_3_title: "Operations dashboard",
      work_3_meta: "Ops / CRM",
      work_3_role: "Dashboard + roles/permissions",
      work_3_desc: "Process improvement: roles, views, reports and integrations.",
      work_3_metric: "↓ handling time",
      work_3_metric_tail: " / better control",
      work_4_title: "Company website (multi-page)",
      work_4_meta: "Brand",
      work_4_role: "Design system + delivery",
      work_4_desc: "Premium layout, performance, SEO and consistent components.",
      work_4_metric: "↑ lead quality",
      work_4_metric_tail: "",

      // Services
      services_page_h1: "Services",
      services_page_p: "Websites, admin panels and marketing — aligned to your goal and brand.",
      pack_h2: "Packages — process (Audit → Build → Scale)",
      pack_p: "We match scope to your situation — start small and scale up.",
      pack1_t: "Audit",
      pack1_p: "Quick audit: goals, structure, copy and an implementation plan.",
      pack2_t: "Build",
      pack2_p: "Design + implementation, iterations, testing and quality polish.",
      pack3_t: "Scale",
      pack3_p: "Optimization, tracking, CRO and feature growth.",
      deliverables_h3: "Deliverables",
      ideal_h3: "Ideal when…",
      price_from: "From",
      price_quote_after_call: "Quote after a call",
      price_depends_scope: "(depends on scope)",

      svc_web_h2: "Websites",
      svc_web_p: "Landing pages, multi-page sites, CMS, SEO, performance — premium UI built for trust and conversion.",
      svc_web_d1: "Landing / multi-page",
      svc_web_d2: "CMS (optional)",
      svc_web_d3: "SEO + performance",
      svc_web_deliv_1: "Landing / multi-page",
      svc_web_deliv_2: "Design system (components)",
      svc_web_deliv_3: "SEO basics + performance (Core Web Vitals)",
      svc_web_deliv_4: "CMS (optional)",
      svc_web_deliv_5: "Deploy (hosting + domain)",
      svc_web_ideal_1: "You need a premium first impression",
      svc_web_ideal_2: "You want higher conversion and trust",
      svc_web_ideal_3: "You have campaigns and need fast delivery",

      svc_admin_h2: "Admin panels",
      svc_admin_p: "Dashboards, roles/permissions, analytics and integrations. Processes that save real time.",
      svc_admin_d1: "Dashboard + roles/permissions",
      svc_admin_d2: "Analytics & reporting",
      svc_admin_d3: "Integrations / automations",
      svc_admin_deliv_1: "Dashboard + data views",
      svc_admin_deliv_2: "Roles/permissions (RBAC)",
      svc_admin_deliv_3: "Validation + security (sessions, CSRF)",
      svc_admin_deliv_4: "Reporting / analytics",
      svc_admin_deliv_5: "Integrations (e.g., email, API)",
      svc_admin_ideal_1: "Your process is messy and you need control",
      svc_admin_ideal_2: "You want to save the team’s time",
      svc_admin_ideal_3: "You need roles and access restrictions",

      svc_mkt_h2: "Marketing",
      svc_mkt_p: "Campaign landing pages, tracking, CRO and automation. Outcome-focused delivery.",
      svc_mkt_d1: "Campaign landing pages",
      svc_mkt_d2: "Tracking + events",
      svc_mkt_d3: "CRO / testing",
      svc_mkt_deliv_1: "Campaign landing page",
      svc_mkt_deliv_2: "Tracking + events",
      svc_mkt_deliv_3: "CRO / testing",
      svc_mkt_deliv_4: "Copy + offer",
      svc_mkt_deliv_5: "Dashboard / report",
      svc_mkt_ideal_1: "You have paid traffic and need to close sales",
      svc_mkt_ideal_2: "You need measurement (events, goals)",
      svc_mkt_ideal_3: "You want to test offer and UX",

      // About
      about_h1: "About",
      about_p1: "I build web products end-to-end: UI, backend, database and deployment.",
      about_p2: "I focus on clear UX, performance and security (sessions, roles, CSRF, passwords).",
      about_p3: "I like short communication and fast iterations: plan → build → ship → optimize.",
      why_h2: "Why me",
      why_1: "On-time delivery",
      why_2: "Security + performance by default",
      why_3: "Clear communication and a transparent plan",
      about_stack_h3: "Stack",
      stack_php: "PHP 8",
      stack_mysql: "MySQL",
      stack_docker: "Docker",
      stack_uiux: "UI/UX",
      stack_security: "Security",

      // Contact
      contact_h1: "Contact",
      contact_p: "Send a short brief — I’ll generate an email template. You can also copy the email address.",
      book_h2: "Book a call",
      book_p: "Best start: 15 minutes to align on scope and outcome.",
      book_or: "or send a brief",
      contact_brief_h2: "Brief (via email)",
      contact_quick_h2: "Quick contact",
      contact_quick_p: "If you prefer: send a short email — 2–3 sentences about goal, budget and timeline is enough.",
      open_mailto: "Open email (mailto)",
      copy_email: "Copy email",
      copy_brief: "Copy brief text",
      form_name: "Name & company",
      form_service: "Service",
      form_budget: "Budget",
      form_deadline: "Timeline",
      form_links: "Links",
      form_desc: "Description",
      service_website: "Website",
      service_admin: "Admin panel",
      service_marketing: "Marketing",
      ph_company: "e.g. Acme",
      ph_budget: "e.g. €800–€1500",
      ph_deadline: "e.g. 2 weeks",
      ph_links: "links…",
      ph_desc: "What are we building and what’s the goal?",
      copied: "Copied.",
    
      privacy_kicker: "Legal",
      privacy_h1: "Privacy Policy",
      privacy_sub: "How data is processed and how the calendar works.",
      legal_kicker: "Legal",
      legal_h1: "Copyright & Legal",
      legal_sub: "Disclaimers, licensing and rights.",
}
  };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function safeGetLS(key){
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function safeSetLS(key, val){
    try { localStorage.setItem(key, val); } catch {}
  }

  function normalizeLang(v){
    return (v === "en" || v === "pl") ? v : null;
  }

  function getLang(){
    const fromUrl = normalizeLang(new URLSearchParams(location.search).get("lang"));
    if (fromUrl) return fromUrl;

    const stored = normalizeLang(safeGetLS("lang"));
    if (stored) return stored;

    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("en")) return "en";
    return CONFIG.defaultLang;
  }

  function setLang(lang){
    const v = normalizeLang(lang) || CONFIG.defaultLang;
    safeSetLS("lang", v);

    const url = new URL(location.href);
    url.searchParams.set("lang", v);
    history.replaceState(null, "", url.toString());

    applyLang(v);
    updateInternalLinks(v);
    updateLangButtons(v);
  }

  function updateLangButtons(lang){
    const pl = $("#langPL");
    const en = $("#langEN");
    if (pl) pl.classList.toggle("active", lang === "pl");
    if (en) en.classList.toggle("active", lang === "en");
  }

  function updateInternalLinks(lang){
    const links = $$('a[href]');
    links.forEach(a => {
      const href = a.getAttribute("href") || "";
      // only internal html pages
      const isInternal = CONFIG.internalPages.some(p => href === `./${p}` || href === p || href.startsWith(`./${p}#`) || href.startsWith(`${p}#`));
      if (!isInternal) return;
      const u = new URL(href, location.href);
      u.searchParams.set("lang", lang);
      a.setAttribute("href", u.pathname.split("/").pop() + u.search + (u.hash || ""));
    });
  }

  function applyLang(lang){
    const dict = I18N[lang] || I18N[CONFIG.defaultLang];

    // page lang attr
    document.documentElement.setAttribute("lang", lang);

    // text nodes
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key || !(key in dict)) return;
      el.textContent = dict[key];
    });

    // attribute i18n (placeholder)
    // language blocks (for long legal texts)
    $$("[data-lang]").forEach(el => {
      const l = (el.getAttribute("data-lang") || "").toLowerCase();
      el.hidden = l !== lang;
    });

    $$("[data-i18n-attr]").forEach(el => {
      const attr = el.getAttribute("data-i18n-attr");
      const key = el.getAttribute("data-i18n");
      if (!attr || !key || !(key in dict)) return;
      el.setAttribute(attr, dict[key]);
    });

    // title/meta (optional)
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const titleKey = page === "index.html" ? "title_home"
      : page === "work.html" ? "title_work"
      : page === "services.html" ? "title_services"
      : page === "about.html" ? "title_about"
      : page === "contact.html" ? "title_contact"
      : page === "privacy.html" ? "title_privacy"
      : page === "legal.html" ? "title_legal"
      : null;

    const descKey = page === "index.html" ? "desc_home"
      : page === "work.html" ? "desc_work"
      : page === "services.html" ? "desc_services"
      : page === "about.html" ? "desc_about"
      : page === "contact.html" ? "desc_contact"
      : page === "privacy.html" ? "desc_privacy"
      : page === "legal.html" ? "desc_legal"
      : null;

    // Provide defaults if missing
    const titleDefaults = {
      pl: {
        title_home: "Nikodem Kustusz Studio — Strony i panele premium",
        title_work: "Realizacje — Nikodem Kustusz Studio",
        title_services: "Usługi — Nikodem Kustusz Studio",
        title_about: "O mnie — Nikodem Kustusz Studio",
        title_contact: "Kontakt — Umów call",
        desc_home: "Buduję premium strony i panele admin: szybko, bezpiecznie i z naciskiem na wynik.",
        desc_work: "Wybrane realizacje: rola, stack i metryka.",
        desc_services: "Strony, panele administracyjne i marketing: deliverables i proces.",
        desc_about: "O mnie: podejście, standardy jakości i współpraca.",
        desc_contact: "Kontakt: umów call, wyślij brief, skopiuj email.",
      },
      en: {
        title_home: "Nikodem Kustusz Studio — Premium web & admin panels",
        title_work: "Work — Nikodem Kustusz Studio",
        title_services: "Services — Nikodem Kustusz Studio",
        title_about: "About — Nikodem Kustusz Studio",
        title_contact: "Contact — Book a call",
        desc_home: "Premium websites & admin panels: fast, secure and results-driven.",
        desc_work: "Selected work: role, stack and a metric.",
        desc_services: "Websites, admin panels and marketing: deliverables and process.",
        desc_about: "About: approach, quality standards and collaboration.",
        desc_contact: "Contact: book a call, send a brief, copy email.",
      }
    };

    if (titleKey) document.title = (dict[titleKey] || titleDefaults[lang][titleKey]);
    const meta = document.querySelector('meta[name="description"]');
    if (meta && descKey) meta.setAttribute("content", (dict[descKey] || titleDefaults[lang][descKey]));
  }

  // Reveal animations
  function runReveal(){
    if (prefersReduced) {
      $$(".reveal").forEach(el => el.classList.add("in"));
      return;
    }
    const els = $$(".reveal");
    els.sort((a,b) => (parseInt(a.getAttribute("data-reveal-order")||"99",10) - parseInt(b.getAttribute("data-reveal-order")||"99",10)));
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), 120 + i * 70);
    });
  }

  // Drawer
  function setupDrawer(){
    const burger = $("#burger");
    const drawer = $("#drawer");
    if (!burger || !drawer) return;

    const open = () => {
      drawer.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      document.body.classList.add("drawer-open");
    };
    const close = () => {
      drawer.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("drawer-open");
    };

    burger.addEventListener("click", () => {
      drawer.classList.contains("open") ? close() : open();
    });

    // close on link click
    drawer.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) close();
    });

    // close on outside click (backdrop)
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) close();
    });

    // close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) close();
    });
  }

  // Work filters (tabs)
  function setupWorkFilters(){
    const tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;

    const buttons = Array.from(tablist.querySelectorAll('[data-filter]'));
    const cards = Array.from(document.querySelectorAll('[data-cat]'));

    function setActive(btn){
      buttons.forEach(b => {
        const active = b === btn;
        b.setAttribute("aria-selected", active ? "true" : "false");
        b.tabIndex = active ? 0 : -1;
        b.classList.toggle("active", active);
      });
    }

    function applyFilter(filter){
      cards.forEach(card => {
        const cats = (card.getAttribute("data-cat") || "").split(",").map(s=>s.trim());
        const show = (filter === "all") || cats.includes(filter);
        card.style.display = show ? "" : "none";
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter") || "all";
        setActive(btn);
        applyFilter(filter);
      });
    });

    // keyboard navigation
    tablist.addEventListener("keydown", (e) => {
      const current = buttons.findIndex(b => b.getAttribute("aria-selected") === "true");
      if (current === -1) return;
      let next = current;

      if (e.key === "ArrowLeft") next = Math.max(0, current - 1);
      if (e.key === "ArrowRight") next = Math.min(buttons.length - 1, current + 1);
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = buttons.length - 1;

      if (next !== current) {
        e.preventDefault();
        buttons[next].focus();
        buttons[next].click();
      }
    });

    // init
    const initBtn = buttons[0];
    if (initBtn) {
      setActive(initBtn);
      applyFilter(initBtn.getAttribute("data-filter") || "all");
    }
  }

  // Contact mailto + copy
  function setupContact(){
    const form = $("#briefForm");
    if (!form) return;

    const mailtoBtn = $("#mailtoBtn");
    const copyEmailBtn = $("#copyEmailBtn");
    const copyBriefBtn = $("#copyBriefBtn");
    const emailValue = $("#emailValue");
    const status = $("#copyStatus");

    if (emailValue) emailValue.textContent = CONFIG.email;

    function getValues(){
      const name = ($("#name")?.value || "").trim();
      const service = ($("#service")?.value || "").trim(); // web/admin/mkt
      const budget = ($("#budget")?.value || "").trim();
      const deadline = ($("#deadline")?.value || "").trim();
      const links = ($("#links")?.value || "").trim();
      const desc = ($("#desc")?.value || "").trim();
      return { name, service, budget, deadline, links, desc };
    }

    function serviceLabel(code, lang){
      const dict = I18N[lang];
      if (code === "web") return dict.service_website;
      if (code === "admin") return dict.service_admin;
      if (code === "mkt") return dict.service_marketing;
      // fallback if older values exist
      if (code === "website") return dict.service_website;
      if (code === "marketing") return dict.service_marketing;
      return dict.service_admin;
    }

    function buildEmail(lang){
      const dict = I18N[lang];
      const v = getValues();
      const subject = (lang === "en")
        ? `Book a call — ${v.name || "[Company]"}`
        : `Umów call — ${v.name || "[Nazwa firmy]"}`;

      const lines = [
        `${dict.form_name}: ${v.name || "-"}`,
        `${dict.form_service}: ${serviceLabel(v.service, lang)}`,
        `${dict.form_budget}: ${v.budget || "-"}`,
        `${dict.form_deadline}: ${v.deadline || "-"}`,
        `${dict.form_links}: ${v.links || "-"}`,
        "",
        `${dict.form_desc}:`,
        v.desc || "-",
      ];

      return { subject, body: lines.join("\n") };
    }

    async function copyText(text, lang){
      try{
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = I18N[lang].copied;
      }catch{
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        if (status) status.textContent = I18N[lang].copied;
      }
      setTimeout(() => { if (status) status.textContent = ""; }, 1800);
    }

    function openMailto(){
      const lang = getLang();
      const email = buildEmail(lang);
      const href = `mailto:${encodeURIComponent(CONFIG.email)}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
      window.location.href = href;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      openMailto();
    });

    if (mailtoBtn){
      mailtoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openMailto();
      });
    }

    if (copyEmailBtn){
      copyEmailBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        await copyText(CONFIG.email, getLang());
      });
    }

    if (copyBriefBtn){
      copyBriefBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const lang = getLang();
        const email = buildEmail(lang);
        await copyText(`${email.subject}\n\n${email.body}`, lang);
      });
    }
  }

/**
 * Zaktualizowana funkcja do ładowania kalendarza.
 * Podmień istniejącą funkcję setupCalEmbed w swoim pliku script.js
 */
function setupCalEmbed() {
  const btn = document.getElementById("loadCalendarBtn");
  const host = document.getElementById("calInlineEmbed");
  const consentArea = document.getElementById("calendarConsentArea");

  if (!btn || !host) return;

  btn.addEventListener("click", () => {
    // 1. Zablokuj przycisk i pokaż stan ładowania
    btn.setAttribute("disabled", "true");
    const originalText = btn.textContent;
    btn.textContent = "Ładowanie...";

    // 2. Dynamiczne ładowanie skryptu Cal.com
    if (!window.Cal) {
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.eu/embed/embed.js", "init");
    }

    // 3. Inicjalizacja kalendarza
    const calNamespace = host.getAttribute("data-cal-namespace") || "secret";
    const calLink = host.getAttribute("data-cal-link") || "quero/15min";

    window.Cal("init", calNamespace, { origin: "https://app.cal.eu" });

    window.Cal.ns[calNamespace]("inline", {
      elementOrSelector: "#calInlineEmbed",
      config: { layout: "month_view" },
      calLink: calLink,
    });

    window.Cal.ns[calNamespace]("ui", {
      hideEventTypeDetails: false, 
      layout: "month_view"
    });

    // 4. Pokaż kontener i ukryj zgodę
    host.removeAttribute("hidden");
    if (consentArea) {
      consentArea.style.display = "none";
    }
  });
}

// Pamiętaj, aby wywołać setupCalEmbed() w swoim głównym bloku init!
document.addEventListener("DOMContentLoaded", setupCalEmbed);


  // Init
  const lang = getLang();
  setLang(lang); // also applies + updates links

  $("#langPL")?.addEventListener("click", () => setLang("pl"));
  $("#langEN")?.addEventListener("click", () => setLang("en"));

  // Update all data-book links
  $$("[data-book]").forEach(a => a.setAttribute("href", CONFIG.bookUrl));
  $$("[data-email-link]").forEach(a => a.setAttribute("href", `mailto:${CONFIG.email}`));

  setupDrawer();
  setupWorkFilters();
  setupContact();
  setupCalEmbed();
  runReveal();
})();
