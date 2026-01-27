
// Master JS for State: PE - Persona: Northeast Cultural
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const pe_index_section_immigrate_to_pernambuco = document.getElementById('pe-index-section-immigrate-to-pernambuco');
  if (pe_index_section_immigrate_to_pernambuco) {
    gsap.fromTo('#pe-index-section-immigrate-to-pernambuco', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_form_immigrate_to_pernambuco = document.getElementById('pe-index-form-immigrate-to-pernambuco');
  if (pe_index_form_immigrate_to_pernambuco) {
    gsap.from('#pe-index-form-immigrate-to-pernambuco input, #pe-index-form-immigrate-to-pernambuco textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_state_vibe = document.getElementById('pe-index-section-state-vibe');
  if (pe_index_section_state_vibe) {
    gsap.fromTo('#pe-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_quick_facts_snapshot = document.getElementById('pe-index-section-quick-facts-snapshot');
  if (pe_index_section_quick_facts_snapshot) {
    gsap.fromTo('#pe-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_pernambuco_map = document.getElementById('pe-index-section-pernambuco-map');
  if (pe_index_section_pernambuco_map) {
    gsap.fromTo('#pe-index-section-pernambuco-map', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_cost_of_living_pernambuco = document.getElementById('pe-index-section-cost-of-living-pernambuco');
  if (pe_index_section_cost_of_living_pernambuco) {
    gsap.fromTo('#pe-index-section-cost-of-living-pernambuco', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_government_context = document.getElementById('pe-index-section-government-context');
  if (pe_index_section_government_context) {
    gsap.fromTo('#pe-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_hero_immigration_notes = document.getElementById('pe-index-hero-immigration-notes');
  if (pe_index_hero_immigration_notes) {
    gsap.fromTo('#pe-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_common_applicant_profiles = document.getElementById('pe-index-list-common-applicant-profiles');
  if (pe_index_list_common_applicant_profiles) {
    gsap.from('#pe-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_economic_drivers = document.getElementById('pe-index-list-economic-drivers');
  if (pe_index_list_economic_drivers) {
    gsap.from('#pe-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_demographics = document.getElementById('pe-index-section-demographics');
  if (pe_index_section_demographics) {
    gsap.fromTo('#pe-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_regional_challenges = document.getElementById('pe-index-section-regional-challenges');
  if (pe_index_section_regional_challenges) {
    gsap.fromTo('#pe-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_regional_opportunities = document.getElementById('pe-index-section-regional-opportunities');
  if (pe_index_section_regional_opportunities) {
    gsap.fromTo('#pe-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_culture_daily_life = document.getElementById('pe-index-section-culture-daily-life');
  if (pe_index_section_culture_daily_life) {
    gsap.fromTo('#pe-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_local_language_expressions = document.getElementById('pe-index-list-local-language-expressions');
  if (pe_index_list_local_language_expressions) {
    gsap.from('#pe-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_food_cuisine = document.getElementById('pe-index-list-food-cuisine');
  if (pe_index_list_food_cuisine) {
    gsap.from('#pe-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_festivals_traditions = document.getElementById('pe-index-list-festivals-traditions');
  if (pe_index_list_festivals_traditions) {
    gsap.from('#pe-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_music_artistic_expression = document.getElementById('pe-index-list-music-artistic-expression');
  if (pe_index_list_music_artistic_expression) {
    gsap.from('#pe-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_sports_recreation = document.getElementById('pe-index-list-sports-recreation');
  if (pe_index_list_sports_recreation) {
    gsap.from('#pe-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_landmarks_historical_sites = document.getElementById('pe-index-list-landmarks-historical-sites');
  if (pe_index_list_landmarks_historical_sites) {
    gsap.from('#pe-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_natural_features = document.getElementById('pe-index-list-natural-features');
  if (pe_index_list_natural_features) {
    gsap.from('#pe-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_parks_protected_areas = document.getElementById('pe-index-list-parks-protected-areas');
  if (pe_index_list_parks_protected_areas) {
    gsap.from('#pe-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_museums_cultural_institutions = document.getElementById('pe-index-list-museums-cultural-institutions');
  if (pe_index_list_museums_cultural_institutions) {
    gsap.from('#pe-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_image_gallery = document.getElementById('pe-index-section-image-gallery');
  if (pe_index_section_image_gallery) {
    gsap.fromTo('#pe-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_useful_government_links = document.getElementById('pe-index-section-useful-government-links');
  if (pe_index_section_useful_government_links) {
    gsap.fromTo('#pe-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_hero_federal_police_immigration_links = document.getElementById('pe-index-hero-federal-police-immigration-links');
  if (pe_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#pe-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_external_references = document.getElementById('pe-index-section-external-references');
  if (pe_index_section_external_references) {
    gsap.fromTo('#pe-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_immigration_services_overview = document.getElementById('pe-index-list-immigration-services-overview');
  if (pe_index_list_immigration_services_overview) {
    gsap.from('#pe-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_why_immigrate_here = document.getElementById('pe-index-section-why-immigrate-here');
  if (pe_index_section_why_immigrate_here) {
    gsap.fromTo('#pe-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section_legal_guidance_disclaimers = document.getElementById('pe-index-section-legal-guidance-disclaimers');
  if (pe_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#pe-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_travel_services = document.getElementById('pe-index-list-travel-services');
  if (pe_index_list_travel_services) {
    gsap.from('#pe-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_list_how_the_process_works = document.getElementById('pe-index-list-how-the-process-works');
  if (pe_index_list_how_the_process_works) {
    gsap.from('#pe-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_index_section__frequently_asked_questions_about_living_in_pernambuco_ = document.getElementById('pe-index-section--frequently-asked-questions-about-living-in-pernambuco-');
  if (pe_index_section__frequently_asked_questions_about_living_in_pernambuco_) {
    gsap.fromTo('#pe-index-section--frequently-asked-questions-about-living-in-pernambuco-', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_contactcta_section_get_started_in_pernambuco = document.getElementById('pe-contactcta-section-get-started-in-pernambuco');
  if (pe_contactcta_section_get_started_in_pernambuco) {
    gsap.fromTo('#pe-contactcta-section-get-started-in-pernambuco', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('pe-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (pe_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#pe-renouncingcitizenship-form-renounce-brazilian-citizenship input, #pe-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_quick_facts = document.getElementById('pe-renouncingcitizenship-list-quick-facts');
  if (pe_renouncingcitizenship_list_quick_facts) {
    gsap.from('#pe-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('pe-renouncingcitizenship-list-common-challenges-applicants-face');
  if (pe_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pe-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('pe-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (pe_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pe-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_renunciation_overview = document.getElementById('pe-renouncingcitizenship-section-renunciation-overview');
  if (pe_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#pe-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_form_who_is_this_for = document.getElementById('pe-renouncingcitizenship-form-who-is-this-for');
  if (pe_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#pe-renouncingcitizenship-form-who-is-this-for input, #pe-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_required_documents = document.getElementById('pe-renouncingcitizenship-list-required-documents');
  if (pe_renouncingcitizenship_list_required_documents) {
    gsap.from('#pe-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_process = document.getElementById('pe-renouncingcitizenship-list-process');
  if (pe_renouncingcitizenship_list_process) {
    gsap.from('#pe-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_timelines_deadlines = document.getElementById('pe-renouncingcitizenship-section-timelines-deadlines');
  if (pe_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pe-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_fees_costs = document.getElementById('pe-renouncingcitizenship-section-fees-costs');
  if (pe_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#pe-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('pe-renouncingcitizenship-list-risks-common-mistakes');
  if (pe_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#pe-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('pe-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (pe_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_pernambuco_specific_context = document.getElementById('pe-renouncingcitizenship-section-pernambuco-specific-context');
  if (pe_renouncingcitizenship_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-renouncingcitizenship-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_what_our_clients_say = document.getElementById('pe-renouncingcitizenship-section-what-our-clients-say');
  if (pe_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pe-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('pe-renouncingcitizenship-section-frequently-asked-questions');
  if (pe_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pe-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_international_support = document.getElementById('pe-renouncingcitizenship-section-international-support');
  if (pe_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#pe-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_our_credentials = document.getElementById('pe-renouncingcitizenship-list-our-credentials');
  if (pe_renouncingcitizenship_list_our_credentials) {
    gsap.from('#pe-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_list_related_services = document.getElementById('pe-renouncingcitizenship-list-related-services');
  if (pe_renouncingcitizenship_list_related_services) {
    gsap.from('#pe-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('pe-renouncingcitizenship-section-youre-in-good-hands');
  if (pe_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pe-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_renouncingcitizenship_section_21 = document.getElementById('pe-renouncingcitizenship-section-21');
  if (pe_renouncingcitizenship_section_21) {
    gsap.fromTo('#pe-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('pe-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (pe_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#pe-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #pe-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_quick_facts = document.getElementById('pe-provisional-list-quick-facts');
  if (pe_provisional_list_quick_facts) {
    gsap.from('#pe-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_common_challenges_applicants_face = document.getElementById('pe-provisional-list-common-challenges-applicants-face');
  if (pe_provisional_list_common_challenges_applicants_face) {
    gsap.from('#pe-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_how_we_solve_these_challenges = document.getElementById('pe-provisional-list-how-we-solve-these-challenges');
  if (pe_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#pe-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_naturalisation_overview = document.getElementById('pe-provisional-section-naturalisation-overview');
  if (pe_provisional_section_naturalisation_overview) {
    gsap.fromTo('#pe-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_form_who_is_this_naturalisation_for = document.getElementById('pe-provisional-form-who-is-this-naturalisation-for');
  if (pe_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#pe-provisional-form-who-is-this-naturalisation-for input, #pe-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_required_documents = document.getElementById('pe-provisional-list-required-documents');
  if (pe_provisional_list_required_documents) {
    gsap.from('#pe-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_application_process = document.getElementById('pe-provisional-list-application-process');
  if (pe_provisional_list_application_process) {
    gsap.from('#pe-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_timelines_deadlines = document.getElementById('pe-provisional-section-timelines-deadlines');
  if (pe_provisional_section_timelines_deadlines) {
    gsap.fromTo('#pe-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_fees_costs = document.getElementById('pe-provisional-section-fees-costs');
  if (pe_provisional_section_fees_costs) {
    gsap.fromTo('#pe-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_risks_common_mistakes = document.getElementById('pe-provisional-list-risks-common-mistakes');
  if (pe_provisional_list_risks_common_mistakes) {
    gsap.from('#pe-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_diy_vs_professional_assistance = document.getElementById('pe-provisional-section-diy-vs-professional-assistance');
  if (pe_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_pernambuco_specific_context = document.getElementById('pe-provisional-section-pernambuco-specific-context');
  if (pe_provisional_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-provisional-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_what_our_clients_say = document.getElementById('pe-provisional-section-what-our-clients-say');
  if (pe_provisional_section_what_our_clients_say) {
    gsap.fromTo('#pe-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_frequently_asked_questions = document.getElementById('pe-provisional-section-frequently-asked-questions');
  if (pe_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#pe-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_international_support = document.getElementById('pe-provisional-section-international-support');
  if (pe_provisional_section_international_support) {
    gsap.fromTo('#pe-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_our_credentials = document.getElementById('pe-provisional-list-our-credentials');
  if (pe_provisional_list_our_credentials) {
    gsap.from('#pe-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_list_related_services = document.getElementById('pe-provisional-list-related-services');
  if (pe_provisional_list_related_services) {
    gsap.from('#pe-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_youre_in_good_hands = document.getElementById('pe-provisional-section-youre-in-good-hands');
  if (pe_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#pe-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_provisional_section_21 = document.getElementById('pe-provisional-section-21');
  if (pe_provisional_section_21) {
    gsap.fromTo('#pe-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('pe-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (pe_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#pe-special-form-special-naturalisation-in-brazil-for-particular-cases input, #pe-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_quick_facts = document.getElementById('pe-special-list-quick-facts');
  if (pe_special_list_quick_facts) {
    gsap.from('#pe-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_common_challenges_applicants_face = document.getElementById('pe-special-list-common-challenges-applicants-face');
  if (pe_special_list_common_challenges_applicants_face) {
    gsap.from('#pe-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_how_we_solve_these_challenges = document.getElementById('pe-special-list-how-we-solve-these-challenges');
  if (pe_special_list_how_we_solve_these_challenges) {
    gsap.from('#pe-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_naturalisation_overview = document.getElementById('pe-special-section-naturalisation-overview');
  if (pe_special_section_naturalisation_overview) {
    gsap.fromTo('#pe-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_form_who_is_this_naturalisation_for = document.getElementById('pe-special-form-who-is-this-naturalisation-for');
  if (pe_special_form_who_is_this_naturalisation_for) {
    gsap.from('#pe-special-form-who-is-this-naturalisation-for input, #pe-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_required_documents = document.getElementById('pe-special-list-required-documents');
  if (pe_special_list_required_documents) {
    gsap.from('#pe-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_application_process = document.getElementById('pe-special-list-application-process');
  if (pe_special_list_application_process) {
    gsap.from('#pe-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_timelines_deadlines = document.getElementById('pe-special-section-timelines-deadlines');
  if (pe_special_section_timelines_deadlines) {
    gsap.fromTo('#pe-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_fees_costs = document.getElementById('pe-special-section-fees-costs');
  if (pe_special_section_fees_costs) {
    gsap.fromTo('#pe-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_risks_common_mistakes = document.getElementById('pe-special-list-risks-common-mistakes');
  if (pe_special_list_risks_common_mistakes) {
    gsap.from('#pe-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_diy_vs_professional_assistance = document.getElementById('pe-special-section-diy-vs-professional-assistance');
  if (pe_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_pernambuco_specific_context = document.getElementById('pe-special-section-pernambuco-specific-context');
  if (pe_special_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-special-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_what_our_clients_say = document.getElementById('pe-special-section-what-our-clients-say');
  if (pe_special_section_what_our_clients_say) {
    gsap.fromTo('#pe-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_frequently_asked_questions = document.getElementById('pe-special-section-frequently-asked-questions');
  if (pe_special_section_frequently_asked_questions) {
    gsap.fromTo('#pe-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_international_support = document.getElementById('pe-special-section-international-support');
  if (pe_special_section_international_support) {
    gsap.fromTo('#pe-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_our_credentials = document.getElementById('pe-special-list-our-credentials');
  if (pe_special_list_our_credentials) {
    gsap.from('#pe-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_list_related_services = document.getElementById('pe-special-list-related-services');
  if (pe_special_list_related_services) {
    gsap.from('#pe-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_youre_in_good_hands = document.getElementById('pe-special-section-youre-in-good-hands');
  if (pe_special_section_youre_in_good_hands) {
    gsap.fromTo('#pe-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_special_section_21 = document.getElementById('pe-special-section-21');
  if (pe_special_section_21) {
    gsap.fromTo('#pe-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('pe-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (pe_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#pe-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #pe-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_quick_facts = document.getElementById('pe-ordinary-list-quick-facts');
  if (pe_ordinary_list_quick_facts) {
    gsap.from('#pe-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_common_challenges_applicants_face = document.getElementById('pe-ordinary-list-common-challenges-applicants-face');
  if (pe_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#pe-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_how_we_solve_these_challenges = document.getElementById('pe-ordinary-list-how-we-solve-these-challenges');
  if (pe_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pe-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_naturalisation_overview = document.getElementById('pe-ordinary-section-naturalisation-overview');
  if (pe_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#pe-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_form_who_is_this_naturalisation_for = document.getElementById('pe-ordinary-form-who-is-this-naturalisation-for');
  if (pe_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pe-ordinary-form-who-is-this-naturalisation-for input, #pe-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_required_documents = document.getElementById('pe-ordinary-list-required-documents');
  if (pe_ordinary_list_required_documents) {
    gsap.from('#pe-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_application_process = document.getElementById('pe-ordinary-list-application-process');
  if (pe_ordinary_list_application_process) {
    gsap.from('#pe-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_timelines_deadlines = document.getElementById('pe-ordinary-section-timelines-deadlines');
  if (pe_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#pe-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_fees_costs = document.getElementById('pe-ordinary-section-fees-costs');
  if (pe_ordinary_section_fees_costs) {
    gsap.fromTo('#pe-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_risks_common_mistakes = document.getElementById('pe-ordinary-list-risks-common-mistakes');
  if (pe_ordinary_list_risks_common_mistakes) {
    gsap.from('#pe-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_diy_vs_professional_assistance = document.getElementById('pe-ordinary-section-diy-vs-professional-assistance');
  if (pe_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_pernambuco_specific_context = document.getElementById('pe-ordinary-section-pernambuco-specific-context');
  if (pe_ordinary_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-ordinary-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_what_our_clients_say = document.getElementById('pe-ordinary-section-what-our-clients-say');
  if (pe_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#pe-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_frequently_asked_questions = document.getElementById('pe-ordinary-section-frequently-asked-questions');
  if (pe_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pe-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_international_support = document.getElementById('pe-ordinary-section-international-support');
  if (pe_ordinary_section_international_support) {
    gsap.fromTo('#pe-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_our_credentials = document.getElementById('pe-ordinary-list-our-credentials');
  if (pe_ordinary_list_our_credentials) {
    gsap.from('#pe-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_list_related_services = document.getElementById('pe-ordinary-list-related-services');
  if (pe_ordinary_list_related_services) {
    gsap.from('#pe-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_youre_in_good_hands = document.getElementById('pe-ordinary-section-youre-in-good-hands');
  if (pe_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pe-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_ordinary_section_21 = document.getElementById('pe-ordinary-section-21');
  if (pe_ordinary_section_21) {
    gsap.fromTo('#pe-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('pe-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (pe_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#pe-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #pe-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_quick_facts = document.getElementById('pe-extraordinary-list-quick-facts');
  if (pe_extraordinary_list_quick_facts) {
    gsap.from('#pe-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_common_challenges_applicants_face = document.getElementById('pe-extraordinary-list-common-challenges-applicants-face');
  if (pe_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#pe-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_how_we_solve_these_challenges = document.getElementById('pe-extraordinary-list-how-we-solve-these-challenges');
  if (pe_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pe-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_naturalisation_overview = document.getElementById('pe-extraordinary-section-naturalisation-overview');
  if (pe_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#pe-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('pe-extraordinary-form-who-is-this-naturalisation-for');
  if (pe_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pe-extraordinary-form-who-is-this-naturalisation-for input, #pe-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_required_documents = document.getElementById('pe-extraordinary-list-required-documents');
  if (pe_extraordinary_list_required_documents) {
    gsap.from('#pe-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_application_process = document.getElementById('pe-extraordinary-list-application-process');
  if (pe_extraordinary_list_application_process) {
    gsap.from('#pe-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_timelines_deadlines = document.getElementById('pe-extraordinary-section-timelines-deadlines');
  if (pe_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#pe-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_fees_costs = document.getElementById('pe-extraordinary-section-fees-costs');
  if (pe_extraordinary_section_fees_costs) {
    gsap.fromTo('#pe-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_risks_common_mistakes = document.getElementById('pe-extraordinary-list-risks-common-mistakes');
  if (pe_extraordinary_list_risks_common_mistakes) {
    gsap.from('#pe-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_diy_vs_professional_assistance = document.getElementById('pe-extraordinary-section-diy-vs-professional-assistance');
  if (pe_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_pernambuco_specific_context = document.getElementById('pe-extraordinary-section-pernambuco-specific-context');
  if (pe_extraordinary_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-extraordinary-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_what_our_clients_say = document.getElementById('pe-extraordinary-section-what-our-clients-say');
  if (pe_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#pe-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_frequently_asked_questions = document.getElementById('pe-extraordinary-section-frequently-asked-questions');
  if (pe_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pe-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_international_support = document.getElementById('pe-extraordinary-section-international-support');
  if (pe_extraordinary_section_international_support) {
    gsap.fromTo('#pe-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_our_credentials = document.getElementById('pe-extraordinary-list-our-credentials');
  if (pe_extraordinary_list_our_credentials) {
    gsap.from('#pe-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_list_related_services = document.getElementById('pe-extraordinary-list-related-services');
  if (pe_extraordinary_list_related_services) {
    gsap.from('#pe-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_youre_in_good_hands = document.getElementById('pe-extraordinary-section-youre-in-good-hands');
  if (pe_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pe-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extraordinary_section_21 = document.getElementById('pe-extraordinary-section-21');
  if (pe_extraordinary_section_21) {
    gsap.fromTo('#pe-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('pe-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (pe_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#pe-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #pe-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_quick_facts = document.getElementById('pe-reacquisitioncitizenship-list-quick-facts');
  if (pe_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#pe-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('pe-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (pe_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pe-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('pe-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (pe_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pe-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('pe-reacquisitioncitizenship-section-reacquisition-overview');
  if (pe_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('pe-reacquisitioncitizenship-form-who-is-this-for');
  if (pe_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#pe-reacquisitioncitizenship-form-who-is-this-for input, #pe-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_required_documents = document.getElementById('pe-reacquisitioncitizenship-list-required-documents');
  if (pe_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#pe-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_process = document.getElementById('pe-reacquisitioncitizenship-list-process');
  if (pe_reacquisitioncitizenship_list_process) {
    gsap.from('#pe-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('pe-reacquisitioncitizenship-section-timelines-deadlines');
  if (pe_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_fees_costs = document.getElementById('pe-reacquisitioncitizenship-section-fees-costs');
  if (pe_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('pe-reacquisitioncitizenship-list-risks-common-mistakes');
  if (pe_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#pe-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('pe-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (pe_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_pernambuco_specific_context = document.getElementById('pe-reacquisitioncitizenship-section-pernambuco-specific-context');
  if (pe_reacquisitioncitizenship_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('pe-reacquisitioncitizenship-section-what-our-clients-say');
  if (pe_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('pe-reacquisitioncitizenship-section-frequently-asked-questions');
  if (pe_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_international_support = document.getElementById('pe-reacquisitioncitizenship-section-international-support');
  if (pe_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_our_credentials = document.getElementById('pe-reacquisitioncitizenship-list-our-credentials');
  if (pe_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#pe-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_list_related_services = document.getElementById('pe-reacquisitioncitizenship-list-related-services');
  if (pe_reacquisitioncitizenship_list_related_services) {
    gsap.from('#pe-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('pe-reacquisitioncitizenship-section-youre-in-good-hands');
  if (pe_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_reacquisitioncitizenship_section_21 = document.getElementById('pe-reacquisitioncitizenship-section-21');
  if (pe_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#pe-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('pe-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (pe_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#pe-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #pe-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_quick_facts = document.getElementById('pe-scientificresearch-list-quick-facts');
  if (pe_scientificresearch_list_quick_facts) {
    gsap.from('#pe-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_common_challenges_applicants_face = document.getElementById('pe-scientificresearch-list-common-challenges-applicants-face');
  if (pe_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#pe-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('pe-scientificresearch-list-how-we-solve-these-challenges');
  if (pe_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#pe-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_residency_overview = document.getElementById('pe-scientificresearch-section-residency-overview');
  if (pe_scientificresearch_section_residency_overview) {
    gsap.fromTo('#pe-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_form_who_is_this_residency_for = document.getElementById('pe-scientificresearch-form-who-is-this-residency-for');
  if (pe_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#pe-scientificresearch-form-who-is-this-residency-for input, #pe-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_required_documents = document.getElementById('pe-scientificresearch-list-required-documents');
  if (pe_scientificresearch_list_required_documents) {
    gsap.from('#pe-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_application_process = document.getElementById('pe-scientificresearch-list-application-process');
  if (pe_scientificresearch_list_application_process) {
    gsap.from('#pe-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_timelines_deadlines = document.getElementById('pe-scientificresearch-section-timelines-deadlines');
  if (pe_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#pe-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_fees_costs = document.getElementById('pe-scientificresearch-section-fees-costs');
  if (pe_scientificresearch_section_fees_costs) {
    gsap.fromTo('#pe-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_risks_common_mistakes = document.getElementById('pe-scientificresearch-list-risks-common-mistakes');
  if (pe_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#pe-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('pe-scientificresearch-section-diy-vs-professional-assistance');
  if (pe_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_pernambuco_specific_context = document.getElementById('pe-scientificresearch-section-pernambuco-specific-context');
  if (pe_scientificresearch_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-scientificresearch-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_what_our_clients_say = document.getElementById('pe-scientificresearch-section-what-our-clients-say');
  if (pe_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#pe-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_frequently_asked_questions = document.getElementById('pe-scientificresearch-section-frequently-asked-questions');
  if (pe_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#pe-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_international_support = document.getElementById('pe-scientificresearch-section-international-support');
  if (pe_scientificresearch_section_international_support) {
    gsap.fromTo('#pe-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_our_credentials = document.getElementById('pe-scientificresearch-list-our-credentials');
  if (pe_scientificresearch_list_our_credentials) {
    gsap.from('#pe-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_list_related_services = document.getElementById('pe-scientificresearch-list-related-services');
  if (pe_scientificresearch_list_related_services) {
    gsap.from('#pe-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_youre_in_good_hands = document.getElementById('pe-scientificresearch-section-youre-in-good-hands');
  if (pe_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#pe-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_scientificresearch_section_21 = document.getElementById('pe-scientificresearch-section-21');
  if (pe_scientificresearch_section_21) {
    gsap.fromTo('#pe-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_form_study_in_brazil_with_study_residency = document.getElementById('pe-study-form-study-in-brazil-with-study-residency');
  if (pe_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#pe-study-form-study-in-brazil-with-study-residency input, #pe-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_quick_facts = document.getElementById('pe-study-list-quick-facts');
  if (pe_study_list_quick_facts) {
    gsap.from('#pe-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_common_challenges_applicants_face = document.getElementById('pe-study-list-common-challenges-applicants-face');
  if (pe_study_list_common_challenges_applicants_face) {
    gsap.from('#pe-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_how_we_solve_these_challenges = document.getElementById('pe-study-list-how-we-solve-these-challenges');
  if (pe_study_list_how_we_solve_these_challenges) {
    gsap.from('#pe-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_residency_overview = document.getElementById('pe-study-section-residency-overview');
  if (pe_study_section_residency_overview) {
    gsap.fromTo('#pe-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_form_who_is_this_residency_for = document.getElementById('pe-study-form-who-is-this-residency-for');
  if (pe_study_form_who_is_this_residency_for) {
    gsap.from('#pe-study-form-who-is-this-residency-for input, #pe-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_required_documents = document.getElementById('pe-study-list-required-documents');
  if (pe_study_list_required_documents) {
    gsap.from('#pe-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_application_process = document.getElementById('pe-study-list-application-process');
  if (pe_study_list_application_process) {
    gsap.from('#pe-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_timelines_deadlines = document.getElementById('pe-study-section-timelines-deadlines');
  if (pe_study_section_timelines_deadlines) {
    gsap.fromTo('#pe-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_fees_costs = document.getElementById('pe-study-section-fees-costs');
  if (pe_study_section_fees_costs) {
    gsap.fromTo('#pe-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_risks_common_mistakes = document.getElementById('pe-study-list-risks-common-mistakes');
  if (pe_study_list_risks_common_mistakes) {
    gsap.from('#pe-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_diy_vs_professional_assistance = document.getElementById('pe-study-section-diy-vs-professional-assistance');
  if (pe_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_pernambuco_specific_context = document.getElementById('pe-study-section-pernambuco-specific-context');
  if (pe_study_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-study-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_what_our_clients_say = document.getElementById('pe-study-section-what-our-clients-say');
  if (pe_study_section_what_our_clients_say) {
    gsap.fromTo('#pe-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_frequently_asked_questions = document.getElementById('pe-study-section-frequently-asked-questions');
  if (pe_study_section_frequently_asked_questions) {
    gsap.fromTo('#pe-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_international_support = document.getElementById('pe-study-section-international-support');
  if (pe_study_section_international_support) {
    gsap.fromTo('#pe-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_our_credentials = document.getElementById('pe-study-list-our-credentials');
  if (pe_study_list_our_credentials) {
    gsap.from('#pe-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_list_related_services = document.getElementById('pe-study-list-related-services');
  if (pe_study_list_related_services) {
    gsap.from('#pe-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_youre_in_good_hands = document.getElementById('pe-study-section-youre-in-good-hands');
  if (pe_study_section_youre_in_good_hands) {
    gsap.fromTo('#pe-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_study_section_21 = document.getElementById('pe-study-section-21');
  if (pe_study_section_21) {
    gsap.fromTo('#pe-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('pe-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (pe_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#pe-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #pe-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_quick_facts = document.getElementById('pe-educationalexchange-list-quick-facts');
  if (pe_educationalexchange_list_quick_facts) {
    gsap.from('#pe-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_common_challenges_applicants_face = document.getElementById('pe-educationalexchange-list-common-challenges-applicants-face');
  if (pe_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#pe-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('pe-educationalexchange-list-how-we-solve-these-challenges');
  if (pe_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pe-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_residency_overview = document.getElementById('pe-educationalexchange-section-residency-overview');
  if (pe_educationalexchange_section_residency_overview) {
    gsap.fromTo('#pe-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_form_who_is_this_residency_for = document.getElementById('pe-educationalexchange-form-who-is-this-residency-for');
  if (pe_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#pe-educationalexchange-form-who-is-this-residency-for input, #pe-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_required_documents = document.getElementById('pe-educationalexchange-list-required-documents');
  if (pe_educationalexchange_list_required_documents) {
    gsap.from('#pe-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_application_process = document.getElementById('pe-educationalexchange-list-application-process');
  if (pe_educationalexchange_list_application_process) {
    gsap.from('#pe-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_timelines_deadlines = document.getElementById('pe-educationalexchange-section-timelines-deadlines');
  if (pe_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#pe-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_fees_costs = document.getElementById('pe-educationalexchange-section-fees-costs');
  if (pe_educationalexchange_section_fees_costs) {
    gsap.fromTo('#pe-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_risks_common_mistakes = document.getElementById('pe-educationalexchange-list-risks-common-mistakes');
  if (pe_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#pe-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('pe-educationalexchange-section-diy-vs-professional-assistance');
  if (pe_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_pernambuco_specific_context = document.getElementById('pe-educationalexchange-section-pernambuco-specific-context');
  if (pe_educationalexchange_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-educationalexchange-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_what_our_clients_say = document.getElementById('pe-educationalexchange-section-what-our-clients-say');
  if (pe_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#pe-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_frequently_asked_questions = document.getElementById('pe-educationalexchange-section-frequently-asked-questions');
  if (pe_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pe-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_international_support = document.getElementById('pe-educationalexchange-section-international-support');
  if (pe_educationalexchange_section_international_support) {
    gsap.fromTo('#pe-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_our_credentials = document.getElementById('pe-educationalexchange-list-our-credentials');
  if (pe_educationalexchange_list_our_credentials) {
    gsap.from('#pe-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_list_related_services = document.getElementById('pe-educationalexchange-list-related-services');
  if (pe_educationalexchange_list_related_services) {
    gsap.from('#pe-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_youre_in_good_hands = document.getElementById('pe-educationalexchange-section-youre-in-good-hands');
  if (pe_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pe-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_educationalexchange_section_21 = document.getElementById('pe-educationalexchange-section-21');
  if (pe_educationalexchange_section_21) {
    gsap.fromTo('#pe-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('pe-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (pe_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#pe-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #pe-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_quick_facts = document.getElementById('pe-humanitarian-list-quick-facts');
  if (pe_humanitarian_list_quick_facts) {
    gsap.from('#pe-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_common_challenges_applicants_face = document.getElementById('pe-humanitarian-list-common-challenges-applicants-face');
  if (pe_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#pe-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_how_we_solve_these_challenges = document.getElementById('pe-humanitarian-list-how-we-solve-these-challenges');
  if (pe_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#pe-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_residency_overview = document.getElementById('pe-humanitarian-section-residency-overview');
  if (pe_humanitarian_section_residency_overview) {
    gsap.fromTo('#pe-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_form_who_is_this_residency_for = document.getElementById('pe-humanitarian-form-who-is-this-residency-for');
  if (pe_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#pe-humanitarian-form-who-is-this-residency-for input, #pe-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_required_documents = document.getElementById('pe-humanitarian-list-required-documents');
  if (pe_humanitarian_list_required_documents) {
    gsap.from('#pe-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_application_process = document.getElementById('pe-humanitarian-list-application-process');
  if (pe_humanitarian_list_application_process) {
    gsap.from('#pe-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_timelines_deadlines = document.getElementById('pe-humanitarian-section-timelines-deadlines');
  if (pe_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#pe-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_fees_costs = document.getElementById('pe-humanitarian-section-fees-costs');
  if (pe_humanitarian_section_fees_costs) {
    gsap.fromTo('#pe-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_risks_common_mistakes = document.getElementById('pe-humanitarian-list-risks-common-mistakes');
  if (pe_humanitarian_list_risks_common_mistakes) {
    gsap.from('#pe-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_diy_vs_professional_assistance = document.getElementById('pe-humanitarian-section-diy-vs-professional-assistance');
  if (pe_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_pernambuco_specific_context = document.getElementById('pe-humanitarian-section-pernambuco-specific-context');
  if (pe_humanitarian_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-humanitarian-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_what_our_clients_say = document.getElementById('pe-humanitarian-section-what-our-clients-say');
  if (pe_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#pe-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_frequently_asked_questions = document.getElementById('pe-humanitarian-section-frequently-asked-questions');
  if (pe_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#pe-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_international_support = document.getElementById('pe-humanitarian-section-international-support');
  if (pe_humanitarian_section_international_support) {
    gsap.fromTo('#pe-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_our_credentials = document.getElementById('pe-humanitarian-list-our-credentials');
  if (pe_humanitarian_list_our_credentials) {
    gsap.from('#pe-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_list_related_services = document.getElementById('pe-humanitarian-list-related-services');
  if (pe_humanitarian_list_related_services) {
    gsap.from('#pe-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_youre_in_good_hands = document.getElementById('pe-humanitarian-section-youre-in-good-hands');
  if (pe_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#pe-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_humanitarian_section_21 = document.getElementById('pe-humanitarian-section-21');
  if (pe_humanitarian_section_21) {
    gsap.fromTo('#pe-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('pe-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (pe_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#pe-digitalnomad-form-digital-nomad-residency-in-brazil input, #pe-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_quick_facts = document.getElementById('pe-digitalnomad-list-quick-facts');
  if (pe_digitalnomad_list_quick_facts) {
    gsap.from('#pe-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_common_challenges_applicants_face = document.getElementById('pe-digitalnomad-list-common-challenges-applicants-face');
  if (pe_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#pe-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('pe-digitalnomad-list-how-we-solve-these-challenges');
  if (pe_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#pe-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_residency_overview = document.getElementById('pe-digitalnomad-section-residency-overview');
  if (pe_digitalnomad_section_residency_overview) {
    gsap.fromTo('#pe-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_form_who_is_this_residency_for = document.getElementById('pe-digitalnomad-form-who-is-this-residency-for');
  if (pe_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#pe-digitalnomad-form-who-is-this-residency-for input, #pe-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_required_documents = document.getElementById('pe-digitalnomad-list-required-documents');
  if (pe_digitalnomad_list_required_documents) {
    gsap.from('#pe-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_application_process = document.getElementById('pe-digitalnomad-list-application-process');
  if (pe_digitalnomad_list_application_process) {
    gsap.from('#pe-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_timelines_deadlines = document.getElementById('pe-digitalnomad-section-timelines-deadlines');
  if (pe_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#pe-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_fees_costs = document.getElementById('pe-digitalnomad-section-fees-costs');
  if (pe_digitalnomad_section_fees_costs) {
    gsap.fromTo('#pe-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_risks_common_mistakes = document.getElementById('pe-digitalnomad-list-risks-common-mistakes');
  if (pe_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#pe-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('pe-digitalnomad-section-diy-vs-professional-assistance');
  if (pe_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_pernambuco_specific_context = document.getElementById('pe-digitalnomad-section-pernambuco-specific-context');
  if (pe_digitalnomad_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-digitalnomad-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_what_our_clients_say = document.getElementById('pe-digitalnomad-section-what-our-clients-say');
  if (pe_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#pe-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_frequently_asked_questions = document.getElementById('pe-digitalnomad-section-frequently-asked-questions');
  if (pe_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#pe-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_international_support = document.getElementById('pe-digitalnomad-section-international-support');
  if (pe_digitalnomad_section_international_support) {
    gsap.fromTo('#pe-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_our_credentials = document.getElementById('pe-digitalnomad-list-our-credentials');
  if (pe_digitalnomad_list_our_credentials) {
    gsap.from('#pe-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_list_related_services = document.getElementById('pe-digitalnomad-list-related-services');
  if (pe_digitalnomad_list_related_services) {
    gsap.from('#pe-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_youre_in_good_hands = document.getElementById('pe-digitalnomad-section-youre-in-good-hands');
  if (pe_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#pe-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_digitalnomad_section_21 = document.getElementById('pe-digitalnomad-section-21');
  if (pe_digitalnomad_section_21) {
    gsap.fromTo('#pe-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('pe-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (pe_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#pe-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #pe-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_quick_facts = document.getElementById('pe-familyreunion-list-quick-facts');
  if (pe_familyreunion_list_quick_facts) {
    gsap.from('#pe-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_common_challenges_applicants_face = document.getElementById('pe-familyreunion-list-common-challenges-applicants-face');
  if (pe_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#pe-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_how_we_solve_these_challenges = document.getElementById('pe-familyreunion-list-how-we-solve-these-challenges');
  if (pe_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#pe-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_residency_overview = document.getElementById('pe-familyreunion-section-residency-overview');
  if (pe_familyreunion_section_residency_overview) {
    gsap.fromTo('#pe-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_form_who_is_this_residency_for = document.getElementById('pe-familyreunion-form-who-is-this-residency-for');
  if (pe_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#pe-familyreunion-form-who-is-this-residency-for input, #pe-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_required_documents = document.getElementById('pe-familyreunion-list-required-documents');
  if (pe_familyreunion_list_required_documents) {
    gsap.from('#pe-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_application_process = document.getElementById('pe-familyreunion-list-application-process');
  if (pe_familyreunion_list_application_process) {
    gsap.from('#pe-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_timelines_deadlines = document.getElementById('pe-familyreunion-section-timelines-deadlines');
  if (pe_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#pe-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_fees_costs = document.getElementById('pe-familyreunion-section-fees-costs');
  if (pe_familyreunion_section_fees_costs) {
    gsap.fromTo('#pe-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_risks_common_mistakes = document.getElementById('pe-familyreunion-list-risks-common-mistakes');
  if (pe_familyreunion_list_risks_common_mistakes) {
    gsap.from('#pe-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_diy_vs_professional_assistance = document.getElementById('pe-familyreunion-section-diy-vs-professional-assistance');
  if (pe_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_pernambuco_specific_context = document.getElementById('pe-familyreunion-section-pernambuco-specific-context');
  if (pe_familyreunion_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-familyreunion-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_what_our_clients_say = document.getElementById('pe-familyreunion-section-what-our-clients-say');
  if (pe_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#pe-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_frequently_asked_questions = document.getElementById('pe-familyreunion-section-frequently-asked-questions');
  if (pe_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#pe-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_international_support = document.getElementById('pe-familyreunion-section-international-support');
  if (pe_familyreunion_section_international_support) {
    gsap.fromTo('#pe-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_our_credentials = document.getElementById('pe-familyreunion-list-our-credentials');
  if (pe_familyreunion_list_our_credentials) {
    gsap.from('#pe-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_list_related_services = document.getElementById('pe-familyreunion-list-related-services');
  if (pe_familyreunion_list_related_services) {
    gsap.from('#pe-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_youre_in_good_hands = document.getElementById('pe-familyreunion-section-youre-in-good-hands');
  if (pe_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#pe-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_familyreunion_section_21 = document.getElementById('pe-familyreunion-section-21');
  if (pe_familyreunion_section_21) {
    gsap.fromTo('#pe-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('pe-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (pe_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#pe-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #pe-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_quick_facts = document.getElementById('pe-mercosul-list-quick-facts');
  if (pe_mercosul_list_quick_facts) {
    gsap.from('#pe-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_common_challenges_applicants_face = document.getElementById('pe-mercosul-list-common-challenges-applicants-face');
  if (pe_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#pe-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_how_we_solve_these_challenges = document.getElementById('pe-mercosul-list-how-we-solve-these-challenges');
  if (pe_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#pe-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_residency_overview = document.getElementById('pe-mercosul-section-residency-overview');
  if (pe_mercosul_section_residency_overview) {
    gsap.fromTo('#pe-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_form_who_is_this_residency_for = document.getElementById('pe-mercosul-form-who-is-this-residency-for');
  if (pe_mercosul_form_who_is_this_residency_for) {
    gsap.from('#pe-mercosul-form-who-is-this-residency-for input, #pe-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_required_documents = document.getElementById('pe-mercosul-list-required-documents');
  if (pe_mercosul_list_required_documents) {
    gsap.from('#pe-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_application_process = document.getElementById('pe-mercosul-list-application-process');
  if (pe_mercosul_list_application_process) {
    gsap.from('#pe-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_timelines_deadlines = document.getElementById('pe-mercosul-section-timelines-deadlines');
  if (pe_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#pe-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_fees_costs = document.getElementById('pe-mercosul-section-fees-costs');
  if (pe_mercosul_section_fees_costs) {
    gsap.fromTo('#pe-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_risks_common_mistakes = document.getElementById('pe-mercosul-list-risks-common-mistakes');
  if (pe_mercosul_list_risks_common_mistakes) {
    gsap.from('#pe-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_diy_vs_professional_assistance = document.getElementById('pe-mercosul-section-diy-vs-professional-assistance');
  if (pe_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_pernambuco_specific_context = document.getElementById('pe-mercosul-section-pernambuco-specific-context');
  if (pe_mercosul_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-mercosul-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_what_our_clients_say = document.getElementById('pe-mercosul-section-what-our-clients-say');
  if (pe_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#pe-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_frequently_asked_questions = document.getElementById('pe-mercosul-section-frequently-asked-questions');
  if (pe_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#pe-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_international_support = document.getElementById('pe-mercosul-section-international-support');
  if (pe_mercosul_section_international_support) {
    gsap.fromTo('#pe-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_our_credentials = document.getElementById('pe-mercosul-list-our-credentials');
  if (pe_mercosul_list_our_credentials) {
    gsap.from('#pe-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_list_related_services = document.getElementById('pe-mercosul-list-related-services');
  if (pe_mercosul_list_related_services) {
    gsap.from('#pe-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_youre_in_good_hands = document.getElementById('pe-mercosul-section-youre-in-good-hands');
  if (pe_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#pe-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_mercosul_section_21 = document.getElementById('pe-mercosul-section-21');
  if (pe_mercosul_section_21) {
    gsap.fromTo('#pe-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('pe-retiree-form-retire-in-brazil-with-retiree-residency');
  if (pe_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#pe-retiree-form-retire-in-brazil-with-retiree-residency input, #pe-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_quick_facts = document.getElementById('pe-retiree-list-quick-facts');
  if (pe_retiree_list_quick_facts) {
    gsap.from('#pe-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_common_challenges_applicants_face = document.getElementById('pe-retiree-list-common-challenges-applicants-face');
  if (pe_retiree_list_common_challenges_applicants_face) {
    gsap.from('#pe-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_how_we_solve_these_challenges = document.getElementById('pe-retiree-list-how-we-solve-these-challenges');
  if (pe_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#pe-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_residency_overview = document.getElementById('pe-retiree-section-residency-overview');
  if (pe_retiree_section_residency_overview) {
    gsap.fromTo('#pe-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_form_who_is_this_residency_for = document.getElementById('pe-retiree-form-who-is-this-residency-for');
  if (pe_retiree_form_who_is_this_residency_for) {
    gsap.from('#pe-retiree-form-who-is-this-residency-for input, #pe-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_required_documents = document.getElementById('pe-retiree-list-required-documents');
  if (pe_retiree_list_required_documents) {
    gsap.from('#pe-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_application_process = document.getElementById('pe-retiree-list-application-process');
  if (pe_retiree_list_application_process) {
    gsap.from('#pe-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_timelines_deadlines = document.getElementById('pe-retiree-section-timelines-deadlines');
  if (pe_retiree_section_timelines_deadlines) {
    gsap.fromTo('#pe-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_fees_costs = document.getElementById('pe-retiree-section-fees-costs');
  if (pe_retiree_section_fees_costs) {
    gsap.fromTo('#pe-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_risks_common_mistakes = document.getElementById('pe-retiree-list-risks-common-mistakes');
  if (pe_retiree_list_risks_common_mistakes) {
    gsap.from('#pe-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_diy_vs_professional_assistance = document.getElementById('pe-retiree-section-diy-vs-professional-assistance');
  if (pe_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_pernambuco_specific_context = document.getElementById('pe-retiree-section-pernambuco-specific-context');
  if (pe_retiree_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-retiree-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_what_our_clients_say = document.getElementById('pe-retiree-section-what-our-clients-say');
  if (pe_retiree_section_what_our_clients_say) {
    gsap.fromTo('#pe-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_frequently_asked_questions = document.getElementById('pe-retiree-section-frequently-asked-questions');
  if (pe_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#pe-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_international_support = document.getElementById('pe-retiree-section-international-support');
  if (pe_retiree_section_international_support) {
    gsap.fromTo('#pe-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_our_credentials = document.getElementById('pe-retiree-list-our-credentials');
  if (pe_retiree_list_our_credentials) {
    gsap.from('#pe-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_list_related_services = document.getElementById('pe-retiree-list-related-services');
  if (pe_retiree_list_related_services) {
    gsap.from('#pe-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_youre_in_good_hands = document.getElementById('pe-retiree-section-youre-in-good-hands');
  if (pe_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#pe-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_retiree_section_21 = document.getElementById('pe-retiree-section-21');
  if (pe_retiree_section_21) {
    gsap.fromTo('#pe-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('pe-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (pe_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#pe-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #pe-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_quick_facts = document.getElementById('pe-volunteer-list-quick-facts');
  if (pe_volunteer_list_quick_facts) {
    gsap.from('#pe-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_common_challenges_applicants_face = document.getElementById('pe-volunteer-list-common-challenges-applicants-face');
  if (pe_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#pe-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_how_we_solve_these_challenges = document.getElementById('pe-volunteer-list-how-we-solve-these-challenges');
  if (pe_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#pe-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_residency_overview = document.getElementById('pe-volunteer-section-residency-overview');
  if (pe_volunteer_section_residency_overview) {
    gsap.fromTo('#pe-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_form_who_is_this_residency_for = document.getElementById('pe-volunteer-form-who-is-this-residency-for');
  if (pe_volunteer_form_who_is_this_residency_for) {
    gsap.from('#pe-volunteer-form-who-is-this-residency-for input, #pe-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_required_documents = document.getElementById('pe-volunteer-list-required-documents');
  if (pe_volunteer_list_required_documents) {
    gsap.from('#pe-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_application_process = document.getElementById('pe-volunteer-list-application-process');
  if (pe_volunteer_list_application_process) {
    gsap.from('#pe-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_timelines_deadlines = document.getElementById('pe-volunteer-section-timelines-deadlines');
  if (pe_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#pe-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_fees_costs = document.getElementById('pe-volunteer-section-fees-costs');
  if (pe_volunteer_section_fees_costs) {
    gsap.fromTo('#pe-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_risks_common_mistakes = document.getElementById('pe-volunteer-list-risks-common-mistakes');
  if (pe_volunteer_list_risks_common_mistakes) {
    gsap.from('#pe-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_diy_vs_professional_assistance = document.getElementById('pe-volunteer-section-diy-vs-professional-assistance');
  if (pe_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_pernambuco_specific_context = document.getElementById('pe-volunteer-section-pernambuco-specific-context');
  if (pe_volunteer_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-volunteer-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_what_our_clients_say = document.getElementById('pe-volunteer-section-what-our-clients-say');
  if (pe_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#pe-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_frequently_asked_questions = document.getElementById('pe-volunteer-section-frequently-asked-questions');
  if (pe_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#pe-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_international_support = document.getElementById('pe-volunteer-section-international-support');
  if (pe_volunteer_section_international_support) {
    gsap.fromTo('#pe-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_our_credentials = document.getElementById('pe-volunteer-list-our-credentials');
  if (pe_volunteer_list_our_credentials) {
    gsap.from('#pe-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_list_related_services = document.getElementById('pe-volunteer-list-related-services');
  if (pe_volunteer_list_related_services) {
    gsap.from('#pe-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_youre_in_good_hands = document.getElementById('pe-volunteer-section-youre-in-good-hands');
  if (pe_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#pe-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_volunteer_section_21 = document.getElementById('pe-volunteer-section-21');
  if (pe_volunteer_section_21) {
    gsap.fromTo('#pe-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('pe-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (pe_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#pe-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #pe-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_quick_facts = document.getElementById('pe-skilledworker-list-quick-facts');
  if (pe_skilledworker_list_quick_facts) {
    gsap.from('#pe-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_common_challenges_applicants_face = document.getElementById('pe-skilledworker-list-common-challenges-applicants-face');
  if (pe_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#pe-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_how_we_solve_these_challenges = document.getElementById('pe-skilledworker-list-how-we-solve-these-challenges');
  if (pe_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#pe-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_residency_overview = document.getElementById('pe-skilledworker-section-residency-overview');
  if (pe_skilledworker_section_residency_overview) {
    gsap.fromTo('#pe-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_form_who_is_this_residency_for = document.getElementById('pe-skilledworker-form-who-is-this-residency-for');
  if (pe_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#pe-skilledworker-form-who-is-this-residency-for input, #pe-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_required_documents = document.getElementById('pe-skilledworker-list-required-documents');
  if (pe_skilledworker_list_required_documents) {
    gsap.from('#pe-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_application_process = document.getElementById('pe-skilledworker-list-application-process');
  if (pe_skilledworker_list_application_process) {
    gsap.from('#pe-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_timelines_deadlines = document.getElementById('pe-skilledworker-section-timelines-deadlines');
  if (pe_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#pe-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_fees_costs = document.getElementById('pe-skilledworker-section-fees-costs');
  if (pe_skilledworker_section_fees_costs) {
    gsap.fromTo('#pe-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_risks_common_mistakes = document.getElementById('pe-skilledworker-list-risks-common-mistakes');
  if (pe_skilledworker_list_risks_common_mistakes) {
    gsap.from('#pe-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_diy_vs_professional_assistance = document.getElementById('pe-skilledworker-section-diy-vs-professional-assistance');
  if (pe_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_pernambuco_specific_context = document.getElementById('pe-skilledworker-section-pernambuco-specific-context');
  if (pe_skilledworker_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-skilledworker-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_what_our_clients_say = document.getElementById('pe-skilledworker-section-what-our-clients-say');
  if (pe_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#pe-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_frequently_asked_questions = document.getElementById('pe-skilledworker-section-frequently-asked-questions');
  if (pe_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#pe-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_international_support = document.getElementById('pe-skilledworker-section-international-support');
  if (pe_skilledworker_section_international_support) {
    gsap.fromTo('#pe-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_our_credentials = document.getElementById('pe-skilledworker-list-our-credentials');
  if (pe_skilledworker_list_our_credentials) {
    gsap.from('#pe-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_list_related_services = document.getElementById('pe-skilledworker-list-related-services');
  if (pe_skilledworker_list_related_services) {
    gsap.from('#pe-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_youre_in_good_hands = document.getElementById('pe-skilledworker-section-youre-in-good-hands');
  if (pe_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#pe-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_skilledworker_section_21 = document.getElementById('pe-skilledworker-section-21');
  if (pe_skilledworker_section_21) {
    gsap.fromTo('#pe-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('pe-religious-form-religious-residency-in-brazil-for-missions');
  if (pe_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#pe-religious-form-religious-residency-in-brazil-for-missions input, #pe-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_quick_facts = document.getElementById('pe-religious-list-quick-facts');
  if (pe_religious_list_quick_facts) {
    gsap.from('#pe-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_common_challenges_applicants_face = document.getElementById('pe-religious-list-common-challenges-applicants-face');
  if (pe_religious_list_common_challenges_applicants_face) {
    gsap.from('#pe-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_how_we_solve_these_challenges = document.getElementById('pe-religious-list-how-we-solve-these-challenges');
  if (pe_religious_list_how_we_solve_these_challenges) {
    gsap.from('#pe-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_residency_overview = document.getElementById('pe-religious-section-residency-overview');
  if (pe_religious_section_residency_overview) {
    gsap.fromTo('#pe-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_form_who_is_this_residency_for = document.getElementById('pe-religious-form-who-is-this-residency-for');
  if (pe_religious_form_who_is_this_residency_for) {
    gsap.from('#pe-religious-form-who-is-this-residency-for input, #pe-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_required_documents = document.getElementById('pe-religious-list-required-documents');
  if (pe_religious_list_required_documents) {
    gsap.from('#pe-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_application_process = document.getElementById('pe-religious-list-application-process');
  if (pe_religious_list_application_process) {
    gsap.from('#pe-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_timelines_deadlines = document.getElementById('pe-religious-section-timelines-deadlines');
  if (pe_religious_section_timelines_deadlines) {
    gsap.fromTo('#pe-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_fees_costs = document.getElementById('pe-religious-section-fees-costs');
  if (pe_religious_section_fees_costs) {
    gsap.fromTo('#pe-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_risks_common_mistakes = document.getElementById('pe-religious-list-risks-common-mistakes');
  if (pe_religious_list_risks_common_mistakes) {
    gsap.from('#pe-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_diy_vs_professional_assistance = document.getElementById('pe-religious-section-diy-vs-professional-assistance');
  if (pe_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_pernambuco_specific_context = document.getElementById('pe-religious-section-pernambuco-specific-context');
  if (pe_religious_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-religious-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_what_our_clients_say = document.getElementById('pe-religious-section-what-our-clients-say');
  if (pe_religious_section_what_our_clients_say) {
    gsap.fromTo('#pe-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_frequently_asked_questions = document.getElementById('pe-religious-section-frequently-asked-questions');
  if (pe_religious_section_frequently_asked_questions) {
    gsap.fromTo('#pe-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_international_support = document.getElementById('pe-religious-section-international-support');
  if (pe_religious_section_international_support) {
    gsap.fromTo('#pe-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_our_credentials = document.getElementById('pe-religious-list-our-credentials');
  if (pe_religious_list_our_credentials) {
    gsap.from('#pe-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_list_related_services = document.getElementById('pe-religious-list-related-services');
  if (pe_religious_list_related_services) {
    gsap.from('#pe-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_youre_in_good_hands = document.getElementById('pe-religious-section-youre-in-good-hands');
  if (pe_religious_section_youre_in_good_hands) {
    gsap.fromTo('#pe-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_religious_section_21 = document.getElementById('pe-religious-section-21');
  if (pe_religious_section_21) {
    gsap.fromTo('#pe-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('pe-investor-form-gain-residency-in-brazil-through-investment');
  if (pe_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#pe-investor-form-gain-residency-in-brazil-through-investment input, #pe-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_quick_facts = document.getElementById('pe-investor-list-quick-facts');
  if (pe_investor_list_quick_facts) {
    gsap.from('#pe-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_common_challenges_applicants_face = document.getElementById('pe-investor-list-common-challenges-applicants-face');
  if (pe_investor_list_common_challenges_applicants_face) {
    gsap.from('#pe-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_how_we_solve_these_challenges = document.getElementById('pe-investor-list-how-we-solve-these-challenges');
  if (pe_investor_list_how_we_solve_these_challenges) {
    gsap.from('#pe-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_residency_overview = document.getElementById('pe-investor-section-residency-overview');
  if (pe_investor_section_residency_overview) {
    gsap.fromTo('#pe-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_form_who_is_this_residency_for = document.getElementById('pe-investor-form-who-is-this-residency-for');
  if (pe_investor_form_who_is_this_residency_for) {
    gsap.from('#pe-investor-form-who-is-this-residency-for input, #pe-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_required_documents = document.getElementById('pe-investor-list-required-documents');
  if (pe_investor_list_required_documents) {
    gsap.from('#pe-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_application_process = document.getElementById('pe-investor-list-application-process');
  if (pe_investor_list_application_process) {
    gsap.from('#pe-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_timelines_deadlines = document.getElementById('pe-investor-section-timelines-deadlines');
  if (pe_investor_section_timelines_deadlines) {
    gsap.fromTo('#pe-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_fees_costs = document.getElementById('pe-investor-section-fees-costs');
  if (pe_investor_section_fees_costs) {
    gsap.fromTo('#pe-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_risks_common_mistakes = document.getElementById('pe-investor-list-risks-common-mistakes');
  if (pe_investor_list_risks_common_mistakes) {
    gsap.from('#pe-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_diy_vs_professional_assistance = document.getElementById('pe-investor-section-diy-vs-professional-assistance');
  if (pe_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_pernambuco_specific_context = document.getElementById('pe-investor-section-pernambuco-specific-context');
  if (pe_investor_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-investor-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_what_our_clients_say = document.getElementById('pe-investor-section-what-our-clients-say');
  if (pe_investor_section_what_our_clients_say) {
    gsap.fromTo('#pe-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_frequently_asked_questions = document.getElementById('pe-investor-section-frequently-asked-questions');
  if (pe_investor_section_frequently_asked_questions) {
    gsap.fromTo('#pe-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_international_support = document.getElementById('pe-investor-section-international-support');
  if (pe_investor_section_international_support) {
    gsap.fromTo('#pe-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_our_credentials = document.getElementById('pe-investor-list-our-credentials');
  if (pe_investor_list_our_credentials) {
    gsap.from('#pe-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_list_related_services = document.getElementById('pe-investor-list-related-services');
  if (pe_investor_list_related_services) {
    gsap.from('#pe-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_youre_in_good_hands = document.getElementById('pe-investor-section-youre-in-good-hands');
  if (pe_investor_section_youre_in_good_hands) {
    gsap.fromTo('#pe-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_investor_section_21 = document.getElementById('pe-investor-section-21');
  if (pe_investor_section_21) {
    gsap.fromTo('#pe-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('pe-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (pe_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#pe-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #pe-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_quick_facts = document.getElementById('pe-healthtreatment-list-quick-facts');
  if (pe_healthtreatment_list_quick_facts) {
    gsap.from('#pe-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_common_challenges_applicants_face = document.getElementById('pe-healthtreatment-list-common-challenges-applicants-face');
  if (pe_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#pe-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('pe-healthtreatment-list-how-we-solve-these-challenges');
  if (pe_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#pe-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_residency_overview = document.getElementById('pe-healthtreatment-section-residency-overview');
  if (pe_healthtreatment_section_residency_overview) {
    gsap.fromTo('#pe-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_form_who_is_this_residency_for = document.getElementById('pe-healthtreatment-form-who-is-this-residency-for');
  if (pe_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#pe-healthtreatment-form-who-is-this-residency-for input, #pe-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_required_documents = document.getElementById('pe-healthtreatment-list-required-documents');
  if (pe_healthtreatment_list_required_documents) {
    gsap.from('#pe-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_application_process = document.getElementById('pe-healthtreatment-list-application-process');
  if (pe_healthtreatment_list_application_process) {
    gsap.from('#pe-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_timelines_deadlines = document.getElementById('pe-healthtreatment-section-timelines-deadlines');
  if (pe_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#pe-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_fees_costs = document.getElementById('pe-healthtreatment-section-fees-costs');
  if (pe_healthtreatment_section_fees_costs) {
    gsap.fromTo('#pe-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_risks_common_mistakes = document.getElementById('pe-healthtreatment-list-risks-common-mistakes');
  if (pe_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#pe-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('pe-healthtreatment-section-diy-vs-professional-assistance');
  if (pe_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_pernambuco_specific_context = document.getElementById('pe-healthtreatment-section-pernambuco-specific-context');
  if (pe_healthtreatment_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-healthtreatment-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_what_our_clients_say = document.getElementById('pe-healthtreatment-section-what-our-clients-say');
  if (pe_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#pe-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_frequently_asked_questions = document.getElementById('pe-healthtreatment-section-frequently-asked-questions');
  if (pe_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#pe-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_international_support = document.getElementById('pe-healthtreatment-section-international-support');
  if (pe_healthtreatment_section_international_support) {
    gsap.fromTo('#pe-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_our_credentials = document.getElementById('pe-healthtreatment-list-our-credentials');
  if (pe_healthtreatment_list_our_credentials) {
    gsap.from('#pe-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_list_related_services = document.getElementById('pe-healthtreatment-list-related-services');
  if (pe_healthtreatment_list_related_services) {
    gsap.from('#pe-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_youre_in_good_hands = document.getElementById('pe-healthtreatment-section-youre-in-good-hands');
  if (pe_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#pe-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_healthtreatment_section_21 = document.getElementById('pe-healthtreatment-section-21');
  if (pe_healthtreatment_section_21) {
    gsap.fromTo('#pe-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('pe-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (pe_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#pe-cplp-form-residency-for-cplp-citizens-in-brazil input, #pe-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_quick_facts = document.getElementById('pe-cplp-list-quick-facts');
  if (pe_cplp_list_quick_facts) {
    gsap.from('#pe-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_common_challenges_applicants_face = document.getElementById('pe-cplp-list-common-challenges-applicants-face');
  if (pe_cplp_list_common_challenges_applicants_face) {
    gsap.from('#pe-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_how_we_solve_these_challenges = document.getElementById('pe-cplp-list-how-we-solve-these-challenges');
  if (pe_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#pe-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_residency_overview = document.getElementById('pe-cplp-section-residency-overview');
  if (pe_cplp_section_residency_overview) {
    gsap.fromTo('#pe-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_form_who_is_this_residency_for = document.getElementById('pe-cplp-form-who-is-this-residency-for');
  if (pe_cplp_form_who_is_this_residency_for) {
    gsap.from('#pe-cplp-form-who-is-this-residency-for input, #pe-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_required_documents = document.getElementById('pe-cplp-list-required-documents');
  if (pe_cplp_list_required_documents) {
    gsap.from('#pe-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_application_process = document.getElementById('pe-cplp-list-application-process');
  if (pe_cplp_list_application_process) {
    gsap.from('#pe-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_timelines_deadlines = document.getElementById('pe-cplp-section-timelines-deadlines');
  if (pe_cplp_section_timelines_deadlines) {
    gsap.fromTo('#pe-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_fees_costs = document.getElementById('pe-cplp-section-fees-costs');
  if (pe_cplp_section_fees_costs) {
    gsap.fromTo('#pe-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_risks_common_mistakes = document.getElementById('pe-cplp-list-risks-common-mistakes');
  if (pe_cplp_list_risks_common_mistakes) {
    gsap.from('#pe-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_diy_vs_professional_assistance = document.getElementById('pe-cplp-section-diy-vs-professional-assistance');
  if (pe_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_pernambuco_specific_context = document.getElementById('pe-cplp-section-pernambuco-specific-context');
  if (pe_cplp_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-cplp-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_what_our_clients_say = document.getElementById('pe-cplp-section-what-our-clients-say');
  if (pe_cplp_section_what_our_clients_say) {
    gsap.fromTo('#pe-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_frequently_asked_questions = document.getElementById('pe-cplp-section-frequently-asked-questions');
  if (pe_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#pe-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_international_support = document.getElementById('pe-cplp-section-international-support');
  if (pe_cplp_section_international_support) {
    gsap.fromTo('#pe-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_our_credentials = document.getElementById('pe-cplp-list-our-credentials');
  if (pe_cplp_list_our_credentials) {
    gsap.from('#pe-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_list_related_services = document.getElementById('pe-cplp-list-related-services');
  if (pe_cplp_list_related_services) {
    gsap.from('#pe-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_youre_in_good_hands = document.getElementById('pe-cplp-section-youre-in-good-hands');
  if (pe_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#pe-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_cplp_section_21 = document.getElementById('pe-cplp-section-21');
  if (pe_cplp_section_21) {
    gsap.fromTo('#pe-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('pe-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (pe_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#pe-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #pe-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_quick_facts = document.getElementById('pe-youthexchange-list-quick-facts');
  if (pe_youthexchange_list_quick_facts) {
    gsap.from('#pe-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_common_challenges_applicants_face = document.getElementById('pe-youthexchange-list-common-challenges-applicants-face');
  if (pe_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#pe-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_how_we_solve_these_challenges = document.getElementById('pe-youthexchange-list-how-we-solve-these-challenges');
  if (pe_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pe-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_residency_overview = document.getElementById('pe-youthexchange-section-residency-overview');
  if (pe_youthexchange_section_residency_overview) {
    gsap.fromTo('#pe-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_form_who_is_this_residency_for = document.getElementById('pe-youthexchange-form-who-is-this-residency-for');
  if (pe_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#pe-youthexchange-form-who-is-this-residency-for input, #pe-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_required_documents = document.getElementById('pe-youthexchange-list-required-documents');
  if (pe_youthexchange_list_required_documents) {
    gsap.from('#pe-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_application_process = document.getElementById('pe-youthexchange-list-application-process');
  if (pe_youthexchange_list_application_process) {
    gsap.from('#pe-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_timelines_deadlines = document.getElementById('pe-youthexchange-section-timelines-deadlines');
  if (pe_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#pe-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_fees_costs = document.getElementById('pe-youthexchange-section-fees-costs');
  if (pe_youthexchange_section_fees_costs) {
    gsap.fromTo('#pe-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_risks_common_mistakes = document.getElementById('pe-youthexchange-list-risks-common-mistakes');
  if (pe_youthexchange_list_risks_common_mistakes) {
    gsap.from('#pe-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_diy_vs_professional_assistance = document.getElementById('pe-youthexchange-section-diy-vs-professional-assistance');
  if (pe_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_pernambuco_specific_context = document.getElementById('pe-youthexchange-section-pernambuco-specific-context');
  if (pe_youthexchange_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-youthexchange-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_what_our_clients_say = document.getElementById('pe-youthexchange-section-what-our-clients-say');
  if (pe_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#pe-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_frequently_asked_questions = document.getElementById('pe-youthexchange-section-frequently-asked-questions');
  if (pe_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pe-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_international_support = document.getElementById('pe-youthexchange-section-international-support');
  if (pe_youthexchange_section_international_support) {
    gsap.fromTo('#pe-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_our_credentials = document.getElementById('pe-youthexchange-list-our-credentials');
  if (pe_youthexchange_list_our_credentials) {
    gsap.from('#pe-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_list_related_services = document.getElementById('pe-youthexchange-list-related-services');
  if (pe_youthexchange_list_related_services) {
    gsap.from('#pe-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_youre_in_good_hands = document.getElementById('pe-youthexchange-section-youre-in-good-hands');
  if (pe_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pe-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_youthexchange_section_21 = document.getElementById('pe-youthexchange-section-21');
  if (pe_youthexchange_section_21) {
    gsap.fromTo('#pe-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('pe-work-form-work-and-reside-in-brazil-with-work-residency');
  if (pe_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#pe-work-form-work-and-reside-in-brazil-with-work-residency input, #pe-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_quick_facts = document.getElementById('pe-work-list-quick-facts');
  if (pe_work_list_quick_facts) {
    gsap.from('#pe-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_common_challenges_applicants_face = document.getElementById('pe-work-list-common-challenges-applicants-face');
  if (pe_work_list_common_challenges_applicants_face) {
    gsap.from('#pe-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_how_we_solve_these_challenges = document.getElementById('pe-work-list-how-we-solve-these-challenges');
  if (pe_work_list_how_we_solve_these_challenges) {
    gsap.from('#pe-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_residency_overview = document.getElementById('pe-work-section-residency-overview');
  if (pe_work_section_residency_overview) {
    gsap.fromTo('#pe-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_form_who_is_this_residency_for = document.getElementById('pe-work-form-who-is-this-residency-for');
  if (pe_work_form_who_is_this_residency_for) {
    gsap.from('#pe-work-form-who-is-this-residency-for input, #pe-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_required_documents = document.getElementById('pe-work-list-required-documents');
  if (pe_work_list_required_documents) {
    gsap.from('#pe-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_application_process = document.getElementById('pe-work-list-application-process');
  if (pe_work_list_application_process) {
    gsap.from('#pe-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_timelines_deadlines = document.getElementById('pe-work-section-timelines-deadlines');
  if (pe_work_section_timelines_deadlines) {
    gsap.fromTo('#pe-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_fees_costs = document.getElementById('pe-work-section-fees-costs');
  if (pe_work_section_fees_costs) {
    gsap.fromTo('#pe-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_risks_common_mistakes = document.getElementById('pe-work-list-risks-common-mistakes');
  if (pe_work_list_risks_common_mistakes) {
    gsap.from('#pe-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_diy_vs_professional_assistance = document.getElementById('pe-work-section-diy-vs-professional-assistance');
  if (pe_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_pernambuco_specific_context = document.getElementById('pe-work-section-pernambuco-specific-context');
  if (pe_work_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-work-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_what_our_clients_say = document.getElementById('pe-work-section-what-our-clients-say');
  if (pe_work_section_what_our_clients_say) {
    gsap.fromTo('#pe-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_frequently_asked_questions = document.getElementById('pe-work-section-frequently-asked-questions');
  if (pe_work_section_frequently_asked_questions) {
    gsap.fromTo('#pe-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_international_support = document.getElementById('pe-work-section-international-support');
  if (pe_work_section_international_support) {
    gsap.fromTo('#pe-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_our_credentials = document.getElementById('pe-work-list-our-credentials');
  if (pe_work_list_our_credentials) {
    gsap.from('#pe-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_list_related_services = document.getElementById('pe-work-list-related-services');
  if (pe_work_list_related_services) {
    gsap.from('#pe-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_youre_in_good_hands = document.getElementById('pe-work-section-youre-in-good-hands');
  if (pe_work_section_youre_in_good_hands) {
    gsap.fromTo('#pe-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_work_section_21 = document.getElementById('pe-work-section-21');
  if (pe_work_section_21) {
    gsap.fromTo('#pe-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('pe-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (pe_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#pe-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #pe-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_quick_facts = document.getElementById('pe-startup-list-quick-facts');
  if (pe_startup_list_quick_facts) {
    gsap.from('#pe-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_common_challenges_applicants_face = document.getElementById('pe-startup-list-common-challenges-applicants-face');
  if (pe_startup_list_common_challenges_applicants_face) {
    gsap.from('#pe-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_how_we_solve_these_challenges = document.getElementById('pe-startup-list-how-we-solve-these-challenges');
  if (pe_startup_list_how_we_solve_these_challenges) {
    gsap.from('#pe-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_visa_overview = document.getElementById('pe-startup-section-visa-overview');
  if (pe_startup_section_visa_overview) {
    gsap.fromTo('#pe-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_form_who_is_this_visa_for = document.getElementById('pe-startup-form-who-is-this-visa-for');
  if (pe_startup_form_who_is_this_visa_for) {
    gsap.from('#pe-startup-form-who-is-this-visa-for input, #pe-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_required_documents = document.getElementById('pe-startup-list-required-documents');
  if (pe_startup_list_required_documents) {
    gsap.from('#pe-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_application_process = document.getElementById('pe-startup-list-application-process');
  if (pe_startup_list_application_process) {
    gsap.from('#pe-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_timelines_deadlines = document.getElementById('pe-startup-section-timelines-deadlines');
  if (pe_startup_section_timelines_deadlines) {
    gsap.fromTo('#pe-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_fees_costs = document.getElementById('pe-startup-section-fees-costs');
  if (pe_startup_section_fees_costs) {
    gsap.fromTo('#pe-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_risks_common_mistakes = document.getElementById('pe-startup-list-risks-common-mistakes');
  if (pe_startup_list_risks_common_mistakes) {
    gsap.from('#pe-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_diy_vs_professional_assistance = document.getElementById('pe-startup-section-diy-vs-professional-assistance');
  if (pe_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_pernambuco_specific_context = document.getElementById('pe-startup-section-pernambuco-specific-context');
  if (pe_startup_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-startup-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_what_our_clients_say = document.getElementById('pe-startup-section-what-our-clients-say');
  if (pe_startup_section_what_our_clients_say) {
    gsap.fromTo('#pe-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_frequently_asked_questions = document.getElementById('pe-startup-section-frequently-asked-questions');
  if (pe_startup_section_frequently_asked_questions) {
    gsap.fromTo('#pe-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_international_support = document.getElementById('pe-startup-section-international-support');
  if (pe_startup_section_international_support) {
    gsap.fromTo('#pe-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_our_credentials = document.getElementById('pe-startup-list-our-credentials');
  if (pe_startup_list_our_credentials) {
    gsap.from('#pe-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_list_related_services = document.getElementById('pe-startup-list-related-services');
  if (pe_startup_list_related_services) {
    gsap.from('#pe-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_youre_in_good_hands = document.getElementById('pe-startup-section-youre-in-good-hands');
  if (pe_startup_section_youre_in_good_hands) {
    gsap.fromTo('#pe-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_startup_section_21 = document.getElementById('pe-startup-section-21');
  if (pe_startup_section_21) {
    gsap.fromTo('#pe-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('pe-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (pe_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#pe-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #pe-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_quick_facts = document.getElementById('pe-family-list-quick-facts');
  if (pe_family_list_quick_facts) {
    gsap.from('#pe-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_common_challenges_applicants_face = document.getElementById('pe-family-list-common-challenges-applicants-face');
  if (pe_family_list_common_challenges_applicants_face) {
    gsap.from('#pe-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_how_we_solve_these_challenges = document.getElementById('pe-family-list-how-we-solve-these-challenges');
  if (pe_family_list_how_we_solve_these_challenges) {
    gsap.from('#pe-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_visa_overview = document.getElementById('pe-family-section-visa-overview');
  if (pe_family_section_visa_overview) {
    gsap.fromTo('#pe-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_form_who_is_this_visa_for = document.getElementById('pe-family-form-who-is-this-visa-for');
  if (pe_family_form_who_is_this_visa_for) {
    gsap.from('#pe-family-form-who-is-this-visa-for input, #pe-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_required_documents = document.getElementById('pe-family-list-required-documents');
  if (pe_family_list_required_documents) {
    gsap.from('#pe-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_application_process = document.getElementById('pe-family-list-application-process');
  if (pe_family_list_application_process) {
    gsap.from('#pe-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_timelines_deadlines = document.getElementById('pe-family-section-timelines-deadlines');
  if (pe_family_section_timelines_deadlines) {
    gsap.fromTo('#pe-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_fees_costs = document.getElementById('pe-family-section-fees-costs');
  if (pe_family_section_fees_costs) {
    gsap.fromTo('#pe-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_risks_common_mistakes = document.getElementById('pe-family-list-risks-common-mistakes');
  if (pe_family_list_risks_common_mistakes) {
    gsap.from('#pe-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_diy_vs_professional_assistance = document.getElementById('pe-family-section-diy-vs-professional-assistance');
  if (pe_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_pernambuco_specific_context = document.getElementById('pe-family-section-pernambuco-specific-context');
  if (pe_family_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-family-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_what_our_clients_say = document.getElementById('pe-family-section-what-our-clients-say');
  if (pe_family_section_what_our_clients_say) {
    gsap.fromTo('#pe-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_frequently_asked_questions = document.getElementById('pe-family-section-frequently-asked-questions');
  if (pe_family_section_frequently_asked_questions) {
    gsap.fromTo('#pe-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_international_support = document.getElementById('pe-family-section-international-support');
  if (pe_family_section_international_support) {
    gsap.fromTo('#pe-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_our_credentials = document.getElementById('pe-family-list-our-credentials');
  if (pe_family_list_our_credentials) {
    gsap.from('#pe-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_list_related_services = document.getElementById('pe-family-list-related-services');
  if (pe_family_list_related_services) {
    gsap.from('#pe-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_youre_in_good_hands = document.getElementById('pe-family-section-youre-in-good-hands');
  if (pe_family_section_youre_in_good_hands) {
    gsap.fromTo('#pe-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_family_section_21 = document.getElementById('pe-family-section-21');
  if (pe_family_section_21) {
    gsap.fromTo('#pe-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('pe-sports-form-compete-in-brazil-with-the-sports-visa');
  if (pe_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#pe-sports-form-compete-in-brazil-with-the-sports-visa input, #pe-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_quick_facts = document.getElementById('pe-sports-list-quick-facts');
  if (pe_sports_list_quick_facts) {
    gsap.from('#pe-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_common_challenges_applicants_face = document.getElementById('pe-sports-list-common-challenges-applicants-face');
  if (pe_sports_list_common_challenges_applicants_face) {
    gsap.from('#pe-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_how_we_solve_these_challenges = document.getElementById('pe-sports-list-how-we-solve-these-challenges');
  if (pe_sports_list_how_we_solve_these_challenges) {
    gsap.from('#pe-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_visa_overview = document.getElementById('pe-sports-section-visa-overview');
  if (pe_sports_section_visa_overview) {
    gsap.fromTo('#pe-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_form_who_is_this_visa_for = document.getElementById('pe-sports-form-who-is-this-visa-for');
  if (pe_sports_form_who_is_this_visa_for) {
    gsap.from('#pe-sports-form-who-is-this-visa-for input, #pe-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_required_documents = document.getElementById('pe-sports-list-required-documents');
  if (pe_sports_list_required_documents) {
    gsap.from('#pe-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_application_process = document.getElementById('pe-sports-list-application-process');
  if (pe_sports_list_application_process) {
    gsap.from('#pe-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_timelines_deadlines = document.getElementById('pe-sports-section-timelines-deadlines');
  if (pe_sports_section_timelines_deadlines) {
    gsap.fromTo('#pe-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_fees_costs = document.getElementById('pe-sports-section-fees-costs');
  if (pe_sports_section_fees_costs) {
    gsap.fromTo('#pe-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_risks_common_mistakes = document.getElementById('pe-sports-list-risks-common-mistakes');
  if (pe_sports_list_risks_common_mistakes) {
    gsap.from('#pe-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_diy_vs_professional_assistance = document.getElementById('pe-sports-section-diy-vs-professional-assistance');
  if (pe_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_pernambuco_specific_context = document.getElementById('pe-sports-section-pernambuco-specific-context');
  if (pe_sports_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-sports-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_what_our_clients_say = document.getElementById('pe-sports-section-what-our-clients-say');
  if (pe_sports_section_what_our_clients_say) {
    gsap.fromTo('#pe-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_frequently_asked_questions = document.getElementById('pe-sports-section-frequently-asked-questions');
  if (pe_sports_section_frequently_asked_questions) {
    gsap.fromTo('#pe-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_international_support = document.getElementById('pe-sports-section-international-support');
  if (pe_sports_section_international_support) {
    gsap.fromTo('#pe-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_our_credentials = document.getElementById('pe-sports-list-our-credentials');
  if (pe_sports_list_our_credentials) {
    gsap.from('#pe-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_list_related_services = document.getElementById('pe-sports-list-related-services');
  if (pe_sports_list_related_services) {
    gsap.from('#pe-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_youre_in_good_hands = document.getElementById('pe-sports-section-youre-in-good-hands');
  if (pe_sports_section_youre_in_good_hands) {
    gsap.fromTo('#pe-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_sports_section_21 = document.getElementById('pe-sports-section-21');
  if (pe_sports_section_21) {
    gsap.fromTo('#pe-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('pe-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (pe_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#pe-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #pe-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_quick_facts = document.getElementById('pe-medical-list-quick-facts');
  if (pe_medical_list_quick_facts) {
    gsap.from('#pe-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_common_challenges_applicants_face = document.getElementById('pe-medical-list-common-challenges-applicants-face');
  if (pe_medical_list_common_challenges_applicants_face) {
    gsap.from('#pe-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_how_we_solve_these_challenges = document.getElementById('pe-medical-list-how-we-solve-these-challenges');
  if (pe_medical_list_how_we_solve_these_challenges) {
    gsap.from('#pe-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_visa_overview = document.getElementById('pe-medical-section-visa-overview');
  if (pe_medical_section_visa_overview) {
    gsap.fromTo('#pe-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_form_who_is_this_visa_for = document.getElementById('pe-medical-form-who-is-this-visa-for');
  if (pe_medical_form_who_is_this_visa_for) {
    gsap.from('#pe-medical-form-who-is-this-visa-for input, #pe-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_required_documents = document.getElementById('pe-medical-list-required-documents');
  if (pe_medical_list_required_documents) {
    gsap.from('#pe-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_application_process = document.getElementById('pe-medical-list-application-process');
  if (pe_medical_list_application_process) {
    gsap.from('#pe-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_timelines_deadlines = document.getElementById('pe-medical-section-timelines-deadlines');
  if (pe_medical_section_timelines_deadlines) {
    gsap.fromTo('#pe-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_fees_costs = document.getElementById('pe-medical-section-fees-costs');
  if (pe_medical_section_fees_costs) {
    gsap.fromTo('#pe-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_risks_common_mistakes = document.getElementById('pe-medical-list-risks-common-mistakes');
  if (pe_medical_list_risks_common_mistakes) {
    gsap.from('#pe-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_diy_vs_professional_assistance = document.getElementById('pe-medical-section-diy-vs-professional-assistance');
  if (pe_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_pernambuco_specific_context = document.getElementById('pe-medical-section-pernambuco-specific-context');
  if (pe_medical_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-medical-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_what_our_clients_say = document.getElementById('pe-medical-section-what-our-clients-say');
  if (pe_medical_section_what_our_clients_say) {
    gsap.fromTo('#pe-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_frequently_asked_questions = document.getElementById('pe-medical-section-frequently-asked-questions');
  if (pe_medical_section_frequently_asked_questions) {
    gsap.fromTo('#pe-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_international_support = document.getElementById('pe-medical-section-international-support');
  if (pe_medical_section_international_support) {
    gsap.fromTo('#pe-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_our_credentials = document.getElementById('pe-medical-list-our-credentials');
  if (pe_medical_list_our_credentials) {
    gsap.from('#pe-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_list_related_services = document.getElementById('pe-medical-list-related-services');
  if (pe_medical_list_related_services) {
    gsap.from('#pe-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_youre_in_good_hands = document.getElementById('pe-medical-section-youre-in-good-hands');
  if (pe_medical_section_youre_in_good_hands) {
    gsap.fromTo('#pe-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_medical_section_21 = document.getElementById('pe-medical-section-21');
  if (pe_medical_section_21) {
    gsap.fromTo('#pe-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('pe-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (pe_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#pe-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #pe-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_quick_facts = document.getElementById('pe-tourist-list-quick-facts');
  if (pe_tourist_list_quick_facts) {
    gsap.from('#pe-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_common_challenges_applicants_face = document.getElementById('pe-tourist-list-common-challenges-applicants-face');
  if (pe_tourist_list_common_challenges_applicants_face) {
    gsap.from('#pe-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_how_we_solve_these_challenges = document.getElementById('pe-tourist-list-how-we-solve-these-challenges');
  if (pe_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#pe-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_visa_overview = document.getElementById('pe-tourist-section-visa-overview');
  if (pe_tourist_section_visa_overview) {
    gsap.fromTo('#pe-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_form_who_is_this_visa_for = document.getElementById('pe-tourist-form-who-is-this-visa-for');
  if (pe_tourist_form_who_is_this_visa_for) {
    gsap.from('#pe-tourist-form-who-is-this-visa-for input, #pe-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_required_documents = document.getElementById('pe-tourist-list-required-documents');
  if (pe_tourist_list_required_documents) {
    gsap.from('#pe-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_application_process = document.getElementById('pe-tourist-list-application-process');
  if (pe_tourist_list_application_process) {
    gsap.from('#pe-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_timelines_deadlines = document.getElementById('pe-tourist-section-timelines-deadlines');
  if (pe_tourist_section_timelines_deadlines) {
    gsap.fromTo('#pe-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_fees_costs = document.getElementById('pe-tourist-section-fees-costs');
  if (pe_tourist_section_fees_costs) {
    gsap.fromTo('#pe-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_risks_common_mistakes = document.getElementById('pe-tourist-list-risks-common-mistakes');
  if (pe_tourist_list_risks_common_mistakes) {
    gsap.from('#pe-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_diy_vs_professional_assistance = document.getElementById('pe-tourist-section-diy-vs-professional-assistance');
  if (pe_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_pernambuco_specific_context = document.getElementById('pe-tourist-section-pernambuco-specific-context');
  if (pe_tourist_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-tourist-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_what_our_clients_say = document.getElementById('pe-tourist-section-what-our-clients-say');
  if (pe_tourist_section_what_our_clients_say) {
    gsap.fromTo('#pe-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_frequently_asked_questions = document.getElementById('pe-tourist-section-frequently-asked-questions');
  if (pe_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#pe-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_international_support = document.getElementById('pe-tourist-section-international-support');
  if (pe_tourist_section_international_support) {
    gsap.fromTo('#pe-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_our_credentials = document.getElementById('pe-tourist-list-our-credentials');
  if (pe_tourist_list_our_credentials) {
    gsap.from('#pe-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_list_related_services = document.getElementById('pe-tourist-list-related-services');
  if (pe_tourist_list_related_services) {
    gsap.from('#pe-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_youre_in_good_hands = document.getElementById('pe-tourist-section-youre-in-good-hands');
  if (pe_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#pe-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_tourist_section_21 = document.getElementById('pe-tourist-section-21');
  if (pe_tourist_section_21) {
    gsap.fromTo('#pe-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('pe-transit-form-transit-through-brazil-with-the-transit-visa');
  if (pe_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#pe-transit-form-transit-through-brazil-with-the-transit-visa input, #pe-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_quick_facts = document.getElementById('pe-transit-list-quick-facts');
  if (pe_transit_list_quick_facts) {
    gsap.from('#pe-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_common_challenges_applicants_face = document.getElementById('pe-transit-list-common-challenges-applicants-face');
  if (pe_transit_list_common_challenges_applicants_face) {
    gsap.from('#pe-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_how_we_solve_these_challenges = document.getElementById('pe-transit-list-how-we-solve-these-challenges');
  if (pe_transit_list_how_we_solve_these_challenges) {
    gsap.from('#pe-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_visa_overview = document.getElementById('pe-transit-section-visa-overview');
  if (pe_transit_section_visa_overview) {
    gsap.fromTo('#pe-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_form_who_is_this_visa_for = document.getElementById('pe-transit-form-who-is-this-visa-for');
  if (pe_transit_form_who_is_this_visa_for) {
    gsap.from('#pe-transit-form-who-is-this-visa-for input, #pe-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_required_documents = document.getElementById('pe-transit-list-required-documents');
  if (pe_transit_list_required_documents) {
    gsap.from('#pe-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_application_process = document.getElementById('pe-transit-list-application-process');
  if (pe_transit_list_application_process) {
    gsap.from('#pe-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_timelines_deadlines = document.getElementById('pe-transit-section-timelines-deadlines');
  if (pe_transit_section_timelines_deadlines) {
    gsap.fromTo('#pe-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_fees_costs = document.getElementById('pe-transit-section-fees-costs');
  if (pe_transit_section_fees_costs) {
    gsap.fromTo('#pe-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_risks_common_mistakes = document.getElementById('pe-transit-list-risks-common-mistakes');
  if (pe_transit_list_risks_common_mistakes) {
    gsap.from('#pe-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_diy_vs_professional_assistance = document.getElementById('pe-transit-section-diy-vs-professional-assistance');
  if (pe_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_pernambuco_specific_context = document.getElementById('pe-transit-section-pernambuco-specific-context');
  if (pe_transit_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-transit-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_what_our_clients_say = document.getElementById('pe-transit-section-what-our-clients-say');
  if (pe_transit_section_what_our_clients_say) {
    gsap.fromTo('#pe-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_frequently_asked_questions = document.getElementById('pe-transit-section-frequently-asked-questions');
  if (pe_transit_section_frequently_asked_questions) {
    gsap.fromTo('#pe-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_international_support = document.getElementById('pe-transit-section-international-support');
  if (pe_transit_section_international_support) {
    gsap.fromTo('#pe-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_our_credentials = document.getElementById('pe-transit-list-our-credentials');
  if (pe_transit_list_our_credentials) {
    gsap.from('#pe-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_list_related_services = document.getElementById('pe-transit-list-related-services');
  if (pe_transit_list_related_services) {
    gsap.from('#pe-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_youre_in_good_hands = document.getElementById('pe-transit-section-youre-in-good-hands');
  if (pe_transit_section_youre_in_good_hands) {
    gsap.fromTo('#pe-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_transit_section_21 = document.getElementById('pe-transit-section-21');
  if (pe_transit_section_21) {
    gsap.fromTo('#pe-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_form_study_in_brazil_with_the_student_visa = document.getElementById('pe-student-form-study-in-brazil-with-the-student-visa');
  if (pe_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#pe-student-form-study-in-brazil-with-the-student-visa input, #pe-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_quick_facts = document.getElementById('pe-student-list-quick-facts');
  if (pe_student_list_quick_facts) {
    gsap.from('#pe-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_common_challenges_applicants_face = document.getElementById('pe-student-list-common-challenges-applicants-face');
  if (pe_student_list_common_challenges_applicants_face) {
    gsap.from('#pe-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_how_we_solve_these_challenges = document.getElementById('pe-student-list-how-we-solve-these-challenges');
  if (pe_student_list_how_we_solve_these_challenges) {
    gsap.from('#pe-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_visa_overview = document.getElementById('pe-student-section-visa-overview');
  if (pe_student_section_visa_overview) {
    gsap.fromTo('#pe-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_form_who_is_this_visa_for = document.getElementById('pe-student-form-who-is-this-visa-for');
  if (pe_student_form_who_is_this_visa_for) {
    gsap.from('#pe-student-form-who-is-this-visa-for input, #pe-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_required_documents = document.getElementById('pe-student-list-required-documents');
  if (pe_student_list_required_documents) {
    gsap.from('#pe-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_application_process = document.getElementById('pe-student-list-application-process');
  if (pe_student_list_application_process) {
    gsap.from('#pe-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_timelines_deadlines = document.getElementById('pe-student-section-timelines-deadlines');
  if (pe_student_section_timelines_deadlines) {
    gsap.fromTo('#pe-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_fees_costs = document.getElementById('pe-student-section-fees-costs');
  if (pe_student_section_fees_costs) {
    gsap.fromTo('#pe-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_risks_common_mistakes = document.getElementById('pe-student-list-risks-common-mistakes');
  if (pe_student_list_risks_common_mistakes) {
    gsap.from('#pe-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_diy_vs_professional_assistance = document.getElementById('pe-student-section-diy-vs-professional-assistance');
  if (pe_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_pernambuco_specific_context = document.getElementById('pe-student-section-pernambuco-specific-context');
  if (pe_student_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-student-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_what_our_clients_say = document.getElementById('pe-student-section-what-our-clients-say');
  if (pe_student_section_what_our_clients_say) {
    gsap.fromTo('#pe-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_frequently_asked_questions = document.getElementById('pe-student-section-frequently-asked-questions');
  if (pe_student_section_frequently_asked_questions) {
    gsap.fromTo('#pe-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_international_support = document.getElementById('pe-student-section-international-support');
  if (pe_student_section_international_support) {
    gsap.fromTo('#pe-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_our_credentials = document.getElementById('pe-student-list-our-credentials');
  if (pe_student_list_our_credentials) {
    gsap.from('#pe-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_list_related_services = document.getElementById('pe-student-list-related-services');
  if (pe_student_list_related_services) {
    gsap.from('#pe-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_youre_in_good_hands = document.getElementById('pe-student-section-youre-in-good-hands');
  if (pe_student_section_youre_in_good_hands) {
    gsap.fromTo('#pe-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_student_section_21 = document.getElementById('pe-student-section-21');
  if (pe_student_section_21) {
    gsap.fromTo('#pe-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('pe-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (pe_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#pe-business-form-conduct-business-in-brazil-with-the-business-visa input, #pe-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_quick_facts = document.getElementById('pe-business-list-quick-facts');
  if (pe_business_list_quick_facts) {
    gsap.from('#pe-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_common_challenges_applicants_face = document.getElementById('pe-business-list-common-challenges-applicants-face');
  if (pe_business_list_common_challenges_applicants_face) {
    gsap.from('#pe-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_how_we_solve_these_challenges = document.getElementById('pe-business-list-how-we-solve-these-challenges');
  if (pe_business_list_how_we_solve_these_challenges) {
    gsap.from('#pe-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_visa_overview = document.getElementById('pe-business-section-visa-overview');
  if (pe_business_section_visa_overview) {
    gsap.fromTo('#pe-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_form_who_is_this_visa_for = document.getElementById('pe-business-form-who-is-this-visa-for');
  if (pe_business_form_who_is_this_visa_for) {
    gsap.from('#pe-business-form-who-is-this-visa-for input, #pe-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_required_documents = document.getElementById('pe-business-list-required-documents');
  if (pe_business_list_required_documents) {
    gsap.from('#pe-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_application_process = document.getElementById('pe-business-list-application-process');
  if (pe_business_list_application_process) {
    gsap.from('#pe-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_timelines_deadlines = document.getElementById('pe-business-section-timelines-deadlines');
  if (pe_business_section_timelines_deadlines) {
    gsap.fromTo('#pe-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_fees_costs = document.getElementById('pe-business-section-fees-costs');
  if (pe_business_section_fees_costs) {
    gsap.fromTo('#pe-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_risks_common_mistakes = document.getElementById('pe-business-list-risks-common-mistakes');
  if (pe_business_list_risks_common_mistakes) {
    gsap.from('#pe-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_diy_vs_professional_assistance = document.getElementById('pe-business-section-diy-vs-professional-assistance');
  if (pe_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_pernambuco_specific_context = document.getElementById('pe-business-section-pernambuco-specific-context');
  if (pe_business_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-business-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_what_our_clients_say = document.getElementById('pe-business-section-what-our-clients-say');
  if (pe_business_section_what_our_clients_say) {
    gsap.fromTo('#pe-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_frequently_asked_questions = document.getElementById('pe-business-section-frequently-asked-questions');
  if (pe_business_section_frequently_asked_questions) {
    gsap.fromTo('#pe-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_international_support = document.getElementById('pe-business-section-international-support');
  if (pe_business_section_international_support) {
    gsap.fromTo('#pe-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_our_credentials = document.getElementById('pe-business-list-our-credentials');
  if (pe_business_list_our_credentials) {
    gsap.from('#pe-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_list_related_services = document.getElementById('pe-business-list-related-services');
  if (pe_business_list_related_services) {
    gsap.from('#pe-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_youre_in_good_hands = document.getElementById('pe-business-section-youre-in-good-hands');
  if (pe_business_section_youre_in_good_hands) {
    gsap.fromTo('#pe-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_business_section_21 = document.getElementById('pe-business-section-21');
  if (pe_business_section_21) {
    gsap.fromTo('#pe-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('pe-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (pe_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#pe-research-form-conduct-research-in-brazil-with-the-research-visa input, #pe-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_quick_facts = document.getElementById('pe-research-list-quick-facts');
  if (pe_research_list_quick_facts) {
    gsap.from('#pe-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_common_challenges_applicants_face = document.getElementById('pe-research-list-common-challenges-applicants-face');
  if (pe_research_list_common_challenges_applicants_face) {
    gsap.from('#pe-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_how_we_solve_these_challenges = document.getElementById('pe-research-list-how-we-solve-these-challenges');
  if (pe_research_list_how_we_solve_these_challenges) {
    gsap.from('#pe-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_visa_overview = document.getElementById('pe-research-section-visa-overview');
  if (pe_research_section_visa_overview) {
    gsap.fromTo('#pe-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_form_who_is_this_visa_for = document.getElementById('pe-research-form-who-is-this-visa-for');
  if (pe_research_form_who_is_this_visa_for) {
    gsap.from('#pe-research-form-who-is-this-visa-for input, #pe-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_required_documents = document.getElementById('pe-research-list-required-documents');
  if (pe_research_list_required_documents) {
    gsap.from('#pe-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_application_process = document.getElementById('pe-research-list-application-process');
  if (pe_research_list_application_process) {
    gsap.from('#pe-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_timelines_deadlines = document.getElementById('pe-research-section-timelines-deadlines');
  if (pe_research_section_timelines_deadlines) {
    gsap.fromTo('#pe-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_fees_costs = document.getElementById('pe-research-section-fees-costs');
  if (pe_research_section_fees_costs) {
    gsap.fromTo('#pe-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_risks_common_mistakes = document.getElementById('pe-research-list-risks-common-mistakes');
  if (pe_research_list_risks_common_mistakes) {
    gsap.from('#pe-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_diy_vs_professional_assistance = document.getElementById('pe-research-section-diy-vs-professional-assistance');
  if (pe_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_pernambuco_specific_context = document.getElementById('pe-research-section-pernambuco-specific-context');
  if (pe_research_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-research-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_what_our_clients_say = document.getElementById('pe-research-section-what-our-clients-say');
  if (pe_research_section_what_our_clients_say) {
    gsap.fromTo('#pe-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_frequently_asked_questions = document.getElementById('pe-research-section-frequently-asked-questions');
  if (pe_research_section_frequently_asked_questions) {
    gsap.fromTo('#pe-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_international_support = document.getElementById('pe-research-section-international-support');
  if (pe_research_section_international_support) {
    gsap.fromTo('#pe-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_our_credentials = document.getElementById('pe-research-list-our-credentials');
  if (pe_research_list_our_credentials) {
    gsap.from('#pe-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_list_related_services = document.getElementById('pe-research-list-related-services');
  if (pe_research_list_related_services) {
    gsap.from('#pe-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_youre_in_good_hands = document.getElementById('pe-research-section-youre-in-good-hands');
  if (pe_research_section_youre_in_good_hands) {
    gsap.fromTo('#pe-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_research_section_21 = document.getElementById('pe-research-section-21');
  if (pe_research_section_21) {
    gsap.fromTo('#pe-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('pe-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (pe_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#pe-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #pe-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_quick_facts = document.getElementById('pe-diplomatic-list-quick-facts');
  if (pe_diplomatic_list_quick_facts) {
    gsap.from('#pe-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_common_challenges_applicants_face = document.getElementById('pe-diplomatic-list-common-challenges-applicants-face');
  if (pe_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#pe-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_how_we_solve_these_challenges = document.getElementById('pe-diplomatic-list-how-we-solve-these-challenges');
  if (pe_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#pe-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_visa_overview = document.getElementById('pe-diplomatic-section-visa-overview');
  if (pe_diplomatic_section_visa_overview) {
    gsap.fromTo('#pe-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_form_who_is_this_visa_for = document.getElementById('pe-diplomatic-form-who-is-this-visa-for');
  if (pe_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#pe-diplomatic-form-who-is-this-visa-for input, #pe-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_required_documents = document.getElementById('pe-diplomatic-list-required-documents');
  if (pe_diplomatic_list_required_documents) {
    gsap.from('#pe-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_application_process = document.getElementById('pe-diplomatic-list-application-process');
  if (pe_diplomatic_list_application_process) {
    gsap.from('#pe-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_timelines_deadlines = document.getElementById('pe-diplomatic-section-timelines-deadlines');
  if (pe_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#pe-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_fees_costs = document.getElementById('pe-diplomatic-section-fees-costs');
  if (pe_diplomatic_section_fees_costs) {
    gsap.fromTo('#pe-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_risks_common_mistakes = document.getElementById('pe-diplomatic-list-risks-common-mistakes');
  if (pe_diplomatic_list_risks_common_mistakes) {
    gsap.from('#pe-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_diy_vs_professional_assistance = document.getElementById('pe-diplomatic-section-diy-vs-professional-assistance');
  if (pe_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_pernambuco_specific_context = document.getElementById('pe-diplomatic-section-pernambuco-specific-context');
  if (pe_diplomatic_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-diplomatic-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_what_our_clients_say = document.getElementById('pe-diplomatic-section-what-our-clients-say');
  if (pe_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#pe-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_frequently_asked_questions = document.getElementById('pe-diplomatic-section-frequently-asked-questions');
  if (pe_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#pe-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_international_support = document.getElementById('pe-diplomatic-section-international-support');
  if (pe_diplomatic_section_international_support) {
    gsap.fromTo('#pe-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_our_credentials = document.getElementById('pe-diplomatic-list-our-credentials');
  if (pe_diplomatic_list_our_credentials) {
    gsap.from('#pe-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_list_related_services = document.getElementById('pe-diplomatic-list-related-services');
  if (pe_diplomatic_list_related_services) {
    gsap.from('#pe-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_youre_in_good_hands = document.getElementById('pe-diplomatic-section-youre-in-good-hands');
  if (pe_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#pe-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_diplomatic_section_21 = document.getElementById('pe-diplomatic-section-21');
  if (pe_diplomatic_section_21) {
    gsap.fromTo('#pe-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('pe-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (pe_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#pe-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #pe-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_quick_facts = document.getElementById('pe-journalist-list-quick-facts');
  if (pe_journalist_list_quick_facts) {
    gsap.from('#pe-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_common_challenges_applicants_face = document.getElementById('pe-journalist-list-common-challenges-applicants-face');
  if (pe_journalist_list_common_challenges_applicants_face) {
    gsap.from('#pe-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_how_we_solve_these_challenges = document.getElementById('pe-journalist-list-how-we-solve-these-challenges');
  if (pe_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#pe-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_visa_overview = document.getElementById('pe-journalist-section-visa-overview');
  if (pe_journalist_section_visa_overview) {
    gsap.fromTo('#pe-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_form_who_is_this_visa_for = document.getElementById('pe-journalist-form-who-is-this-visa-for');
  if (pe_journalist_form_who_is_this_visa_for) {
    gsap.from('#pe-journalist-form-who-is-this-visa-for input, #pe-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_required_documents = document.getElementById('pe-journalist-list-required-documents');
  if (pe_journalist_list_required_documents) {
    gsap.from('#pe-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_application_process = document.getElementById('pe-journalist-list-application-process');
  if (pe_journalist_list_application_process) {
    gsap.from('#pe-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_timelines_deadlines = document.getElementById('pe-journalist-section-timelines-deadlines');
  if (pe_journalist_section_timelines_deadlines) {
    gsap.fromTo('#pe-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_fees_costs = document.getElementById('pe-journalist-section-fees-costs');
  if (pe_journalist_section_fees_costs) {
    gsap.fromTo('#pe-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_risks_common_mistakes = document.getElementById('pe-journalist-list-risks-common-mistakes');
  if (pe_journalist_list_risks_common_mistakes) {
    gsap.from('#pe-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_diy_vs_professional_assistance = document.getElementById('pe-journalist-section-diy-vs-professional-assistance');
  if (pe_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_pernambuco_specific_context = document.getElementById('pe-journalist-section-pernambuco-specific-context');
  if (pe_journalist_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-journalist-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_what_our_clients_say = document.getElementById('pe-journalist-section-what-our-clients-say');
  if (pe_journalist_section_what_our_clients_say) {
    gsap.fromTo('#pe-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_frequently_asked_questions = document.getElementById('pe-journalist-section-frequently-asked-questions');
  if (pe_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#pe-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_international_support = document.getElementById('pe-journalist-section-international-support');
  if (pe_journalist_section_international_support) {
    gsap.fromTo('#pe-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_our_credentials = document.getElementById('pe-journalist-list-our-credentials');
  if (pe_journalist_list_our_credentials) {
    gsap.from('#pe-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_list_related_services = document.getElementById('pe-journalist-list-related-services');
  if (pe_journalist_list_related_services) {
    gsap.from('#pe-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_youre_in_good_hands = document.getElementById('pe-journalist-section-youre-in-good-hands');
  if (pe_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#pe-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_journalist_section_21 = document.getElementById('pe-journalist-section-21');
  if (pe_journalist_section_21) {
    gsap.fromTo('#pe-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('pe-fines-form-resolve-immigration-fines-in-brazil');
  if (pe_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#pe-fines-form-resolve-immigration-fines-in-brazil input, #pe-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_quick_facts = document.getElementById('pe-fines-list-quick-facts');
  if (pe_fines_list_quick_facts) {
    gsap.from('#pe-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_common_challenges_applicants_face = document.getElementById('pe-fines-list-common-challenges-applicants-face');
  if (pe_fines_list_common_challenges_applicants_face) {
    gsap.from('#pe-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_how_we_solve_these_challenges = document.getElementById('pe-fines-list-how-we-solve-these-challenges');
  if (pe_fines_list_how_we_solve_these_challenges) {
    gsap.from('#pe-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_service_overview = document.getElementById('pe-fines-section-service-overview');
  if (pe_fines_section_service_overview) {
    gsap.fromTo('#pe-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_form_who_is_this_service_for = document.getElementById('pe-fines-form-who-is-this-service-for');
  if (pe_fines_form_who_is_this_service_for) {
    gsap.from('#pe-fines-form-who-is-this-service-for input, #pe-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_required_documents = document.getElementById('pe-fines-list-required-documents');
  if (pe_fines_list_required_documents) {
    gsap.from('#pe-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_process = document.getElementById('pe-fines-list-process');
  if (pe_fines_list_process) {
    gsap.from('#pe-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_timelines_deadlines = document.getElementById('pe-fines-section-timelines-deadlines');
  if (pe_fines_section_timelines_deadlines) {
    gsap.fromTo('#pe-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_fees_costs = document.getElementById('pe-fines-section-fees-costs');
  if (pe_fines_section_fees_costs) {
    gsap.fromTo('#pe-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_risks_common_mistakes = document.getElementById('pe-fines-list-risks-common-mistakes');
  if (pe_fines_list_risks_common_mistakes) {
    gsap.from('#pe-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_diy_vs_professional_assistance = document.getElementById('pe-fines-section-diy-vs-professional-assistance');
  if (pe_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_pernambuco_specific_context = document.getElementById('pe-fines-section-pernambuco-specific-context');
  if (pe_fines_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-fines-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_what_our_clients_say = document.getElementById('pe-fines-section-what-our-clients-say');
  if (pe_fines_section_what_our_clients_say) {
    gsap.fromTo('#pe-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_frequently_asked_questions = document.getElementById('pe-fines-section-frequently-asked-questions');
  if (pe_fines_section_frequently_asked_questions) {
    gsap.fromTo('#pe-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_international_support = document.getElementById('pe-fines-section-international-support');
  if (pe_fines_section_international_support) {
    gsap.fromTo('#pe-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_our_credentials = document.getElementById('pe-fines-list-our-credentials');
  if (pe_fines_list_our_credentials) {
    gsap.from('#pe-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_list_related_services = document.getElementById('pe-fines-list-related-services');
  if (pe_fines_list_related_services) {
    gsap.from('#pe-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_youre_in_good_hands = document.getElementById('pe-fines-section-youre-in-good-hands');
  if (pe_fines_section_youre_in_good_hands) {
    gsap.fromTo('#pe-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_fines_section_21 = document.getElementById('pe-fines-section-21');
  if (pe_fines_section_21) {
    gsap.fromTo('#pe-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_form_deportation_assistance_in_brazil = document.getElementById('pe-deportation-form-deportation-assistance-in-brazil');
  if (pe_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#pe-deportation-form-deportation-assistance-in-brazil input, #pe-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_quick_facts = document.getElementById('pe-deportation-list-quick-facts');
  if (pe_deportation_list_quick_facts) {
    gsap.from('#pe-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_common_challenges_applicants_face = document.getElementById('pe-deportation-list-common-challenges-applicants-face');
  if (pe_deportation_list_common_challenges_applicants_face) {
    gsap.from('#pe-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_how_we_solve_these_challenges = document.getElementById('pe-deportation-list-how-we-solve-these-challenges');
  if (pe_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#pe-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_service_overview = document.getElementById('pe-deportation-section-service-overview');
  if (pe_deportation_section_service_overview) {
    gsap.fromTo('#pe-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_form_who_is_this_service_for = document.getElementById('pe-deportation-form-who-is-this-service-for');
  if (pe_deportation_form_who_is_this_service_for) {
    gsap.from('#pe-deportation-form-who-is-this-service-for input, #pe-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_required_documents = document.getElementById('pe-deportation-list-required-documents');
  if (pe_deportation_list_required_documents) {
    gsap.from('#pe-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_process = document.getElementById('pe-deportation-list-process');
  if (pe_deportation_list_process) {
    gsap.from('#pe-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_timelines_deadlines = document.getElementById('pe-deportation-section-timelines-deadlines');
  if (pe_deportation_section_timelines_deadlines) {
    gsap.fromTo('#pe-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_fees_costs = document.getElementById('pe-deportation-section-fees-costs');
  if (pe_deportation_section_fees_costs) {
    gsap.fromTo('#pe-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_risks_common_mistakes = document.getElementById('pe-deportation-list-risks-common-mistakes');
  if (pe_deportation_list_risks_common_mistakes) {
    gsap.from('#pe-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_diy_vs_professional_assistance = document.getElementById('pe-deportation-section-diy-vs-professional-assistance');
  if (pe_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_pernambuco_specific_context = document.getElementById('pe-deportation-section-pernambuco-specific-context');
  if (pe_deportation_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-deportation-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_what_our_clients_say = document.getElementById('pe-deportation-section-what-our-clients-say');
  if (pe_deportation_section_what_our_clients_say) {
    gsap.fromTo('#pe-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_frequently_asked_questions = document.getElementById('pe-deportation-section-frequently-asked-questions');
  if (pe_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#pe-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_international_support = document.getElementById('pe-deportation-section-international-support');
  if (pe_deportation_section_international_support) {
    gsap.fromTo('#pe-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_our_credentials = document.getElementById('pe-deportation-list-our-credentials');
  if (pe_deportation_list_our_credentials) {
    gsap.from('#pe-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_list_related_services = document.getElementById('pe-deportation-list-related-services');
  if (pe_deportation_list_related_services) {
    gsap.from('#pe-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_youre_in_good_hands = document.getElementById('pe-deportation-section-youre-in-good-hands');
  if (pe_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#pe-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_deportation_section_21 = document.getElementById('pe-deportation-section-21');
  if (pe_deportation_section_21) {
    gsap.fromTo('#pe-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('pe-translation-form-sworn-document-translation-services-in-brazil');
  if (pe_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#pe-translation-form-sworn-document-translation-services-in-brazil input, #pe-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_quick_facts = document.getElementById('pe-translation-list-quick-facts');
  if (pe_translation_list_quick_facts) {
    gsap.from('#pe-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_common_challenges_applicants_face = document.getElementById('pe-translation-list-common-challenges-applicants-face');
  if (pe_translation_list_common_challenges_applicants_face) {
    gsap.from('#pe-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_how_we_solve_these_challenges = document.getElementById('pe-translation-list-how-we-solve-these-challenges');
  if (pe_translation_list_how_we_solve_these_challenges) {
    gsap.from('#pe-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_service_overview = document.getElementById('pe-translation-section-service-overview');
  if (pe_translation_section_service_overview) {
    gsap.fromTo('#pe-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_form_who_is_this_service_for = document.getElementById('pe-translation-form-who-is-this-service-for');
  if (pe_translation_form_who_is_this_service_for) {
    gsap.from('#pe-translation-form-who-is-this-service-for input, #pe-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_required_documents = document.getElementById('pe-translation-list-required-documents');
  if (pe_translation_list_required_documents) {
    gsap.from('#pe-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_process = document.getElementById('pe-translation-list-process');
  if (pe_translation_list_process) {
    gsap.from('#pe-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_timelines_deadlines = document.getElementById('pe-translation-section-timelines-deadlines');
  if (pe_translation_section_timelines_deadlines) {
    gsap.fromTo('#pe-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_fees_costs = document.getElementById('pe-translation-section-fees-costs');
  if (pe_translation_section_fees_costs) {
    gsap.fromTo('#pe-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_risks_common_mistakes = document.getElementById('pe-translation-list-risks-common-mistakes');
  if (pe_translation_list_risks_common_mistakes) {
    gsap.from('#pe-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_diy_vs_professional_assistance = document.getElementById('pe-translation-section-diy-vs-professional-assistance');
  if (pe_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_pernambuco_specific_context = document.getElementById('pe-translation-section-pernambuco-specific-context');
  if (pe_translation_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-translation-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_what_our_clients_say = document.getElementById('pe-translation-section-what-our-clients-say');
  if (pe_translation_section_what_our_clients_say) {
    gsap.fromTo('#pe-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_frequently_asked_questions = document.getElementById('pe-translation-section-frequently-asked-questions');
  if (pe_translation_section_frequently_asked_questions) {
    gsap.fromTo('#pe-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_international_support = document.getElementById('pe-translation-section-international-support');
  if (pe_translation_section_international_support) {
    gsap.fromTo('#pe-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_our_credentials = document.getElementById('pe-translation-list-our-credentials');
  if (pe_translation_list_our_credentials) {
    gsap.from('#pe-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_list_related_services = document.getElementById('pe-translation-list-related-services');
  if (pe_translation_list_related_services) {
    gsap.from('#pe-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_youre_in_good_hands = document.getElementById('pe-translation-section-youre-in-good-hands');
  if (pe_translation_section_youre_in_good_hands) {
    gsap.fromTo('#pe-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_translation_section_21 = document.getElementById('pe-translation-section-21');
  if (pe_translation_section_21) {
    gsap.fromTo('#pe-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('pe-expulsion-form-expulsion-assistance-in-brazil');
  if (pe_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#pe-expulsion-form-expulsion-assistance-in-brazil input, #pe-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_quick_facts = document.getElementById('pe-expulsion-list-quick-facts');
  if (pe_expulsion_list_quick_facts) {
    gsap.from('#pe-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_common_challenges_applicants_face = document.getElementById('pe-expulsion-list-common-challenges-applicants-face');
  if (pe_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#pe-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_how_we_solve_these_challenges = document.getElementById('pe-expulsion-list-how-we-solve-these-challenges');
  if (pe_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#pe-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_service_overview = document.getElementById('pe-expulsion-section-service-overview');
  if (pe_expulsion_section_service_overview) {
    gsap.fromTo('#pe-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_form_who_is_this_service_for = document.getElementById('pe-expulsion-form-who-is-this-service-for');
  if (pe_expulsion_form_who_is_this_service_for) {
    gsap.from('#pe-expulsion-form-who-is-this-service-for input, #pe-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_required_documents = document.getElementById('pe-expulsion-list-required-documents');
  if (pe_expulsion_list_required_documents) {
    gsap.from('#pe-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_process = document.getElementById('pe-expulsion-list-process');
  if (pe_expulsion_list_process) {
    gsap.from('#pe-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_timelines_deadlines = document.getElementById('pe-expulsion-section-timelines-deadlines');
  if (pe_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#pe-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_fees_costs = document.getElementById('pe-expulsion-section-fees-costs');
  if (pe_expulsion_section_fees_costs) {
    gsap.fromTo('#pe-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_risks_common_mistakes = document.getElementById('pe-expulsion-list-risks-common-mistakes');
  if (pe_expulsion_list_risks_common_mistakes) {
    gsap.from('#pe-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_diy_vs_professional_assistance = document.getElementById('pe-expulsion-section-diy-vs-professional-assistance');
  if (pe_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_pernambuco_specific_context = document.getElementById('pe-expulsion-section-pernambuco-specific-context');
  if (pe_expulsion_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-expulsion-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_what_our_clients_say = document.getElementById('pe-expulsion-section-what-our-clients-say');
  if (pe_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#pe-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_frequently_asked_questions = document.getElementById('pe-expulsion-section-frequently-asked-questions');
  if (pe_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#pe-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_international_support = document.getElementById('pe-expulsion-section-international-support');
  if (pe_expulsion_section_international_support) {
    gsap.fromTo('#pe-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_our_credentials = document.getElementById('pe-expulsion-list-our-credentials');
  if (pe_expulsion_list_our_credentials) {
    gsap.from('#pe-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_list_related_services = document.getElementById('pe-expulsion-list-related-services');
  if (pe_expulsion_list_related_services) {
    gsap.from('#pe-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_youre_in_good_hands = document.getElementById('pe-expulsion-section-youre-in-good-hands');
  if (pe_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#pe-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_expulsion_section_21 = document.getElementById('pe-expulsion-section-21');
  if (pe_expulsion_section_21) {
    gsap.fromTo('#pe-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('pe-appeals-form-appeal-immigration-denials-in-brazil');
  if (pe_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#pe-appeals-form-appeal-immigration-denials-in-brazil input, #pe-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_quick_facts = document.getElementById('pe-appeals-list-quick-facts');
  if (pe_appeals_list_quick_facts) {
    gsap.from('#pe-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_common_challenges_applicants_face = document.getElementById('pe-appeals-list-common-challenges-applicants-face');
  if (pe_appeals_list_common_challenges_applicants_face) {
    gsap.from('#pe-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_how_we_solve_these_challenges = document.getElementById('pe-appeals-list-how-we-solve-these-challenges');
  if (pe_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#pe-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_service_overview = document.getElementById('pe-appeals-section-service-overview');
  if (pe_appeals_section_service_overview) {
    gsap.fromTo('#pe-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_form_who_is_this_service_for = document.getElementById('pe-appeals-form-who-is-this-service-for');
  if (pe_appeals_form_who_is_this_service_for) {
    gsap.from('#pe-appeals-form-who-is-this-service-for input, #pe-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_required_documents = document.getElementById('pe-appeals-list-required-documents');
  if (pe_appeals_list_required_documents) {
    gsap.from('#pe-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_appeal_process = document.getElementById('pe-appeals-list-appeal-process');
  if (pe_appeals_list_appeal_process) {
    gsap.from('#pe-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_timelines_deadlines = document.getElementById('pe-appeals-section-timelines-deadlines');
  if (pe_appeals_section_timelines_deadlines) {
    gsap.fromTo('#pe-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_fees_costs = document.getElementById('pe-appeals-section-fees-costs');
  if (pe_appeals_section_fees_costs) {
    gsap.fromTo('#pe-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_risks_common_mistakes = document.getElementById('pe-appeals-list-risks-common-mistakes');
  if (pe_appeals_list_risks_common_mistakes) {
    gsap.from('#pe-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_diy_vs_professional_assistance = document.getElementById('pe-appeals-section-diy-vs-professional-assistance');
  if (pe_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_pernambuco_specific_context = document.getElementById('pe-appeals-section-pernambuco-specific-context');
  if (pe_appeals_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-appeals-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_what_our_clients_say = document.getElementById('pe-appeals-section-what-our-clients-say');
  if (pe_appeals_section_what_our_clients_say) {
    gsap.fromTo('#pe-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_frequently_asked_questions = document.getElementById('pe-appeals-section-frequently-asked-questions');
  if (pe_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#pe-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_international_support = document.getElementById('pe-appeals-section-international-support');
  if (pe_appeals_section_international_support) {
    gsap.fromTo('#pe-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_our_credentials = document.getElementById('pe-appeals-list-our-credentials');
  if (pe_appeals_list_our_credentials) {
    gsap.from('#pe-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_list_related_services = document.getElementById('pe-appeals-list-related-services');
  if (pe_appeals_list_related_services) {
    gsap.from('#pe-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_youre_in_good_hands = document.getElementById('pe-appeals-section-youre-in-good-hands');
  if (pe_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#pe-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_appeals_section_21 = document.getElementById('pe-appeals-section-21');
  if (pe_appeals_section_21) {
    gsap.fromTo('#pe-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('pe-consular-form-consular-services-in-brazil-for-citizens');
  if (pe_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#pe-consular-form-consular-services-in-brazil-for-citizens input, #pe-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_quick_facts = document.getElementById('pe-consular-list-quick-facts');
  if (pe_consular_list_quick_facts) {
    gsap.from('#pe-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_common_challenges_applicants_face = document.getElementById('pe-consular-list-common-challenges-applicants-face');
  if (pe_consular_list_common_challenges_applicants_face) {
    gsap.from('#pe-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_how_we_solve_these_challenges = document.getElementById('pe-consular-list-how-we-solve-these-challenges');
  if (pe_consular_list_how_we_solve_these_challenges) {
    gsap.from('#pe-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_service_overview = document.getElementById('pe-consular-section-service-overview');
  if (pe_consular_section_service_overview) {
    gsap.fromTo('#pe-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_form_who_is_this_service_for = document.getElementById('pe-consular-form-who-is-this-service-for');
  if (pe_consular_form_who_is_this_service_for) {
    gsap.from('#pe-consular-form-who-is-this-service-for input, #pe-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_required_documents = document.getElementById('pe-consular-list-required-documents');
  if (pe_consular_list_required_documents) {
    gsap.from('#pe-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_process = document.getElementById('pe-consular-list-process');
  if (pe_consular_list_process) {
    gsap.from('#pe-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_timelines_deadlines = document.getElementById('pe-consular-section-timelines-deadlines');
  if (pe_consular_section_timelines_deadlines) {
    gsap.fromTo('#pe-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_fees_costs = document.getElementById('pe-consular-section-fees-costs');
  if (pe_consular_section_fees_costs) {
    gsap.fromTo('#pe-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_risks_common_mistakes = document.getElementById('pe-consular-list-risks-common-mistakes');
  if (pe_consular_list_risks_common_mistakes) {
    gsap.from('#pe-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_diy_vs_professional_assistance = document.getElementById('pe-consular-section-diy-vs-professional-assistance');
  if (pe_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_pernambuco_specific_context = document.getElementById('pe-consular-section-pernambuco-specific-context');
  if (pe_consular_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-consular-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_what_our_clients_say = document.getElementById('pe-consular-section-what-our-clients-say');
  if (pe_consular_section_what_our_clients_say) {
    gsap.fromTo('#pe-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_frequently_asked_questions = document.getElementById('pe-consular-section-frequently-asked-questions');
  if (pe_consular_section_frequently_asked_questions) {
    gsap.fromTo('#pe-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_international_support = document.getElementById('pe-consular-section-international-support');
  if (pe_consular_section_international_support) {
    gsap.fromTo('#pe-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_our_credentials = document.getElementById('pe-consular-list-our-credentials');
  if (pe_consular_list_our_credentials) {
    gsap.from('#pe-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_list_related_services = document.getElementById('pe-consular-list-related-services');
  if (pe_consular_list_related_services) {
    gsap.from('#pe-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_youre_in_good_hands = document.getElementById('pe-consular-section-youre-in-good-hands');
  if (pe_consular_section_youre_in_good_hands) {
    gsap.fromTo('#pe-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_consular_section_21 = document.getElementById('pe-consular-section-21');
  if (pe_consular_section_21) {
    gsap.fromTo('#pe-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('pe-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (pe_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#pe-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #pe-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_quick_facts = document.getElementById('pe-criminalrecords-list-quick-facts');
  if (pe_criminalrecords_list_quick_facts) {
    gsap.from('#pe-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_common_challenges_applicants_face = document.getElementById('pe-criminalrecords-list-common-challenges-applicants-face');
  if (pe_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#pe-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('pe-criminalrecords-list-how-we-solve-these-challenges');
  if (pe_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#pe-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_service_overview = document.getElementById('pe-criminalrecords-section-service-overview');
  if (pe_criminalrecords_section_service_overview) {
    gsap.fromTo('#pe-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_form_who_is_this_service_for = document.getElementById('pe-criminalrecords-form-who-is-this-service-for');
  if (pe_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#pe-criminalrecords-form-who-is-this-service-for input, #pe-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_required_documents = document.getElementById('pe-criminalrecords-list-required-documents');
  if (pe_criminalrecords_list_required_documents) {
    gsap.from('#pe-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_process = document.getElementById('pe-criminalrecords-list-process');
  if (pe_criminalrecords_list_process) {
    gsap.from('#pe-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_timelines_deadlines = document.getElementById('pe-criminalrecords-section-timelines-deadlines');
  if (pe_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#pe-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_fees_costs = document.getElementById('pe-criminalrecords-section-fees-costs');
  if (pe_criminalrecords_section_fees_costs) {
    gsap.fromTo('#pe-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_risks_common_mistakes = document.getElementById('pe-criminalrecords-list-risks-common-mistakes');
  if (pe_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#pe-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('pe-criminalrecords-section-diy-vs-professional-assistance');
  if (pe_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_pernambuco_specific_context = document.getElementById('pe-criminalrecords-section-pernambuco-specific-context');
  if (pe_criminalrecords_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-criminalrecords-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_what_our_clients_say = document.getElementById('pe-criminalrecords-section-what-our-clients-say');
  if (pe_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#pe-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_frequently_asked_questions = document.getElementById('pe-criminalrecords-section-frequently-asked-questions');
  if (pe_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#pe-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_international_support = document.getElementById('pe-criminalrecords-section-international-support');
  if (pe_criminalrecords_section_international_support) {
    gsap.fromTo('#pe-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_our_credentials = document.getElementById('pe-criminalrecords-list-our-credentials');
  if (pe_criminalrecords_list_our_credentials) {
    gsap.from('#pe-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_list_related_services = document.getElementById('pe-criminalrecords-list-related-services');
  if (pe_criminalrecords_list_related_services) {
    gsap.from('#pe-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_youre_in_good_hands = document.getElementById('pe-criminalrecords-section-youre-in-good-hands');
  if (pe_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#pe-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_criminalrecords_section_21 = document.getElementById('pe-criminalrecords-section-21');
  if (pe_criminalrecords_section_21) {
    gsap.fromTo('#pe-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_form_extradition_assistance_in_brazil = document.getElementById('pe-extradition-form-extradition-assistance-in-brazil');
  if (pe_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#pe-extradition-form-extradition-assistance-in-brazil input, #pe-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_quick_facts = document.getElementById('pe-extradition-list-quick-facts');
  if (pe_extradition_list_quick_facts) {
    gsap.from('#pe-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_common_challenges_applicants_face = document.getElementById('pe-extradition-list-common-challenges-applicants-face');
  if (pe_extradition_list_common_challenges_applicants_face) {
    gsap.from('#pe-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_how_we_solve_these_challenges = document.getElementById('pe-extradition-list-how-we-solve-these-challenges');
  if (pe_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#pe-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_service_overview = document.getElementById('pe-extradition-section-service-overview');
  if (pe_extradition_section_service_overview) {
    gsap.fromTo('#pe-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_form_who_is_this_service_for = document.getElementById('pe-extradition-form-who-is-this-service-for');
  if (pe_extradition_form_who_is_this_service_for) {
    gsap.from('#pe-extradition-form-who-is-this-service-for input, #pe-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_required_documents = document.getElementById('pe-extradition-list-required-documents');
  if (pe_extradition_list_required_documents) {
    gsap.from('#pe-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_process = document.getElementById('pe-extradition-list-process');
  if (pe_extradition_list_process) {
    gsap.from('#pe-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_timelines_deadlines = document.getElementById('pe-extradition-section-timelines-deadlines');
  if (pe_extradition_section_timelines_deadlines) {
    gsap.fromTo('#pe-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_fees_costs = document.getElementById('pe-extradition-section-fees-costs');
  if (pe_extradition_section_fees_costs) {
    gsap.fromTo('#pe-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_risks_common_mistakes = document.getElementById('pe-extradition-list-risks-common-mistakes');
  if (pe_extradition_list_risks_common_mistakes) {
    gsap.from('#pe-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_diy_vs_professional_assistance = document.getElementById('pe-extradition-section-diy-vs-professional-assistance');
  if (pe_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_pernambuco_specific_context = document.getElementById('pe-extradition-section-pernambuco-specific-context');
  if (pe_extradition_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-extradition-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_what_our_clients_say = document.getElementById('pe-extradition-section-what-our-clients-say');
  if (pe_extradition_section_what_our_clients_say) {
    gsap.fromTo('#pe-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_frequently_asked_questions = document.getElementById('pe-extradition-section-frequently-asked-questions');
  if (pe_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#pe-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_international_support = document.getElementById('pe-extradition-section-international-support');
  if (pe_extradition_section_international_support) {
    gsap.fromTo('#pe-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_our_credentials = document.getElementById('pe-extradition-list-our-credentials');
  if (pe_extradition_list_our_credentials) {
    gsap.from('#pe-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_list_related_services = document.getElementById('pe-extradition-list-related-services');
  if (pe_extradition_list_related_services) {
    gsap.from('#pe-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_youre_in_good_hands = document.getElementById('pe-extradition-section-youre-in-good-hands');
  if (pe_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#pe-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_extradition_section_21 = document.getElementById('pe-extradition-section-21');
  if (pe_extradition_section_21) {
    gsap.fromTo('#pe-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_form_discover_the_north_amazon_and_beyond = document.getElementById('pe-north-form-discover-the-north-amazon-and-beyond');
  if (pe_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#pe-north-form-discover-the-north-amazon-and-beyond input, #pe-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_quick_facts = document.getElementById('pe-north-list-quick-facts');
  if (pe_north_list_quick_facts) {
    gsap.from('#pe-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_common_challenges_applicants_face = document.getElementById('pe-north-list-common-challenges-applicants-face');
  if (pe_north_list_common_challenges_applicants_face) {
    gsap.from('#pe-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_how_we_solve_these_challenges = document.getElementById('pe-north-list-how-we-solve-these-challenges');
  if (pe_north_list_how_we_solve_these_challenges) {
    gsap.from('#pe-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_trip_overview = document.getElementById('pe-north-section-trip-overview');
  if (pe_north_section_trip_overview) {
    gsap.fromTo('#pe-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_form_who_is_this_trip_for = document.getElementById('pe-north-form-who-is-this-trip-for');
  if (pe_north_form_who_is_this_trip_for) {
    gsap.from('#pe-north-form-who-is-this-trip-for input, #pe-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_required_documents = document.getElementById('pe-north-list-required-documents');
  if (pe_north_list_required_documents) {
    gsap.from('#pe-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_booking_process = document.getElementById('pe-north-list-booking-process');
  if (pe_north_list_booking_process) {
    gsap.from('#pe-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_timelines_deadlines = document.getElementById('pe-north-section-timelines-deadlines');
  if (pe_north_section_timelines_deadlines) {
    gsap.fromTo('#pe-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_fees_costs = document.getElementById('pe-north-section-fees-costs');
  if (pe_north_section_fees_costs) {
    gsap.fromTo('#pe-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_risks_common_mistakes = document.getElementById('pe-north-list-risks-common-mistakes');
  if (pe_north_list_risks_common_mistakes) {
    gsap.from('#pe-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_diy_vs_professional_assistance = document.getElementById('pe-north-section-diy-vs-professional-assistance');
  if (pe_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_pernambuco_specific_context = document.getElementById('pe-north-section-pernambuco-specific-context');
  if (pe_north_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-north-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_what_our_clients_say = document.getElementById('pe-north-section-what-our-clients-say');
  if (pe_north_section_what_our_clients_say) {
    gsap.fromTo('#pe-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_frequently_asked_questions = document.getElementById('pe-north-section-frequently-asked-questions');
  if (pe_north_section_frequently_asked_questions) {
    gsap.fromTo('#pe-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_international_support = document.getElementById('pe-north-section-international-support');
  if (pe_north_section_international_support) {
    gsap.fromTo('#pe-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_our_credentials = document.getElementById('pe-north-list-our-credentials');
  if (pe_north_list_our_credentials) {
    gsap.from('#pe-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_list_related_services = document.getElementById('pe-north-list-related-services');
  if (pe_north_list_related_services) {
    gsap.from('#pe-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_youre_in_good_hands = document.getElementById('pe-north-section-youre-in-good-hands');
  if (pe_north_section_youre_in_good_hands) {
    gsap.fromTo('#pe-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_north_section_21 = document.getElementById('pe-north-section-21');
  if (pe_north_section_21) {
    gsap.fromTo('#pe-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('pe-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (pe_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#pe-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #pe-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_quick_facts = document.getElementById('pe-centralwest-list-quick-facts');
  if (pe_centralwest_list_quick_facts) {
    gsap.from('#pe-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_common_challenges_applicants_face = document.getElementById('pe-centralwest-list-common-challenges-applicants-face');
  if (pe_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#pe-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_how_we_solve_these_challenges = document.getElementById('pe-centralwest-list-how-we-solve-these-challenges');
  if (pe_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#pe-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_trip_overview = document.getElementById('pe-centralwest-section-trip-overview');
  if (pe_centralwest_section_trip_overview) {
    gsap.fromTo('#pe-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_form_who_is_this_trip_for = document.getElementById('pe-centralwest-form-who-is-this-trip-for');
  if (pe_centralwest_form_who_is_this_trip_for) {
    gsap.from('#pe-centralwest-form-who-is-this-trip-for input, #pe-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_required_documents = document.getElementById('pe-centralwest-list-required-documents');
  if (pe_centralwest_list_required_documents) {
    gsap.from('#pe-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_booking_process = document.getElementById('pe-centralwest-list-booking-process');
  if (pe_centralwest_list_booking_process) {
    gsap.from('#pe-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_timelines_deadlines = document.getElementById('pe-centralwest-section-timelines-deadlines');
  if (pe_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#pe-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_fees_costs = document.getElementById('pe-centralwest-section-fees-costs');
  if (pe_centralwest_section_fees_costs) {
    gsap.fromTo('#pe-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_risks_common_mistakes = document.getElementById('pe-centralwest-list-risks-common-mistakes');
  if (pe_centralwest_list_risks_common_mistakes) {
    gsap.from('#pe-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_diy_vs_professional_assistance = document.getElementById('pe-centralwest-section-diy-vs-professional-assistance');
  if (pe_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_pernambuco_specific_context = document.getElementById('pe-centralwest-section-pernambuco-specific-context');
  if (pe_centralwest_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-centralwest-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_what_our_clients_say = document.getElementById('pe-centralwest-section-what-our-clients-say');
  if (pe_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#pe-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_frequently_asked_questions = document.getElementById('pe-centralwest-section-frequently-asked-questions');
  if (pe_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#pe-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_international_support = document.getElementById('pe-centralwest-section-international-support');
  if (pe_centralwest_section_international_support) {
    gsap.fromTo('#pe-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_our_credentials = document.getElementById('pe-centralwest-list-our-credentials');
  if (pe_centralwest_list_our_credentials) {
    gsap.from('#pe-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_list_related_services = document.getElementById('pe-centralwest-list-related-services');
  if (pe_centralwest_list_related_services) {
    gsap.from('#pe-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_youre_in_good_hands = document.getElementById('pe-centralwest-section-youre-in-good-hands');
  if (pe_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#pe-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_centralwest_section_21 = document.getElementById('pe-centralwest-section-21');
  if (pe_centralwest_section_21) {
    gsap.fromTo('#pe-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('pe-southeast-form-dynamic-southeast-cities-and-history');
  if (pe_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#pe-southeast-form-dynamic-southeast-cities-and-history input, #pe-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_quick_facts = document.getElementById('pe-southeast-list-quick-facts');
  if (pe_southeast_list_quick_facts) {
    gsap.from('#pe-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_common_challenges_applicants_face = document.getElementById('pe-southeast-list-common-challenges-applicants-face');
  if (pe_southeast_list_common_challenges_applicants_face) {
    gsap.from('#pe-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_how_we_solve_these_challenges = document.getElementById('pe-southeast-list-how-we-solve-these-challenges');
  if (pe_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#pe-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_trip_overview = document.getElementById('pe-southeast-section-trip-overview');
  if (pe_southeast_section_trip_overview) {
    gsap.fromTo('#pe-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_form_who_is_this_trip_for = document.getElementById('pe-southeast-form-who-is-this-trip-for');
  if (pe_southeast_form_who_is_this_trip_for) {
    gsap.from('#pe-southeast-form-who-is-this-trip-for input, #pe-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_required_documents = document.getElementById('pe-southeast-list-required-documents');
  if (pe_southeast_list_required_documents) {
    gsap.from('#pe-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_booking_process = document.getElementById('pe-southeast-list-booking-process');
  if (pe_southeast_list_booking_process) {
    gsap.from('#pe-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_timelines_deadlines = document.getElementById('pe-southeast-section-timelines-deadlines');
  if (pe_southeast_section_timelines_deadlines) {
    gsap.fromTo('#pe-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_fees_costs = document.getElementById('pe-southeast-section-fees-costs');
  if (pe_southeast_section_fees_costs) {
    gsap.fromTo('#pe-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_risks_common_mistakes = document.getElementById('pe-southeast-list-risks-common-mistakes');
  if (pe_southeast_list_risks_common_mistakes) {
    gsap.from('#pe-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_diy_vs_professional_assistance = document.getElementById('pe-southeast-section-diy-vs-professional-assistance');
  if (pe_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_pernambuco_specific_context = document.getElementById('pe-southeast-section-pernambuco-specific-context');
  if (pe_southeast_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-southeast-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_what_our_clients_say = document.getElementById('pe-southeast-section-what-our-clients-say');
  if (pe_southeast_section_what_our_clients_say) {
    gsap.fromTo('#pe-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_frequently_asked_questions = document.getElementById('pe-southeast-section-frequently-asked-questions');
  if (pe_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#pe-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_international_support = document.getElementById('pe-southeast-section-international-support');
  if (pe_southeast_section_international_support) {
    gsap.fromTo('#pe-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_our_credentials = document.getElementById('pe-southeast-list-our-credentials');
  if (pe_southeast_list_our_credentials) {
    gsap.from('#pe-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_list_related_services = document.getElementById('pe-southeast-list-related-services');
  if (pe_southeast_list_related_services) {
    gsap.from('#pe-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_youre_in_good_hands = document.getElementById('pe-southeast-section-youre-in-good-hands');
  if (pe_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#pe-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_southeast_section_21 = document.getElementById('pe-southeast-section-21');
  if (pe_southeast_section_21) {
    gsap.fromTo('#pe-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('pe-northeast-form-vibrant-northeast-beaches-and-culture');
  if (pe_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#pe-northeast-form-vibrant-northeast-beaches-and-culture input, #pe-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_quick_facts = document.getElementById('pe-northeast-list-quick-facts');
  if (pe_northeast_list_quick_facts) {
    gsap.from('#pe-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_common_challenges_applicants_face = document.getElementById('pe-northeast-list-common-challenges-applicants-face');
  if (pe_northeast_list_common_challenges_applicants_face) {
    gsap.from('#pe-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_how_we_solve_these_challenges = document.getElementById('pe-northeast-list-how-we-solve-these-challenges');
  if (pe_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#pe-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_trip_overview = document.getElementById('pe-northeast-section-trip-overview');
  if (pe_northeast_section_trip_overview) {
    gsap.fromTo('#pe-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_form_who_is_this_trip_for = document.getElementById('pe-northeast-form-who-is-this-trip-for');
  if (pe_northeast_form_who_is_this_trip_for) {
    gsap.from('#pe-northeast-form-who-is-this-trip-for input, #pe-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_required_documents = document.getElementById('pe-northeast-list-required-documents');
  if (pe_northeast_list_required_documents) {
    gsap.from('#pe-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_booking_process = document.getElementById('pe-northeast-list-booking-process');
  if (pe_northeast_list_booking_process) {
    gsap.from('#pe-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_timelines_deadlines = document.getElementById('pe-northeast-section-timelines-deadlines');
  if (pe_northeast_section_timelines_deadlines) {
    gsap.fromTo('#pe-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_fees_costs = document.getElementById('pe-northeast-section-fees-costs');
  if (pe_northeast_section_fees_costs) {
    gsap.fromTo('#pe-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_risks_common_mistakes = document.getElementById('pe-northeast-list-risks-common-mistakes');
  if (pe_northeast_list_risks_common_mistakes) {
    gsap.from('#pe-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_diy_vs_professional_assistance = document.getElementById('pe-northeast-section-diy-vs-professional-assistance');
  if (pe_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_pernambuco_specific_context = document.getElementById('pe-northeast-section-pernambuco-specific-context');
  if (pe_northeast_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-northeast-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_what_our_clients_say = document.getElementById('pe-northeast-section-what-our-clients-say');
  if (pe_northeast_section_what_our_clients_say) {
    gsap.fromTo('#pe-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_frequently_asked_questions = document.getElementById('pe-northeast-section-frequently-asked-questions');
  if (pe_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#pe-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_international_support = document.getElementById('pe-northeast-section-international-support');
  if (pe_northeast_section_international_support) {
    gsap.fromTo('#pe-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_our_credentials = document.getElementById('pe-northeast-list-our-credentials');
  if (pe_northeast_list_our_credentials) {
    gsap.from('#pe-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_list_related_services = document.getElementById('pe-northeast-list-related-services');
  if (pe_northeast_list_related_services) {
    gsap.from('#pe-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_youre_in_good_hands = document.getElementById('pe-northeast-section-youre-in-good-hands');
  if (pe_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#pe-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_northeast_section_21 = document.getElementById('pe-northeast-section-21');
  if (pe_northeast_section_21) {
    gsap.fromTo('#pe-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_form_charming_south_wine_and_gauchos = document.getElementById('pe-south-form-charming-south-wine-and-gauchos');
  if (pe_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#pe-south-form-charming-south-wine-and-gauchos input, #pe-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_quick_facts = document.getElementById('pe-south-list-quick-facts');
  if (pe_south_list_quick_facts) {
    gsap.from('#pe-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_common_challenges_applicants_face = document.getElementById('pe-south-list-common-challenges-applicants-face');
  if (pe_south_list_common_challenges_applicants_face) {
    gsap.from('#pe-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_how_we_solve_these_challenges = document.getElementById('pe-south-list-how-we-solve-these-challenges');
  if (pe_south_list_how_we_solve_these_challenges) {
    gsap.from('#pe-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_trip_overview = document.getElementById('pe-south-section-trip-overview');
  if (pe_south_section_trip_overview) {
    gsap.fromTo('#pe-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_form_who_is_this_trip_for = document.getElementById('pe-south-form-who-is-this-trip-for');
  if (pe_south_form_who_is_this_trip_for) {
    gsap.from('#pe-south-form-who-is-this-trip-for input, #pe-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_required_documents = document.getElementById('pe-south-list-required-documents');
  if (pe_south_list_required_documents) {
    gsap.from('#pe-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_booking_process = document.getElementById('pe-south-list-booking-process');
  if (pe_south_list_booking_process) {
    gsap.from('#pe-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_timelines_deadlines = document.getElementById('pe-south-section-timelines-deadlines');
  if (pe_south_section_timelines_deadlines) {
    gsap.fromTo('#pe-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_fees_costs = document.getElementById('pe-south-section-fees-costs');
  if (pe_south_section_fees_costs) {
    gsap.fromTo('#pe-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_risks_common_mistakes = document.getElementById('pe-south-list-risks-common-mistakes');
  if (pe_south_list_risks_common_mistakes) {
    gsap.from('#pe-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_diy_vs_professional_assistance = document.getElementById('pe-south-section-diy-vs-professional-assistance');
  if (pe_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pe-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_pernambuco_specific_context = document.getElementById('pe-south-section-pernambuco-specific-context');
  if (pe_south_section_pernambuco_specific_context) {
    gsap.fromTo('#pe-south-section-pernambuco-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_what_our_clients_say = document.getElementById('pe-south-section-what-our-clients-say');
  if (pe_south_section_what_our_clients_say) {
    gsap.fromTo('#pe-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_frequently_asked_questions = document.getElementById('pe-south-section-frequently-asked-questions');
  if (pe_south_section_frequently_asked_questions) {
    gsap.fromTo('#pe-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_international_support = document.getElementById('pe-south-section-international-support');
  if (pe_south_section_international_support) {
    gsap.fromTo('#pe-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_our_credentials = document.getElementById('pe-south-list-our-credentials');
  if (pe_south_list_our_credentials) {
    gsap.from('#pe-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_list_related_services = document.getElementById('pe-south-list-related-services');
  if (pe_south_list_related_services) {
    gsap.from('#pe-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_youre_in_good_hands = document.getElementById('pe-south-section-youre-in-good-hands');
  if (pe_south_section_youre_in_good_hands) {
    gsap.fromTo('#pe-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

  const pe_south_section_21 = document.getElementById('pe-south-section-21');
  if (pe_south_section_21) {
    gsap.fromTo('#pe-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.inOut(1.7)'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
