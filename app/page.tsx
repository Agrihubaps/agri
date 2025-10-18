'use client'

import Image from 'next/image'
import Section from '../components/Section'
import { useLocale } from '../components/LocaleProvider'
import type { FormEvent } from 'react'

const base = {
  // HERO
  hero_kicker: 'AgriHub ApS',
  hero_title: 'Et nyt kapitel for skandinavisk landbrug',
  hero_body:
    'AgriHub samler hele landbrugssektoren i ét digitalt univers. En platform skabt til samarbejde, innovation og vækst. Her mødes mennesker, teknologi og bæredygtighed – for at forme fremtidens landbrug.',
  cta_1: 'Oplev visionen',
  cta_2: 'Bliv en del af AgriHub',

  // MISSION — отдельный блок сразу после Hero
  mission_title: 'Vores mission',
  mission_sub:
    'Vi bygger bro mellem tradition og innovation – med respekt for jorden og menneskene bag.',
  mission_long: [
    'Det er ikke vigtigt, hvem du ser. Det vigtige er, hvem der ser dig.',
    'Hver dag arbejder landmænd hårdt, men ofte bliver deres indsats usynlig. Produkterne er svære at finde, og udfordringerne er svære at få øje på. Agrihub ændrer dette.',
    'Vi har skabt ikke bare en platform, men et fællesskab. Her mødes landmænd, virksomheder, forskere og politikere i et samlet rum. Her findes løsninger hurtigt. Her er ingen alene – hele økosystemet står bag hver enkelt.',
    'Agrihub handler om gennemsigtighed og tillid. Forbrugeren kan se produktets oprindelse. Investoren kan se det reelle potentiale. Politikerne kan se, hvordan beslutninger påvirker lokalsamfund og landområder.',
    'Vores mission er enkel: at styrke forbindelserne og forenkle systemet. Agrihub er landbrugets stemme, og den vil nu blive hørt.',
    'Sammen kan vi ikke bare fremme bæredygtigt landbrug – vi kan skrive historie.'
  ],

  // UDFORDRINGEN — добавлено про голос Скандинавии и объединение фермеров
  problem_title: 'Udfordringen',
  problem_sub:
    'Landbruget står over for digital transformation. Vi gør den menneskelig, effektiv og værdiskabende. AgriHub bliver landbrugets stemme for hele Skandinavien – og kan blive de første, der samler alle skandinaviske landmænd.',
  problem_1_h: 'Fragmenterede løsninger og spildt tid',
  problem_1_b:
    'Landmænd og virksomheder jonglerer mellem platforme, kontakter og manuelle processer – og mister fokus på deres kerne: jorden og produktionen.',
  problem_2_h: 'Behov for ét samlet økosystem',
  problem_2_b:
    'Branchen har brug for et sted, hvor samarbejde, tillid og innovation kan vokse naturligt. Det er her, AgriHub kommer ind.',
  problem_3_h: 'En fælles stemme for Norden',
  problem_3_b:
    'Vi vil være den samlede stemme for landbruget i Skandinavien og den første platform, der forener landmænd på tværs af regionen.',

  // LØSNINGEN — расширенные описания + якорь #features
  solution_title: 'Løsningen',
  solution_sub:
    'AgriHub er mere end en platform – det er et fællesskab og en bevægelse mod et smartere, grønnere landbrug.',
  features: [
    {
      t: 'Marketplace',
      b: 'Et samlet sted til køb og salg af maskiner, udstyr og ydelser. Gennemtænkte opslag, klare specifikationer, historik og bedømmelser gør det let at foretage trygge beslutninger og finde alternative leverandører, når tiden er knap.'
    },
    {
      t: 'HR & Rekruttering',
      b: 'Opslå stillinger og sæsonjobs, byg talent-pools og match på kompetencer. Enkle profiler, anbefalinger og tilgængelighed i kalenderen hjælper dig med hurtigt at bemande marken i højsæsonen.'
    },
    {
      t: 'Community & Videndeling',
      b: 'Et stærkt fagligt netværk med tråde, artikler, events og lokale grupper. Stil spørgsmål, del løsninger og få sparring fra kolleger, leverandører og eksperter – viden flytter sig hurtigere, når vi deler den.'
    },
    {
      t: 'Data & Indsigt',
      b: 'Et overskueligt overblik over tendenser: pris- og udbudsbilleder, driftsindsigter, vejrdata og benchmark. Få et bedre grundlag for investeringer, planlægning og bæredygtige beslutninger.'
    },
    {
      t: 'Lokal søgning',
      b: 'Find præcist det, du mangler, i nærheden: filtrér på kommune/region, radius, åbningstider og sprog. Et kortbaseret overblik gør det nemt at handle lokalt, når minutter tæller.'
    },
    {
      t: 'Dyrlæger & byggefirmaer',
      b: 'Dedikerede kategorier for fagfolk: dyrlæger, byggefirmaer og beslægtede specialer. Se profiler, akkrediteringer, portefølje og responstid – og kontakt dem direkte, også ved akutte behov.'
    },
    {
      t: 'Sammenligning',
      b: 'Sammenlign op til flere produkter eller ydelser side om side: tekniske specifikationer, vilkår, levering og brugerbedømmelser. Hjælper dig til at vælge rigtigt første gang og spare både tid og penge.'
    }
  ],

  // MARKET
  market_title: 'Marked og fremtid',
  market_sub: 'Vi starter i Skandinavien – men visionen rækker videre.',
  stats: [
    { l: 'Danmark', v: '≈ 33.000 gårde' },
    { l: 'Sverige', v: '≈ 59.000 gårde' },
    { l: 'Norge', v: '≈ 10.000 gårde' },
    { l: 'Tyskland', v: '≈ 255.000 gårde' }
  ],
  market_card_h: 'Et voksende digitalt potentiale',
  market_card_b:
    'Digitalisering af landbruget er ikke fremtiden – den sker nu. AgriHub forbinder de mennesker og data, der gør det muligt.',

  // TEAM — фото + большие карточки, партнёрский блок удалён
  team_title: 'Menneskene bag AgriHub',
  team_sub: 'Erfaring, passion og et klart mål: at gøre landbruget mere forbundet og bæredygtigt.',
  team: [
    {
      n: 'Rune Larssen Elsborg – Administrerende Direktør',
      b:
        'Rune er grundlægger af AgriHub ApS og indgår som medstifter og har fokus på daglig drift, forretningsudvikling og partnerskaber.\n' +
        'Sidste 6 års erfaring i en stor agrovirksomhed med ansvar for tekniske projekter på tværs af Skandinavien og omfattende kommunikation inden for landbrugssektoren. Praktisk erfaring med ledelse af store teams, baseret på 20 års erfaring i lederstillinger på olieplatforme.'
    },
    {
      n: 'Denis Antoshyn – Direktør',
      b:
        'Denis er grundlægger af AgriHub ApS og har det overordnede ansvar for virksomhedens strategi, ledelse og udvikling.\n' +
        'Over 15 års erfaring i landbrugssektoren med en universitetsuddannelse inden for landbrug og fire års arbejde i en agrovirksomhed specialiseret i landbrugsudstyr.'
    }
  ],

  // CONTACT
  contact_title: 'Bliv en del af fremtidens landbrug',
  contact_sub: 'Skriv til os – vi sender demo og partnerinformation.',
  form_name: 'Dit navn',
  form_company: 'Virksomhed',
  form_msg: 'Din besked',
  form_send: 'Send',
  alert_ok: 'Tak! Vi kontakter dig snart.',
  alert_err: 'Der opstod en fejl. Prøv igen senere.',
  alert_no_endpoint:
    'Formen er ikke forbundet endnu. Tilføj NEXT_PUBLIC_CONTACT_ENDPOINT i Vercel → Settings → Environment Variables.'
}

// контент одинаков для da/en (всё на датском)
const copy = { da: base, en: base }

export default function Page() {
  const { lang } = useLocale()
  const t = copy[lang]

  function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
    const form = e.currentTarget
    const data = new FormData(form)
    if (!endpoint) {
      alert(t.alert_no_endpoint)
      return
    }
    fetch(endpoint as string, { method: 'POST', body: data })
      .then(() => {
        alert(t.alert_ok)
        form.reset()
      })
      .catch(() => alert(t.alert_err))
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-xxl py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest opacity-70 mb-2">{t.hero_kicker}</p>
            <h1 className="mb-4">{t.hero_title}</h1>
            <p className="opacity-90 mb-8 max-w-2xl">{t.hero_body}</p>
            <div className="flex gap-4">
              <a
                href="#solution"
                className="btn-gold"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })
                  history.replaceState(null, '', '#solution')
                }}
              >
                {t.cta_1}
              </a>
              <a
                href="#contact"
                className="btn-gold"
                style={{ background: 'linear-gradient(135deg,#1a3a2a,#274738)' }}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  history.replaceState(null, '', '#contact')
                }}
              >
                {t.cta_2}
              </a>
            </div>
          </div>

          <div className="grid place-items-center">
            <Image src="/logo.png" alt="AgriHub Logo" width={320} height={320} className="drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* MISSION — ПЕРЕД Udfordringen */}
      <Section id="mission" title={t.mission_title} subtitle={t.mission_sub}>
        <figure className="card space-y-4 md:space-y-5 p-8 md:p-10 border-l-4" style={{ borderLeftColor: '#c9a449' }}>
          <blockquote className="text-2xl md:text-3xl font-semibold leading-snug">
            “{t.mission_long[0]}”
          </blockquote>
          <figcaption className="opacity-90">
            {t.mission_long.slice(1).map((p, i) => (
              <p key={i} className="leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </figcaption>
        </figure>
      </Section>

      {/* UDFORDRINGEN */}
      <Section id="problem" title={t.problem_title} subtitle={t.problem_sub}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="mb-2">{t.problem_1_h}</h3>
            <p className="opacity-80">{t.problem_1_b}</p>
          </div>
          <div className="card">
            <h3 className="mb-2">{t.problem_2_h}</h3>
            <p className="opacity-80">{t.problem_2_b}</p>
          </div>
          <div className="card">
            <h3 className="mb-2">{t.problem_3_h}</h3>
            <p className="opacity-80">{t.problem_3_b}</p>
          </div>
        </div>
      </Section>

      {/* LØSNINGEN */}
      <Section id="solution" title={t.solution_title} subtitle={t.solution_sub}>
        {/* якорь для пункта меню “Funktioner” */}
        <h3 id="features" className="text-xl md:text-2xl font-semibold mb-4 scroll-mt-24 md:scroll-mt-28">
          Funktioner
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {t.features.map((f) => (
            <div key={f.t} className="card">
              <h3 className="mb-2">{f.t}</h3>
              <p className="opacity-80">{f.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MARKET */}
      <Section id="market" title={t.market_title} subtitle={t.market_sub}>
        <div className="grid md:grid-cols-4 gap-6">
          {t.stats.map((s) => (
            <div key={s.l} className="card text-center">
              <div className="text-3xl font-bold mb-1">{s.v}</div>
              <div className="opacity-70">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <h3 className="mb-2">{t.market_card_h}</h3>
          <p className="opacity-80">{t.market_card_b}</p>
        </div>
      </Section>

      {/* TEAM — фото владельцев + большие карточки */}
      <Section id="team" title={t.team_title} subtitle={t.team_sub}>
        <div className="card overflow-hidden p-0">
          <Image
            src="/owners.jpg" // убедись, что файл лежит в /public/owners.jpg
            alt="Stiftere af AgriHub — Rune Larssen Elsborg og Denis Antoshyn"
            width={1600}
            height={1200}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="px-6 py-4 text-sm opacity-80">
            Rune Larssen Elsborg &amp; Denis Antoshyn — stiftere og ejere af AgriHub ApS.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Rune */}
          <article className="card p-8 md:p-10 overflow-visible">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{t.team[0].n}</h3>
            <p className="text-base md:text-lg leading-relaxed opacity-90 whitespace-pre-line">
              {t.team[0].b}
            </p>
          </article>

          {/* Denis */}
          <article className="card p-8 md:p-10 overflow-visible">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{t.team[1].n}</h3>
            <p className="text-base md:text-lg leading-relaxed opacity-90 whitespace-pre-line">
              {t.team[1].b}
            </p>
          </article>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.contact_title} subtitle={t.contact_sub}>
        <form onSubmit={handleContact} className="card grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder={t.form_name}
              className="rounded-xl bg-white/10 px-4 py-3 outline-none"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="rounded-xl bg-white/10 px-4 py-3 outline-none"
            />
          </div>
          <input
            name="company"
            placeholder={t.form_company}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          />
          <textarea
            name="message"
            placeholder={t.form_msg}
            rows={4}
            className="rounded-xl bg-white/10 px-4 py-3 outline-none"
          />
          <button className="btn-gold w-fit">{t.form_send}</button>
          {!process.env.NEXT_PUBLIC_CONTACT_ENDPOINT && (
            <p className="text-xs opacity-60">
              Tilføj kontaktformular: sæt NEXT_PUBLIC_CONTACT_ENDPOINT i Vercel → Settings → Environment Variables (f.eks. Formspree).
            </p>
          )}
        </form>
      </Section>
    </main>
  )
}
