import { motion } from "framer-motion"

export default function Impressum() {
    const email = "info@nuke-digital.com"
    const subjekt = "Anfrage"
    return (
      <>
      <div 
      className="items grid grid-cols-2">
            <a href="/">
              <img className="flex h-35 w-auto p-10"
                  src="/g6.png" alt="" 
              />
            </a>
            <div className="flex justify-end items-center p-10">
                <motion.a href="/"
                initial={{scale: 1}} whileHover={{scale:1.1}} transition={{duration: 0.1}}
                className="p-0.5 rounded-full bg-linear-to-br from-emerald-500 via-teal-300 to-sky-500 transition-transform">
                    <div
                    className="bg-slate-900 rounded-full px-6 py-2">
                        <p className="text-white text-l font-medium">Home</p>
                    </div>
                </motion.a>
            </div>
        </div>
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-background px-6 md:px-24 pb-48 text-white"
        >
          
        <div className="max-w-3xl mx-auto flex flex-col gap-12">

          {/* Header */}
          <div className="flex flex-col gap-3">
            <h1 className="uppercase tracking-[0.3em] text-3xl text-white p-10 
              bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom pb-1">
              Impressum
            </h1>
            <div className="h-0.5 w-20 bg-primary" />
          </div>

          {/* Abschnitt */}
          <section className="flex flex-col gap-4 w-1/2">
            <h2 className="uppercase tracking-widest text-lg font-bold bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-text/80">
              <p>NuKe Digital - Yildirim & Kivrakoglu GbR</p><br />
              <p>Vertreten durch die beiden Gesellschafter: <br />
                <p>• Nuri Yildirim</p>
                <p>• Mustafa Kivrakoglu</p> 
              </p><br />
              Wittestraße 15<br />
              21109, Hamburg
            </p>
          </section>

          <section className="flex flex-col gap-6 w-1/2">
            <h2 className="uppercase tracking-widest text-lg font-bold bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom">
              kontakt
            </h2>
              <p><p className="font-bold">Telefon:</p> 
                <a href={`tel:+4915251933937`}>+49 1525 1933937</a><br />
                <a href={`tel:+491735696282`}>+49 173 569 6282</a><br /><br />
              <p className="font-bold">E-Mail:</p> 
                <a href={`mailto:${email}?subject=${encodeURIComponent(subjekt)}`}>info@nuke-digital.com</a></p>
          </section>

          <section className="flex flex-col gap-6 w-1/2">
            <h2 className="uppercase tracking-widest text-lg font-bold bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-text/80 leading-relaxed">
              Nuri Yildirim <br />
              Mustafa Kivrakoglu <br />
              Wittestraße 15 <br />
              21109, Hamburg <br />
              <br />
            </p>
          </section>

          <section className="flex flex-col gap-6 w-1/2">
            <h2 className="uppercase tracking-widest text-lg font-bold bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom">
              Haftung für Inhalte
            </h2>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </section>

          <section className="flex flex-col gap-6 w-1/2">
            <h2 className="uppercase tracking-widest text-lg font-bold bg-linear-to-r from-emerald-500 via-teal-300 to-sky-500 
              bg-size-[100%_2px] bg-no-repeat bg-bottom">
              Haftung für Links
            </h2>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          </section>

        </div>
      </motion.section>
    </>
  )
}