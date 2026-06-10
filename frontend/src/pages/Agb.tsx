import { motion } from "framer-motion";

const sections = [
  {
    id: "§ 1",
    title: "Geltungsbereich",
    content: [
      `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der NuKe Digital - Yildirim & Kivrakoglu GbR, Hamburg (nachfolgend „Auftragnehmer") und ihren Kunden (nachfolgend „Auftraggeber").`,
      `Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB. Verträge mit Verbrauchern werden nicht geschlossen.`,
      `Entgegenstehende oder abweichende Geschäftsbedingungen des Auftraggebers finden keine Anwendung, sofern ihrer Geltung nicht ausdrücklich schriftlich zugestimmt wurde.`,
    ],
  },
  {
    id: "§ 2",
    title: "Vertragsgegenstand",
    content: [
      "Der Auftragnehmer bietet Dienstleistungen im Bereich der digitalen Unternehmenspräsenz an.",
      "Die Leistungen können insbesondere umfassen:",
    ],
    list: [
      "Erstellung individueller Websites",
      "Hosting von Websites",
      "Wartung und technische Betreuung",
      "Einrichtung und Verwaltung von Domains",
      "Einrichtung und Verwaltung von E-Mail-Diensten",
      "Bereitstellung eines Kundenportals",
      "Bereitstellung von Angeboten und Rechnungen",
      "Erstellung von Texten, Grafiken und sonstigen Inhalten gegen gesonderte Vergütung",
      "Durchführung von Änderungsleistungen",
    ],
    contentAfter: [
      "Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder Vertrag.",
    ],
  },
  {
    id: "§ 3",
    title: "Vertragsschluss",
    content: [
      "Angebote des Auftragnehmers sind freibleibend, sofern nicht ausdrücklich anders angegeben.",
      "Ein Vertrag kommt durch schriftliche Annahme eines Angebots, elektronische Annahme über das Kundenportal oder durch schriftliche Auftragsbestätigung zustande.",
      "Der Auftragnehmer ist berechtigt, Aufträge ohne Angabe von Gründen abzulehnen.",
    ],
  },
  {
    id: "§ 4",
    title: "Mitwirkungspflichten des Auftraggebers",
    content: [
      "Der Auftraggeber stellt sämtliche zur Vertragserfüllung erforderlichen Informationen, Daten, Zugangsdaten und Inhalte rechtzeitig zur Verfügung.",
      "Verzögerungen, die durch fehlende Mitwirkung des Auftraggebers entstehen, verlängern vereinbarte Fristen entsprechend.",
      "Der Auftraggeber ist für die Richtigkeit und Vollständigkeit der bereitgestellten Informationen verantwortlich.",
    ],
  },
  {
    id: "§ 5",
    title: "Inhalte des Auftraggebers",
    content: [
      "Der Auftraggeber versichert, dass sämtliche bereitgestellten Inhalte, insbesondere Texte, Bilder, Logos, Marken, Videos, Dokumente und sonstige Dateien frei von Rechten Dritter genutzt werden dürfen.",
      "Der Auftraggeber stellt den Auftragnehmer von sämtlichen Ansprüchen Dritter frei, die aufgrund der vom Auftraggeber bereitgestellten Inhalte geltend gemacht werden.",
      "Der Auftragnehmer ist nicht verpflichtet, bereitgestellte Inhalte auf rechtliche Zulässigkeit oder Rechte Dritter zu prüfen.",
    ],
  },
  {
    id: "§ 6",
    title: "KI-generierte Inhalte",
    content: [
      "Sofern Inhalte durch den Auftragnehmer erstellt werden, kann hierfür künstliche Intelligenz eingesetzt werden.",
      "Der Auftraggeber ist verpflichtet, sämtliche erstellten Inhalte vor Veröffentlichung eigenständig auf sachliche Richtigkeit sowie rechtliche Zulässigkeit zu prüfen.",
      "Der Auftragnehmer übernimmt keine Gewähr für die Fehlerfreiheit oder rechtliche Zulässigkeit KI-generierter Inhalte.",
    ],
  },
  {
    id: "§ 7",
    title: "Vergütung und Zahlungsbedingungen",
    content: [
      "Die Vergütung ergibt sich aus dem jeweiligen Angebot oder Vertrag.",
      "Rechnungen sind innerhalb von 14 Kalendertagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.",
      "Die NuKe Digital GbR wendet die Kleinunternehmerregelung gemäß § 19 UStG an. Umsatzsteuer wird daher nicht ausgewiesen.",
      "Wiederkehrende Leistungen werden entsprechend der vertraglichen Vereinbarung regelmäßig berechnet.",
    ],
  },
  {
    id: "§ 8",
    title: "Zahlungsverzug",
    content: [
      "Gerät der Auftraggeber in Zahlungsverzug, gelten die gesetzlichen Verzugsregelungen.",
      "Der Auftragnehmer ist berechtigt, nach Eintritt des Verzugs Leistungen ganz oder teilweise auszusetzen.",
      "Insbesondere können folgende Leistungen vorübergehend eingeschränkt oder deaktiviert werden:",
    ],
    list: [
      "Website-Hosting",
      "E-Mail-Dienste",
      "Kundenportal",
      "Wartungsleistungen",
      "Änderungsleistungen",
    ],
    contentAfter: [
      "Die Zahlungspflicht des Auftraggebers bleibt hiervon unberührt.",
    ],
  },
  {
    id: "§ 9",
    title: "Hosting und technische Infrastruktur",
    content: [
      "Der Auftragnehmer nutzt zur Leistungserbringung externe technische Dienstleister.",
      "Der Auftragnehmer schuldet keine jederzeitige oder unterbrechungsfreie Verfügbarkeit der angebotenen Dienste.",
      "Wartungsarbeiten, technische Störungen, Sicherheitsmaßnahmen oder Ausfälle von Drittanbietern können zu vorübergehenden Einschränkungen führen.",
      "Der Auftragnehmer ist berechtigt, technische Dienstleister auszutauschen, sofern hierdurch keine wesentliche Verschlechterung der vereinbarten Leistungen entsteht.",
    ],
  },
  {
    id: "§ 10",
    title: "Domains und E-Mail-Dienste",
    content: [
      "Domains können entweder durch den Auftraggeber selbst registriert oder durch den Auftragnehmer im Auftrag des Auftraggebers verwaltet werden.",
      "Der Auftragnehmer übernimmt keine Gewähr für die dauerhafte Verfügbarkeit bestimmter Domains.",
      "Nach Vertragsende werden vom Auftraggeber genutzte Domains auf Wunsch übertragen oder freigegeben, soweit dies technisch und rechtlich möglich ist.",
      "E-Mail-Dienste können über Drittanbieter bereitgestellt werden.",
      "Kosten externer Anbieter können gesondert berechnet werden.",
    ],
  },
  {
    id: "§ 11",
    title: "Kundenportal",
    content: [
      "Der Auftragnehmer stellt dem Auftraggeber ein Kundenportal zur Verfügung.",
      "Über das Kundenportal können insbesondere Angebote, Rechnungen, Vertragsinformationen und Änderungen verwaltet werden.",
      "Zugangsdaten sind vertraulich zu behandeln.",
      "Der Auftraggeber ist für sämtliche Aktivitäten verantwortlich, die unter Verwendung seiner Zugangsdaten erfolgen.",
      "Eine dauerhafte und unterbrechungsfreie Verfügbarkeit des Kundenportals wird nicht geschuldet.",
    ],
  },
  {
    id: "§ 12",
    title: "Änderungsleistungen",
    content: [
      "Sofern vertraglich vereinbart, sind bis zu drei Kleinänderungen pro Kalendermonat enthalten.",
      "Als Kleinänderungen gelten insbesondere:",
    ],
    list: [
      "Textänderungen",
      "Austausch von Bildern",
      "Änderung von Kontaktdaten",
      "Anpassung von Öffnungszeiten",
      "Vergleichbare Änderungen mit einem Arbeitsaufwand von bis zu 30 Minuten",
    ],
    contentAfter: [
      "Nicht als Kleinänderungen gelten insbesondere: neue Unterseiten, Designänderungen, neue Funktionen, technische Erweiterungen sowie Integrationen externer Systeme.",
      "Darüber hinausgehende Leistungen werden gesondert vergütet.",
    ],
  },
  {
    id: "§ 13",
    title: "Abnahme",
    content: [
      "Nach Fertigstellung wird die Website dem Auftraggeber zur Prüfung bereitgestellt.",
      "Die Website gilt als abgenommen, sofern nicht innerhalb von 14 Kalendertagen wesentliche Mängel schriftlich angezeigt werden.",
      "Die produktive Nutzung der Website gilt ebenfalls als Abnahme.",
    ],
  },
  {
    id: "§ 14",
    title: "Nutzungsrechte",
    content: [
      "Nach vollständiger Zahlung erhält der Auftraggeber ein einfaches, zeitlich unbeschränktes Nutzungsrecht an der vertragsgegenständlichen Website.",
      "Sämtliche Rechte an internen Werkzeugen, Templates, Frameworks, Bibliotheken, Automatisierungssystemen, Komponenten und sonstigen Entwicklungsbestandteilen verbleiben beim Auftragnehmer.",
      "Eingesetzte Open-Source-Komponenten unterliegen den jeweiligen Lizenzbedingungen ihrer Rechteinhaber.",
    ],
  },
  {
    id: "§ 15",
    title: "Herausgabe bei Vertragsende",
    content: [
      "Nach Vertragsende erhält der Auftraggeber auf Wunsch eine statisch exportierte Version der Website.",
      "Die Herausgabe erfolgt ausschließlich in Form der zum Zeitpunkt der Kündigung bereitgestellten Frontend-Dateien.",
      "Die herausgegebene Website enthält die zu diesem Zeitpunkt veröffentlichten Inhalte.",
      "Nicht Bestandteil der Herausgabe sind insbesondere:",
    ],
    list: [
      "Quellcode",
      "Datenbanken",
      "Backend-Systeme",
      "JSON-Dateien",
      "Kundenportal",
      "Administrationsoberflächen",
      "APIs",
      "Build-Prozesse",
      "Deployment-Systeme",
      "Serverkonfigurationen",
      "Automatisierungen",
      "Interne Werkzeuge",
    ],
    contentAfter: [
      "Mit Übergabe der exportierten Frontend-Dateien gelten sämtliche Herausgabepflichten als erfüllt.",
    ],
  },
  {
    id: "§ 16",
    title: "Datensicherung und Datenlöschung",
    content: [
      "Der Auftragnehmer erstellt regelmäßige Datensicherungen.",
      "Datensicherungen dienen ausschließlich der Wiederherstellung im Störungsfall.",
      "Eine Verpflichtung zur langfristigen Archivierung besteht nicht.",
      "Nach Vertragsende werden Kundendaten für bis zu drei Monate gespeichert und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    id: "§ 17",
    title: "Referenznennung",
    content: [
      "Der Auftragnehmer ist berechtigt, abgeschlossene Projekte als Referenz zu verwenden.",
      "Der Auftragnehmer darf zu Referenzzwecken insbesondere den Unternehmensnamen des Auftraggebers, die Website sowie allgemeine Projektinformationen veröffentlichen.",
      "Während der Vertragslaufzeit kann ein dezenter Hinweis auf den Auftragnehmer auf der Website eingebunden werden.",
      "Nach Vertragsende wird ein solcher Hinweis auf Wunsch des Auftraggebers entfernt.",
    ],
  },
  {
    id: "§ 18",
    title: "Haftung",
    content: [
      "Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.",
      "Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten.",
      "In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.",
      "Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.",
    ],
  },
  {
    id: "§ 19",
    title: "Vertragslaufzeit und Kündigung",
    content: [
      "Die Mindestvertragslaufzeit ergibt sich aus dem jeweiligen Angebot oder Vertrag.",
      "Der Vertrag kann von beiden Parteien mit einer Frist von zwei Monaten zum Ende der Mindestvertragslaufzeit gekündigt werden.",
      "Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag nach Ablauf der Mindestvertragslaufzeit auf unbestimmte Zeit.",
      "Nach Eintritt der unbestimmten Laufzeit kann der Vertrag von beiden Parteien mit einer Frist von zwei Monaten zum Monatsende gekündigt werden.",
      "Der Auftragnehmer wird den Auftraggeber in der Regel mindestens 30 Tage vor Ablauf der Kündigungsfrist per E-Mail über das bevorstehende Ende der Mindestvertragslaufzeit informieren. Das Ausbleiben dieser Information berührt die Wirksamkeit der Vertragsverlängerung nicht.",
      "Kündigungen bedürfen mindestens der Textform (z. B. E-Mail oder Kündigung über das Kundenportal).",
      "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
    ],
  },
  {
    id: "§ 20",
    title: "Schlussbestimmungen",
    content: [
      "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
      "Ausschließlicher Gerichtsstand für sämtliche Streitigkeiten aus dem Vertragsverhältnis ist Hamburg, soweit gesetzlich zulässig.",
      "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
    ],
  },
];

export default function AGB() {
  return (
    <div className="relative">
      <div className="lg:mx-16 mx-4 border-l border-r border-border border-dashed -mt-20 mb-1 relative">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="px-4 sm:px-6 pb-16 sm:pb-24 pt-40"
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
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="mt-3 text-white/50 text-sm tracking-wide">
                NuKe Digital - Yildirim & Kivrakoglu GbR · Hamburg
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, i) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col gap-4"
              >
                {/* Section header */}
                <div className="flex items-baseline gap-3">
                  <span className="text-md font-mono text-emerald-400/80 shrink-0">
                    {section.id}
                  </span>
                  <h2 className="uppercase tracking-widest text-sm sm:text-base font-bold text-white/90">
                    {section.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Content paragraphs */}
                <div className="flex flex-col gap-3 text-white/70 text-sm sm:text-base leading-relaxed">
                  {section.content.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}

                  {/* Optional list */}
                  {section.list && (
                    <ul className="mt-1 ml-4 flex flex-col gap-1.5">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400/60 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional paragraphs after list */}
                  {section.contentAfter?.map((para, j) => (
                    <p key={`after-${j}`}>{para}</p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.main>
      </div>
    </div>
  );
}