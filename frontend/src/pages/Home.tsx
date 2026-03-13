import { AiFillInstagram, AiFillTikTok, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import MoAesthetikLogo from "/moAesthetikLogo.svg";

export const websites = [
  {
    id: "1",
    title: "Mo-Ästhetik"
  },
  {
    id: "2",
    title: "Mo-Ästhetik"
  },
  {
    id: "3",
    title: "Mo-Ästhetik"
  },
  {
    id: "4",
    title: "Mo-Ästhetik"
  },
  {
    id: "5",
    title: "Mo-Ästhetik"
  }
]

export default function Home() {
  const email = "info@nuke-digital.com";
  const subjekt = "Anfrage";

  return (
    <div className="relative">
      <div className="absolute w-full h-full overflow-x-hidden inset-0">
      <motion.div
        className="absolute -z-50 right-10 top-20 w-[37vw] h-60 rotate-[-30deg] blur-[120px] bg-primary rounded-full opacity-60"
      />
        <motion.div initial={{opacity: 0.6}} animate={{opacity: [0.6, 0.4, 0.6, 0.8, 0.6]}} 
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut'}} 
        className="absolute -z-50 left-0 top-70 w-[70vw] h-62.5 bg-primary blur-[120px] rounded-full opacity-60"/>
      </div>

    <div className="lg:mx-16 mx-4 border-l border-r border-border border-dashed -mt-20 mb-1">
      <Section1/>
      <Section2/>


      {/* Main */}
      <main className="px-4 sm:px-6">
        <section className="text-white font-bold flex flex-col items-center text-center pt-10 sm:pt-14">
          <span className="py-4 z-50 inline-flex items-center gap-1 bg-linear-to-br text-transparent from-emerald-500 via-teal-300 to-sky-500 bg-clip-text
                           text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            In Bearbeitung 🏗️
          </span>

          <span className="inline-flex w-10 justify-center text-4xl sm:text-5xl pb-10 sm:pb-14">
            <span className="animate-pulse [animation-delay:150ms]">.</span>
            <span className="animate-pulse [animation-delay:300ms]">.</span>
            <span className="animate-pulse [animation-delay:600ms]">.</span>
          </span>

          {/* Socials */}
          <div className="grid grid-cols-2 z-50 gap-8 sm:grid-cols-4 sm:gap-10 pt-4 pb-10">
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
      <div className="absolute -z-50 -left-15 -bottom-50 w-[80vw] h-50 bg-primary blur-[120px] rounded-full opacity-60" />
      <div className="md:block hidden absolute -z-50 left-175 -bottom-50 w-50 h-50 bg-primary blur-[120px] rounded-full opacity-60" />
  </div>
  );
}

const SECTION_HEIGHT = 1500

export const Section1 = () => {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const { scrollYProgress: containerScrollYProgess } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })
    const { scrollYProgress: heroScrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    })
    // 4 = Anzahlt der karten/websites
    let width = window.innerWidth > 600 ? (216 + 16):(240+64)
    const totalDistance = 3 * width;
    const x = useTransform(containerScrollYProgess, [0.3, 1], [0, -totalDistance], {clamp: false})
    const opacity = useTransform(containerScrollYProgess, [0, 0.2], [1, 0])
    const opacity_a = useTransform(heroScrollYProgress, [0.3,0.5], [0,1])
    const y = useTransform(heroScrollYProgress, [0,1], [-100, 0])
    const y_mobile = useTransform(heroScrollYProgress, [0.5,1], [0, -1000])


    return (
      <div className="relative w-full">
        <section ref={heroRef} style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`}} className="relative w-full h-full"> 
          <div className="h-screen flex flex-col md:px-12 px-4 gap-4 justify-center items-center mt-20"> 
            <div className="flex md:flex-row flex-col justify-start w-full">
              <h1 className="md:text-7xl text-5xl font-semibold flex-2 wrap-anywhere">Günstig Profesionelle Webseiten.</h1>
              <div className="flex-1 md:self-end justify-start flex flex-row gap-4 font-semibold z-50 md:py-0 py-4 text-lg">
                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/"
                  style={{boxShadow: 
                      `0 0 2px #00D4FF,
                        0 0 2px #00D4FF,
                        0 0 10px #00D4FF`}}
                  className='p-2 bg-linear-to-br from-primary to-secondary rounded-lg text-center'
                  >
                    Anfragen
                  </motion.a>      
                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/"

                  className='p-2 bg-linear-to-br border-border border from-background-secondary to-background-secondary rounded-lg min-w-24 text-center'
                  >
                    Mehr Erfahren
                  </motion.a>      
              </div>
            </div>
            <div className="flex flex-row justify-start w-full">
              <h3 className="flex-1 text-tex-secondary md:text-lg text-lg">Alternative zu überteurten Webentwicklern von Studenten für professionelle Webseiten ganz nach deinen Wünschen.</h3> 
              <div className="md:flex-1"/>
            </div>
          </div>
          <motion.div style={{opacity}} className="md:flex hidden md:flex-row flex-col h-full w-full relative md:px-32">
            <div className="sticky top-0 flex-1 h-screen flex items-center justify-center">
              <motion.div style={{opacity: opacity_a, y}} className="flex flex-row gap-8">
                <span className="w-1 bg-primary"/>
                <h2 className="md:text-7xl text-5xl uppercase font-bold">WIESO<br/>NUKE<br/>DIGITAL?</h2>
              </motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}} transition={{duration: 0.5, ease: 'easeInOut'}} className="bg-secondary w-[70vw] h-32 absolute top-75 left-0 -rotate-5 -z-50 blur-[120px]"/>
            </div>
            <div className="h-full flex flex-col flex-1 items-stretch">
              <div className="flex flex-1 items-center flex-col justify-center gap-4">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">preis günstig entwickelt von Studenten</h2>
                <p className="text-xl text-tex-secondary">
Wir sind junge, motivierte und engagierte Informatikstudenten am Anfang unserer beruflichen Laufbahn. Um wertvolle praktische Erfahrung zu sammeln und unsere Fähigkeiten unter Beweis zu stellen, bieten wir hochwertige Webentwicklung zu fairen und preisgünstigen Konditionen an.
                </p>
              </div>
              <div className="flex flex-1 items-center flex-col justify-center gap-4">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">nutzung der neusten technologien zur erstellung von modernen webseiten</h2>
                <p className="text-xl text-tex-secondary">
                  Durch unser Informatikstudium und unsere Begeisterung für das Programmieren 
                  bleiben wir stets am Puls der Zeit und arbeiten mit den neuesten Technologien, um moderne und zukunftsorientierte Lösungen zu entwickeln.
                </p>
              </div>
              <div className="flex flex-1 items-center flex-col justify-center gap-4">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">zukunftsorientiert und auf der suche nach herausforderungen</h2>
                <p className="text-xl text-tex-secondary">
Unser Ziel ist es, unsere Fähigkeiten in echten Projekten zu beweisen, starke Referenzen aufzubauen und uns eine nachhaltige Reputation zu erarbeiten. 
Dabei steht die Entwicklung moderner Websites mit Leidenschaft und hoher Qualität für uns an erster Stelle.
                </p>
              </div>
            </div>           
          </motion.div>
          <motion.div style={{opacity}} className="flex md:hidden flex-col h-full w-full relative">
            <div className="sticky top-0 flex h-screen items-center">
              <motion.div style={{opacity: opacity_a}} className="flex flex-row gap-8">
                <span className="w-1 bg-primary"/>
                <div className="bg-secondary w-[70vw] h-32 absolute top-75 left-5 -rotate-20 -z-50 blur-[120px]"/>
                <motion.h2 style={{y: y_mobile}} className="md:text-7xl text-5xl uppercase font-bold">WIESO<br/>NUKE<br/>DIGITAL?</motion.h2>
              </motion.div>
            </div>

            <div className="h-full flex flex-col flex-1 items-stretch pl-8 pr-2">
              <div className="flex flex-1 items-center flex-col justify-center gap-4">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">preis günstig entwickelt von Studenten</h2>
                <p className="text-xl text-tex-secondary">
Wir sind junge, motivierte und engagierte Informatikstudenten am Anfang unserer beruflichen Laufbahn. Um wertvolle praktische Erfahrung zu sammeln und unsere Fähigkeiten unter Beweis zu stellen, bieten wir hochwertige Webentwicklung zu fairen und preisgünstigen Konditionen an.
                </p>
              </div>
              <div className="flex flex-1 items-center flex-col justify-center gap-4">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">nutzung der neusten technologien zur erstellung von modernen webseiten</h2>
                <p className="text-xl text-tex-secondary">
                  Durch unser Informatikstudium und unsere Begeisterung für das Programmieren 
                  bleiben wir stets am Puls der Zeit und arbeiten mit den neuesten Technologien, um moderne und zukunftsorientierte Lösungen zu entwickeln.
                </p>
              </div>
              <div className="flex flex-1 items-center flex-col justify-center gap-4 pb-32">
                <h2 className="uppercase md:text-4xl text-2xl text-primary">zukunftsorientiert und auf der suche nach herausforderungen</h2>
                <p className="text-xl text-tex-secondary">
Unser Ziel ist es, unsere Fähigkeiten in echten Projekten zu beweisen, starke Referenzen aufzubauen und uns eine nachhaltige Reputation zu erarbeiten. 
Dabei steht die Entwicklung moderner Websites mit Leidenschaft und hoher Qualität für uns an erster Stelle.
                </p>
              </div>
            </div>           
          </motion.div>
        </section>
          <div ref={containerRef} className="h-[300vh] flex pt-[50vh] relative mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div className="sticky top-0 w-full pl-16 h-screen items-center my-0 mx-auto flex justify-start overflow-visible">
                  <motion.div className="flex gap-16 z-50 transform-gpu" style={{ x, willChange: 'transform', originX: 0}}>
                   <a
                     className="bg-background-secondary shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>300+ Monatliche Aufrufe</h2>
                      <h2>20+ Tägliche Termin Anfragen</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                     <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                   </a>
                   <a
                   href="https://mo-aesthetik.de"
                     className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>300+ Monatliche Aufrufe</h2>
                      <h2>20+ Tägliche Termin Anfragen</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                     <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                   </a>

                    <a
                   href="https://mo-aesthetik.de"
                     className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>300+ Monatliche Aufrufe</h2>
                      <h2>20+ Tägliche Termin Anfragen</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                     <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                   </a>
                    <a
                   href="https://mo-aesthetik.de"
                     className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>300+ Monatliche Aufrufe</h2>
                      <h2>20+ Tägliche Termin Anfragen</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                     <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                   </a>
                  </motion.div>
              </motion.div>
          </div>
      </div>
    )
}

export const Section2 = () => {

  return (
    <section className="flex -mt-[30vh] justify-start items-center w-full z-100 pt-32">
            <div className="items-start flex md:flex-row flex-col justify-start w-full px-12">
              <div className="flex flex-col flex-1 gap-2">
                <span className="py-4 z-50 font-semibold inline-flex items-center gap-1 bg-linear-to-br text-transparent from-primary to-secondary bg-clip-text
                                text-2xl">
                  Anleitung
                </span>
                <h1 className="text-5xl font-semibold">Der Weg zur Webseite deiner Träume </h1>
                <h3 className="flex-1 text-tex-secondary md:text-lg text-md">Ganz Einfach in drei Schritten eine neue Webseite anfragen.</h3> 
              </div>
              <div className="flex-1 md:self-end flex justify-end flex-row gap-4 font-semibold z-50 md:py-0 py-4">
                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/"
                  style={{boxShadow: 
                      `0 0 2px #00D4FF,
                        0 0 2px #00D4FF,
                        0 0 10px #00D4FF`}}
                  className='p-2 bg-linear-to-br from-primary to-secondary rounded-lg text-center'
                  >
                    Anfragen
                  </motion.a>      
                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/"

                  className='p-2 bg-linear-to-br border-border border from-background-secondary to-background-secondary rounded-lg min-w-24 text-center'
                  >
                    Mehr Erfahren
                  </motion.a>      
              </div>
            </div>
    </section>
  )
}