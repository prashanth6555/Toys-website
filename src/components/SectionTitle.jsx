import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-10 max-w-2xl text-center"
    >
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-extrabold tracking-[0.22em] uppercase ${light ? 'text-sun' : 'text-coral'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-semibold md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${light ? 'text-white/80' : 'text-ink/70'}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
