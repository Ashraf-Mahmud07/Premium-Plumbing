import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { logo, logoSize } from "@/data/images";

const quickLinks = [
  { label: "Service Plans", href: "/plumbing-service-plans" },
  { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
  { label: "About Our Team", href: "/about" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** 4-column footer. The Wisetack financing line appears only on the home page. */
export function Footer({ showWisetack = false }: { showWisetack?: boolean }) {
  return (
    <footer className="bg-ink text-dark-body px-6 pt-[clamp(56px,7vw,80px)] pb-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 pb-12 border-b border-white/8">
          <div>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logoSize.width}
              height={logoSize.height}
              className="h-8 w-auto block mb-4.5"
            />
            <p className="text-sm leading-[1.65] m-0 mb-[18px] max-w-[32ch]">{company.footerBlurb}</p>
            <div className="text-[13.5px] text-dim">Licensed &amp; Insured · {company.license}</div>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-[0.08em] uppercase text-dark-heading mb-[18px]">
              Quick links
            </div>
            <div className="grid gap-2.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-dark-body no-underline text-[14.5px] hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-[0.08em] uppercase text-dark-heading mb-[18px]">
              Contact
            </div>
            <div className="grid gap-2.5 text-[14.5px]">
              <a href={company.phoneHref} className="text-accent no-underline font-bold text-[17px]">
                {company.phoneDisplay}
              </a>
              <div>{company.address.full}</div>
              <a
                href={`mailto:${company.email}`}
                className="text-dark-body no-underline hover:text-accent"
              >
                {company.email}
              </a>
              <div className="text-success font-semibold">24/7 Emergency Service</div>
              {showWisetack && <div className="text-dim text-[13.5px]">{company.wisetackNote}</div>}
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-[0.08em] uppercase text-dark-heading mb-[18px]">
              Service areas
            </div>
            <div className="text-[14.5px] leading-[1.9]">{company.footerAreas}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between items-center pt-7 text-[13px] text-dim">
          <div>{company.copyright}</div>
          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
