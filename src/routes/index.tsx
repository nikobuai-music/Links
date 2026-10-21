import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowDownRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Headphones, Instagram, Share2, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import sinner from '@/assets/sinner.png'
import oneMan from '@/assets/one-man.png'
import streetCalling from '@/assets/street-calling.png'
import aladdin from '@/assets/592x592bf.webp'
import avatar from '@/assets/artist-avatar.png'
import { artistLinks } from '@/lib/artist-links'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Nikobuai · The listening room' },
    { name: 'description', content: 'Explore Nikobuai’s music in an immersive listening room. Discover Sinner, One Man, Street Calling, and Aladdin on your favorite music platform.' },
    { property: 'og:title', content: 'Nikobuai · The listening room' },
    { property: 'og:description', content: 'Independent sounds. Unfiltered stories. Enter Nikobuai’s listening room.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: ListeningRoom,
})

const records = [
  { title: 'Sinner', subtitle: 'Nikobuai · P Moore · Jeff Bwuoy', type: 'RELEASE', image: sinner, sticker: 'bottom' },
  { title: 'One Man', subtitle: 'AlphabwoY ft. Nikobuai', type: 'RELEASE', image: oneMan, sticker: 'bottom' },
  { title: 'Street Calling', subtitle: 'Nikobuai × Jeff Bwuoy', type: 'RELEASE', image: streetCalling, sticker: 'bottom' },
  { title: 'Aladdin', subtitle: 'Nikobuai · Versos que Sangran', type: 'RELEASE', image: aladdin, sticker: 'top' },
] as const

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4-.9 7.5-.5 10.4 1.2.3.2.4.5.2.8zm1.5-3.3c-.3.4-.8.5-1.2.3-2.9-1.8-7.3-2.3-10.7-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.9-1.2 8.8-.6 12.1 1.4.4.2.5.7.3 1zm.1-3.4c-3.5-2.1-9.2-2.3-12.6-1.2-.5.2-1.1-.1-1.2-.6-.2-.5.1-1.1.6-1.2 3.9-1.2 10.2-1 14.2 1.4.5.3.6.9.3 1.4-.3.4-.9.5-1.3.2z" />
    </svg>
  )
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.7-0.94 2.71 1.01.08 2.04-.46 2.66-1.21z" />
    </svg>
  )
}

function ListeningRoom() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, startIndex: 0, align: 'center', duration: 35 })
  const [selected, setSelected] = useState(0)
  const [notice, setNotice] = useState('')
  const record = records[selected] ?? records[0]
  const onSelect = useCallback(() => {
    if (!embla) return
    setSelected(embla.selectedScrollSnap())
  }, [embla])
  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    return () => { embla.off('select', onSelect) }
  }, [embla, onSelect])
  useEffect(() => {
    if (!notice) return
    const id = setTimeout(() => setNotice(''), 2600)
    return () => clearTimeout(id)
  }, [notice])
  async function share() {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: 'Nikobuai · The listening room', url })
      else { await navigator.clipboard.writeText(url); setNotice('Link copied. Pass the sound on.') }
    } catch { setNotice('Share this listening room using the page address.') }
  }
  return (
    <main className="room">
      <header className="room-header">
        <div className="wordmark"><span className="brand-icon" aria-hidden="true"><i/><i/><i/><i/></span> nikobuai<span className="text-primary">.</span></div>
        <div className="header-right"><span className="header-label">Independent sounds. Unfiltered stories.</span><Button variant="music" size="icon" aria-label="Share listening room" title="Share listening room" onClick={share}><Share2/></Button></div>
      </header>
      <section className="profile">
        <div className="eyebrow"><span className="status-light"/> THE LISTENING ROOM</div>
        <h1>Nikobuai<Check className="verified" aria-label="Artist profile"/></h1>
        <p>A little soul. A lot of stories. All me.</p>
      </section>
      <section className="record-section" aria-label="Music releases">
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-track">
            {records.map((item, index) => <div key={item.title} className={`record-slide ${index === selected ? 'is-active' : ''} ${index === (selected + 1) % records.length ? 'is-next' : ''}`}>
              <div className="record-art"><div className="vinyl" aria-hidden="true"/><img className="cover" src={item.image} width={1024} height={1024} alt={`${item.title} album artwork`} draggable={false}/><span className={`record-sticker is-${item.sticker}`}>{item.type}</span></div>
            </div>)}
          </div>
        </div>
        <Button variant="music" size="icon" className="carousel-arrow previous" aria-label="Previous release" title="Previous release" onClick={() => embla?.scrollPrev()}><ChevronLeft/></Button>
        <Button variant="music" size="icon" className="carousel-arrow next" aria-label="Next release" title="Next release" onClick={() => embla?.scrollNext()}><ChevronRight/></Button>
        <div className="record-caption" aria-live="polite"><h2>{record.title}</h2><p>{record.subtitle}</p></div>
        <div className="pagination">{records.map((item, index) => <Button variant="music" key={item.title} className={`page-dot ${index === selected ? 'active' : ''}`} aria-label={`Select ${item.title}`} aria-pressed={index === selected} onClick={() => embla?.scrollTo(index)}/>)}</div>
        <div className="listen-row">
          <Button variant="listen" className="listen-audiomack" asChild>
            <a href={artistLinks.audiomack} target="_blank" rel="noopener noreferrer">
              <Headphones />
              Audiomack
              <ArrowUpRight />
            </a>
          </Button>
          <Button variant="listen" className="listen-spotify" asChild>
            <a href={artistLinks.spotify} target="_blank" rel="noopener noreferrer">
              <SpotifyIcon />
              Spotify
              <ArrowUpRight />
            </a>
          </Button>
          <Button variant="listen" className="listen-apple" asChild>
            <a href={artistLinks.apple} target="_blank" rel="noopener noreferrer">
              <AppleIcon />
              Apple Music
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>
      <section className="artist-area" aria-label="Artist links">
        <div className="artist-note">Make yourself<br/>at home.<ArrowDownRight size={32}/></div>
        <img className="avatar" src={avatar} alt="Nikobuai's seated hoodie-and-cap avatar" width={1024} height={1024}/>
        <div className="artist-links">
          <a href={artistLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><Instagram/>Instagram<ArrowUpRight/></a>
          <a href={artistLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><Youtube/>YouTube<ArrowUpRight/></a>
        </div>
      </section>
      <footer className="room-footer"><span>© {new Date().getFullYear()} Nikobuai</span><span>From the soul, for the culture.</span></footer>
      {notice && <div className="share-toast" role="status">{notice}</div>}
    </main>
  )
}
