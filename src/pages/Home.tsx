import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

import { motion } from "framer-motion"

export default function Home(){
    const email = "info@nuke-digital.com"
    const subjekt = "Anfrage"
    
    return (
        <>
        <div className="items grid grid-cols-2">
            <a href="/">
              <img className="flex h-35 w-auto p-10"
                  src="/g6.png" alt="" 
              />
            </a>
            <div className="flex justify-end items-center p-10">
                <motion.a initial={{scale: 1}} whileHover={{scale:1.05}} transition={{duration: 0.1}} 
                href="/impressum"
                className="p-0.5 rounded-full bg-linear-to-br from-emerald-500 via-teal-300 to-sky-500 transition-transform">
                    <div className="bg-slate-900 rounded-full px-6 py-2">
                        <p className="text-white text-l font-medium">Impressum</p>
                    </div>
                </motion.a>
            </div>
        </div>

        <section className="text-white font-bold text-4xl
            flex flex-col items-center"
        >
            <span className="py-5 inline-flex items-center gap-1 text-8xl bg-linear-to-br text-transparent from-emerald-500 via-teal-300 to-sky-500 bg-clip-text">
            Comming soon
            </span>
            <span className="inline-flex w-6 justify-start text-4xl pb-30">
                <span className="animate-pulse [animation-delay:150ms]">.</span>
                <span className="animate-pulse [animation-delay:300ms]">.</span>
                <span className="animate-pulse [animation-delay:600ms]">.</span>
            </span>

            <div className="grid grid-cols-4 gap-10 pt-10">
                <motion.a initial={{scale: 1}} whileHover={{scale: 1.2}}
                 href="https://www.instagram.com" target="_blank">
                    <AiFillInstagram/>    
                </motion.a>
                <motion.a initial={{scale: 1}} whileHover={{scale: 1.2}}
                href="https://www.tiktok.com" target="_blank">
                    <AiFillTikTok/>
                </motion.a>
                <motion.a initial={{scale: 1}} whileHover={{scale: 1.2}} 
                href="https://www.linkedin.com" target="_blank">
                    <AiFillLinkedin/>
                </motion.a>
                <motion.a initial={{scale: 1}} whileHover={{scale: 1.2}} 
                href={`mailto:${email}?subject=${encodeURIComponent(subjekt)}`}>
                    <AiFillMail/>
                </motion.a>
            </div>
        </section>
        </>
    )
}