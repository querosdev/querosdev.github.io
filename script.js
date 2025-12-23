(() => {
  document.documentElement.classList.add("js");
  const CONFIG = {
    email: "wonskkdesign@gmail.com",
    bookCallUrl: "https://app.cal.eu/quero/15min" 
  };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const I18N = {
    pl: {      nav_home: "Start",
      process_step4_p: "Publikacja, tracking i optymalizacja.",
      process_step4_t: "Launch",
      process_step3_p: "Wdrożenie, performance, SEO, security.",
      process_step3_t: "Build",
      process_step2_p: "Plan, struktura, copy i makiety.",
      process_step2_t: "Plan",
      process_step1_p: "Krótki call, cele i brief.",
      process_step1_t: "Call",
      site_name: "Nikodem Kustusz Studio",
      nav_work: "Realizacje",
      nav_services: "Usługi",
      nav_about: "O mnie",
      nav_contact: "Kontakt",
      book_call: "Umów call",
      book_embed_note: "Jeśli chcesz: wklej embed Calendly/Cal.com (iframe) w tym miejscu.",
      book_or: "lub wyślij brief",
      book_p: "Wybierz termin w kalendarzu — link otworzy się w nowej karcie.",
      book_h2: "Umów call",
      see_work: "Zobacz realizacje",
      hero_kicker: "Partner dla firm",
      hero_h1: "Buduję strony i panele admin, które wyglądają premium i dowożą wynik.",
      hero_sub: "Strony, panele i marketing pod kampanie — szybko, bezpiecznie i z naciskiem na sprzedaż.",
      badge_t: "partner web & growth",
      badge_b: "Boutique",
      hero_for: "B2B / usługi / SaaS / lokale — dopasuję styl do Twojej marki.",
      proof_fast: "Szybko",
      proof_secure: "Bezpiecznie",
      proof_sales: "Nastawione na sprzedaż",
      services_h2: "Usługi",
      services_p: "Trzy główne obszary: premium strony, panele administracyjne oraz marketing (landing + tracking + CRO).",
      svc_web_title: "Strony",
      svc_web_value: "Premium landing i multi-page, które budują zaufanie.",
      svc_web_b1: "Landing / multi-page",
      svc_web_b2: "SEO + performance",
      svc_web_b3: "CMS (opcjonalnie)",
      svc_web_link: "Zobacz szczegóły →",
      svc_admin_title: "Panele admin",
      svc_admin_value: "Dashboardy i procesy, które oszczędzają czas.",
      svc_admin_b1: "Role / uprawnienia",
      svc_admin_b2: "Analityka / raporty",
      svc_admin_b3: "Integracje",
      svc_admin_link: "Zobacz szczegóły →",
      svc_mkt_title: "Marketing",
      svc_mkt_value: "Landing pod kampanie + tracking + CRO.",
      svc_mkt_b1: "Landing pod kampanie",
      svc_mkt_b2: "Tracking / analityka",
      svc_mkt_b3: "CRO / testy",
      svc_mkt_link: "Zobacz szczegóły →",
      top_cases_h2: "Top realizacje",
      top_cases_p: "3 przykłady (na start). Każdy case: cel → wynik + metryka.",
      case1_title: "UnderGround Gym",
      case1_industry: "Fitness / SaaS",
      case1_metric: "↓ czas obsługi",
      case1_cta: "View case →",
      case2_title: "Landing pod ofertę",
      case2_industry: "Usługi / Lead gen",
      case2_metric: "↑ zapytania",
      case2_cta: "View case →",
      case3_title: "Panel administracyjny",
      case3_industry: "Operacje / CRM",
      case3_metric: "↑ kontrola procesu",
      case3_cta: "View case →",
      process_h2: "Jak pracuję",
      process_p: "Call → Plan → Build → Launch. Jasno, szybko i bez niespodzianek.",
      pack_h2: "Audit → Build → Scale",
      step1_t: "Audit",
      step1_p: "Analiza + plan: oferta, UX, tracking i szybkie poprawki.",
      step2_t: "Build",
      step2_p: "Design + development: strona, panel lub landing pod kampanię.",
      step3_t: "Scale",
      step3_p: "Optymalizacja: CRO, automatyzacje, raporty i iteracje.",
      step4_t: "Launch",
      step4_p: "Wdrożenie, tracking, optymalizacje.",
      faq_q1: "Ile trwa realizacja?",
      faq_a1: "Landing zwykle 7–14 dni, multi-page/panel zależnie od zakresu.",
      faq_q2: "Jakie są widełki?",
      faq_a2: "Zależy od celu i zakresu — na Services masz orientacyjne “od …”.",
      faq_q3: "Czy zapewniasz support?",
      faq_a3: "Tak, możliwy support i rozwój po wdrożeniu.",
      footer_claim: "Premium web + panele admin + marketing. Szybko. Bezpiecznie. Skutecznie.",
      work_h1: "Work / Case studies",
      work_4_metric_tail: "",
      work_4_metric: "↑ jakość leadów",
      work_4_desc: "Premium layout, performance, SEO i spójne komponenty.",
      work_4_role: "Design system + wdrożenie",
      work_3_metric_tail: " / lepsza kontrola",
      work_3_metric: "↓ czas obsługi",
      work_3_desc: "Usprawnienie procesu: role, widoki, raporty, integracje.",
      work_3_role: "Dashboard + role/permissions",
      work_2_metric_tail: " / wyższy CR",
      work_2_metric: "↑ leady",
      work_2_desc: "Strona pod kampanię z trackingiem i optymalizacją konwersji.",
      work_2_role: "UI/UX + copy + tracking",
      work_1_metric_tail: " / mniejsze błędy",
      work_1_metric: "↓ czas obsługi",
      work_1_desc: "Panel admin/klient, role, sesje, CSRF, karnety i cennik.",
      work_1_role: "Backend + DB + UI",
      work_role_label: "Rola:",
      kpi_label: "KPI:",
      work_p: "Filtruj po typie: Strony / Panele / Marketing. Każdy projekt ma rolę, stack i metrykę.",
      filter_all: "Wszystko",
      filter_web: "Strony",
      filter_admin: "Panele",
      filter_mkt: "Marketing",
      services_page_h1: "Services",
      services_page_p: "Deliverables jasno opisane. Na końcu: CTA + widełki.",
      from_label: "Od",
      price_estimate: "Wycena po callu",
      svc_mkt_ideal3: "Optymalizujesz CR i koszt leadów",
      svc_mkt_ideal2: "Potrzebujesz mierzyć wynik",
      svc_mkt_ideal1: "Chcesz szybciej testować oferty",
      svc_mkt_li5: "Raport “co działa”",
      svc_mkt_li4: "Formularze + automatyzacje (opcjonalnie)",
      svc_mkt_li3: "CRO: testy, poprawki, iteracje",
      svc_mkt_li2: "Tracking (GA4 / pixel) + eventy",
      svc_mkt_li1: "Landing pod kampanie (warianty)",
      svc_admin_ideal3: "Potrzebujesz raportów i metryk",
      svc_admin_ideal2: "Chcesz kontroli dostępu",
      svc_admin_ideal1: "Masz procesy do usprawnienia",
      svc_admin_li5: "Logi + audyt (opcjonalnie)",
      svc_admin_li4: "Integracje (API, webhooks)",
      svc_admin_li3: "CRUD + walidacja",
      svc_admin_li2: "Role / uprawnienia",
      svc_admin_li1: "Dashboard + analityka",
      svc_web_ideal3: "Dbasz o performance i SEO",
      svc_web_ideal2: "Chcesz szybkie wdrożenie",
      svc_web_ideal1: "Potrzebujesz strony, która sprzedaje",
      svc_web_li5: "Deploy + instrukcja obsługi",
      svc_web_li4: "Formularze + integracje",
      svc_web_li3: "SEO + performance",
      svc_web_li2: "CMS (opcjonalnie)",
      svc_web_li1: "Landing (1 strona) / multi-page",
      email_short: "Email",
      scope_note: "/ zależnie od zakresu",
      ideal_h3: "Idealne, gdy",
      deliverables_h3: "Deliverables",
      svc_mkt_p: "Landing pod kampanie, tracking, CRO i automatyzacje. Skupienie na wyniku.",
      svc_mkt_h2: "Marketing",
      svc_admin_p: "Dashboardy, role, analityka i integracje. Mniej ręcznej roboty, więcej kontroli.",
      svc_admin_h2: "Panele admin",
      svc_web_p: "Landing i multi-page, gdzie design jest premium, a performance i SEO dowożą wynik.",
      svc_web_h2: "Strony",
      about_h1: "About",
      about_p1: "Buduję produkty webowe w podejściu end-to-end: UI, backend, baza danych i wdrożenie.",
      about_p2: "Stawiam na czytelny UX, performance i bezpieczeństwo (sesje, role, CSRF, hasła).",
      about_p3: "Lubię krótką komunikację i szybkie iteracje: plan → build → wdrożenie → optymalizacja.",
      why_h2: "Dlaczego ja",
      why_1: "Terminowość i dowożenie",
      why_2: "Security + performance jako standard",
      why_3: "Komunikacja i transparentny plan",
      contact_h1: "Contact",
      contact_brief_h2: "Brief",
      contact_p: "Wyślij krótki brief — wygeneruję mail z tematem i treścią. Możesz też skopiować e-mail.",
      form_company: "Nazwa firmy",
      form_service: "Usługa",
      form_budget: "Budżet (opcjonalnie)",
      form_deadline: "Termin (opcjonalnie)",
      form_links: "Linki (www, konkurencja, inspiracje)",
      form_desc: "Krótki opis",
      form_send: "Otwórz mail (mailto)",
      copy_email: "Kopiuj e-mail",
      service_website: "Strona",
      service_admin: "Panel admin",
      service_marketing: "Marketing",
      ph_company: "Np. Acme",
      ph_budget: "np. 1500–3000 zł",
      ph_deadline: "np. 2 tygodnie",
      ph_links: "linki...",
      ph_desc: "co budujemy i jaki cel?",
      copied: "Skopiowano",
      mail_subject: "Umów call – ",
          pack_p: "Trzy poziomy współpracy: Audit → Build → Scale. Dobieramy wariant do celu i budżetu.",
      pack1_t: "Audit",
      pack1_p: "Audyt + plan: oferta, UX, tracking i priorytety.",
      pack2_t: "Build",
      pack2_p: "Projekt + wdrożenie: strona, panel lub landing.",
      pack3_t: "Scale",
      pack3_p: "Optymalizacja: CRO, automatyzacje i raporty.",
    },
    en: {      nav_home: "Home",
      process_step4_p: "Go-live, tracking setup, iteration.",
      process_step4_t: "Launch",
      process_step3_p: "Implementation with performance, SEO, security.",
      process_step3_t: "Build",
      process_step2_p: "Plan, structure, copy and wireframes.",
      process_step2_t: "Plan",
      process_step1_p: "Quick call to align goals and scope.",
      process_step1_t: "Call",
      hero_for: "B2B / services / SaaS / local businesses — I adapt the style to your brand.",
      badge_t: "web & growth partner",
      badge_b: "Boutique",
      site_name: "Nikodem Kustusz Studio",
      nav_work: "Work",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      book_call: "Book a call",
      book_embed_note: "Optional: paste a Calendly/Cal.com embed (iframe) here.",
      book_or: "or send a brief",
      book_p: "Pick a slot in my calendar — it will open in a new tab.",
      book_h2: "Book a call",
      see_work: "See work",
      hero_kicker: "Business partner",
      hero_h1: "I build premium websites & admin panels that ship fast and drive results.",
      hero_sub: "Websites, admin panels and campaign marketing — fast, secure, conversion-minded.",
      proof_fast: "Fast",
      proof_secure: "Secure",
      proof_sales: "Sales-focused",
      services_h2: "Services",
      services_p: "Three core areas: premium websites, admin panels, and marketing (landing + tracking + CRO).",
      svc_web_title: "Websites",
      svc_web_value: "Premium landing & multi-page sites that build trust.",
      svc_web_b1: "Landing / multi-page",
      svc_web_b2: "SEO + performance",
      svc_web_b3: "CMS (optional)",
      svc_web_link: "See details →",
      svc_admin_title: "Admin panels",
      svc_admin_value: "Dashboards and workflows that save time.",
      svc_admin_b1: "Roles / permissions",
      svc_admin_b2: "Analytics / reporting",
      svc_admin_b3: "Integrations",
      svc_admin_link: "See details →",
      svc_mkt_title: "Marketing",
      svc_mkt_value: "Campaign landing + tracking + CRO.",
      svc_mkt_b1: "Campaign landing",
      svc_mkt_b2: "Tracking / analytics",
      svc_mkt_b3: "CRO / tests",
      svc_mkt_link: "See details →",
      top_cases_h2: "Top case studies",
      top_cases_p: "Three examples to start. Each: goal → outcome + a metric.",
      case1_title: "UnderGround Gym",
      case1_industry: "Fitness / SaaS",
      case1_metric: "↓ handling time",
      case1_cta: "View case →",
      case2_title: "Offer landing",
      case2_industry: "Services / Lead gen",
      case2_metric: "↑ inquiries",
      case2_cta: "View case →",
      case3_title: "Admin dashboard",
      case3_industry: "Ops / CRM",
      case3_metric: "↑ process control",
      case3_cta: "View case →",
      process_h2: "How I work",
      process_p: "Call → Plan → Build → Launch. Clear, fast, no surprises.",
      pack_h2: "Audit → Build → Scale",
      step1_t: "Audit",
      step1_p: "Audit & plan: offer, UX, tracking, quick wins.",
      step2_t: "Build",
      step2_p: "Design + development: website, admin panel, or campaign landing.",
      step3_t: "Scale",
      step3_p: "Optimize: CRO, automation, reporting, iterations.",
      step4_t: "Launch",
      step4_p: "Deploy, tracking, optimizations.",
      faq_q1: "How long does it take?",
      faq_a1: "Landing: usually 1–2 weeks. Multi-page/panels depend on scope.",
      faq_q2: "Pricing?",
      faq_a2: "Depends on goals and scope — see “from …” ranges on Services.",
      faq_q3: "Do you provide support?",
      faq_a3: "Yes — maintenance and further development are available.",
      footer_claim: "Premium web + admin panels + marketing. Fast. Secure. Effective.",
      work_h1: "Work / Case studies",
      work_4_metric_tail: "",
      work_4_metric: "↑ lead quality",
      work_4_desc: "Premium website: performance, SEO, components and consistent brand.",
      work_4_role: "Design system + implementation",
      work_3_metric_tail: " / better control",
      work_3_metric: "↓ handling time",
      work_3_desc: "Operations panel: roles, views, reporting and integrations.",
      work_3_role: "Dashboard + roles/permissions",
      work_2_metric_tail: " / higher CR",
      work_2_metric: "↑ leads",
      work_2_desc: "Offer landing with tracking and CRO.",
      work_2_role: "UI/UX + copy + tracking",
      work_1_metric_tail: " / fewer errors",
      work_1_metric: "↓ handling time",
      work_1_desc: "Client/admin panel with RFID cards, memberships and workflow automation.",
      work_1_role: "Backend + DB + UI",
      work_role_label: "Role:",
      kpi_label: "KPI:",
      work_p: "Filter by type: Websites / Admin / Marketing. Each project includes role, stack, and a metric.",
      filter_all: "All",
      filter_web: "Websites",
      filter_admin: "Admin",
      filter_mkt: "Marketing",
      services_page_h1: "Services",
      services_page_p: "Clear deliverables. Each section ends with CTA + indicative pricing.",
      from_label: "From",
      price_estimate: "Estimate after call",
      svc_mkt_ideal3: "You optimize CR and cost-per-lead",
      svc_mkt_ideal2: "You need measurable outcomes",
      svc_mkt_ideal1: "You want to test offers faster",
      svc_mkt_li5: "“What works” report",
      svc_mkt_li4: "Forms + automation (optional)",
      svc_mkt_li3: "CRO: tests, iterations",
      svc_mkt_li2: "Tracking (GA4 / pixel) + events",
      svc_mkt_li1: "Campaign landing (variants)",
      svc_admin_ideal3: "You want reports and metrics",
      svc_admin_ideal2: "You need access control",
      svc_admin_ideal1: "You have processes to streamline",
      svc_admin_li5: "Logs + audit (optional)",
      svc_admin_li4: "Integrations (API, webhooks)",
      svc_admin_li3: "CRUD + validation",
      svc_admin_li2: "Roles / permissions",
      svc_admin_li1: "Dashboard + analytics",
      svc_web_ideal3: "You care about performance and SEO",
      svc_web_ideal2: "You want a fast launch",
      svc_web_ideal1: "You need a website that converts",
      svc_web_li5: "Deployment + handover",
      svc_web_li4: "Forms + integrations",
      svc_web_li3: "SEO + performance",
      svc_web_li2: "CMS (optional)",
      svc_web_li1: "Landing (single page) / multi-page",
      email_short: "Email",
      scope_note: "/ depending on scope",
      ideal_h3: "Ideal when",
      deliverables_h3: "Deliverables",
      svc_mkt_p: "Campaign landings, tracking, CRO and automation. Results-first.",
      svc_mkt_h2: "Marketing",
      svc_admin_p: "Dashboards, roles, analytics and integrations. Less manual work, more control.",
      svc_admin_h2: "Admin panels",
      svc_web_p: "Landing pages and multi-page sites with premium design, strong performance and SEO.",
      svc_web_h2: "Websites",
      about_h1: "About",
      about_p1: "I build web products end-to-end: UI, backend, database, and deployment.",
      about_p2: "I focus on clean UX, performance, and security (sessions, roles, CSRF, passwords).",
      about_p3: "I prefer short communication and quick iterations: plan → build → launch → optimize.",
      why_h2: "Why me",
      why_1: "On-time delivery",
      why_2: "Security + performance by default",
      why_3: "Clear communication and plan",
      contact_h1: "Contact",
      contact_brief_h2: "Brief",
      contact_p: "Send a short brief — I’ll generate an email (subject + body). You can also copy the email address.",
      form_company: "Company name",
      form_service: "Service",
      form_budget: "Budget (optional)",
      form_deadline: "Deadline (optional)",
      form_links: "Links (site, competitors, inspirations)",
      form_desc: "Short description",
      form_send: "Open email (mailto)",
      copy_email: "Copy email",
      service_website: "Website",
      service_admin: "Admin panel",
      service_marketing: "Marketing",
      ph_company: "e.g. Acme",
      ph_budget: "e.g. 1500–3000 PLN",
      ph_deadline: "e.g. 2 weeks",
      ph_links: "links...",
      ph_desc: "what are we building and what is the goal?",
      copied: "Copied",
      mail_subject: "Book a call – ",
          pack_p: "Three engagement levels: Audit → Build → Scale. We match the scope to your goal and budget.",
      pack1_t: "Audit",
      pack1_p: "Audit & plan: offer, UX, tracking, priorities.",
      pack2_t: "Build",
      pack2_p: "Design + delivery: website, admin panel, or landing.",
      pack3_t: "Scale",
      pack3_p: "Optimize: CRO, automation, reporting, iterations.",
    }
  };

  function getLang() {
    const saved = localStorage.getItem("lang");
    if (saved === "pl" || saved === "en") return saved;
    const b = (navigator.language || "").toLowerCase();
    return b.startsWith("pl") ? "pl" : "en";
  }

  function updateLangButtons(lang) {
    $("#langPL")?.classList.toggle("active", lang === "pl");
    $("#langEN")?.classList.toggle("active", lang === "en");
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;

    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val !== "string") return;

      const attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    });

    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyLang(lang);
    updateLangButtons(lang);
  }

  function markActiveNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const map = {
      "": "home",
      "index.html": "home",
      "work.html": "work",
      "services.html": "services",
      "about.html": "about",
      "contact.html": "contact"
    };
    const key = map[path] || "home";
    $$("[data-nav]").forEach(a => a.classList.toggle("active", a.getAttribute("data-nav") === key));
    $$("[data-nav-mobile]").forEach(a => a.classList.toggle("active", a.getAttribute("data-nav-mobile") === key));
  }

  function initMobileNav(){
    const burger = $("#burger");
    const drawer = $("#drawer");
    if (!burger || !drawer) return;

    burger.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    $$("a", drawer).forEach(a => a.addEventListener("click", () => {
      drawer.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  function reveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  if (prefersReduced) {
    items.forEach(el => el.classList.add("in"));
    return;
  }

  // Premium feel: fast + subtle (no long waiting).
  const base = 80;
  const step = 45;
  const maxDelay = 450;

  items.forEach((el, i) => {
    const delay = Math.min(base + i * step, maxDelay);
    setTimeout(() => el.classList.add("in"), delay);
  });
}

  function initWorkFilters() {
    const filters = $$(".filter");
    const cards = $$(".work-card");
    if (!filters.length || !cards.length) return;

    function applyFilter(type){
      filters.forEach(f => f.classList.toggle("active", f.dataset.filter === type));
      cards.forEach(c => {
        const cat = (c.dataset.cat || "").split(",").map(s => s.trim());
        const show = (type === "all") || cat.includes(type);
        c.style.display = show ? "" : "none";
      });
    }

    filters.forEach(f => f.addEventListener("click", () => applyFilter(f.dataset.filter || "all")));
    applyFilter("all");
  }

  function initContact() {
    const form = $("#briefForm");
    const mailBtn = $("#mailtoBtn");
    const copyBtn = $("#copyEmailBtn");
    const emailEl = $("#emailValue");
    if (emailEl) emailEl.textContent = CONFIG.email;

    async function copyEmail() {
      const lang = getLang();
      const label = I18N[lang]?.copied || "Copied";
      const base = I18N[lang]?.copy_email || "Copy email";

      try {
        await navigator.clipboard.writeText(CONFIG.email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = CONFIG.email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      if (copyBtn) {
        copyBtn.textContent = label;
        setTimeout(() => (copyBtn.textContent = base), 1200);
      }
    }

    copyBtn?.addEventListener("click", copyEmail);

    function buildMailto() {
      const lang = getLang();
      const dict = I18N[lang] || I18N.en;

      const company = ($("#company")?.value || "").trim();
      const service = ($("#service")?.value || "").trim();
      const serviceLabel = ((($("#service")?.selectedOptions || [])[0]?.textContent) || service || "").trim();
      const budget = ($("#budget")?.value || "").trim();
      const deadline = ($("#deadline")?.value || "").trim();
      const links = ($("#links")?.value || "").trim();
      const desc = ($("#desc")?.value || "").trim();

      const subj = (dict.mail_subject || "Book a call – ") + (company || "[Company]");

      const lines = [
        `${lang === "pl" ? "Usługa" : "Service"}: ${serviceLabel || "-"}`,
        `${lang === "pl" ? "Budżet" : "Budget"}: ${budget || "-"}`,
        `${lang === "pl" ? "Termin" : "Deadline"}: ${deadline || "-"}`,
        `${lang === "pl" ? "Linki" : "Links"}: ${links || "-"}`,
        "",
        `${lang === "pl" ? "Opis" : "Description"}:`,
        desc || "-"
      ];

      const body = lines.join("\n");
      return `mailto:${encodeURIComponent(CONFIG.email)}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    }

    function openMailto(e){
      e?.preventDefault?.();
      window.location.href = buildMailto();
    }

    mailBtn?.addEventListener("click", openMailto);
    form?.addEventListener("submit", openMailto);

    // Optional links that should open the same mailto template
    $$("[data-email-link]").forEach(a => {
      a.setAttribute("href", buildMailto());
      a.addEventListener("click", openMailto);
    });
  }

  function initBookCall() {
  const url = (CONFIG.bookCallUrl || "").trim();
  const fallback = "./contact.html#book";
  const finalUrl = url && url !== "#contact" ? url : fallback;

  $$("[data-book]").forEach(a => {
    a.setAttribute("href", finalUrl);
    if (/^https?:\/\//i.test(finalUrl)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    } else {
      a.removeAttribute("target");
      a.removeAttribute("rel");
    }
  });
}

  const lang = getLang();
  applyLang(lang);
  updateLangButtons(lang);

  $("#langPL")?.addEventListener("click", () => setLang("pl"));
  $("#langEN")?.addEventListener("click", () => setLang("en"));

  markActiveNav();
  initMobileNav();
  initWorkFilters();
  initContact();
  initBookCall();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(reveal), { once: true });
  } else {
    requestAnimationFrame(reveal);
  }
})();