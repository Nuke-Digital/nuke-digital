<p>
  <img src="frontend/public/g101.png" alt="Nuke Digital Logo" width="200" height="auto" />
</p>
# NuKe Digital

> One-Pager Webseite für NuKe Digital.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## ✨ Features

* **⚡️ Blitzschnell:** Gebaut mit [Vite](https://vitejs.dev/) für extrem schnelles Hot Module Replacement (HMR).
* **🛡️ Typensicher:** Vollständig in [TypeScript](https://www.typescriptlang.org/) geschrieben.
* **🗺️ Client-Side Routing:** Nahtlose Navigation dank [React Router](https://reactrouter.com/).

## 🛠️ Voraussetzungen

Bevor du startest, stelle sicher, dass du Folgendes installiert hast:
* [Node.js](https://nodejs.org/) (Version 18+ empfohlen)
* Deinen bevorzugten Package Manager (`npm`, `yarn` oder `pnpm`)

## 🚀 Installation & Setup

1.  **Repository klonen:**
    ```bash
    git clone https://github.com/Nuke-Digital/nuke-digital.git
    cd nuke-digital
    ```

1.  **Verzeichnis wechseln:**
    ```bash
    cd frontend/ # Frontend
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    # oder yarn install
    # oder pnpm install
    ```

3.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    # oder yarn dev
    # oder pnpm dev
    ```
    Die App sollte nun unter `http://localhost:5173/` erreichbar sein.

## 📜 Verfügbare Skripte

Im Projektverzeichnis kannst du folgende Befehle ausführen:

* `npm run dev`: Startet den lokalen Entwicklungsserver.

## 📂 Projektstruktur

```text
nuke-digital/
├── backend/            # Backend-Quellcode
└── frontend/           # Frontend-Anwendung (React + Vite)
    ├── public/         # Statische Assets 
    ├── src/
    │   ├── assets/     # Bilder, Fonts, etc.
    │   ├── components/ # Wiederverwendbare React-Komponenten
    |   |    ├── Navbar.tsx
    |   |    ├── Logo.tsx
    |   |    └── Footer.tsx
    │   ├── pages/      # React Router Seiten/Views
    |   |   ├── Home.tsx
    |   |   ├── Impressum.tsx
    |   |   └── Datenschutz.tsx
    │   ├── utils/      # Hilfsfunktionen und Logik
    │   ├── App.tsx     # Hauptkomponente
    │   ├── main.tsx    # Entry Point der Anwendung
    │   └── style.css   # Globale Styles
    ├── index.html      # HTML Template
    ├── package.json    # Abhängigkeiten und Skripte für das Frontend
    ├── vite.config.ts  # Vite Konfiguration
    └── tsconfig.* # TypeScript Konfigurationen
