import React from 'react';

export default function TestimonialsCTA() {
  return (
    <section id="demo" className="relative w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">Stop Juggling. Start Building.</h3>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">
            Your time is too valuable to be spent on administrative tasks or searching for information. Equip your team with an AI co-pilot that works as hard as you do.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Book Your Personalized Demo Today
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Watch a 2-Min Overview
            </a>
          </div>
        </div>
        <p id="overview" className="mt-10 text-center text-xs text-white/50">
          Auto-enhanced with Spline asset • AI voice agent aura animation in the center with a purple, bluish, orangish radial gradient.
        </p>
      </div>
    </section>
  );
}
