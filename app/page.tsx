'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function TypingText({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{displayText}<span className="animate-pulse">|</span></span>
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="px-8 py-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Mosaic Platforms</h1>
          </div>
          <nav className="text-sm space-x-8 text-gray-600">
            <Link href="/privacy" className="hover:text-black transition">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition">Terms</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-20 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
            AI-powered <TypingText text="games" delay={100} /> that feel real.
          </h2>
        </div>

        {/* Current Work */}
        <div className="mb-32">
          <p className="text-xs tracking-widest text-gray-400 mb-12">GAMES IN DEVELOPMENT</p>
          
          <div className="mb-16">
            <h3 className="text-4xl font-light mb-3 tracking-tight">Corner Story</h3>
            <p className="text-sm text-gray-500 mb-8">Releasing Soon — iOS</p>
            <p className="text-xl leading-relaxed mb-6 text-gray-800 max-w-3xl">
              AI-driven life simulation set in Chicago. Your choices shape dynamic narratives that 
              actually remember your history. Burn bridges, build reputation, navigate real consequences. 
              Every playthrough writes a different story.
            </p>
          </div>
          
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="text-4xl font-light mb-3 tracking-tight text-gray-400">Isekai Life</h3>
            <p className="text-sm text-gray-500 mb-6">Postponed</p>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
              Fantasy life sim with AI storytelling. Development paused to focus on Corner Story launch.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-6">CORNER STORY DETAILS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">GENRE</p>
                <p className="text-sm">AI Life Sim<br />Interactive Fiction</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">PLATFORM</p>
                <p className="text-sm">iOS<br />(iPhone & iPad)</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">CORE TECH</p>
                <p className="text-sm">AI Narrative<br />Engine</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">STATUS</p>
                <p className="text-sm">Final Testing<br />Q1 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-6">CONTACT</p>
          <p className="text-lg">
            <a href="mailto:contact@mosaicplatformsgames.com" className="hover:text-gray-600 transition">
              contact@mosaicplatformsgames.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-200 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto">
          <p>© 2025 Mosaic Platforms Games</p>
        </div>
      </footer>
    </div>
  )
}
