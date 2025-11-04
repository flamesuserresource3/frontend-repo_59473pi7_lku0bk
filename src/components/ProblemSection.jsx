import React from 'react';

export default function ProblemSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold sm:text-4xl">The Site Doesn't Wait for You to Find a Laptop.</h2>
        <p className="mt-4 text-white/80">
          Every day, you're forced to make critical decisions with incomplete information. The data you need is trapped in a laptop, a trailer, or an email chain miles away, while the reality of the site is right in front of you.
        </p>

        <ul className="mt-8 space-y-4">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-violet-400" />
            <p>
              <strong>Your hands are full.</strong> You're carrying tools, plans, or climbing scaffolding. You don't have a free hand to type.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
            <p>
              <strong>Decisions are instant.</strong> A subcontractor has a question. An inspector finds an issue. You need the right answer now, not in an hour.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400" />
            <p>
              <strong>Reporting is relentless.</strong> Daily logs, incident reports, and checklists are a constant drain on your most valuable resource: time.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
            <p>
              <strong>Connectivity is a luxury.</strong> Remote sites and concrete basements don't have Wi-Fi. Your tools need to work everywhere.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
