import MoAesthetikLogo from "/moAesthetikLogo.svg";
import CardCarousell from "../cardCarousell";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";

export default function HeroSection() {
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

    const SECTION_HEIGHT = 1500

    return (
      <div className="relative w-full z-20">
        <section 
          id="start" 
          ref={heroRef} 
          style={{
            height: `calc(${SECTION_HEIGHT}px + 100vh)`
            }} 
          className="relative w-full h-full"> 
          
          <div className="h-[110vh] relative flex flex-col gap-4 justify-end items-center mt-20"> 
            <div className="flex md:flex-row flex-col justify-start w-full px-6 sm:px-8 md:px-12 lg:px-16">
              <h1 className="md:text-7xl text-5xl font-semibold flex-2 wrap-anywhere">
                Günstig Profesionelle Webseiten.
              </h1>
              <div className="flex-1 md:self-end justify-end flex flex-row gap-4 font-semibold z-50 md:py-0 py-4 text-lg">
                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/#devs"
                  className='p-2 bg-linear-to-br from-primary to-secondary rounded-lg text-center'
                  >
                    Anfragen
                  </motion.a>

                 <motion.a
                  initial={false}
                  whileHover={{
                    scale: 1.1
                  }}
                  href="/#about"
                  className='p-2 bg-linear-to-br border-border border from-background-secondary to-background-secondary rounded-lg min-w-24 text-center'
                  >
                    Mehr Erfahren
                  </motion.a>      
              </div>
            </div>
            <div className="flex flex-row justify-start w-full px-6 sm:px-8 md:px-12 lg:px-16">
              <h3 className="flex-1 text-tex-secondary md:text-lg text-lg">
                Alternative zu überteuerten Webentwicklern von Studenten für professionelle Webseiten ganz nach deinen Wünschen.
              </h3> 
              <div className="md:flex-1"/>
            </div>
              <CardCarousell/>
          </div>
          <motion.div style={{opacity}} className="md:flex hidden md:flex-row flex-col h-full w-full relative md:px-32">
            <div id="about" className="sticky top-0 flex-1 h-screen flex items-center justify-center">
              <motion.div  style={{opacity: opacity_a, y}} className="flex flex-row gap-8">
                <span className="w-1 bg-primary"/>
                <div className="w-full h-full bg-blur">
                  <div className="bg-secondary w-[70vw] h-[40vh] absolute top-0 -left-16 opacity-50"/>
                </div>
                <h2 className="md:text-7xl text-5xl uppercase font-bold">WIESO<br/>NUKE<br/>DIGITAL?</h2>
              </motion.div>
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
                <motion.h2 id="about" style={{y: y_mobile}} className="will-change-transform transform-gpu md:text-7xl text-5xl uppercase font-bold">WIESO<br/>NUKE<br/>DIGITAL?</motion.h2>
              </motion.div>
            </div>
            <div className="h-full flex flex-col flex-1 items-stretch px-6 sm:px-8">
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
        <References containerRef={containerRef} x={x}/>
          
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

export const References = ({containerRef, x}: any) => {

    const text = "unsere referenzen";

    const container = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.05,
            duration: 0.2
            },
        },
    };

    const letter = {
        hidden: {opacity: 0, x: -20},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 1,
            },
        },
    };

    return (
        <div ref={containerRef} className="h-[400vh] flex flex-row pt-[100vh] relative mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div id="referenzen" 
              className="sticky overflow-x-hidden top-30 w-full pl-6 sm:pl-8 md:pl-12 lg:pl-16 h-screen items-center my-0 mx-auto flex justify-start overflow-visible"
              >
                <motion.h1 
                    initial="hidden"
                    variants={container}
                    whileInView="visible"
                    className="absolute top-0 left-1/3 md:text-5xl text-4xl text-center text-primary
                    font-semibold uppercase"
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letter}
                            style={{ display: "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>
                {/* NOTE: Was macht der div? */}
                <div 
                    className="shrink-0 justify-center items-center rounded-xl overflow-hidden h-85 md:w-108 w-60 border-xl relative flex flex-col p-8"
                >
                </div>
                
                <motion.div className="flex gap-16 z-50 transform-gpu" style={{ x, willChange: 'transform', originX: 0}}>
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
    )
}
