/** PE JS - Recife - Bold-cultural with red and pink energetics */
const STATE_CONFIG = {
  stateCode: 'pe',
  capital: 'Recife',
  formspreeUrl: 'https://formspree.io/f/xpeqbddb',
  colors: { primary: '#dc143c', secondary: '#ff69b4', accent: '#ffc0cb' },
  animations: {"enabled": true, "header": {"type": "recifeSlide", "duration": "0.6s", "easing": "cubic-bezier(0.4, 0, 0.2, 1)", "delay": "0s"}, "sections": {"type": "carnivalReveal", "duration": "0.9s", "easing": "ease-out", "stagger": "0.1s"}, "hero": {"type": "beachParallax", "speed": 0.7, "direction": "horizontal"}, "cards": {"type": "frevorBounce", "energetic": true, "rotation": 5}, "images": {"type": "colorBurst", "vibrant": true, "duration": "0.8s"}},
  interactions: {"hover": "frevo-bounce", "scroll": "carnival-flow", "transitions": "vibrant-snap", "click": "confetti-burst"},
  premiumEffects: ["carnival-gradient", "confetti-particles", "beach-waves", "frevo-motion"]
};

const SECTIONS = ["pe-index-section--map", "pe-index-section-frequently-asked-questions-about-living-in-", "pe-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
