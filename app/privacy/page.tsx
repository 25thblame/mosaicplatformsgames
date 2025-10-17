'use client'

import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="underline mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="text-4xl font-light mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-16">Last Updated: January 17, 2025</p>

        <div className="space-y-12 max-w-3xl">
          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Data Collection</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• All game data is stored locally on your device</li>
              <li>• We do not collect or store personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">What We Don't Collect</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• No email, phone numbers, or real names</li>
              <li>• No location tracking</li>
              <li>• No analytics or advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Data Storage</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• All progress saved locally on your device only</li>
              <li>• Uninstalling the app deletes all data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions? Email us at <a href="mailto:contact@mosaicplatformsgames.com" className="underline">contact@mosaicplatformsgames.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
