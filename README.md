# saas-ng

Ein kleines SaaS-Boilerplate mit Node/Express (Backend) und Angular (Frontend).

Kurze Beschreibung
------------------
Dieses Repository enthält ein Backend (Ordner `backend/`) mit Prisma/SQLite (oder einer anderen DB) und ein Angular-Frontend (Ordner `ng/`). Die README beschreibt, wie du lokal starten, Migrationen ausführen und die Entwicklungsversionen betreiben kannst.

Inhaltsverzeichnis
------------------
- Voraussetzungen
- Projektstruktur
- Backend: Entwicklung und Deployment
- Frontend: Entwicklung und Deployment
- Umgebung (env)-Variablen
- Migrationen / Prisma
- Lizenz
- Mitwirken

Voraussetzungen
---------------
- Node.js (empfohlen: LTS-Version, z. B. 18+)
- npm
- Optional: Angular CLI für das Frontend (global, falls gewünscht)

Projektstruktur (Kurz)
----------------------
- backend/ — Node.js + Express API
    - prisma/ — Prisma-Schema, Migrations und dev-DB
    - src/ — Server-Quellcode
- ng/ — Angular-Frontend
- README.md — Diese Datei
- LICENSE — Projektlizenz

Backend — schnellstart
----------------------
1. In das Backend-Verzeichnis wechseln:

```cmd
cd backend
```

2. Abhängigkeiten installieren:

```cmd
npm install
```

3. Umgebungsvariablen anlegen: Erstelle eine Datei `.env` im `backend`-Ordner (Beispiel weiter unten).

4. Lokale Datenbank / Migrations (Dev):

```cmd
npm run db:init
```

Dieser Befehl führt `prisma migrate dev` aus und erstellt die lokale DB (falls das Projekt so konfiguriert ist). Alternativ für Produktion/Migration-Deploy:

```cmd
npm run migrate
```

5. Entwicklung starten (mit nodemon):

```cmd
npm run dev
```

Oder Produktion:

```cmd
npm start
```

Frontend (Angular) — schnellstart
--------------------------------
1. In das Frontend-Verzeichnis wechseln:

```cmd
cd ng
```

2. Abhängigkeiten installieren:

```cmd
npm install
```

3. Entwicklung starten:

- Falls ein `start`-Script in `ng/package.json` vorhanden ist:

```cmd
npm start
```

- Oder mit Angular CLI (falls installiert):

```cmd
npx ng serve --open
```

Build für Produktion:

```cmd
npx ng build --configuration production
```

Umgebungsvariablen (Beispiel)
----------------------------
Lege im `backend` eine `.env`-Datei an. Beispiel:

```
PORT=3000
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET=replace_with_a_secure_secret
```

Für eine Postgres-/MySQL-DB ersetze `DATABASE_URL` entsprechend (z. B. `postgresql://user:pass@host:5432/dbname`).

Prisma / Migrationen
--------------------
Das Backend verwendet Prisma. Die wichtigsten npm-scripts (im `backend/package.json`) sind:
- `npm run db:init` — Entwicklermigrationen (lokal)
- `npm run migrate` — Deploy-Migrationen (z. B. auf Produktionsserver)

Lizenz
------
Dieses Projekt ist unter der MIT-Lizenz lizenziert — siehe `LICENSE` im Repository.

