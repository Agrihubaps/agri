'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from './LocaleProvider'

const dict = {
  da: { problem: 'Udfordring', solution: 'Løsning', features: 'Funktioner', market: 'Marked', team: 'Team', contact: 'Kontakt', mission: 'Mission', menu: 'Menu' },
  en: { problem: 'Udfordring', solution: 'Løsning', features: 'Funktioner', market: 'Marked', team: 'Team', contact: 'Kontakt', mission: 'Mission', menu: 'Menu' }
}

function Anchor({ href, children, className, onDone }: { href: string; children: React.ReactNode; className?: string; onDone?: ()=>void }) {
  const id = href.startsWith('#') ? href.slice(1) : null
  return (
    <a href={href} className={className} onClick={(e)=>{ if(id){ e.preventDefault(); document.getElementById(id!)?.scrollIntoView({behavior:'smooth'}); history.replaceState(null,'',href); onDone?.() }}}>
      {children}
    </a>
  )
}

export default function Header(){
  const { lang, setLang } = useLocale()
  const t = dict[lang]
  const [open, setOpen] = useState(false)
  const close = ()=>setOpen(false)

  const Nav = () => (
    <>
      <Anchor href="#mission" onDone={close}>{t.mission}</Anchor>
      <Anchor href="#problem" onDone={close}>{t.problem}</Anchor>
      <Anchor href="#solution" onDone={close}>{t.solution}</Anchor>
      <Anchor href="#market" onDone={close}>{t.market}</Anchor>
      <Anchor href="#team" onDone={close}>{t.team}</Anchor>
      <Anchor href="#contact" className="btn-gold" onDone={close}>{t.contact}</Anchor>
      <div className="flex items-center gap-2 ml-4">
        <button onClick={()=>{setLang('da'); close()}} className={`px-3 py-1 rounded-xl ${lang==='da'?'bg-white text-black':'bg-white/10'}`}>DA</button>
        <button onClick={()=>{setLang('en'); close()}} className={`px-3 py-1 rounded-xl ${lang==='en'?'bg-white text-black':'bg-white/10'}`}>EN</button>
      </div>
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-greenDark/80 backdrop-blur">
      <div className="container-xxl flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AgriHub" width={40} height={40} className="rounded" />
          <span className="font-semibold tracking-wider">AgriHub</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90"><Nav /></nav>
        <button className="md:hidden px-3 py-2 rounded-xl bg-white/10" aria-label={t.menu} onClick={()=>setOpen(v=>!v)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-greenDark/95">
          <div className="container-xxl py-4 flex flex-col gap-4 text-sm"><Nav /></div>
        </div>
      )}
    </header>
  )
}
