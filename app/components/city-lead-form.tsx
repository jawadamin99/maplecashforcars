"use client";

import { useState } from "react";

type CityLeadFormProps = {
  city: string;
};

export default function CityLeadForm({ city }: CityLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (typeof window !== "undefined") {
      data.append("pageUrl", window.location.href);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to send inquiry");

      setSubmitMessage("Thanks! Your request has been sent.");
      form.reset();
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="rounded-2xl border-2 border-[var(--brand-green)] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.16)] md:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-1 text-3xl font-black text-[var(--brand-red)]">
        Get a Free Cash Offer
      </h2>
      <p className="mb-5 text-sm text-slate-600">
        Send your vehicle details and we will contact you shortly.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-name">
            Name
          </label>
          <input id="city-form-name" name="name" required className="field" type="text" placeholder="Full name" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-email">
            Email
          </label>
          <input id="city-form-email" name="email" required className="field" type="email" placeholder="you@email.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-phone">
            Phone
          </label>
          <input id="city-form-phone" name="phone" required className="field" type="tel" placeholder="Your phone" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-vehicle">
            Vehicle
          </label>
          <input id="city-form-vehicle" name="vehicle" required className="field" type="text" placeholder="Year, make, model" />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-city">
          City
        </label>
        <input id="city-form-city" name="city" required className="field" type="text" defaultValue={city} />
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city-form-message">
          Vehicle Condition
        </label>
        <textarea
          id="city-form-message"
          name="message"
          rows={4}
          className="field"
          placeholder="Mileage, condition, pickup area, and anything we should know"
        />
      </div>

      <button type="submit" className="btn btn-red mt-5 w-full">
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </button>
      {submitMessage ? (
        <p className="mt-3 text-sm font-semibold text-slate-700">{submitMessage}</p>
      ) : null}
    </form>
  );
}
