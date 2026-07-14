/**
 * Luxury Plumbing page content — taken verbatim from the old site page
 * https://www.joecoleplumbing.com/residential-plumbing/luxury-plumbing
 *
 * NOTE: the copy references "Joe Cole Plumbing" and South Florida locales
 * exactly as written on the old site. If the brand name or service area should
 * change, edit it here — this file is the only place the copy lives.
 */

export const luxuryHero = {
  badge: "Residential Plumbing",
  title: "Luxury Plumbing Services in Davie, FL",
  subtitle: "Elevate your space with our luxury plumbing services.",
};

export const introSection = {
  eyebrow: "Beyond Ordinary: High-End Plumbing For Discerning Tastes",
  title: "High-Quality Plumbing Services For Your Space",
  paragraphs: [
    "Welcome to the realm of luxury plumbing, where aesthetics meets functionality amidst the sun-kissed shores of Florida. Nestled among the palm-fringed avenues and overlooking the blue waters of the Atlantic Ocean, Joe Cole Plumbing caters to the discerning tastes of the elite in these prestigious locales.",
    "Imagine stately mansions gracing the golden sands of South Beach, their sleek architecture echoing the glamour of bygone eras. Or lavish penthouses adorned with panoramic views of the Miami skyline, where every detail exudes sophistication and style. From the historic charm of Las Olas Boulevard to the exclusive enclaves of Star Island, our luxury plumbing solutions elevate your property to the pinnacle of refinement.",
    "With a dedication to craftsmanship and an unwavering commitment to excellence, we transform your vision of luxury living into a reality. Step into a world where every faucet drips with elegance, every fixture exudes opulence and every space is a testament to your exquisite taste. Welcome to Joe Cole Plumbing, where your dream space awaits.",
  ],
};

export const dreamSection = {
  title: "Make Your Dream Space A Reality",
  paragraphs: [
    "At Joe Cole Plumbing, we understand that every detail matters when crafting your dream space. Our meticulous approach seamlessly integrates cutting-edge leak detection technology with exquisite aesthetics, ensuring that your property not only exudes elegance but also operates flawlessly.",
    "Whether it's enhancing the function of your plumbing systems or enhancing the visual appeal of your interiors, we're committed to making your vision a reality.",
  ],
};

export const precisionSection = {
  title: "Plumbing That Functions With Precision",
  paragraphs: [
    "On our team, we prioritize safeguarding your valuable properties through state-of-the-art leak detection technology.",
    "Imagine the tranquility of knowing that your beachfront mansion or penthouse in Miami Beach is shielded from the threat of water damage, ensuring uninterrupted luxury living. Our cutting-edge systems — including industry-leading brands like WaterCop and FloLogic — provide more than just leak detection — they offer peace of mind.",
    "With automatic shut-off capabilities and real-time alerts, these technologies act as vigilant guardians, swiftly mitigating any potential risks before they escalate. Luxury, in its truest form, extends beyond aesthetics — it encompasses security and assurance. By integrating leak detection technology into your plumbing system, you can protect your investment while preserving the integrity of your space.",
    "Trust in Joe Cole Plumbing to deliver exquisite craftsmanship with unparalleled peace of mind.",
  ],
};

export const brandsSection = {
  title: "Beauty In Every Detail: Aesthetic Excellence",
  intro:
    "Elevate your space with products from global brands. Indulge in the epitome of luxury and sophistication with our curated selection of international brands, each renowned for their distinctive design ethos and exceptional craftsmanship. We're proud to offer high-end, international options, including:",
  closing:
    "From sleek, modern design to trending options, we have the right look for your space. With our full range of faucets, fixtures and customizable options, you can live comfortably knowing you've invested in exceptional durability.",
  americanLead: "We also work with American-made products from trusted brands like:",
  outro:
    "Elevate your home with our bespoke plumbing solutions, where every fixture and detail embodies the essence of luxury living.",
};

export type LuxuryBrand = { name: string; desc: string };

export const internationalBrands: LuxuryBrand[] = [
  {
    name: "Duravit",
    desc: "Embodying German precision and innovation, their collections effortlessly blend functionality with aesthetic elegance.",
  },
  {
    name: "Geberit",
    desc: "Seamlessly integrates Swiss precision and innovative engineering in their concealed cisterns and wall-hung toilets, epitomizing the marriage of form and function.",
  },
  {
    name: "Grohe",
    desc: "Renowned for its cutting-edge designs and advanced technologies, these products embody the perfect balance of form, function and sustainability.",
  },
  {
    name: "Toto",
    desc: "A Japanese brand that merges aesthetics with technologies like self-cleaning features in their toilets, ensuring unparalleled comfort, hygiene and innovation.",
  },
  {
    name: "Franke",
    desc: "With a legacy of Swiss precision and attention to detail, Franke offers premium kitchen sinks, faucets and accessories that redefine elegance and functionality.",
  },
  {
    name: "Hansgrohe",
    desc: "A global leader in bathroom solutions, their products epitomize German engineering and design excellence.",
  },
  {
    name: "Cocoon",
    desc: "A contemporary and minimalist brand from the Netherlands featuring clean lines, premium materials and innovative designs.",
  },
];

export const americanBrands = [
  "Kohler",
  "Waterworks",
  "Newport Brass",
  "Mr Steam",
  "Kallista",
  "Infinity Drain",
];

export const fixturesSection = {
  title: "Fixtures And Faucets",
  paragraphs: [
    "Indulge in a world of unparalleled style with our curated selection of fixtures and faucets, meticulously chosen to elevate your space to new heights of sophistication. Every detail speaks of opulence and refinement from the moment you step into your space.",
    "Choose exquisite sinks and bathtubs that exude timeless elegance, luxurious showers that envelop you in relaxation and toilets that seamlessly blend functionality with style. Our team will work hard to ensure your bathroom becomes a sanctuary of indulgence tailored to your unique taste and lifestyle.",
  ],
  cards: [
    {
      title: "One-Of-A-Kind Fixtures",
      paragraphs: [
        "Elevate your space with a unique fixture, each a masterpiece of unparalleled craftsmanship. Whether you envision the classic allure of traditional designs or the sleek modernity of contemporary styles, our fixture installations will streamline the process.",
        "Transform your space into a sanctuary of indulgence, where every fixture tells a story of exquisite artistry and timeless elegance.",
      ],
    },
    {
      title: "The Perfect Faucets",
      paragraphs: [
        "From sleek and minimalist to ornate and opulent, our premium faucets cater to every preference, adding a touch of elegance to every corner of your home. We work with a variety of finishes and materials, allowing you to customize your space with the perfect aesthetic touch.",
        "Whether you seek a cohesive design scheme or a statement piece, our range of faucet styles ensures that every detail of your home reflects your unique taste and style.",
      ],
    },
  ],
};

export const dependSection = {
  title: "You Can Depend On Joe Cole Plumbing",
  paragraphs: [
    "You can trust in the expertise and reliability of Joe Cole Plumbing. Backed by years of experience and a commitment to excellence, our team of skilled professionals ensures that every aspect of your plumbing needs is met with precision and care.",
    "From installation to maintenance, we prioritize customer satisfaction, guaranteeing a seamless experience from start to finish. Experience the epitome of luxury living with Joe Cole Plumbing, where quality meets extravagance.",
  ],
};

export type MoreService = { title: string; desc?: string; href: string };

export const moreResidential = {
  eyebrow: "Looking for more than Luxury Plumbing?",
  title: "More Residential Plumbing",
  items: [
    {
      title: "24/7 Emergency Plumbing",
      desc: "Fast response when plumbing emergencies strike — serving homeowners across South Florida.",
      href: "/emergency-plumbing",
    },
    { title: "Drain Issues", href: "/#services" },
    { title: "Fixture Repair & Installation", href: "/#services" },
    {
      title: "Gas Systems & Piping",
      desc: "Safe installation, repair, and inspection of residential gas lines across South Florida.",
      href: "/#services",
    },
    { title: "Professional Hydro Jetting Services", href: "/#services" },
    { title: "Professional Leak Detection & Repair Services", href: "/#services" },
    { title: "Professional Sewer Camera Inspection Services", href: "/#services" },
    { title: "Professional Water Heater Services", href: "/#services" },
    {
      title: "Repipes",
      desc: "Reliable whole-home repiping solutions for aging, leaking, or corroded pipes across South Florida.",
      href: "/#services",
    },
    {
      title: "Slab Leak Detection & Repair",
      desc: "Protect your foundation and plumbing system with fast, accurate slab leak solutions across South Florida.",
      href: "/#services",
    },
    {
      title: "Water Treatment",
      desc: "Improve your home's water quality with professional water filter installation for cleaner, safer, better-tasting water throughout your South Florida home.",
      href: "/#services",
    },
    {
      title: "Water Treatment Service",
      desc: "Cleaner, safer, better-tasting water solutions for homes across South Florida.",
      href: "/#services",
    },
  ] satisfies MoreService[],
};
