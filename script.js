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
      title_home: "Nikodem Kustusz Studio — Strony, panele i lead flow",
      title_work: "Nikodem Kustusz Studio — Realizacje",
      title_services: "Nikodem Kustusz Studio — Jak mogę pomóc",
      title_about: "Nikodem Kustusz Studio — O współpracy",
      title_contact: "Nikodem Kustusz Studio — Kontakt",
      desc_home: "Projektuję i wdrażam strony, panele admin oraz procesy kontaktu. Zobacz publiczny case: UndergroundGym.pl.",
      desc_work: "Realizacje: live case UndergroundGym.pl, strony, panele admin i procesy kontaktu.",
      desc_services: "Usługi: strony, panele admin i marketing. Deliverables i proces.",
      desc_about: "O współpracy: proces, komunikacja i stack.",
      desc_contact: "Kontakt: umów call albo wyślij krótki brief.",

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
      footer_claim: "Strony, panele i landing pages z jasnym zakresem, testami i wdrożeniem.",
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
      home_h1: "Projektuję strony i systemy, które ułatwiają firmom zdobywanie zapytań.",
      home_p: "Łączę strukturę oferty, UI, frontend i wdrożenie. Zobacz publiczną stronę UndergroundGym.pl oraz wybrane koncepcje i moje projekty.",
      hero_tag: "Audit • Build • Scale",
      proof_fast: "Jasny zakres",
      proof_secure: "Testy przed startem",
      proof_sales: "Kontakt bez tarcia",
      proof_kicker: "Publiczny case",
      proof_h2: "UndergroundGym.pl — publiczny case dla siłowni",
      proof_p: "Publicznie dostępna strona dla lokalnego klubu: oferta, cennik, opinie, formularz wejścia próbnego i kontakt dla klubu w Żukowie.",
      proof_scope_label: "Zakres",
      proof_scope_value: "UX, frontend, oferta, formularz, SEO basics",
      proof_outcome_label: "Efekt",
      proof_outcome_value: "Czytelna ścieżka: oferta → wejście próbne → kontakt",
      proof_visit: "Otwórz live site",
      proof_case: "Zobacz case",
      home_svc_web_meta: "Strony firmowe z ofertą, CTA i wdrożeniem.",
      home_svc_admin_meta: "Dashboardy, role i uporządkowany workflow.",
      home_svc_mkt_meta: "Landing + tracking + plan optymalizacji.",
      home_goal_result_label: "Cel → wynik:",
      home_work_1_meta: "Live website • siłownia 24/7 • lead flow",
      home_work_1_build: "Oferta, cennik, opinie, formularz wejścia próbnego i contact UX.",
      home_work_1_result: "szybka ścieżka od oferty do kontaktu dla lokalnej siłowni.",
      home_work_2_title: "Landing — prototyp",
      home_work_2_meta: "Lead-gen pattern • UI/UX • performance",
      home_work_2_build: "Struktura oferty, sekcje zaufania i CTA pod kampanię.",
      home_work_2_result: "gotowy wzorzec landing page do szybkiego wdrożenia.",
      home_work_3_title: "Contact brief flow",
      home_work_3_meta: "Brief flow • copy • UX detale",
      home_work_3_build: "Brief generujący gotową wiadomość do wysłania.",
      home_work_3_result: "mniejsze tarcie kontaktu, szybki start współpracy.",
      case_build_label: "Build:",
      services_h2: "Usługi",
      work_h2: "Top realizacje",
      process_h2: "Proces",
      faq_h2: "FAQ",
      process_step1_t: "Call",
      process_step1_p: "Ustalam cel biznesowy, zakres, priorytety i ryzyka.",
      process_step2_t: "Plan",
      process_step2_p: "Dostajesz strukturę, copy direction i plan wdrożenia.",
      process_step3_t: "Build",
      process_step3_p: "Projektuję, wdrażam i pokazuję postęp w krótkich iteracjach.",
      process_step4_t: "Launch",
      process_step4_p: "Publikacja, checklisty, testy i poprawki po starcie.",
      view_case: "Zobacz szczegóły →",
      faq1_q: "Ile to trwa?",
      faq1_a: "Zależnie od zakresu: landing zwykle 1–2 tygodnie, większe strony 2–4 tygodnie, panel admin — do ustalenia.",
      faq2_q: "Jak wyglądają rozliczenia?",
      faq2_a: "Zwykle stała wycena za zakres + opcjonalny support/miesięczna opieka.",
      faq3_q: "Czy pomagasz z reklamami?",
      faq3_a: "Tak — przygotowuję landing pod kampanie, tracking, testy i optymalizacje (bez wchodzenia w platformy).",

      // Work
      work_page_h1: "Realizacje",
      work_page_p: "Wybrane prace pokazane tak, jak patrzy na nie firma: problem, zakres, moja rola i status projektu.",
      work_feature_kicker: "Publiczny case",
      work_feature_h2: "UndergroundGym.pl",
      work_feature_p: "Strona lokalnej siłowni 24/7: oferta, cennik, opinie, wejście próbne, dane kontaktowe i zgody na zewnętrzne embed-y.",
      work_feature_1: "Oferta i CTA prowadzące do wejścia próbnego.",
      work_feature_2: "Responsywny układ desktop/mobile z mocną identyfikacją klubu.",
      work_feature_3: "Kontakt, mapa i treści zewnętrzne schowane za zgodą cookies.",
      filter_all: "Wszystko",
      filter_web: "Strony",
      filter_admin: "Panele",
      filter_mkt: "Landing + tracking",
      work_role_label: "Rola:",
      kpi_label: "Dowód:",
      work_1_title: "UndergroundGym.pl — strona klubowa",
      work_1_meta: "Fitness / live site",
      work_1_role: "UX + frontend + wdrożenie",
      work_1_desc: "Publiczna strona siłowni 24/7 z ofertą, cennikiem, opiniami, formularzem wejścia próbnego i kontaktem.",
      work_1_metric: "live site",
      work_1_metric_tail: " / realny klient",
      work_2_title: "Landing sprzedażowy — koncepcja",
      work_2_meta: "Lead gen / koncepcja",
      work_2_role: "Strategia oferty + UI/UX + tracking",
      work_2_desc: "Koncepcja strony pod kampanię z jasnym CTA, strukturą zaufania i planem pomiaru.",
      work_2_metric: "koncepcja",
      work_2_metric_tail: " / nie live site",
      work_3_title: "Panel operacyjny — prototyp",
      work_3_meta: "Ops / admin pattern",
      work_3_role: "Dashboard + role/permissions",
      work_3_desc: "Usprawnienie procesu: role, widoki, raporty, integracje.",
      work_3_metric: "prototyp",
      work_3_metric_tail: " / role i raporty",
      work_4_title: "Strona firmowa — prototyp multi-page",
      work_4_meta: "Brand / layout system",
      work_4_role: "Design system + wdrożenie",
      work_4_desc: "Premium layout, performance, SEO i spójne komponenty.",
      work_4_metric: "prototyp",
      work_4_metric_tail: "",

      // Services
      services_page_h1: "Jak mogę pomóc",
      services_page_p: "Konkretny zakres, czytelna wycena po rozmowie i wdrożenie bez rozmywania odpowiedzialności.",
      pack_h2: "Model współpracy",
      pack_p: "Możemy zacząć od audytu, przejść do wdrożenia albo rozwijać działający projekt etapami.",
      pack1_t: "Audit",
      pack1_p: "Diagnoza celu, oferty, UX i priorytetów przed wydaniem budżetu.",
      pack2_t: "Build",
      pack2_p: "Projekt + kod + wdrożenie z krótkimi iteracjami i testami.",
      pack3_t: "Scale",
      pack3_p: "Poprawki po starcie, tracking, CRO i rozwój funkcji.",
      deliverables_h3: "Deliverables",
      ideal_h3: "Idealne, gdy…",
      price_from: "Od",
      price_quote_after_call: "Wycena po callu",
      price_depends_scope: "(zależnie od zakresu)",

      svc_web_h2: "Strony",
      svc_web_p: "Landing albo strona firmowa, która jasno tłumaczy ofertę, prowadzi do kontaktu i dobrze wygląda na mobile.",
      svc_web_d1: "Landing / multi-page",
      svc_web_d2: "CMS (opcjonalnie)",
      svc_web_d3: "SEO + performance",
      svc_web_deliv_1: "Landing / multi-page",
      svc_web_deliv_2: "Spójne sekcje i komponenty",
      svc_web_deliv_3: "SEO basics + performance checklist",
      svc_web_deliv_4: "CMS (opcjonalnie)",
      svc_web_deliv_5: "Deploy (hosting + domena)",
      svc_web_ideal_1: "Klient musi szybko zrozumieć ofertę",
      svc_web_ideal_2: "Obecna strona nie buduje zaufania",
      svc_web_ideal_3: "Potrzebujesz wdrożenia bez długiego procesu agencyjnego",

      svc_admin_h2: "Panele admin",
      svc_admin_p: "Panele i dashboardy, które porządkują dane, role, statusy i powtarzalne działania zespołu.",
      svc_admin_d1: "Dashboard + role/permissions",
      svc_admin_d2: "Analityka, raporty",
      svc_admin_d3: "Integracje / automatyzacje",
      svc_admin_deliv_1: "Dashboard + widoki danych",
      svc_admin_deliv_2: "Role/permissions (RBAC)",
      svc_admin_deliv_3: "Walidacja, role i podstawy bezpieczeństwa",
      svc_admin_deliv_4: "Raporty / analityka",
      svc_admin_deliv_5: "Integracje (np. e-mail, API)",
      svc_admin_ideal_1: "Dane są rozproszone w mailach lub arkuszach",
      svc_admin_ideal_2: "Zespół potrzebuje jasnych statusów i ról",
      svc_admin_ideal_3: "Chcesz ograniczyć ręczne raportowanie",

      svc_mkt_h2: "Landing + tracking",
      svc_mkt_p: "Strona pod kampanię z jasnym CTA, podstawowym trackingiem i planem testów zamiast przypadkowych zmian.",
      svc_mkt_d1: "Landing pod kampanie",
      svc_mkt_d2: "Tracking + eventy",
      svc_mkt_d3: "CRO / testy",
      svc_mkt_deliv_1: "Landing pod kampanie",
      svc_mkt_deliv_2: "Tracking + eventy",
      svc_mkt_deliv_3: "CRO / testy",
      svc_mkt_deliv_4: "Copy + oferta",
      svc_mkt_deliv_5: "Prosty raport / dashboard",
      svc_mkt_ideal_1: "Płacisz za ruch i potrzebujesz lepszego landing page",
      svc_mkt_ideal_2: "Chcesz wiedzieć, co użytkownik robi po wejściu",
      svc_mkt_ideal_3: "Chcesz testować ofertę, CTA i kolejność sekcji",

      // About
      about_h1: "Niezależne studio. Web, interfejsy, systemy.",
      about_sub: "Jestem Nikodem Kustusz — niezależny developer i builder. Pracuję w punkcie, w którym kierunek wizualny, frontend i klarowność biznesowa spotykają się i zaczynają działać jak jeden system.",
      about_identity_role: "Niezależne studio — web i systemy",
      about_p1: "Buduję premium web experience, interfejsy produktowe i systemy dla lokalnych firm — od pozycjonowania oferty, przez UI i frontend, po wdrożenie.",
      about_p2: "Nie udaję dużej agencji. To skupione studio jednej osoby: jeden właściciel projektu, jasne decyzje i widoczny output zamiast korporacyjnego szumu.",
      about_p3: "Każdy projekt traktuję jak system: pozycjonowanie, interfejs, ścieżka konwersji i polish — żeby małe marki wyglądały ostrzej, jaśniej i bardziej premium.",
      why_h2: "Jak pracuję",
      why_1: "Product-level UI — polish na poziomie produktu, nie szablonu.",
      why_2: "Pozycjonowanie lokalnego biznesu — oferta, która prowadzi do kontaktu.",
      why_3: "Szybkie wdrożenie — krótkie iteracje i realny output.",
      why_4: "Dwujęzyczna struktura PL/EN — gotowa od startu.",
      why_5: "Systemowe myślenie — spójny system, nie losowe strony.",
      why_6: "Proof of work — pokazuję proces i efekty, nie obietnice.",
      about_stack_h3: "Stack i narzędzia",
      stack_php: "PHP 8",
      stack_mysql: "MySQL",
      stack_docker: "Docker",
      stack_uiux: "UI/UX",
      stack_security: "Security",
      stack_react: "React / RN",
      stack_ts: "TypeScript",
      stack_automation: "Automatyzacja",

      // Case-study shared labels + new project cards (Work)
      cs_role_label: "Rola:",
      cs_status_label: "Status:",
      cs_ask_scope: "Zapytaj o zakres",
      aurora_status: "System wewnętrzny",
      aurora_cat_1: "Local AI",
      aurora_cat_2: "Memory graph",
      aurora_role: "Architektura systemu, local-first AI, UX, logika produktu",
      aurora_meta: "System wewnętrzny / aktywny rozwój",
      aurora_desc: "Local-first „operating mirror”, który zamienia rozproszony kontekst osobisty w pamięć, refleksję, proof of work i sygnały następnego ruchu. To nie jest aplikacja do notatek.",
      aurora_li1: "Local Sense Engine + integracja Ollama (embeddinggemma, gemma3:1b)",
      aurora_li2: "Mirror i Advisor: klasyfikacja sygnału, wykrywanie wzorców, następny uczciwy ruch",
      aurora_li3: "Deterministyczne guardraile i pamięć z dbałością o prywatność (local-first)",
      aurora_metric: "system wewnętrzny / prototyp w rozwoju — nie komercyjny SaaS",
      sigma_status: "Koncepcja",
      sigma_cat_1: "Strona firmowa",
      sigma_cat_2: "Budownictwo",
      sigma_role: "Web design, UX, struktura oferty, propozycja",
      sigma_meta: "Firma budowlana / koncepcja",
      sigma_desc: "Koncepcja strony dla firmy budowlanej: jasna struktura usług, sekcja realizacji, sygnały zaufania i prosta ścieżka kontaktu — zbudowane i wysłane, brak wdrożenia.",
      sigma_li1: "Struktura usług: budownictwo mieszkaniowe, komercyjne, użyteczności publicznej",
      sigma_li2: "Sekcja realizacji i sygnały wiarygodności lokalnej firmy",
      sigma_li3: "Prosta ścieżka kontaktu i wyceny",
      sigma_metric: "koncepcja / zbudowane i wysłane / brak wdrożenia",

      // Contact
      contact_h1: "Kontakt",
      contact_p: "Opisz cel w kilku zdaniach albo zarezerwuj 15 minut. Wrócę z konkretnymi pytaniami, zakresem i następnym krokiem.",
      book_h2: "Umów call",
      book_p: "Najprościej: 15 minut, żeby ustalić cel, zakres i czy jestem dobrym wyborem do projektu.",
      book_or: "albo wyślij brief",
      contact_brief_h2: "Krótki brief",
      contact_quick_h2: "Szybki kontakt",
      contact_quick_p: "Nie potrzebujesz gotowego briefu. Wystarczą 2–3 zdania o celu, budżecie i terminie.",
      open_mailto: "Wyślij brief mailem",
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
      ph_desc: "co budujemy, dla kogo i jaki ma być następny krok?",
      copied: "Skopiowano.",
    
      privacy_kicker: "Legal",
      privacy_h1: "Polityka prywatności",
      privacy_sub: "Jak przetwarzam dane i jak działa kalendarz.",
      privacy_summary_kicker: "Privacy basics",
      legal_summary_h2: "Najważniejsze",
      privacy_summary_1: "Portfolio nie tworzy kont użytkowników.",
      privacy_summary_2: "Kontakt działa przez e-mail i opcjonalny kalendarz Cal.com.",
      privacy_summary_3: "Własne cookies nie są ustawiane przez tę stronę.",
      privacy_summary_link: "Kontakt w sprawie danych →",
      legal_kicker: "Legal",
      legal_h1: "Prawa autorskie",
      legal_sub: "Zastrzeżenia, licencje i prawa do treści.",
      legal_summary_kicker: "Legal basics",
      legal_summary_1: "Treści i układ portfolio są chronione prawem autorskim.",
      legal_summary_2: "Możesz przeglądać stronę informacyjnie.",
      legal_summary_3: "Komercyjne użycie elementów wymaga zgody.",
      legal_summary_link: "Zapytaj o licencję →",
},
    en: {
      // Titles / meta
      title_home: "Nikodem Kustusz Studio — Websites, panels and lead flows",
      title_work: "Nikodem Kustusz Studio — Work",
      title_services: "Nikodem Kustusz Studio — How I can help",
      title_about: "Nikodem Kustusz Studio — Collaboration",
      title_contact: "Nikodem Kustusz Studio — Contact",
      desc_home: "I design and ship websites, admin panels and contact flows. See the public UndergroundGym.pl case.",
      desc_work: "Work: live UndergroundGym.pl case, websites, admin panels and contact flows.",
      desc_services: "Services: websites, admin panels and marketing. Deliverables and process.",
      desc_about: "Collaboration: process, communication and stack.",
      desc_contact: "Contact: book a call or send a short brief.",

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
      footer_claim: "Websites, panels and landing pages with clear scope, testing and deployment.",
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
      home_h1: "I design websites and systems that help businesses collect better leads.",
      home_p: "I combine offer structure, UI, frontend and deployment. See the public UndergroundGym.pl website plus selected concepts and my projects.",
      hero_tag: "Audit • Build • Scale",
      proof_fast: "Clear scope",
      proof_secure: "Pre-launch checks",
      proof_sales: "Low-friction contact",
      proof_kicker: "Public case",
      proof_h2: "UndergroundGym.pl — live gym website",
      proof_p: "A public website for a local club: offer, pricing, reviews, trial-entry form and contact path for a gym in Zukowo.",
      proof_scope_label: "Scope",
      proof_scope_value: "UX, frontend, offer structure, form, SEO basics",
      proof_outcome_label: "Outcome",
      proof_outcome_value: "Clear path: offer → trial entry → contact",
      proof_visit: "Open live site",
      proof_case: "See case",
      home_svc_web_meta: "Business websites with offer, CTA and deployment.",
      home_svc_admin_meta: "Dashboards, roles and structured workflow.",
      home_svc_mkt_meta: "Landing + tracking + optimization plan.",
      home_goal_result_label: "Goal → result:",
      home_work_1_meta: "Live website • 24/7 gym • lead flow",
      home_work_1_build: "Offer, pricing, reviews, trial-entry form and contact UX.",
      home_work_1_result: "fast path from offer to contact for a local gym.",
      home_work_2_title: "Landing prototype",
      home_work_2_meta: "Lead-gen pattern • UI/UX • performance",
      home_work_2_build: "Offer structure, trust sections and campaign CTA.",
      home_work_2_result: "ready landing-page pattern for fast delivery.",
      home_work_3_title: "Contact brief flow",
      home_work_3_meta: "Brief flow • copy • UX details",
      home_work_3_build: "Brief flow that generates a ready-to-send message.",
      home_work_3_result: "less friction to contact, faster kickoff.",
      services_h2: "Services",
      work_h2: "Top case studies",
      process_h2: "Process",
      faq_h2: "FAQ",
      process_step1_t: "Call",
      process_step1_p: "Business goal, scope, priorities and risks.",
      process_step2_t: "Plan",
      process_step2_p: "Structure, copy direction and implementation plan.",
      process_step3_t: "Build",
      process_step3_p: "Design, implementation and short progress loops.",
      process_step4_t: "Launch",
      process_step4_p: "Deployment, checks and post-launch fixes.",
      view_case: "See details →",
      faq1_q: "How long does it take?",
      faq1_a: "Depends on scope: landing 1–2 weeks, multi-page 2–4 weeks, admin panel — agreed on call.",
      faq2_q: "How do you price projects?",
      faq2_a: "Fixed scope pricing + optional support/retainer.",
      faq3_q: "Do you help with ads?",
      faq3_a: "Yes — campaign landing pages, tracking, testing and CRO (platform-agnostic).",

      // Work
      work_page_h1: "Work",
      work_page_p: "Selected work shown from a business perspective: problem, scope, my role and project status.",
      work_feature_kicker: "Public case",
      work_feature_h2: "UndergroundGym.pl",
      work_feature_p: "Website for a local 24/7 gym: offer, pricing, reviews, trial entry, contact details and consent-gated external embeds.",
      work_feature_1: "Offer and CTAs leading to trial entry.",
      work_feature_2: "Responsive desktop/mobile layout with strong club identity.",
      work_feature_3: "Contact, map and external content gated behind cookie consent.",
      filter_all: "All",
      filter_web: "Websites",
      filter_admin: "Admin panels",
      filter_mkt: "Landing + tracking",
      work_role_label: "Role:",
      kpi_label: "Proof:",
      work_1_title: "UndergroundGym.pl — club website",
      work_1_meta: "Fitness / live site",
      work_1_role: "UX + frontend + delivery",
      work_1_desc: "Public 24/7 gym website with offer, pricing, reviews, trial-entry form and contact path.",
      work_1_metric: "live site",
      work_1_metric_tail: " / real client",
      work_2_title: "Sales landing page — concept",
      work_2_meta: "Lead gen / concept",
      work_2_role: "Offer strategy + UI/UX + tracking",
      work_2_desc: "Campaign page concept with a clear CTA, trust structure and measurement plan.",
      work_2_metric: "concept",
      work_2_metric_tail: " / not a live site",
      work_3_title: "Operations dashboard — prototype",
      work_3_meta: "Ops / admin pattern",
      work_3_role: "Dashboard + roles/permissions",
      work_3_desc: "Process improvement: roles, views, reports and integrations.",
      work_3_metric: "prototype",
      work_3_metric_tail: " / roles and reports",
      work_4_title: "Company website — multi-page prototype",
      work_4_meta: "Brand / layout system",
      work_4_role: "Design system + delivery",
      work_4_desc: "Premium layout, performance, SEO and consistent components.",
      work_4_metric: "prototype",
      work_4_metric_tail: "",

      // Services
      services_page_h1: "How I can help",
      services_page_p: "Clear scope, quote after a conversation and delivery without split responsibility.",
      pack_h2: "Collaboration model",
      pack_p: "Start with an audit, move into delivery, or improve an existing project in stages.",
      pack1_t: "Audit",
      pack1_p: "Diagnose goal, offer, UX and priorities before spending build budget.",
      pack2_t: "Build",
      pack2_p: "Design + code + deployment with short iterations and testing.",
      pack3_t: "Scale",
      pack3_p: "Post-launch fixes, tracking, CRO and feature development.",
      deliverables_h3: "Deliverables",
      ideal_h3: "Ideal when…",
      price_from: "From",
      price_quote_after_call: "Quote after a call",
      price_depends_scope: "(depends on scope)",

      svc_web_h2: "Websites",
      svc_web_p: "Landing page or business website that explains the offer, leads to contact and works well on mobile.",
      svc_web_d1: "Landing / multi-page",
      svc_web_d2: "CMS (optional)",
      svc_web_d3: "SEO + performance",
      svc_web_deliv_1: "Landing / multi-page",
      svc_web_deliv_2: "Consistent sections and components",
      svc_web_deliv_3: "SEO basics + performance checklist",
      svc_web_deliv_4: "CMS (optional)",
      svc_web_deliv_5: "Deploy (hosting + domain)",
      svc_web_ideal_1: "Customers need to understand your offer quickly",
      svc_web_ideal_2: "Your current website does not build enough trust",
      svc_web_ideal_3: "You need delivery without a long agency process",

      svc_admin_h2: "Admin panels",
      svc_admin_p: "Panels and dashboards that organize data, roles, statuses and repeatable team actions.",
      svc_admin_d1: "Dashboard + roles/permissions",
      svc_admin_d2: "Analytics & reporting",
      svc_admin_d3: "Integrations / automations",
      svc_admin_deliv_1: "Dashboard + data views",
      svc_admin_deliv_2: "Roles/permissions (RBAC)",
      svc_admin_deliv_3: "Validation, roles and security basics",
      svc_admin_deliv_4: "Reporting / analytics",
      svc_admin_deliv_5: "Integrations (e.g., email, API)",
      svc_admin_ideal_1: "Data is scattered across emails or spreadsheets",
      svc_admin_ideal_2: "Your team needs clear statuses and roles",
      svc_admin_ideal_3: "You want to reduce manual reporting",

      svc_mkt_h2: "Landing + tracking",
      svc_mkt_p: "Campaign page with a clear CTA, basic tracking and a testing plan instead of random changes.",
      svc_mkt_d1: "Campaign landing pages",
      svc_mkt_d2: "Tracking + events",
      svc_mkt_d3: "CRO / testing",
      svc_mkt_deliv_1: "Campaign landing page",
      svc_mkt_deliv_2: "Tracking + events",
      svc_mkt_deliv_3: "CRO / testing",
      svc_mkt_deliv_4: "Copy + offer",
      svc_mkt_deliv_5: "Simple report / dashboard",
      svc_mkt_ideal_1: "You pay for traffic and need a better landing page",
      svc_mkt_ideal_2: "You need to know what visitors do after landing",
      svc_mkt_ideal_3: "You want to test offer, CTA and section order",

      // About
      about_h1: "Independent studio. Web, interfaces, systems.",
      about_sub: "I'm Nikodem Kustusz — an independent developer and builder. I work at the point where visual direction, frontend, and business clarity meet and start behaving like one system.",
      about_identity_role: "Independent studio — web & systems",
      about_p1: "I build premium web experiences, product interfaces, and systems for local businesses — from positioning the offer, through UI and frontend, to deployment.",
      about_p2: "I'm not pretending to be a big agency. This is a focused one-person studio: a single project owner, clear decisions, and visible output instead of corporate noise.",
      about_p3: "I treat every project as a system: positioning, interface, conversion path, and polish — so small brands feel sharper, clearer, and more premium.",
      why_h2: "How I work",
      why_1: "Product-level UI — polish at product quality, not template level.",
      why_2: "Local business positioning — an offer that leads to contact.",
      why_3: "Fast implementation — short iterations and real output.",
      why_4: "Bilingual PL/EN structure — ready from day one.",
      why_5: "Systems thinking — a coherent system, not random pages.",
      why_6: "Proof of work — I show process and results, not promises.",
      about_stack_h3: "Stack & tools",
      stack_php: "PHP 8",
      stack_mysql: "MySQL",
      stack_docker: "Docker",
      stack_uiux: "UI/UX",
      stack_security: "Security",
      stack_react: "React / RN",
      stack_ts: "TypeScript",
      stack_automation: "Automation",

      // Case-study shared labels + new project cards (Work)
      cs_role_label: "Role:",
      cs_status_label: "Status:",
      cs_ask_scope: "Ask about scope",
      aurora_status: "Internal system",
      aurora_cat_1: "Local AI",
      aurora_cat_2: "Memory graph",
      aurora_role: "System architecture, local-first AI, UX, product logic",
      aurora_meta: "Internal system / active development",
      aurora_desc: "A local-first operating mirror that turns scattered personal context into memory, reflection, proof of work, and next-action signals. It is not a notes app.",
      aurora_li1: "Local Sense Engine + Ollama integration (embeddinggemma, gemma3:1b)",
      aurora_li2: "Mirror and Advisor: signal classification, pattern detection, next honest move",
      aurora_li3: "Deterministic guardrails and privacy-aware, local-first memory",
      aurora_metric: "internal system / prototype in development — not a commercial SaaS",
      sigma_status: "Concept",
      sigma_cat_1: "Business website",
      sigma_cat_2: "Construction",
      sigma_role: "Web design, UX, offer structure, proposal",
      sigma_meta: "Construction company / concept",
      sigma_desc: "A website concept for a construction company: structured services, a project showcase, trust signals and a simple contact path — built and sent, no deployment.",
      sigma_li1: "Service structure: residential, commercial, public-sector construction",
      sigma_li2: "Portfolio section and local credibility signals",
      sigma_li3: "Simple contact and quote path",
      sigma_metric: "concept / built and sent / not deployed",

      // Contact
      contact_h1: "Contact",
      contact_p: "Describe the goal in a few sentences or book 15 minutes. I will return with concrete questions, scope and the next step.",
      book_h2: "Book a call",
      book_p: "Best start: 15 minutes to align on goal, scope and whether I am the right fit.",
      book_or: "or send a brief",
      contact_brief_h2: "Short brief",
      contact_quick_h2: "Quick contact",
      contact_quick_p: "You do not need a finished brief. 2–3 sentences about goal, budget and timeline are enough.",
      open_mailto: "Send brief by email",
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
      ph_desc: "What are we building, for whom and what should the next step be?",
      copied: "Copied.",
    
      privacy_kicker: "Legal",
      privacy_h1: "Privacy Policy",
      privacy_sub: "How data is processed and how the calendar works.",
      privacy_summary_kicker: "Privacy basics",
      legal_summary_h2: "Key points",
      privacy_summary_1: "The portfolio does not create user accounts.",
      privacy_summary_2: "Contact works via email and an optional Cal.com calendar.",
      privacy_summary_3: "This website does not set first-party cookies.",
      privacy_summary_link: "Contact about data ->",
      legal_kicker: "Legal",
      legal_h1: "Copyright & Legal",
      legal_sub: "Disclaimers, licensing and rights.",
      legal_summary_kicker: "Legal basics",
      legal_summary_1: "The portfolio content and layout are copyright-protected.",
      legal_summary_2: "You may browse the website for informational purposes.",
      legal_summary_3: "Commercial reuse requires permission.",
      legal_summary_link: "Ask about licensing ->",
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
    updateNavState();
    updateLangButtons(v);
    syncMobileLayout();
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

  function getPageKey(){
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (page === "index.html") return "home";
    if (page === "work.html") return "work";
    if (page === "services.html") return "services";
    if (page === "about.html") return "about";
    if (page === "contact.html") return "contact";
    if (page === "privacy.html") return "privacy";
    if (page === "legal.html") return "legal";
    return "";
  }

  function updateNavState(){
    const pageKey = getPageKey();
    $$("[data-nav], [data-nav-mobile]").forEach((link) => {
      const key = link.getAttribute("data-nav") || link.getAttribute("data-nav-mobile") || "";
      const active = key === pageKey;

      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");

      if (link.hasAttribute("data-nav-mobile")) {
        if (active) link.setAttribute("data-current", "true");
        else link.removeAttribute("data-current");
      }
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
        title_home: "Nikodem Kustusz Studio — Strony, panele i lead flow",
        title_work: "Realizacje — Nikodem Kustusz Studio",
        title_services: "Jak mogę pomóc — Nikodem Kustusz Studio",
        title_about: "O współpracy — Nikodem Kustusz Studio",
        title_contact: "Kontakt — Umów call",
        desc_home: "Projektuję strony, panele i lead flow z jasnym zakresem, testami i wdrożeniem.",
        desc_work: "Wybrane realizacje: rola, stack i metryka.",
        desc_services: "Strony, panele administracyjne i marketing: deliverables i proces.",
        desc_about: "O mnie: podejście, standardy jakości i współpraca.",
        desc_contact: "Kontakt: umów call, wyślij brief, skopiuj email.",
      },
      en: {
        title_home: "Nikodem Kustusz Studio — Websites, panels and lead flows",
        title_work: "Work — Nikodem Kustusz Studio",
        title_services: "How I can help — Nikodem Kustusz Studio",
        title_about: "Collaboration — Nikodem Kustusz Studio",
        title_contact: "Contact — Book a call",
        desc_home: "Websites, panels and lead flows with clear scope, testing and deployment.",
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
    const toggle = $("#navToggle");
    const menu = $("#mobile-menu");
    const backdrop = $("#navBackdrop");
    if (!toggle || !menu || !backdrop) return;

    if (backdrop.parentElement !== document.body || menu.parentElement !== document.body) {
      document.body.append(backdrop, menu);
    }

    menu.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");

    const open = () => {
      menu.classList.add("is-open");
      backdrop.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Zamknij menu");
      menu.setAttribute("aria-hidden", "false");
      backdrop.setAttribute("aria-hidden", "false");
      document.body.classList.add("nav-open", "is-open");
    };

    const close = () => {
      menu.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Otwórz menu");
      menu.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.classList.remove("nav-open", "is-open");
    };

    toggle.addEventListener("click", () => {
      menu.classList.contains("is-open") ? close() : open();
    });

    menu.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) close();
    });

    backdrop.addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) close();
    });

    const mq = window.matchMedia("(min-width: 921px)");
    const closeOnDesktop = () => {
      if (mq.matches) close();
    };

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", closeOnDesktop);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(closeOnDesktop);
    }
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
        ? `Project brief — ${v.name || "[Company]"}`
        : `Brief projektu — ${v.name || "[Nazwa firmy]"}`;

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

  // Cal embed on contact (loaded only after user click)
  function setupCalEmbed(){
  const host = $("#calInlineEmbed");
  if (!host) return;

  const btn = $("#loadCalendarBtn");
  const notice = $("#calendarNotice");
  const open = $("#openCalendarLink");

  const calLink = (host.getAttribute("data-cal-link") || "quero/15min").replace(/^\//, "");
  const namespace = (host.getAttribute("data-cal-namespace") || "queroBooking").trim() || "queroBooking";
  const openHref = `https://app.cal.eu/${calLink}`;

  if (open) open.setAttribute("href", openHref);

  // Do not load anything until the user clicks (consent gate)
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (window.__cal_loaded) return;
    window.__cal_loaded = true;

    host.hidden = false;
    if (notice) notice.hidden = true;

    btn.setAttribute("disabled", "disabled");
    btn.textContent = (I18N[getLang()]?.calendar_loaded) || "Kalendarz załadowany";

    // Official Cal inline embed snippet, wrapped in click-gate
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const ns = ar[1];
          api.q = api.q || [];
          if (typeof ns === "string") {
            cal.ns[ns] = cal.ns[ns] || api;
            p(cal.ns[ns], ar);
            p(cal, ["initNamespace", ns]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    // Configure + mount
    window.Cal("init", namespace, { origin: "https://app.cal.eu" });

    // Some builds expose namespaces as Cal.ns.<name>, others as Cal.ns[name]
    const nsApi = (window.Cal?.ns && (window.Cal.ns[namespace] || window.Cal.ns?.[namespace])) || null;
    if (nsApi) {
      nsApi("inline", {
        elementOrSelector: "#calInlineEmbed",
        config: { layout: "month_view" },
        calLink,
      });
      nsApi("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }
  }, { passive: true });
}

  function setupMobileDock(){
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (page === "privacy.html" || page === "legal.html" || page === "work.html") return;

    const dock = document.createElement("div");
    dock.className = "mobile-dock";
    dock.setAttribute("aria-label", "Quick actions");

    const primary = document.createElement("a");
    primary.className = "btn primary";
    primary.setAttribute("data-book", "");
    primary.setAttribute("data-i18n", "book_call");
    primary.href = CONFIG.bookUrl;

    const secondary = document.createElement("a");
    secondary.className = "btn";

    if (page === "contact.html") {
      secondary.setAttribute("data-email-link", "");
      secondary.setAttribute("data-i18n", "email_short");
      secondary.href = `mailto:${CONFIG.email}`;
    } else {
      secondary.setAttribute("data-i18n", "nav_contact");
      secondary.href = "./contact.html";
    }

    dock.append(primary, secondary);
    document.body.appendChild(dock);
    document.body.classList.add("has-mobile-dock");
  }

  function isDockDuplicateAction(el, page){
    if (!(el instanceof HTMLElement)) return false;
    if (el.closest(".mobile-dock") || el.closest(".mobile-menu")) return false;
    if (el.hasAttribute("data-book")) return true;
    if (page === "contact.html" && el.hasAttribute("data-email-link")) return true;

    const href = el.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) return false;

    try {
      const url = new URL(href, location.href);
      const file = (url.pathname.split("/").pop() || "").toLowerCase();
      return page !== "contact.html" && file === "contact.html";
    } catch {
      return false;
    }
  }

  function markMobileDockDuplicates(){
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const groups = $$(".hero-actions, .quick-actions, .inline-actions, .actions, .section-head");

    $$(".mobile-dock-duplicate").forEach((item) => item.classList.remove("mobile-dock-duplicate"));
    $$(".mobile-only-duplicates").forEach((item) => item.classList.remove("mobile-only-duplicates"));
    $$(".mobile-dock-redundant").forEach((item) => item.classList.remove("mobile-dock-redundant"));

    groups.forEach(group => {
      const items = Array.from(group.children).filter(child => child.matches("a, button"));
      let hasVisibleItem = false;

      items.forEach(item => {
        const duplicate = isDockDuplicateAction(item, page);
        item.classList.toggle("mobile-dock-duplicate", duplicate);
        if (!duplicate) hasVisibleItem = true;
      });

      group.classList.toggle("mobile-only-duplicates", items.length > 0 && !hasVisibleItem);

      const redundantCard = group.closest(".contact-sidecard");
      if (redundantCard) {
        redundantCard.classList.toggle("mobile-dock-redundant", !hasVisibleItem);
      }
    });

    $$("main [data-book]").forEach((item) => {
      if (item.closest(".hero-actions, .quick-actions, .inline-actions, .actions, .section-head")) return;
      if (item.closest(".mobile-dock, .mobile-menu")) return;

      item.classList.add("mobile-dock-duplicate");

      const wrapper = item.parentElement;
      if (wrapper && wrapper.children.length === 1) {
        wrapper.classList.add("mobile-dock-redundant");
      }
    });
  }

  function syncMobileLayout(){
    if ($(".mobile-dock")) markMobileDockDuplicates();
  }

  function setupAutoCarousels(){
    const mq = window.matchMedia("(max-width: 760px)");

    $$("[data-carousel]").forEach((track, trackIndex) => {
      const slides = Array.from(track.children).filter(node => node instanceof HTMLElement);
      if (slides.length < 2) return;

      const dots = document.createElement("div");
      dots.className = "carousel-dots";
      dots.setAttribute("aria-label", `Carousel ${trackIndex + 1}`);

      let current = 0;
      let intervalId = null;
      let resumeTimeout = null;
      let syncTimeout = null;
      let programmaticScroll = false;
      let isVisible = false;

      const dotButtons = slides.map((_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `Go to slide ${index + 1}`);
        button.addEventListener("click", () => {
          pauseAutoplay(7000);
          goTo(index);
        });
        dots.appendChild(button);
        return button;
      });

      track.after(dots);

      function updateDots(){
        dotButtons.forEach((button, index) => {
          button.classList.toggle("active", index === current);
          button.setAttribute("aria-current", index === current ? "true" : "false");
        });
      }

      function nearestIndex(){
        const leftEdge = track.getBoundingClientRect().left;
        let nearest = current;
        let bestDelta = Infinity;

        slides.forEach((slide, index) => {
          const delta = Math.abs(slide.getBoundingClientRect().left - leftEdge);
          if (delta < bestDelta) {
            bestDelta = delta;
            nearest = index;
          }
        });

        return nearest;
      }

      function goTo(index, behavior = "smooth"){
        current = (index + slides.length) % slides.length;
        programmaticScroll = true;
        slides[current].scrollIntoView({ behavior, inline: "start", block: "nearest" });
        updateDots();
        window.setTimeout(() => {
          programmaticScroll = false;
        }, 450);
      }

      function stopAutoplay(){
        if (intervalId) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
      }

      function canAutoplay(){
        return mq.matches && !prefersReduced && isVisible;
      }

      function startAutoplay(){
        if (!canAutoplay() || intervalId) return;
        const interval = parseInt(track.getAttribute("data-carousel-interval") || "4000", 10);
        intervalId = window.setInterval(() => {
          if (document.hidden) return;
          goTo(current + 1);
        }, interval);
      }

      function pauseAutoplay(duration = 6000){
        stopAutoplay();
        if (resumeTimeout) window.clearTimeout(resumeTimeout);
        resumeTimeout = window.setTimeout(() => {
          startAutoplay();
        }, duration);
      }

      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        isVisible = Boolean(entry?.isIntersecting && entry.intersectionRatio > 0.55);
        if (isVisible) startAutoplay();
        else stopAutoplay();
      }, { threshold: [0, 0.55, 0.9] });

      observer.observe(track);
      updateDots();

      track.addEventListener("scroll", () => {
        if (syncTimeout) window.clearTimeout(syncTimeout);
        syncTimeout = window.setTimeout(() => {
          current = nearestIndex();
          updateDots();
          if (!programmaticScroll) pauseAutoplay(7000);
        }, 120);
      });

      track.addEventListener("pointerdown", () => pauseAutoplay(7000));
      track.addEventListener("touchstart", () => pauseAutoplay(7000), { passive: true });
      track.addEventListener("focusin", () => pauseAutoplay(7000));

      const onMqChange = () => {
        dots.hidden = !mq.matches;
        if (mq.matches) startAutoplay();
        else stopAutoplay();
      };

      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", onMqChange);
      } else if (typeof mq.addListener === "function") {
        mq.addListener(onMqChange);
      }

      onMqChange();
    });
  }


  // Init
  setupMobileDock();
  const lang = getLang();
  setLang(lang); // also applies + updates links

  $("#langPL")?.addEventListener("click", () => setLang("pl"));
  $("#langEN")?.addEventListener("click", () => setLang("en"));

  // Update all data-book links
  $$("[data-book]").forEach(a => a.setAttribute("href", CONFIG.bookUrl));
  $$("[data-email-link]").forEach(a => a.setAttribute("href", `mailto:${CONFIG.email}`));

  // Populate copyright year (footer shows blank otherwise)
  $$("[data-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });

  setupDrawer();
  setupWorkFilters();
  setupContact();
  setupCalEmbed();
  setupAutoCarousels();
  runReveal();
})();
