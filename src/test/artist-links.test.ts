import { describe, expect, it } from 'vitest'
import { artistLinks } from '@/lib/artist-links'

describe('Official artist destinations', () => {
  it('opens the supplied Audiomack profile', () => {
    expect(artistLinks.audiomack).toBe('https://audiomack.com/nikobuai-1')
  })
  it('opens the supplied Spotify artist', () => {
    expect(artistLinks.spotify).toBe('https://open.spotify.com/artist/03CDJhJKuMsBqxpWGbyI1e')
  })
  it('opens the supplied Apple Music artist', () => {
    expect(artistLinks.apple).toBe('https://music.apple.com/gh/artist/nikobuai/1642315938')
  })
  it('opens the supplied Instagram profile', () => {
    expect(artistLinks.instagram).toBe('https://www.instagram.com/nikobuai/')
  })
  it('opens the supplied YouTube channel', () => {
    expect(artistLinks.youtube).toBe('https://www.youtube.com/@nikobuaimusic7963')
  })
})