export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-coral shadow-lg shadow-coral/30">
        <span className="absolute top-2 left-2 h-3 w-3 rounded-full bg-sun" />
        <span className="absolute top-2 right-2 h-3 w-3 rounded-full bg-mint" />
        <span className="mt-2 h-2 w-6 rounded-full border-2 border-white" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="font-display block text-xl font-semibold tracking-tight text-ink md:text-2xl">
            IDEALS
          </span>
          <span className="text-[11px] font-extrabold tracking-[0.18em] text-coral uppercase">
            Kids Toys
          </span>
        </span>
      )}
    </a>
  )
}
