import { company } from "./company";

/** All copy on this page is verbatim from Contact.html. */

export type ContactCard = {
  glyph: string;
  label: string;
  value: string;
  href: string;
};

export const contactCards: ContactCard[] = [
  {
    glyph: "☎",
    label: "Call or text — we answer immediately",
    value: company.phoneDisplay,
    href: company.phoneHref,
  },
  {
    glyph: "@",
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    glyph: "⌂",
    label: "Office",
    value: company.address.full,
    href: "#",
  },
  {
    glyph: "24",
    label: "Emergencies",
    value: "24/7/365 — nights, weekends & holidays",
    href: "/emergency-plumbing",
  },
];
