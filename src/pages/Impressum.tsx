import { motion } from "framer-motion";

export default function Impressum() {
  const email = "info@nuke-digital.com";
  const subjekt = "Anfrage";

  return (
    <div className="min-h-dvh bg-slate-900 text-white">
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
          href="/"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12 }}
          className="p-0.5 rounded-full bg-linear-to-br from-emerald-500 via-teal-300 to-sky-500"
        >
          <div className="bg-slate-900 rounded-full px-4 py-2 sm:px-6">
            <p className="text-white text-sm sm:text-base font-medium">Home</p>
          </div>
        </motion.a>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="px-4 sm:px-6 pb-16 sm:pb-24"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Titel */}
          <div className="pt-6 sm:pt-10">
            <h1
              className="uppercase tracking-[0.25em] font-bold
                         text-2xl sm:text-3xl
                         bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500
                         bg-clip-text text-transparent"
            >
              Impressum
            </h1>
            <div className="mt-3 h-0.5 w-24 bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500" />
          </div>

          {/* Card/Abschnitt-Style: fühlt sich auf Handy sofort besser an */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
            <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="text-white/80 leading-relaxed">
              <p>NuKe Digital - Yildirim &amp; Kivrakoglu GbR</p>
              <p className="mt-3">Vertreten durch die beiden Gesellschafter:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Nuri Yildirim</li>
                <li>Mustafa Kivrakoglu</li>
              </ul>
              <p className="mt-3">Wittestraße 15</p>
              <p>21109, Hamburg</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
            <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
              Kontakt
            </h2>

            <div className="text-white/80 leading-relaxed">
              <p className="font-bold text-white">Telefon:</p>
              <div className="mt-1 flex flex-col gap-1">
                <a className="underline underline-offset-4" href="tel:+4915251933937">
                  +49 1525 1933937
                </a>
                <a className="underline underline-offset-4" href="tel:+491735696282">
                  +49 173 569 6282
                </a>
              </div>

              <p className="font-bold text-white mt-4">E-Mail:</p>
              <a
                className="underline underline-offset-4 break-all"
                href={`mailto:${email}?subject=${encodeURIComponent(subjekt)}`}
              >
                info@nuke-digital.com
              </a>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
            <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="text-white/80 leading-relaxed">
              <p>Nuri Yildirim</p>
              <p>Mustafa Kivrakoglu</p>
              <p className="mt-3">Wittestraße 15</p>
              <p>21109, Hamburg</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
            <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
              Haftung für Inhalte
            </h2>
            <p className="text-white/80 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
            <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
              Haftung für Links
            </h2>
            <p className="text-white/80 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben.
            </p>
          </section>
        </div>
      </motion.main>
    </div>
  );
}
