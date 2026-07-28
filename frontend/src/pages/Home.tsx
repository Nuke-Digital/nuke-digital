import { AiFillInstagram, AiFillTikTok, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import DeveloperSection from "../components/home/DeveloperSection";

import ServicesSection from "../components/home/ServicesSection";

export default function Home() {
  const email = "info@nuke-digital.com";
  const subjekt = "Anfrage";

  return (
    <div className="relative">
      <div className="absolute w-full h-full overflow-x-hidden inset-0 bg-blur"
      >
      <div
        className="absolute w-screen h-[90vh] opacity-40 -z-30 bg-primary
        md:h-screen md:opacity-60
        [clip-path:polygon(83.88%_13.75%,100%_21%,100%_79.25%,50.38%_100%,0%_93.75%,1%_62.5%,60.75%_54.75%)]
        "
      />
      </div>
      <div className="mx-3 sm:mx-6 lg:mx-16 -mt-20 mb-1 relative">
      
      <HeroSection/>
      <ServicesSection/>
      <DeveloperSection/>


      {/* Main */}
      <main className="px-6 sm:px-8 md:px-12 lg:px-16">
        <section className="text-white font-bold flex flex-col items-center text-center pt-10 sm:pt-14">
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
    <div className="bg-blur">
      <div className="absolute -z-50 -left-15 -bottom-50 w-[80vw] h-50 bg-primary rounded-full opacity-60" />
      <div className="md:block hidden absolute -z-50 left-175 -bottom-50 w-50 h-50 bg-primary rounded-full opacity-60" />
    </div>
  </div>
  );
}