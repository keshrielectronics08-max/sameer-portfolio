import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface BentoLayer {
  label: string;
  tech: string[];
}

interface BentoCategory {
  title: string;
  badge: string;
  items: string[];
  description: string;
  stat: string;
  colSpan: string;
  layers?: BentoLayer[];
}

const bentoCategories: BentoCategory[] = [
  {
    title: 'BUSINESS SYSTEMS',
    badge: 'CORE PILLAR',
    items: ['TallyPrime', 'Billing & Invoicing', 'GST Accounting', 'Ledgers & Vouchers'],
    description: 'End-to-end accounting operations — ledgers, vouchers, billing and GST-related work with clean digital record management.',
    stat: 'TALLYPRIME EXPERT',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'NETWORK & SURVEILLANCE',
    badge: 'CONNECTIVITY',
    items: ['LAN Setup', 'IP Cameras', 'CCTV Networking', 'Troubleshooting'],
    description: 'LAN setup, network configuration, CCTV and IP-camera connectivity with fast on-site troubleshooting.',
    stat: 'LAN + CCTV',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA & REPORTING',
    badge: 'ACCURACY',
    items: ['MS Excel', 'MIS Reports', 'Data Entry', 'Documentation'],
    description: 'Organized business data, MIS reporting and documentation — accurate records, ready whenever decisions need them.',
    stat: 'EXCEL / MIS',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'WEB DEVELOPMENT',
    badge: 'FULL-STACK BUILD',
    items: ['Next.js', 'React', 'Tailwind CSS', 'API Routes', 'Node.js + Express', 'PostgreSQL', 'Supabase / Neon', 'Vercel'],
    description: 'Modern full-stack web development - Next.js interfaces, API routes, managed Postgres and live Vercel hosting.',
    stat: 'NEXT.JS + VERCEL',
    colSpan: 'lg:col-span-7',
    layers: [
      { label: 'FRONTEND', tech: ['Next.js', 'React + Tailwind CSS'] },
      { label: 'BACKEND', tech: ['Next.js API Routes', 'Node.js + Express'] },
      { label: 'DATABASE', tech: ['PostgreSQL', 'Supabase / Neon'] },
      { label: 'HOSTING', tech: ['Vercel'] },
    ],
  },
  {
    title: 'BUSINESS AUTOMATION',
    badge: 'EVENT-DRIVEN',
    items: ['Tally TDL', 'Node.js', 'Baileys', 'WhatsApp API', 'QR Auth', 'Tally XML API'],
    description: 'Tally-triggered WhatsApp auto-invoicing - TDL reports push bills over WhatsApp automatically with delivery logs.',
    stat: 'TALLY + WHATSAPP',
    colSpan: 'lg:col-span-12',
    layers: [
      { label: 'TRIGGER', tech: ['Tally TDL Reports'] },
      { label: 'ENGINE', tech: ['Node.js + Baileys'] },
      { label: 'AUTH', tech: ['QR Session'] },
      { label: 'DELIVERY', tech: ['WhatsApp Auto-Invoice'] },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Layer Architecture Rows */}
              {block.layers && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {block.layers.map((layer) => (
                    <div
                      key={layer.label}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-sm border border-[#8C6D4F]/25 bg-[#050403]"
                    >
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] shrink-0">
                        {layer.label}
                      </span>
                      <span className="text-[11px] font-mono text-right text-[#F7E7C4]">
                        {layer.tech.join(' / ')}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;