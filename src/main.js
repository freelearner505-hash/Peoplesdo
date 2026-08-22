import "./style.css";
import { animate, inView, stagger } from "motion";
import {
  ArrowUpRight,
  Baby,
  Check,
  ClipboardList,
  Handshake,
  Heart,
  HeartHandshake,
  House,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Milk,
  Phone,
  Send,
  Sparkles,
  Star,
  UserRound,
  X,
  createIcons,
} from "lucide";

const whatsappNumber = "919840000000";
const assetBase = import.meta.env.BASE_URL;
const defaultMessage =
  "Hello PeopleDO Home Care, I would like to know more about your home care services in Chennai.";
const whatsappUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelector("#app").innerHTML = `

<header class="site-header"><a class="brand" href="#top" aria-label="PeopleDO Home Care home"><img src="${assetBase}images/peoplesdo_logo.png" alt="PeopleDO Home Care logo"></a><nav class="nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#why-us">Why choose us</a><a href="#caregivers">Caregivers</a><a href="#feedback">Feedback</a><a href="#contact">Contact</a></nav><a class="whatsapp-button header-whatsapp" href="${whatsappUrl(defaultMessage)}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i> WhatsApp us</a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button></header>
<main id="top">
<section class="hero-section hero-peopledo"><div class="hero-copy"><div class="logo-reveal"><span class="logo-glow"></span><img src="${assetBase}images/peoplesdo_logo.png" alt="PeopleDO Home Care logo"></div><p class="eyebrow hero-label"><span><i data-lucide="sparkles"></i></span> PEOPLEDO HOME CARE</p><h1>Caring Hands.<br><em>Happy Homes.</em></h1><p class="hero-text">Safe, loving and reliable home care for your little ones and loved ones.</p><div class="hero-actions"><a class="whatsapp-button" href="${whatsappUrl(defaultMessage)}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i> WhatsApp Us</a><a class="callback-link" href="#contact"><i data-lucide="phone"></i> Request a Callback</a></div><div class="trust-row"><span class="trust-icon"><i data-lucide="check"></i></span><span>Verified caregivers</span><span class="trust-icon"><i data-lucide="check"></i></span><span>Serving Saligramam &amp; Chennai</span></div></div><div class="hero-visual"><div class="sun-shape"></div><img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=80" alt="Parent holding a happy baby at home" fetchpriority="high"><div class="hero-badge"><span><i data-lucide="heart"></i></span><b>Care that feels<br>like family</b></div><div class="sparkle sparkle-one"><i data-lucide="sparkles"></i></div><div class="sparkle sparkle-two"><i data-lucide="sparkles"></i></div><div class="floating-heart"><i data-lucide="heart"></i></div></div></section>
<section class="services-section" id="services"><div class="section-intro"><p class="eyebrow"><span><i data-lucide="sparkles"></i></span> Care made personal</p><h2>Trusted support for<br>Chennai families.</h2><p>From elder care to patient support and babysitting, our trained team brings dependable care to your doorstep.</p></div><div class="service-grid">${[
  [
    "user-round",
    "Elder Care",
    "Elder<br>Care",
    "Companionship and daily support with dignity and warmth.",
    "teal",
  ],
  [
    "heart-pulse",
    "Patient Care",
    "Patient<br>Care",
    "Reliable bedside assistance for recovery at home.",
    "pink",
  ],
  [
    "baby",
    "Babysitter Care",
    "Babysitter<br>Care",
    "Attentive, playful care for your little ones at home.",
    "purple",
  ],
]
  .map(
    ([icon, serviceName, title, description, color], index) =>
      `<article class="service-card card-${color}"><span class="service-icon"><i data-lucide="${icon}"></i></span><span class="service-number">0${index + 1}</span><h3>${title}</h3><p>${description}</p><a href="${whatsappUrl(`Hello, I am enquiring about ${serviceName} in Chennai.`)}" target="_blank" rel="noreferrer" aria-label="Enquire about ${serviceName} on WhatsApp">Enquire on WhatsApp <i data-lucide="arrow-up-right"></i></a></article>`,
  )
  .join("")}</div></section>
<section class="why-section" id="why-us"><div class="why-image"><img src="https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1000&q=80" alt="Caregiver talking with an older woman" loading="lazy"><div class="experience-pill"><b>12+</b><span>years of<br>caring</span></div></div><div class="why-copy"><p class="eyebrow"><span><i data-lucide="sparkles"></i></span> Why families choose us</p><h2>Professional care.<br><em>Personal warmth.</em></h2><p>We believe great care starts with trust. Every family gets thoughtful support, clear communication, and a caregiver who truly fits.</p><ul class="trust-list"><li><span><i data-lucide="check"></i></span><b>Verified Caregivers</b><small>Carefully screened and selected</small></li><li><span><i data-lucide="check"></i></span><b>Safe &amp; Loving Care</b><small>Kindness in every interaction</small></li><li><span><i data-lucide="check"></i></span><b>Reliable Service</b><small>Support you can count on</small></li><li><span><i data-lucide="check"></i></span><b>Family-Focused Care</b><small>Plans made around your needs</small></li></ul></div></section>
<section class="caregivers-section" id="caregivers"><div class="section-heading caregiver-heading"><div><p class="eyebrow"><span><i data-lucide="heart-handshake"></i></span> Meet your care team</p><h2>People who care<br><em>like family.</em></h2></div><p>Every PeopleDO caregiver is carefully selected for skill, patience, and the warmth they bring into your home.</p></div><div class="caregiver-grid"><article class="caregiver-card"><div class="caregiver-photo"><img src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=700&q=80" alt="Anita, an experienced childcare caregiver" loading="lazy"><span class="profile-status"><i data-lucide="check"></i> Verified</span></div><div class="caregiver-content"><div class="profile-top"><div><h3>Anita R.</h3><p>Senior Childcare Specialist</p></div><span class="profile-years">8 yrs</span></div><div class="skill-tags"><span>Newborn care</span><span>First aid</span><span>Play-based care</span></div><p class="caregiver-bio">Patient, playful, and loved by little ones. Anita helps new parents feel confident from day one.</p><a href="${whatsappUrl('Hello, I would like to enquire about Anita R. for childcare support in Chennai.')}" target="_blank" rel="noreferrer">Ask about Anita <i data-lucide="arrow-up-right"></i></a></div></article><article class="caregiver-card"><div class="caregiver-photo"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80" alt="Meena, a trusted elder care caregiver" loading="lazy"><span class="profile-status"><i data-lucide="check"></i> Verified</span></div><div class="caregiver-content"><div class="profile-top"><div><h3>Meena S.</h3><p>Elder Care Companion</p></div><span class="profile-years">10 yrs</span></div><div class="skill-tags"><span>Mobility support</span><span>Companionship</span><span>Medication care</span></div><p class="caregiver-bio">Calm, attentive support for daily routines, meaningful conversation, and a comfortable home.</p><a href="${whatsappUrl('Hello, I would like to enquire about Meena S. for elder care support in Chennai.')}" target="_blank" rel="noreferrer">Ask about Meena <i data-lucide="arrow-up-right"></i></a></div></article><article class="caregiver-card"><div class="caregiver-photo"><img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80" alt="Lakshmi, a professional patient care attendant" loading="lazy"><span class="profile-status"><i data-lucide="check"></i> Verified</span></div><div class="caregiver-content"><div class="profile-top"><div><h3>Lakshmi P.</h3><p>Patient Care Attendant</p></div><span class="profile-years">7 yrs</span></div><div class="skill-tags"><span>Recovery care</span><span>Bedside support</span><span>Physio assistance</span></div><p class="caregiver-bio">Dependable and gentle, Lakshmi brings professional support and reassurance to every recovery journey.</p><a href="${whatsappUrl('Hello, I would like to enquire about Lakshmi P. for patient care support in Chennai.')}" target="_blank" rel="noreferrer">Ask about Lakshmi <i data-lucide="arrow-up-right"></i></a></div></article></div><div class="caregiver-stats"><span><b>25+</b> trained caregivers</span><span><b>100%</b> background verified</span><span><b>12 yrs</b> serving Chennai families</span></div></section>
<section class="steps-section"><div class="section-intro centered"><p class="eyebrow"><span><i data-lucide="sparkles"></i></span> Simple from the start</p><h2>Getting the right care<br>should feel <em>easy.</em></h2></div><div class="steps-grid"><div class="step"><span class="step-number">01</span><div class="step-icon"><i data-lucide="message-circle"></i></div><h3>Contact us</h3><p>Send your requirement through WhatsApp.</p></div><div class="step"><span class="step-number">02</span><div class="step-icon"><i data-lucide="clipboard-list"></i></div><h3>Share your requirement</h3><p>Tell us the type of care and timing you need.</p></div><div class="step"><span class="step-number">03</span><div class="step-icon"><i data-lucide="handshake"></i></div><h3>Get the right care</h3><p>We connect you with a suitable caregiver.</p></div></div></section>
<section class="whatsapp-cta"><div class="cta-deco"><i data-lucide="sparkles"></i></div><div><p class="eyebrow">A little support goes a long way</p><h2>Need a caring hand<br>at home?</h2><p>Talk to our team and find the right care service for your family.</p></div><a class="whatsapp-button" href="${whatsappUrl(defaultMessage)}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i> Chat on WhatsApp <i data-lucide="arrow-up-right"></i></a></section>
<section class="feedback-section" id="feedback"><div class="feedback-heading"><p class="eyebrow"><span><i data-lucide="sparkles"></i></span> Kind words from families</p><h2>Care you can<br><em>feel good about.</em></h2><button class="outline-button feedback-open" type="button"><i data-lucide="pen-line"></i> Submit your feedback</button></div><div class="testimonial-viewport" aria-label="Family reviews"><div class="testimonial-grid"><article class="testimonial"><div class="stars"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div><p>“The babysitter is so gentle and attentive. It has given us the confidence to manage our days with our newborn.”</p><b>Priya &amp; Arjun</b><small>New parents, Saligramam</small></article><article class="testimonial"><div class="stars"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div><p>“They treated my father with such patience and respect. The communication from the team has been wonderful.”</p><b>Meena S.</b><small>Family member, Chennai</small></article><article class="testimonial"><div class="stars"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div><p>“PeopleDO found us a wonderful caregiver who understands our son's routine perfectly.”</p><b>Divya K.</b><small>Mother, Chennai</small></article><article class="testimonial"><div class="stars"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div><p>“The attendant is punctual, respectful, and always keeps our family updated. We feel supported.”</p><b>Ramesh V.</b><small>Family member, Kodambakkam</small></article><article class="testimonial"><div class="stars"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div><p>“From the first call, the team listened carefully and arranged kind newborn care for us.”</p><b>Sarah M.</b><small>New parent, Saligramam</small></article></div></div></section>
<section class="contact-section" id="contact"><div><p class="eyebrow"><span><i data-lucide="sparkles"></i></span> We are here to help</p><h2>Let's talk about<br>what you need.</h2><p>Share a few details and our care team will call you back at your preferred time.</p><div class="contact-details"><a href="tel:+919840000000"><i data-lucide="phone"></i> +91 98400 00000</a><a href="mailto:hello@hearthhomecare.in"><i data-lucide="mail"></i> hello@hearthhomecare.in</a><span><i data-lucide="map-pin"></i> Saligramam &amp; across Chennai</span></div></div><form id="callback-form"><label>Name<input type="text" name="name" placeholder="Your name" required></label><label>Phone number<input type="tel" name="phone" placeholder="+91 00000 00000" pattern="[0-9+ ()-]{10,}" required></label><label>Service required<select name="service" required><option value="">Select a service</option><option>Babysitter / Child Care</option><option>Newborn Care</option><option>Elder Care</option><option>Patient Care</option><option>Home Care</option><option>Attendant Services</option></select></label><label>Preferred time<select name="time" required><option value="">Choose a time</option><option>Morning (9am - 12pm)</option><option>Afternoon (12pm - 4pm)</option><option>Evening (4pm - 7pm)</option></select></label><button class="whatsapp-button form-submit" type="submit"><i data-lucide="phone"></i> Request a callback <i data-lucide="arrow-up-right"></i></button><p class="form-message" aria-live="polite"></p></form></section><section class="final-cta"><h2>Because your family<br>deserves the <em>best care.</em> <i data-lucide="heart"></i></h2><div><a class="whatsapp-button" href="${whatsappUrl(defaultMessage)}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i> WhatsApp us</a><a class="outline-button" href="#contact"><i data-lucide="phone"></i> Request a callback</a></div></section></main>
<footer><div class="footer-brand"><a class="brand" href="#top"><span class="brand-mark">H</span><span>PeopleDO <i>Home Care</i></span></a><p>Safe, loving support for the people<br>who matter most.</p></div><div class="footer-column"><b>Contact</b><a href="tel:+919840000000"><i data-lucide="phone"></i> +91 98400 00000</a><a href="${whatsappUrl(defaultMessage)}"><i data-lucide="message-circle"></i> WhatsApp us</a><a href="mailto:hello@hearthhomecare.in"><i data-lucide="mail"></i> hello@hearthhomecare.in</a></div><div class="footer-column"><b>Visit us</b><span><i data-lucide="map-pin"></i> Saligramam, Chennai</span><span>Mon - Sat, 9am - 7pm</span><a href="#top">Instagram ↗</a></div><div class="footer-bottom">© 2024 PeopleDO Home Care <span>Made with care in Chennai</span></div></footer><a class="sticky-whatsapp" href="${whatsappUrl(defaultMessage)}" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><i data-lucide="message-circle"></i><span>Chat with us</span></a><dialog id="feedback-dialog"><button class="dialog-close" type="button" aria-label="Close feedback form"><i data-lucide="x"></i></button><div class="feedback-modal-intro"><p class="eyebrow"><span><i data-lucide="heart"></i></span> Your experience matters</p><h2>Share your feedback</h2><p>Tell us how we cared for your family. Your feedback helps us keep improving.</p></div><form id="feedback-form"><div class="feedback-field"><label for="feedback-name">Your name</label><input id="feedback-name" name="feedbackName" required placeholder="Your name"></div><div class="feedback-field"><label for="patient-relation">Relation to patient</label><input id="patient-relation" name="patientRelation" required placeholder="For example: daughter or spouse"></div><div class="feedback-field"><label for="service-type">Service type</label><select id="service-type" name="serviceType" required><option value="">Select a service</option><option>Babysitter / Child Care</option><option>Newborn Care</option><option>Elder Care</option><option>Patient Care</option><option>Home Care</option><option>Attendant Services</option></select></div><div class="feedback-field"><label for="caregiver-details">Caregiver details</label><input id="caregiver-details" name="caregiverDetails" required placeholder="Caregiver name or service details"></div><div class="feedback-field"><label for="feedback-rating">Star rating</label><select id="feedback-rating" name="rating" required><option value="">Select rating</option><option>5 stars - Excellent</option><option>4 stars - Very good</option><option>3 stars - Good</option><option>2 stars - Needs improvement</option><option>1 star - Poor</option></select></div><div class="feedback-field feedback-message-field"><label for="feedback-message">Your feedback</label><textarea id="feedback-message" name="feedback" required placeholder="Tell us about your experience"></textarea></div><button class="whatsapp-button" type="submit"><i data-lucide="send"></i> Send feedback on WhatsApp</button><p class="form-message" aria-live="polite"></p></form></dialog>`;

createIcons({ icons: { ArrowUpRight, Baby, Check, ClipboardList, Handshake, Heart, HeartHandshake, House, Mail, MapPin, Menu, MessageCircle, Milk, Phone, Send, Sparkles, Star, UserRound, X } });

const footerBrand = document.querySelector("footer .brand");
if (footerBrand) {
  footerBrand.innerHTML = `<img src="${assetBase}images/peoplesdo_logo.png" alt="PeopleDO Home Care logo">`;
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  const heroSequence = async () => {
    const logo = document.querySelector(".logo-reveal");
    const heroContent = document.querySelectorAll(".hero-label, .hero-copy h1, .hero-copy .hero-text, .hero-copy .hero-actions, .hero-copy .trust-row");
    await animate(logo, { opacity: [0, 1], transform: ["translateY(12px) scale(.9)", "translateY(0) scale(1)"] }, { duration: 0.75, easing: "ease-out" }).finished;
    await animate(heroContent, { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0)"] }, { delay: stagger(0.09), duration: 0.5, easing: "ease-out" }).finished;
  };
  heroSequence();

  inView(".services-section, .why-section, .caregivers-section, .steps-section, .feedback-section, .contact-section, .final-cta", ({ target }) => {
    animate(target, { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0)"] }, { duration: 0.65, easing: "ease-out" });
  }, { amount: 0.15, once: true });
  inView(".service-card, .caregiver-card, .testimonial, .step", ({ target }) => {
    animate(target, { opacity: [0, 1], transform: ["translateY(14px)", "translateY(0)"] }, { duration: 0.45, easing: "ease-out" });
  }, { amount: 0.2, once: true });
}

const indianPortraits = [
  "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=700",
];
document.querySelectorAll(".hero-visual img, .why-image img, .caregiver-photo img").forEach((image, index) => {
  image.src = indianPortraits[index];
});

const locationText = document.querySelector(".footer-column span");
if (locationText?.textContent.includes("Saligramam")) {
  const mapLink = document.createElement("a");
  mapLink.className = "location-link";
  mapLink.href = "https://www.google.com/maps/search/?api=1&query=Saligramam%2C%20Chennai";
  mapLink.target = "_blank";
  mapLink.rel = "noreferrer";
  mapLink.innerHTML = '<i data-lucide="map-pin"></i> Saligramam, Chennai <i data-lucide="arrow-up-right"></i>';
  locationText.replaceWith(mapLink);
  createIcons({ icons: { ArrowUpRight, MapPin } });
}

const reviewViewport = document.querySelector(".testimonial-viewport");
let reviewTimer;
const advanceReviews = () => {
  const card = reviewViewport.querySelector(".testimonial");
  const step = card.getBoundingClientRect().width + 14;
  const atEnd = reviewViewport.scrollLeft + reviewViewport.clientWidth >= reviewViewport.scrollWidth - 2;
  reviewViewport.scrollTo({ left: atEnd ? 0 : reviewViewport.scrollLeft + step, behavior: "smooth" });
};
const startReviewScroll = () => { reviewTimer = window.setInterval(advanceReviews, 3200); };
const stopReviewScroll = () => window.clearInterval(reviewTimer);
reviewViewport.addEventListener("mouseenter", stopReviewScroll);
reviewViewport.addEventListener("mouseleave", startReviewScroll);
reviewViewport.addEventListener("focusin", stopReviewScroll);
reviewViewport.addEventListener("focusout", startReviewScroll);
reviewViewport.addEventListener("touchstart", stopReviewScroll, { passive: true });
startReviewScroll();

const callbackForm = document.querySelector("#callback-form");
callbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(callbackForm);
  const callbackMessage = [
    "Hello PeopleDO Home Care, I would like to request a callback.",
    `Name: ${formData.get("name")}`,
    `Phone number: ${formData.get("phone")}`,
    `Service required: ${formData.get("service")}`,
    `Preferred time: ${formData.get("time")}`,
  ].join("\n");
  window.open(whatsappUrl(callbackMessage), "_blank", "noopener,noreferrer");
  callbackForm.querySelector(".form-message").textContent =
    "Thank you. Your callback request is ready to send on WhatsApp.";
  callbackForm.reset();
});
const dialog = document.querySelector("#feedback-dialog");
document
  .querySelector(".feedback-open")
  .addEventListener("click", () => dialog.showModal());
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
document.querySelector("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const feedbackForm = event.currentTarget;
  const formData = new FormData(feedbackForm);
  const feedbackMessage = [
    "Hello PeopleDO Home Care, I would like to share feedback.",
    `Name: ${formData.get("feedbackName")}`,
    `Relation to patient: ${formData.get("patientRelation")}`,
    `Service type: ${formData.get("serviceType")}`,
    `Caregiver details: ${formData.get("caregiverDetails")}`,
    `Star rating: ${formData.get("rating")}`,
    `Message: ${formData.get("feedback")}`,
  ].join("\n");
  window.open(whatsappUrl(feedbackMessage), "_blank", "noopener,noreferrer");
  feedbackForm.querySelector(".form-message").textContent =
    "Your feedback is ready to send on WhatsApp.";
  feedbackForm.reset();
});
document.querySelector(".menu-button").addEventListener("click", (event) => {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute(
    "aria-expanded",
    nav.classList.contains("open"),
  );
});
