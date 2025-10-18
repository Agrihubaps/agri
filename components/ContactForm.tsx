"use client";
import { useState } from "react";

export default function ContactForm() {
  const [showThanks, setShowThanks] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(endpoint!, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 4000); // окно закроется через 4 сек
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-neutral-900">Kontakt os</h2>
        <p className="mt-3 text-neutral-600 text-lg">
          Har du spørgsmål, partnerskabstilbud eller ønsker at blive pilotbruger?
          Udfyld formularen nedenfor, og vi vender tilbage hurtigst muligt.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto text-left">
          <input
            name="name"
            required
            placeholder="Navn"
            className="w-full border border-neutral-300 p-2 rounded focus:border-green-600 focus:ring-green-600"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border border-neutral-300 p-2 rounded focus:border-green-600 focus:ring-green-600"
          />
          <textarea
            name="message"
            required
            placeholder="Besked"
            className="w-full border border-neutral-300 p-2 rounded h-32 resize-none focus:border-green-600 focus:ring-green-600"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
          >
            Send besked
          </button>
        </form>

        {/* Popup “tak for din besked” */}
        {showThanks && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Tak for din besked!
              </h3>
              <p className="text-neutral-700 mb-4">
                Vi vender tilbage til dig hurtigst muligt 🌱
              </p>
              <button
                onClick={() => setShowThanks(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Luk
              </button>
            </div>
          </div>
        )}

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
