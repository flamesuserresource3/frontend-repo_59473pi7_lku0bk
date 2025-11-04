import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 ring-1 ring-white/15">
          FLOCORE AI • Built for the field
        </span>
        <h1 className="mt-2 bg-gradient-to-r from-violet-200 via-sky-200 to-orange-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          Your Co-Pilot for the Construction Site
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          Your entire project team, in your pocket. Always on, hands-free. FLOCORE works the way you do—on the move, with your hands full. Stop juggling devices and paperwork. Start building smarter.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            Book a Live Demo
          </a>
          <a
            href="#overview"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Watch a 2-Min Overview
          </a>
        </div>
      </div>
    </section>
  );
}
