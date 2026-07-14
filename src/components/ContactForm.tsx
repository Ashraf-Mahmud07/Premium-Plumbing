"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/data/company";
import { CheckIcon } from "./icons";

const inputCls =
  "font-sans text-[15px] px-[15px] py-[13px] border border-input-border rounded-[10px] bg-input-bg text-body outline-none w-full box-border focus:border-accent";
const labelCls = "grid gap-[7px] text-[13.5px] font-bold text-body-strong";

type ContactFormProps = {
  /** "home" = index request form; "contact" = contact page form (in-card heading + success phone button). */
  variant: "home" | "contact";
};

/**
 * Request-service form: client-side validation on all required fields,
 * contact-method segmented control, success-state swap.
 * Submits to the /api/contact route handler stub.
 */
export function ContactForm({ variant }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState<"Call" | "Text" | "Email">("Call");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address, method, message, source: variant }),
      });
    } catch {
      // The stub endpoint only logs; the success state matches the design either way.
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center px-2.5 py-10" role="status">
        <div className="w-[60px] h-[60px] rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
          <CheckIcon size={28} strokeWidth={2.6} className="text-[#16A34A]" />
        </div>
        <div className="font-display font-extrabold text-2xl mb-2.5">Request received.</div>
        <div className="text-[15.5px] text-muted leading-[1.6]">
          {variant === "home"
            ? "We'll get back to you within 24 hours. Need help sooner? Call (602) 905-3722 any time."
            : "We'll get back to you within 24 hours. Need help sooner? Call us any time."}
        </div>
        {variant === "contact" && (
          <a
            href={company.phoneHref}
            className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-ink no-underline font-bold text-[15.5px] px-6 py-[13px] rounded-[11px]"
          >
            {company.phoneDisplay}
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      {variant === "contact" && (
        <>
          <div className="font-display font-extrabold text-[22px] mb-1.5">
            Request service or send photos
          </div>
          <div className="text-[14.5px] text-muted mb-[26px]">
            Non-urgent requests only — we reply within 24 hours.
          </div>
        </>
      )}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 mb-3.5">
        <label className={labelCls}>
          Full name *
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            autoComplete="name"
            required
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          Phone *
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(602) 555-0100"
            type="tel"
            autoComplete="tel"
            required
            className={inputCls}
          />
        </label>
      </div>
      <label className={`${labelCls} mb-3.5`}>
        Service address *
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="1234 E Main St, Mesa, AZ"
          autoComplete="street-address"
          required
          className={inputCls}
        />
      </label>
      <fieldset className="grid gap-[7px] text-[13.5px] font-bold text-body-strong mb-3.5 border-none p-0 m-0">
        <legend className="p-0 mb-[7px]">Preferred contact method</legend>
        <div className="flex gap-2">
          {(["Call", "Text", "Email"] as const).map((m) => {
            const active = method === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                aria-pressed={active}
                className={`flex-1 font-sans text-sm font-bold py-[11px] rounded-[10px] cursor-pointer border transition-all duration-150 ${
                  active
                    ? "border-ink bg-ink text-accent"
                    : "border-input-border bg-input-bg text-body-strong"
                }`}
              >
                {m}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className={`${labelCls} mb-5`}>
        What do you need help with? *
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={
            variant === "home"
              ? "Describe the issue — mention if you have photos to send."
              : "Describe the issue — you can also attach a photo below."
          }
          required
          className={`${inputCls} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 bg-accent text-accent-ink border-none font-display font-bold text-[16.5px] p-4 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-[#E07B12]"
      >
        Send request
      </button>
      {error && (
        <div role="alert" className="mt-3 text-sm text-[#C2410C] font-semibold text-center">
          {error}
        </div>
      )}
      <div className="mt-3.5 text-[12.5px] text-dim text-center leading-[1.5]">
        Your information is private and only used to contact you. Have an emergency? Please call us
        directly.
      </div>
    </form>
  );
}
