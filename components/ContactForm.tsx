"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint!, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("✅ Tak! Din besked er sendt.");
        form.reset();
      } else {
        setStatus("❌ Fejl! Kunne ikke sende beskeden.");
      }
    } catch (err) {
      setStatus("⚠️ Der opstod en fejl. Prøv igen senere.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
          Kontakt os
        </h2>
        <p className="mt-3 text-neutral-600 text-lg">
          Har du spørgsmål, partnerskabstilbud eller ønsker at blive pilotbruger?
          Udfyld formularen nedenfor, og vi vender tilbage hurtigst muligt.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 max-w-md mx-auto text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 p-2 focus:border-green-600 focus:ring-green-600"
              placeholder="Indtast dit navn"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 p-2 focus:border-green-600 focus:ring-green-600"
              placeholder="din@email.dk"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
              Besked
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 p-2 h-32 resize-none focus:border-green-600 focus:ring-green-600"
              placeholder="Skriv din besked her..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Send besked
          </button>

          {status && (
            <p className="text-sm text-center text-neutral-700 mt-2">{status}</p>
          )}
        </form>

        <p className="mt-6 text-sm text-neutral-500">
          Du kan også kontakte os direkte på{" "}
          <a
            href="mailto:agrihubaps@agrihubfarm.dk"
            className="text-green-700 underline"
          >
            agrihubaps@agrihubfarm.dk
          </a>
        </p>
      </div>
    </section>
  );
}
