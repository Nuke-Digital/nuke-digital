import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import services from "../../data/services.json"

export default function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="service"
      className="flex flex-col justify-start items-start w-full z-30 py-16 relative min-h-screen"
    >
      <div className="items-start flex flex-col justify-center w-full px-6 sm:px-8 md:px-12 lg:px-16 gap-16">
        {/* Header */}
        <div className="flex w-full justify-start items-start flex-col flex-1 gap-2">
          <span
            id="service"
            className="py-4 z-30 font-semibold inline-flex items-center gap-1 bg-linear-to-br text-transparent from-primary to-secondary bg-clip-text text-2xl"
          >
            Service
          </span>
          <div className="flex md:flex-row flex-col w-full flex-1 gap-8">
            <div className="flex flex-1 flex-col">
              <h1 className="text-5xl font-semibold">
                Webseiten Schnell, Einfach, Gut.
              </h1>
              <h3 className="flex-1 text-tex-secondary md:text-xl text-lg md:w-xl">
                Bei uns bekommst du mehr als nur eine Webseite. Wir bieten dir
                eine umfassende Lösung für dein digitales Image.
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-end">
              <div className="md:w-auto w-full">
                <motion.button
                  onClick={() => {}}
                  initial={{ backgroundColor: "#00FF9D" }}
                  whileHover={{ backgroundColor: "#00D4FF" }}
                  className="w-full p-2 bg-primary rounded-lg"
                >
                  <h3 className="font-semibold">Jetzt anfragen!</h3>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col w-full md:h-[80vh] md:flex-row gap-16">
          <div className="flex flex-1 w-full">
            <ul className="flex flex-col flex-1 w-full">
              {services.map((service, index) => {
                const isOpen = openId === service.id;
                const isLast = index === services.length - 1;

                return (
                  <li
                    key={service.id}
                    className={`flex flex-col gap-2 py-8 w-full ${
                      !isLast ? "border-b border-border" : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenId(isOpen ? null : service.id)
                      }
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <h2 className="text-3xl font-semibold">
                        {service.title}
                      </h2>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-3xl font-light text-tex-secondary group-hover:text-primary transition-colors ml-4 shrink-0"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-tex-secondary md:text-xl text-lg md:w-xl pt-1">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-1 w-full pb-32">
            <img
              src="/service_2.jpeg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};