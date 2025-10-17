'use client'

import Link from 'next/link'

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="underline mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="text-4xl font-light mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-16">Last Updated: January 17, 2025</p>

        <div className="space-y-12 max-w-3xl">
          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Age Requirement (17+)</h2>
            <p className="text-gray-700 leading-relaxed">
              Our games are rated 17+ and contain mature content. By using our games, you confirm you are 17 years of age or older.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Fiction Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All game content is entirely fictional. Any resemblance to real persons, places, or events is coincidental. 
              Our games are entertainment products, not simulations of real life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Players are responsible for distinguishing between fiction and reality. We are not liable for any actions 
              taken by players based on game content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">No Promotion of Illegal Activity</h2>
            <p className="text-gray-700 leading-relaxed">
              Our games depict fictional scenarios that may include illegal activities for narrative purposes. 
              This content does not constitute endorsement, encouragement, or instruction for real-world illegal behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">AI-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our games use AI to generate dynamic content. While we strive for appropriate content, 
              AI may occasionally produce unexpected or unintended results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for specific AI-generated outputs. Players should exercise discretion 
              and report any concerning content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• We are not liable for any actions you take based on game content</li>
              <li>• We are not responsible for AI-generated content or player interpretations</li>
              <li>• We are not liable for any damages arising from use of our games</li>
              <li>• You use our games at your own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-4">User Conduct</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use our games for lawful, personal entertainment purposes only. 
              Do not reverse engineer, hack, or exploit our games.
            </p>
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
