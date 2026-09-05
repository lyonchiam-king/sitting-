import { ServiceItem, ReviewItem, FAQItem } from '../types';

import heroStudioImg from '../assets/images/hero_studio_1788620915109.jpg';
import classicLashesImg from '../assets/images/classic_lashes_1788620930585.jpg';
import hybridLashesImg from '../assets/images/hybrid_lashes_1788620944206.jpg';
import microbladingBrowsImg from '../assets/images/microblading_brows_1788620958461.jpg';
import beforeAfterImg from '../assets/images/before_after_lashes_1788620978175.jpg';
import fizzaPortraitImg from '../assets/images/fizza_portrait_1788620994824.jpg';

export const BUSINESS_INFO = {
  name: "Sitting Pretty",
  tagline: "Eyelash & Microblading Clinic Manchester",
  phoneDisplay: "+44 7700 137233",
  phoneTel: "tel:+447700137233",
  whatsappNumber: "447700137233",
  address: "34 Nell Ln, Manchester M21 7SN, UK",
  googleMapsUrl: "https://maps.google.com/?cid=5332973378722413283&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.621282142204!2d-2.2690924!3d53.4398188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb22d8e48b8a7%3A0x4a180f68e0a81183!2s34%20Nell%20Ln%2C%20Manchester%20M21%207SN%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
  facebookUrl: "https://facebook.com/SittingPrettyManchester",
  technician: "Fizza",
  hours: "Mon – Sat: 9:30 AM – 6:30 PM | Sun: Closed [TO CONFIRM]",
  locationNote: "Conveniently located on Nell Lane in Chorlton/Didsbury border, Manchester. Easy street parking available.",
};

export const IMAGES = {
  heroStudio: heroStudioImg,
  classicLashes: classicLashesImg,
  hybridLashes: hybridLashesImg,
  microbladingBrows: microbladingBrowsImg,
  beforeAfter: beforeAfterImg,
  fizzaPortrait: fizzaPortraitImg,
};

export const HIGHLIGHTS_BADGES = [
  { label: "Lash Health Priority", icon: "shield" },
  { label: "Expert Microblading", icon: "sparkles" },
  { label: "Welcoming Studio", icon: "heart" },
];

export const PROOF_POINTS = [
  "Praised for natural lash health",
  "Welcoming atmosphere",
  "Strive for perfection",
];

export const SERVICES: ServiceItem[] = [
  {
    id: "classic-lash-set",
    name: "Classic Lash Set",
    tagline: "Natural, Lightweight",
    price: "£50 [TO CONFIRM]",
    duration: "1h 30m",
    tags: ["Natural", "Lightweight", "1:1 Extension"],
    description: "Individual lash extensions meticulously applied 1:1 to your natural lashes. Designed to enhance your natural eyes with delicate length and subtle volume without adding heavy weight or causing natural lash damage.",
    fullDetails: [
      "Individual 1:1 lash isolation process ensuring no natural lashes are stuck together.",
      "Custom length mapping (8mm - 12mm) tailored to your eye shape and natural lash strength.",
      "Lightweight, ultra-soft silk fibers that feel weightless on the eyelids.",
      "Ideal for first-timers anxious about natural lash damage."
    ],
    aftercareNote: "Keep dry for 24 hours. Brush daily with provided spoolie and clean with oil-free lash cleanser.",
    image: classicLashesImg,
    popular: true,
  },
  {
    id: "hybrid-lash-set",
    name: "Hybrid Lash Set",
    tagline: "Full, Textured",
    price: "£65 [TO CONFIRM]",
    duration: "1h 45m",
    tags: ["Full", "Textured", "Classic + Volume"],
    description: "The perfect balance between classic simplicity and fluffy volume. A seamless blend of individual classic lashes and soft handmade volume fans for a textured, wispy look that remains completely safe for natural lashes.",
    fullDetails: [
      "Custom mix of 50% Classic 1:1 extensions and 50% lightweight 3D-5D volume fans.",
      "Creates a fluffy, dimensional texture that masks natural lash gaps effortlessly.",
      "Gentle weight distribution protecting natural lash roots.",
      "Our most popular look for everyday elegance with extra glamour."
    ],
    aftercareNote: "Avoid oil-based eye products. Wash gently with lash shampoo 2-3 times a week.",
    image: hybridLashesImg,
    popular: true,
  },
  {
    id: "microblading-brows",
    name: "Microblading Brows",
    tagline: "Defined, Semi-Permanent",
    price: "£180 [TO CONFIRM]",
    duration: "2h 15m",
    tags: ["Defined", "Semi-Permanent", "Hair-Stroke Technique"],
    description: "Precision eyebrow tattooing using fine hair-stroke blade techniques. Restores sparse brows, defines arch structure, and creates natural, crisp brow strokes customized to your unique facial geometry and skin tone.",
    fullDetails: [
      "In-depth brow mapping consultation before any pigment is applied.",
      "Topical numbing applied for maximum comfort throughout the session.",
      "Ultra-fine hair strokes matching your natural eyebrow growth direction.",
      "Includes comprehensive aftercare kit and guidance for optimal healing."
    ],
    aftercareNote: "Avoid water on brows for 7 days. Apply prescribed healing ointment sparingly.",
    image: microbladingBrowsImg,
    popular: true,
  },
  {
    id: "russian-volume-set",
    name: "Russian Volume Set",
    tagline: "Fluffy, Glamour",
    price: "£75 [TO CONFIRM]",
    duration: "2h 00m",
    tags: ["Full Volume", "Ultra-Fluffy", "3D-6D Fans"],
    description: "Handcrafted ultra-fine volume fans placed on each individual natural lash. Delivers a soft, dark lash line with cloud-like fullness while adhering strictly to safe weight mapping.",
    fullDetails: [
      "Handmade fans using 0.05mm featherlight synthetic mink fibers.",
      "Full coverage resulting in a dense yet weightless fluttery appearance.",
      "Precision isolation keeping every single natural lash free to complete its growth cycle.",
      "Great for clients wanting dense drama without natural lash stress."
    ],
    aftercareNote: "Clean regularly to prevent oil buildup in volume fans and maintain fluffiness.",
    image: hybridLashesImg,
  },
  {
    id: "lash-lift-tint",
    name: "Lash Lift & Tint",
    tagline: "Lifted, Natural",
    price: "£40 [TO CONFIRM]",
    duration: "50m",
    tags: ["Low Maintenance", "100% Natural Lashes", "Keratin Nourishing"],
    description: "Lifts and curls your natural lashes from the root, combined with a deep dark tint. Perfect for clients wanting a mascara-free look using 100% of their own natural lashes.",
    fullDetails: [
      "Gentle conditioning formula enriched with keratin and nourishing oils.",
      "Lifts straight downward-facing natural lashes into an upward curl.",
      "Deep black tint adds definition making natural lashes look instantly longer.",
      "Lasts 6-8 weeks with zero daily maintenance required."
    ],
    aftercareNote: "Keep completely dry and steam-free for 24 hours after treatment.",
    image: classicLashesImg,
  },
  {
    id: "lash-infills",
    name: "Lash Infills (2-3 Weeks)",
    tagline: "Maintenance & Refresh",
    price: "£35 [TO CONFIRM]",
    duration: "1h 00m",
    tags: ["2-3 Weeks", "Lash Care", "Volume Refresh"],
    description: "Essential maintenance session to replace grown-out lashes and fill gaps, keeping your lash set looking full, fresh, and perfectly groomed.",
    fullDetails: [
      "Removal of outgrown extensions without pulling natural lashes.",
      "Deep cleansing of the lash line before applying fresh extensions.",
      "Replacement of lost lashes to restore 100% fullness.",
      "Required every 2-3 weeks to maintain healthy lash growth cycles."
    ],
    aftercareNote: "Book your infills every 14-21 days for best retention and lash health.",
    image: classicLashesImg,
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Sarah M.",
    location: "Manchester",
    rating: 5,
    date: "2 weeks ago",
    source: "Google Business",
    text: "Fizza is an absolute artist! I was terrified of lash damage after a bad experience elsewhere. Fizza took the time to explain her isolation technique and my natural lashes have stayed 100% healthy even after months of extensions. Gentle, hygienic, and so welcoming!",
    highlightTag: "Natural Lash Health"
  },
  {
    id: "rev-2",
    author: "Chloe B.",
    location: "Didsbury",
    rating: 5,
    date: "1 month ago",
    source: "Google Business",
    text: "The best lash technician in Manchester by far! The studio on Nell Lane is bright, spotlessly clean, and so relaxing. My hybrid set looks full, fluffy and natural. No heavy feeling, no clumping, just perfection!",
    highlightTag: "Welcoming Atmosphere"
  },
  {
    id: "rev-3",
    author: "Hannah R.",
    location: "Chorlton",
    rating: 5,
    date: "1 month ago",
    source: "Facebook",
    text: "Got my brows microbladed by Fizza at Sitting Pretty. I was nervous about semi-permanent brows, but she mapped them out carefully until I was completely happy. The result is so natural and defined. She really strives for perfection!",
    highlightTag: "Strive for Perfection"
  },
  {
    id: "rev-4",
    author: "Gemma P.",
    location: "Manchester",
    rating: 5,
    date: "3 months ago",
    source: "Google Business",
    text: "Sitting Pretty is my go-to salon! Fizza is super friendly, welcoming, and genuinely cares about natural lash health. Prices are clear and reasonable. Would recommend to anyone looking for amazing lashes in Manchester!",
    highlightTag: "Lash Health Priority"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Lash Health",
    question: "Will lash extensions damage my natural lashes?",
    answer: "No! At Sitting Pretty, natural lash health is our top priority. Fizza isolates each natural lash individually and applies extensions mapped strictly to what your natural lashes can safely support. We never overload natural lashes or glue extensions together."
  },
  {
    category: "Lash Health",
    question: "How do I know if my natural lashes are healthy enough for extensions?",
    answer: "During your consultation, Fizza inspects your natural lash strength and density. If your natural lashes are fine or sparse, we choose ultra-lightweight classic or soft volume fans so your natural lashes continue growing healthily."
  },
  {
    category: "Booking & Pricing",
    question: "Do I need to send a DM to get your prices?",
    answer: "Never! All our prices are fully transparent and listed right here on our website (e.g. Classic Set £50, Hybrid Set £65, Microblading £180 [TO CONFIRM]). No hidden fees or DM inquiries required."
  },
  {
    category: "Booking & Pricing",
    question: "Do I need a patch test before my appointment?",
    answer: "Yes, a quick patch test is required at least 24-48 hours before your first full lash set or microblading session to ensure you have no sensitivities to the medical-grade adhesive or pigments."
  },
  {
    category: "Aftercare",
    question: "How long do lash extensions last?",
    answer: "Lash extensions last through your natural lash growth cycle (typically 4-6 weeks). However, to keep them looking full and pristine, infills are recommended every 2 to 3 weeks."
  },
  {
    category: "Microblading",
    question: "Is microblading painful and how long does it last?",
    answer: "We apply a highly effective topical numbing cream before and during the procedure to keep you comfortable. Microblading results typically last 12-18 months depending on your skin type and lifestyle."
  }
];
