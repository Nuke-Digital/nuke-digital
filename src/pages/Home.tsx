import { AiFillInstagram, AiFillTikTok, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Home() {
  const email = "info@nuke-digital.com";
  const subjekt = "Anfrage";

  return (
    <div className="min-h-dvh bg-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <a href="/" className="shrink-0">
          <img
            className="h-10 w-auto sm:h-12 md:h-14"
            src="/g6.png"
            alt="Nuke Digital"
          />
        </a>

        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12 }}
          href="/impressum"
          className="p-0.5 rounded-full bg-linear-to-br from-emerald-500 via-teal-300 to-sky-500"
        >
          <div className="bg-slate-900 rounded-full px-4 py-2 sm:px-6">
            <p className="text-white text-sm sm:text-base font-medium">Impressum</p>
          </div>
        </motion.a>
      </header>

      {/* Main */}
      <main className="px-4 sm:px-6">
        <section className="text-white font-bold flex flex-col items-center text-center pt-10 sm:pt-14">
          <span className="py-4 inline-flex items-center gap-1 bg-linear-to-br text-transparent from-emerald-500 via-teal-300 to-sky-500 bg-clip-text
                           text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Coming soon
          </span>

          <span className="inline-flex w-10 justify-center text-4xl sm:text-5xl pb-10 sm:pb-14">
            <span className="animate-pulse [animation-delay:150ms]">.</span>
            <span className="animate-pulse [animation-delay:300ms]">.</span>
            <span className="animate-pulse [animation-delay:600ms]">.</span>
          </span>

          {/* Socials */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10 pt-4 pb-10">
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-5xl sm:text-6xl"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </motion.a>

            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="text-5xl sm:text-6xl"
              aria-label="TikTok"
            >
              <AiFillTikTok />
            </motion.a>

            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-5xl sm:text-6xl"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </motion.a>

            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${email}?subject=${encodeURIComponent(subjekt)}`}
              className="text-5xl sm:text-6xl"
              aria-label="E-Mail"
            >
              <AiFillMail />
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}
