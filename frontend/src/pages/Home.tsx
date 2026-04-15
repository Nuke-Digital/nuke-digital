import { AiFillInstagram, AiFillTikTok, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import { TbExternalLink, TbLocation } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react"
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

    <div className="lg:mx-16 mx-4 border-l border-r border-border border-dashed -mt-20 mb-1 relative">
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
      <div className="relative w-full z-20">
        <section id="start" ref={heroRef} style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`}} className="relative w-full h-full"> 
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
              <h3 className="flex-1 text-tex-secondary md:text-lg text-lg">Alternative zu überteuerten Webentwicklern von Studenten für professionelle Webseiten ganz nach deinen Wünschen.</h3> 
              <div className="md:flex-1"/>
            </div>
          </div>
          <motion.div style={{opacity}} className="md:flex hidden md:flex-row flex-col h-full w-full relative md:px-32">
            <div id="about" className="sticky top-0 flex-1 h-screen flex items-center justify-center">
              <motion.div  style={{opacity: opacity_a, y}} className="flex flex-row gap-8">
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
          <motion.div  style={{opacity}} className="flex md:hidden flex-col h-full w-full relative">
            <div className="sticky top-0 flex h-screen items-center">
              <motion.div style={{opacity: opacity_a}} className="flex flex-row gap-8">
                <span className="w-1 bg-primary"/>
                <div className="bg-secondary w-[70vw] h-32 absolute top-75 left-5 -z-50 blur-[120px] transform-gpu will-change-transform"/>
                <motion.h2 id="about" style={{y: y_mobile}} className="will-change-transform transform-gpu md:text-7xl text-5xl uppercase font-bold">WIESO<br/>NUKE<br/>DIGITAL?</motion.h2>
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
              <motion.div className="sticky overflow-x-hidden top-0 w-full pl-16 h-screen items-center my-0 mx-auto flex justify-start overflow-visible">
                  <motion.div className="flex gap-16 z-50 transform-gpu" style={{ x, willChange: 'transform', originX: 0}}>
                   <div
                     id="referenzen" 
                     className="shrink-0 justify-center items-center rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                   >
                     <motion.h1 
                     initial={{opacity: 0}}
                     whileInView={{opacity: 1}}
                     transition={{delay: 0.2, duration: 1}}
                     className="md:text-5xl text-4xl text-center text-primary
                      font-semibold uppercase">unsere referenzen</motion.h1>
                   </div>
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
                     className="bg-linear-to-br from-background-secondary from-15% to-primary shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Bald Verfügbar</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>Weitere Referenzen in Bearbeitung</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                   </a>
                    <a
                     className="bg-linear-to-br from-background-secondary from-15% to-secondary shrink-0 border border-border rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                     key={"mo-aesthetik"}
                   >
                     <h1 className="text-xl font-semibold">Bald Verfügbar</h1>
                     <div className="flex-col flex py-4 font-semibold">
                      <h2>Weitere Referenzen in Bearbeitung</h2>
                     </div>
                     <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                   </a>
                  </motion.div>
              </motion.div>
          </div>
          {/*<div ref={containerRef} className="md:hidden flex py-[50vh] mt-64 relative mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                  <motion.div className="flex gap-16 z-50 transform-gpu flex-col justify-center">
                   <div
                     id="referenzen" 
                     className="justify-center items-center rounded-xl overflow-hidden h-85 px-16 border-xl relative flex flex-col p-8"
                   >
                     <motion.h1 
                     initial={{opacity: 0}}
                     whileInView={{opacity: 1}}
                     transition={{delay: 0.2, duration: 1}}
                     className="md:text-5xl text-4xl text-center text-primary
                      font-semibold uppercase">unsere referenzen</motion.h1>
                   </div>
                   <div className="w-full px-4">
                    <motion.a
                      initial={{x: 300, opacity: 0}}
                      whileInView={{x: 0, opacity: 1}}
                      transition={{duration: 0.4}}
                      viewport={{once: true}}
                      href="https://mo-aesthetik.de"
                      className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] border border-border rounded-xl overflow-hidden h-85 border-xl relative flex flex-col p-8"
                      key={"mo-aesthetik"}
                    >
                      <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                      <div className="flex-col flex py-4 font-semibold">
                        <h2>300+ Monatliche Aufrufe</h2>
                        <h2>20+ Tägliche Termin Anfragen</h2>
                      </div>
                      <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                      <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                    </motion.a>
                   </div>
                   <div className="w-full px-4">
                    <motion.a
                      initial={{x: 300, opacity: 0}}
                      whileInView={{x: 0, opacity: 1}}
                      transition={{duration: 0.4}}
                      viewport={{once: true}}
                      href="https://mo-aesthetik.de"
                      className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] border border-border rounded-xl overflow-hidden h-85 border-xl relative flex flex-col p-8"
                      key={"mo-aesthetik"}
                    >
                      <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                      <div className="flex-col flex py-4 font-semibold">
                        <h2>300+ Monatliche Aufrufe</h2>
                        <h2>20+ Tägliche Termin Anfragen</h2>
                      </div>
                      <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                      <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                    </motion.a>
                   </div>
                   <div className="w-full px-4">
                    <motion.a
                      initial={{x: 300, opacity: 0}}
                      whileInView={{x: 0, opacity: 1}}
                      transition={{duration: 0.4}}
                      viewport={{once: true}}
                      href="https://mo-aesthetik.de"
                      className="bg-linear-to-br from-background-secondary from-15% to-[#DCC7A1] border border-border rounded-xl overflow-hidden h-85 border-xl relative flex flex-col p-8"
                      key={"mo-aesthetik"}
                    >
                      <h1 className="text-xl font-semibold">Mo-Ästhetik</h1>
                      <div className="flex-col flex py-4 font-semibold">
                        <h2>300+ Monatliche Aufrufe</h2>
                        <h2>20+ Tägliche Termin Anfragen</h2>
                      </div>
                      <TbExternalLink className="absolute top-7 right-7" size={32} color={"#FCFCFC"}/>
                      <img src={MoAesthetikLogo} className="w-50 h-50 absolute -bottom-7 right-7"/>
                    </motion.a>
                   </div>
                  </motion.div>
          </div>
          */}
      </div>
    )
}

export const Section2 = () => {

  const [openProfile, setOpenProfile] = useState([false, false])

  const scrollToKemal = () => {
    const element = document.getElementById("kemalProfile");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToNuri = () => {
    const element = document.getElementById("nuriProfile");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setTrue = (index: number) => {
    setOpenProfile(prev => {
      if(index == -1) {
        setOpenProfile(prev => prev.map((_) => false));
        return openProfile;
      }
      const newArr = [...prev];
      setOpenProfile(prev => prev.map((_, i) => i === index));
      newArr[index] = true;
      return newArr;
    });
  };

  return (
    <section id="Entwickler" className="flex -mt-[30vh] flex-col justify-center items-center w-full z-30 pt-32 relative">
      <div className="flex flex-row justify-center items-center">
        <motion.div id="kemalProfile" 
        style={{display: openProfile[0] ? 'flex':'none'}}
        initial={{opacity: 0}}
        animate={{opacity: openProfile[0] ? 1:0}}
        className="py-32 md:px-32 px-4 w-full z-40 flex justify-center md:flex-row flex-col items-start self-end gap-8 relative">
          <button onClick={() => {setTrue(-1)}} className="absolute top-16 md:right-16 right-0 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-45" width="20" height="20" viewBox="0 0 24 24"><path fill='#fcfcfc' d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </button>
          <div className="flex py-8 px-10 md:mx-4 rounded-xl bg-background-secondary flex-col justify-center items-center flex-1 gap-4">
            <img className="rounded-full" src="/kemal.png" width={250} height={250}/>
            <div className="px-4 py-2 text-tex-secondary items-center gap-2 rounded-full border-border border-2 flex">
              <TbLocation/>
              <h3 className="text-md">Aus Hamburg</h3> 
            </div>
            <h1 className="text-4xl leading-7.5 font-semibold text-center">Mustafa Kemal Kivrakoglu</h1>
            <motion.a 
            href="https://www.linkedin.com/in/mustafa-kemal-kivrakoglu-604949284/"
            initial={{backgroundColor: '#00FF9D'}}
            whileHover={{backgroundColor: '#00D4FF'}}
            className="p-2 bg-primary text-center mt-6 rounded-lg w-full">
              <h3 className="font-semibold">Mein LinkedIn</h3>
            </motion.a>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <h3 className="text-tex-secondary text-md">
Hallo, ich bin Mustafa Kemal Kivrakoglu, 20 Jahre alt, und studiere Informatik an der Universität Hamburg. Neben meinem Studium arbeite ich bei Hamburg Bit Bots und beschäftige mich dort mit der Entwicklung von Vision Systemen für autonome Roboter. Zu meinen Kernkompetenzen gehören Projektplanung, agile Softwareentwicklung und Webentwicklung.

            </h3> 
            <div className="grid grid-cols-2 grid-rows-2 w-full gap-4 mt-4">
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div id="nuriProfile" 
        style={{display: openProfile[1] ? 'flex':'none'}}
        initial={{opacity: 0}}
        animate={{opacity: openProfile[1] ? 1:0}}
        className="py-32 md:px-32 px-4 w-full z-40 flex justify-center md:flex-row flex-col items-start self-end gap-8 relative">
          <button onClick={() => {setTrue(-1)}} className="absolute top-16 md:right-16 right-0 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-45" width="20" height="20" viewBox="0 0 24 24"><path fill='#fcfcfc' d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </button>
          <div className="flex py-8 px-10 md:mx-4 rounded-xl bg-background-secondary flex-col justify-center items-center flex-1 gap-4">
            <img className="rounded-full" src="/nuri.jpeg" width={250} height={250}/>
            <div className="px-4 py-2 text-tex-secondary items-center gap-2 rounded-full border-border border-2 flex">
              <TbLocation/>
              <h3 className="text-md">Aus Hamburg</h3> 
            </div>
            <h1 className="text-4xl leading-7.5 font-semibold text-center">Nuri Yildirim</h1>
            <motion.a 
            href="https://www.linkedin.com/in/nuri-yildirim-0b64a0330/"
            initial={{backgroundColor: '#00FF9D'}}
            whileHover={{backgroundColor: '#00D4FF'}}
            className="p-2 bg-primary text-center mt-6 rounded-lg w-full">
              <h3 className="font-semibold">Mein LinkedIn</h3>
            </motion.a>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <h3 className="text-tex-secondary text-md">
            Hallo, ich bin Nuri Yildirim und studiere Computer Science an der Technischen Universität Hamburg. 
            Programmieren begleitet mich schon seit meiner Kindheit und ist bis heute eine große Leidenschaft von mir. 
            In dieser Zeit habe ich unter anderem Apps und Webseiten entwickelt und sammle weiterhin gerne neue Erfahrungen 
            in der Software- und Webentwicklung.


            </h3> 
            <div className="grid grid-cols-2 grid-rows-2 w-full gap-4 mt-4">
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ease: "easeInOut", delay: 0.1}}
              className="flex flex-col justify-start items-start bg-background-highlight p-8 rounded-xl">
                <h1 className="font-semibold text-2xl">5J</h1>
                <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
            <div className="items-start text-center flex flex-col justify-center w-full md:px-12 px-4 gap-16">
              <div className="flex w-full justify-center items-center flex-col flex-1 gap-2">
                <span id="devs" className="py-4 z-30 font-semibold inline-flex items-center gap-1 bg-linear-to-br text-transparent from-primary to-secondary bg-clip-text
                                text-2xl">
                  Entwickler
                </span>
                <h1 className="text-5xl font-semibold">Das sind Wir!</h1>
                <h3 className="flex-1 text-tex-secondary md:text-xl text-lg md:w-xl">Durch viel Engagement und Fleiß, bauen wir dir eine unvergessliche Webseite!</h3> 
              </div>
              <div className="w-full md:flex-row flex-col flex justify-center items-center gap-8">
                <a
                   className="bg-background-secondary md:w-sm w-full gap-2 shrink-0 border border-border rounded-xl overflow-hidden border-xl relative flex flex-col p-8"
                 >
                   <div className="flex flex-row flex-1 items-center justify-start gap-8">
                    <img className="rounded-full" src="/kemal.png" width={75} height={75}/>
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-2xl font-semibold leading-6 text-left">Mustafa Kemal<br/>Kivrakoglu</h1>
                      <h3 className="text-tex-secondary tracking-widest text-sm">Aus Hamburg</h3> 
                    </div>
                   </div>
                   <div className="flex-row flex p-4 font-semibold">
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.1}}
                    className="flex flex-col justify-start items-center h-auto w-24">
                      <h1 className="font-semibold text-2xl">5J</h1>
                      <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
                    </motion.div>
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.2}}
                    className="flex flex-col justify-start items-center w-24">
                      <h1 className="font-semibold text-2xl">20J</h1>
                      <h3 className="text-tex-secondary text-sm">Alt</h3> 
                    </motion.div>
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.3}}
                    className="flex flex-col justify-start items-center w-24">
                      <h1 className="font-semibold text-2xl">4.</h1>
                      <h3 className="text-tex-secondary text-sm">Semester</h3> 
                    </motion.div>
                   </div>
                   <motion.button 
                    onClick={() => {
                      setTrue(0);
                      setTimeout(() => {
                        scrollToKemal();
                      }, 100);
                    }}
                   initial={{backgroundColor: '#00FF9D'}}
                   whileHover={{backgroundColor: '#00D4FF'}}
                   className="w-full p-2 bg-primary rounded-lg">
                    <h3 className="font-semibold">Profil anschauen</h3>
                   </motion.button>
                </a>
                <a
                   className="bg-background-secondary md:w-sm w-full gap-2 shrink-0 border border-border rounded-xl overflow-hidden border-xl relative flex flex-col p-8"
                 >
                   <div className="flex flex-row flex-1 items-center justify-start gap-8">
                    <img className="rounded-full" src="/nuri.jpeg" width={75} height={75}/>
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-2xl font-semibold">Nuri Yildirim</h1>
                      <h3 className="text-tex-secondary tracking-widest text-sm">Aus Hamburg</h3> 
                    </div>
                   </div>
                   <div className="flex-row flex p-4 font-semibold">
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.1}}
                    className="flex flex-col justify-start items-center h-auto w-24">
                      <h1 className="font-semibold text-2xl">5J</h1>
                      <h3 className="text-tex-secondary text-sm">Programmier<br/>erfahrung</h3> 
                    </motion.div>
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.2}}
                    className="flex flex-col justify-start items-center w-24">
                      <h1 className="font-semibold text-2xl">19J</h1>
                      <h3 className="text-tex-secondary text-sm">Alt</h3> 
                    </motion.div>
                    <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ease: "easeInOut", delay: 0.3}}
                    className="flex flex-col justify-start items-center w-24">
                      <h1 className="font-semibold text-2xl">2.</h1>
                      <h3 className="text-tex-secondary text-sm">Semester</h3> 
                    </motion.div>
                   </div>
                   <motion.button 
                    onClick={() => {
                      setTrue(1);
                      setTimeout(() => {
                        scrollToNuri();
                      }, 100);
                    }}
                   initial={{backgroundColor: '#00FF9D'}}
                   whileHover={{backgroundColor: '#00D4FF'}}
                   className="w-full p-2 bg-primary rounded-lg">
                    <h3 className="font-semibold">Profil anschauen</h3>
                   </motion.button>
                </a>
              </div>
            </div>
    </section>
  )
}