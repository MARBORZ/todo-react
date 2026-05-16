# Todo React Application

En moderne todo-applikasjon bygget med React 19, Vite og Feature-Sliced Design-arkitektur.

## 🎨 Om

Todo React er en fullverdig oppgavebehandlingsapplikasjon med ren arkitektur, tilpasset routing og to datalagring-modus (LocalStorage og REST API). Demonstrerer moderne React-utviklingsmønstre og Feature-Sliced Design-metodikk.

## ✨ Funksjoner

- ✅ Opprett, les, oppdater og slett oppgaver
- 🔍 Sanntidssøk og filtrering
- 📊 Oppgavestatistikk (fullført/totalt)
- 🎯 Auto-scroll til første ufullførte oppgave
- ✨ Jevne animasjoner for oppgaveoperasjoner
- 💾 LocalStorage-persistens (produksjon)
- 🔌 REST API-integrasjonsdemo (utvikling)
- 🎨 Tilpasset routing uten eksterne biblioteker
- 📱 Responsivt design

## 🛠️ Teknologi

- **React 19.1.0** — UI-bibliotek
- **Vite 7.0.4** — Byggeverktøy og dev-server
- **SCSS Modules** — Komponentstiling
- **JSON Server** — Mock REST API for utvikling
- **Custom Router** — Klient-side routing via History API

## 📁 Arkitektur

Prosjektet følger **Feature-Sliced Design**-metodikk:

```
src/
├── app/                    # Applikasjonskonfigurasjon
│   ├── App.jsx            # Rotkomponent med routing
│   ├── routing/           # Tilpasset router-implementering
│   │   ├── Router.jsx     # Rutematcher og renderer
│   │   └── useRoute.jsx   # Hook for gjeldende sti
│   └── styles/            # Globale stiler og variabler
│
├── pages/                 # Sidekomponenter
│   ├── TasksPage/         # Hovedside med todo-liste
│   └── TaskPage/          # Oppgavedetaljside
│
├── widgets/               # Sammensatte UI-blokker
│   └── Todo.jsx           # Hoved-todo-widget
│
├── features/              # Forretningsfunksjoner
│   ├── add-task/          # Oppgaveopprettingsskjema
│   ├── search-task/       # Søkefunksjonalitet
│   └── stats/             # Oppgavestatistikk-visning
│
├── entities/              # Forretningsenheter
│   └── todo/
│       ├── model/         # Tilstandshåndtering
│       │   ├── TasksContext.jsx
│       │   ├── TasksProvider.jsx
│       │   ├── useTasks.js
│       │   └── useIncompleteTaskScroll.js
│       └── ui/            # Enhets-UI-komponenter
│           ├── TodoItem/
│           └── TodoList/
│
├── shared/                # Gjenbrukbar kode
│   ├── api/tasks/         # API-lag
│   │   ├── index.js                    # API-fasade
│   │   ├── tasksLocalStorageAPI.js     # LocalStorage-implementering
│   │   └── (tasksServerAPI i index)    # JSON Server-implementering
│   ├── assets/            # Ikoner og bilder
│   └── hooks/             # Delte hooks
│
└── ui/                    # Generiske UI-komponenter
    ├── Button/
    ├── Field/
    └── RouterLink/
```

## 💾 Datahåndtering

Applikasjonen støtter to datalagring-modus:

### 1. LocalStorage (Produksjon)
- Standardmodus for distribuert applikasjon
- Data vedvarer i nettleserlagring
- Ingen backend nødvendig
- Simulerer asynkrone operasjoner med forsinkelser

### 2. JSON Server (Utviklingsdemo)
- Demonstrerer REST API-integrasjon
- Fulle CRUD-operasjoner via fetch
- Kjører på `http://localhost:3001`

Bytt mellom modus i `src/shared/api/tasks/index.js`:
```javascript
const USE_LOCAL_STORAGE = true // false for JSON Server
```

## 🚀 Installasjon

```bash
npm install
```

## 🚀 Utvikling

Start utviklingsserver:
```bash
npm run dev
```

Start JSON Server (valgfritt, for API-demo):
```bash
npm run server
```

Appen er tilgjengelig på `http://localhost:5000`

## 📜 Bygg

```bash
npm run build
```

## 🎯 Nøkkelfunksjoner

### Tilpasset Router
Lettvekts routing-implementering via History API uten eksterne avhengigheter:
- Dynamisk rutematch med parametere (`/tasks/:id`)
- Programmatisk navigasjon
- Nettleser tilbake/frem-støtte

### Tilstandshåndtering
Context API med tilpassede hooks:
- `TasksProvider` — Global tilstandsbeholder
- `useTasks` — Oppgaveoperasjoner og tilstand
- `useIncompleteTaskScroll` — Auto-scroll-funksjonalitet

### API-lag
Abstraksjon over datakilder:
- Enhetlig grensesnitt for LocalStorage og Server API
- Enkel bytte mellom implementeringer
- Async/await-mønster overalt

### Animasjoner
CSS-baserte animasjoner for:
- Oppgavens fremtreden ved opprettelse
- Oppgavens forsvinning ved sletting
- Jevn liste-omorganisering

### Skjemavalidering
Sanntidsvalidering med feilmeldinger:
- Tom oppgave-forebygging
- Kun-mellomrom-inndata-deteksjon
- Visuell tilbakemelding

## 📜 Skript

- `npm run dev` — Start utviklingsserver (port 5000)
- `npm run server` — Start JSON Server (port 3001)
- `npm run build` — Bygg for produksjon
- `npm run preview` — Forhåndsvis produksjonsbygg
- `npm run lint` — Kjør ESLint

## 🎯 Læringsmål

- Feature-Sliced Design-arkitektur
- React 19 Context API-mønstre
- Tilpasset router-implementering
- API-lag-abstraksjon
- SCSS Modules-styling
- LocalStorage-persistens
- REST API-integrasjon

---

**Merk:** Læringsprosjekt som demonstrerer moderne React-arkitektur og utviklingsmønstre.
