import { AiFillInstagram, AiFillTikTok, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
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
      <div className="absolute w-full h-full overflow-x-hidden">
        <div className="absolute -z-50 right-10 top-20 w-[37vw] h-60 rotate-[-30deg] bg-primary blur-[120px] rounded-full opacity-60" />
        <div className="absolute -z-50 left-0 top-70 w-[70vw] h-62.5 bg-primary blur-[120px] rounded-full opacity-60"/>
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

export const Section1 = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 250,  // war 55 → höher = schneller
      damping: 40,     // war 25 → höher = weniger Overshooting
      restDelta: 0.001
    });
    // 4 = Anzahlt der karten/websites
    240
    let width = window.innerWidth > 600 ? (216 + 16):(240+64)
    const totalDistance = 3 * width;
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance], {clamp: false})


    return (
      <div>
        <section className="flex items-center justify-end h-[75vh]  flex-col py-8 mt-15"> 
          <div className="flex flex-col px-12 gap-4 justify-center items-center"> 
            <div className="flex md:flex-row flex-col justify-start w-full">
              <h1 className="md:text-7xl text-5xl font-semibold flex-2">Günstig Profesionelle Webseiten.</h1>
              <div className="flex-1 md:self-end justify-start flex flex-row gap-4 font-semibold z-50 md:py-0 py-4">
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
              <h3 className="flex-1 text-tex-secondary md:text-lg text-sm">Alternative zu überteurten Webentwicklern von Studenten für professionelle Webseiten ganz nach deinen Wünschen.</h3> 
              <div className="md:flex-1"/>
            </div>
          </div>           
        </section>
          <div ref={containerRef} className="h-[300vh] relative mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div className="sticky top-0 w-full pl-16 -mt-[15vh] h-screen items-center my-0 mx-auto flex justify-start overflow-visible">
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