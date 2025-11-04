import React from 'react';

function FeatureCard({ number, title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 to-orange-400 text-xs font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/80">{children}</p>
    </div>
  );
}

function TeamBlock({ heading, subtitle, bullets }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h4 className="text-lg font-semibold text-white">{heading} <span className="text-white/60">— {subtitle}</span></h4>
      <ul className="mt-3 space-y-2 text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-4 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#0b0b14] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard number="1" title="Your Voice is Your Only Tool">
            FLOCORE works from your pocket. With your phone screen off, just speak your command. Whether you're climbing scaffolding or carrying materials, your AI co-pilot is always listening and ready to assist.
          </FeatureCard>
          <FeatureCard number="2" title="An Entire Project Team on Standby">
            Ask for a complex structural calculation. Dictate a detailed incident report. Get an instant answer on a building code—your on-demand structural engineer, safety officer, and project admin.
          </FeatureCard>
          <FeatureCard number="3" title="From Answers to Action">
            FLOCORE doesn't just find information; it acts on it. Email reports, check schedules, and connect to your tools, turning insights into immediate action.
          </FeatureCard>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <TeamBlock
            heading="The Co-Pilot & Vision Agents"
            subtitle="Your Eyes on the Site"
            bullets={[
              'Live Visual Analysis: identify steel sections, measure rebar spacing, and spot safety hazards in real-time.',
              'Multi-Modal Fusion: compare the camera view with PDF drawings to verify as-built conditions instantly.',
            ]}
          />
          <TeamBlock
            heading="Structural & Geotechnical Agents"
            subtitle="On-Call Engineering"
            bullets={[
              'Complex calculations for RC beams, slender columns, and steel connections to ACI, Eurocode, or SNI.',
              'Geotechnical insights: soil bearing capacity, settlement, and slope stability on the spot.',
            ]}
          />
          <TeamBlock
            heading="Document Agents"
            subtitle="Automated Admin Team"
            bullets={[
              'HSE Officer: Incident Reports, Risk Assessments, and JSAs from a simple voice command.',
              'Quality Manager: ITPs, NCRs, and quality checklists generated instantly.',
              'Site Manager: Daily Site Reports, delivery logs, and meeting minutes without typing a word.',
            ]}
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.02] p-6">
            <h3 className="text-xl font-semibold">Powered by Hybrid Intelligence</h3>
            <p className="mt-2 text-white/80">
              You can't depend on a tool that only works with perfect internet. FLOCORE blends cloud and on-device intelligence for power online and reliability offline.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h5 className="font-semibold text-violet-200">Premium (Online)</h5>
                <p className="mt-1 text-sm text-white/80">Leverage powerful cloud AI for visual analysis, complex reasoning, and web-grounded answers.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h5 className="font-semibold text-emerald-200">Advanced (Offline)</h5>
                <p className="mt-1 text-sm text-white/80">Seamlessly switch to an on-device engine. Run calculations and draft documents with zero connectivity.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.02] p-6">
            <h3 className="text-xl font-semibold">Built for Every Role on Site</h3>
            <ul className="mt-3 space-y-3 text-white/80">
              <li>
                <em>Site Manager:</em> “I speak while walking the site—daily reports draft themselves, deliveries log automatically. Game-changer.”
              </li>
              <li>
                <em>HSE Officer:</em> “Photo + dictation = OSHA-compliant incident report on the spot. What took an hour now takes two minutes.”
              </li>
              <li>
                <em>Quality Control:</em> “Asked ‘Does this match the spec?’ — got instant confirmation for as-built verification.”
              </li>
              <li>
                <em>Site Engineer:</em> “Verified a rebar change with a quick calc right on the slab. No delays, no trips back to the office.”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
