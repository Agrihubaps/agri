"use client";
import { useState } from "react";

export default function ContactForm() {
  const [showThanks, setShowThanks] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Должен быть вида: https://formspree.io/f/xxxxxxx
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);

    if (!endpoint) {
      setErr("Konfigurationsfejl: NEXT_PUBLIC_CONTACT_ENDPOINT mangler. Tilføj den i Vercel → Settings → Environment Variables for både Preview og Production, og redeploy.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Полезно для Formspree: тема письма и fallback получателя (если настроено в шаблоне)
    data.append("_subject", "Ny kontakt fra AgriHub");
    // Можно раскомментировать, если в шаблоне используется _replyto
    // const email = (data.get("email") || "").toString();
    // data.append("_replyto", email);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }, // для Formspree важно
      });

      if (!res.ok) {
        // Попробуем прочитать текст ошибки от Formspree
        let msg = "Uventet fejl fra serveren.";
        try {
          const j = await res.json();
          if (j?.errors?.length) msg = j.errors.map((e: any) => e.message).join(" ");
        } catch {
          msg = `${res.status} ${res.statusText}`;
        }
        setErr(`❌ Kunne ikke sende beskeden: ${msg}`);
        return;
      }

      form.reset();
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 4000);
    } catch (e) {
      setErr("⚠️ Der opstod en netværksfejl. Tjek internetforbindelsen eller endpoint-adressen.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-neutral-900">Kontakt os</h2>
        <p className="mt-3 text-neutral-600 text-lg">
          Udfyld formularen – vi vender tilbage hurtigst muligt.
        </p>

        {/* ПОДСКАЗКА, если endpoint не настроен */}
        {!endpoint && (
          <div className="mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-900 text-sm">
            Miljøvariablen <code>NEXT_PUBLIC_CONTACT_ENDPOINT</code> er ikke sat.
            Tilføj den i Vercel (Preview & Production) og redeploy.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
              Navn
            </label>
            <input
              id="name"
              name="name"
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition disabled:opacity-60"
            disabled={!endpoint}
          >
            Send besked
          </button>

          {/* Ошибка, если что-то пошло не так */}
          {err && (
            <div className="mt-3 p-3 rounded-lg bg-red-100 text-red-800 text-sm text-center">
              {err}
            </div>
          )}
        </form>

        {/* Popup “Tak for din besked” */}
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
          Eller skriv direkte på{" "}
          <a href="mailto:agrihubaps@agrihubfarm.dk" className="text-green-700 underline">
            agrihubaps@agrihubfarm.dk
          </a>
        </p>
      </div>
    </section>
  );
}
