import { TbLocation } from "react-icons/tb";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import deverlopersJson from "../../data/developers.json"

type Developer = {
  id: string;
  name: string;
  image: string;
  location: string;
  age: string;
  semester: string;
  linkedin: string;
  bio: string;
  stats: { value: string; label: string }[];
};

const developers: Developer[] = deverlopersJson;

export default function DeveloperSection() {
  const [activeDeveloper, setActiveDeveloper] = useState<Developer | null>(null);

  useEffect(() => {
    if (!activeDeveloper) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDeveloper(null);
      }

      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "PageDown" ||
        event.key === "PageUp" ||
        event.key === "Home" ||
        event.key === "End" ||
        event.key === " " ||
        event.key === "Spacebar"
      ) {
        event.preventDefault();
      }
    };

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [activeDeveloper]);

  return (
    <section
      id="Entwickler"
      className="flex -mt-[10vh] flex-col justify-center items-center w-full z-30 pt-32 relative"
    >
      <div className="items-start text-center flex flex-col justify-center w-full px-6 sm:px-8 md:px-12 lg:px-16 gap-16">
        <div className="flex w-full justify-center items-center flex-col flex-1 gap-2">
          <span
            id="devs"
            className="py-4 z-30 font-semibold inline-flex items-center gap-1 bg-linear-to-br text-transparent from-primary to-secondary bg-clip-text text-2xl"
          >
            Entwickler
          </span>
          <h1 className="text-5xl font-semibold">Das sind Wir!</h1>
          <h3 className="flex-1 text-tex-secondary md:text-xl text-lg md:w-xl">
            Durch viel Engagement und Fleiss bauen wir dir eine unvergessliche Webseite.
          </h3>
        </div>

        <div className="w-full md:flex-row flex-col flex justify-center items-center gap-8">
          {developers.map((developer) => (
            <article
              key={developer.id}
              className="bg-background-secondary md:w-sm w-full gap-2 shrink-0 border border-border rounded-xl overflow-hidden relative flex flex-col p-8"
            >
              <div className="flex flex-row flex-1 items-center justify-start gap-8">
                <img
                  className="rounded-full"
                  src={developer.image}
                  width={75}
                  height={75}
                  alt={developer.name}
                />
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-semibold leading-6 text-left">
                    {developer.name}
                  </h1>
                  <h3 className="text-tex-secondary tracking-widest text-sm">
                    {developer.location}
                  </h3>
                </div>
              </div>

              <div className="flex-row flex p-4 font-semibold">
                <InfoTile value={developer.stats[0].value} label={developer.stats[0].label} delay={0.1} />
                <InfoTile value={developer.age} label="Alt" delay={0.2} />
                <InfoTile value={developer.semester} label="Semester" delay={0.3} />
              </div>

              <motion.button
                type="button"
                onClick={() => setActiveDeveloper(developer)}
                initial={{ backgroundColor: "#00FF9D" }}
                whileHover={{ backgroundColor: "#00D4FF" }}
                className="w-full p-2 bg-primary rounded-lg"
              >
                <h3 className="font-semibold">Profil anschauen</h3>
              </motion.button>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeDeveloper && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Dialog schliessen"
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setActiveDeveloper(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`developer-dialog-${activeDeveloper.id}`}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl rounded-3xl border border-border bg-background-primary/95 p-6 sm:p-8 md:p-10"
            >
              <button
                type="button"
                onClick={() => setActiveDeveloper(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-full border border-border bg-background-highlight p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-45"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path fill="#fcfcfc" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
              </button>

              <div className="flex md:flex-row flex-col gap-8 md:gap-10 items-start">
                <div className="flex py-8 px-6 sm:px-10 rounded-xl bg-background-secondary flex-col justify-center items-center flex-1 gap-4 w-full">
                  <img
                    className="rounded-full"
                    src={activeDeveloper.image}
                    width={250}
                    height={250}
                    alt={activeDeveloper.name}
                  />
                  <div className="px-4 py-2 text-tex-secondary items-center gap-2 rounded-full border-border border-2 flex">
                    <TbLocation />
                    <h3 className="text-md">{activeDeveloper.location}</h3>
                  </div>
                  <h2
                    id={`developer-dialog-${activeDeveloper.id}`}
                    className="text-3xl sm:text-4xl leading-tight font-semibold text-center"
                  >
                    {activeDeveloper.name}
                  </h2>
                  <motion.a
                    href={activeDeveloper.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ backgroundColor: "#00FF9D" }}
                    whileHover={{ backgroundColor: "#00D4FF" }}
                    className="p-3 bg-primary text-center mt-2 rounded-lg w-full font-semibold"
                  >
                    Mein LinkedIn
                  </motion.a>
                </div>

                <div className="flex flex-col justify-center items-center flex-1 w-full">
                  <p className="text-tex-secondary text-md sm:text-lg leading-7">
                    {activeDeveloper.bio}
                  </p>
                  <div className="grid grid-cols-2 w-full gap-4 mt-6">
                    {activeDeveloper.stats.map((stat, index) => (
                      <motion.div
                        key={`${activeDeveloper.id}-${stat.label}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", delay: 0.1 + index * 0.08 }}
                        className="flex flex-col justify-start items-start bg-background-highlight p-6 sm:p-8 rounded-xl"
                      >
                        <h3 className="font-semibold text-2xl">{stat.value}</h3>
                        <p className="text-tex-secondary text-sm">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

type InfoTileProps = {
  value: string;
  label: string;
  delay: number;
};

function InfoTile({ value, label, delay }: InfoTileProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay }}
      className="flex flex-col justify-start items-center w-24"
    >
      <h2 className="font-semibold text-2xl">{value}</h2>
      <p className="text-tex-secondary text-sm">{label}</p>
    </motion.div>
  );
}
