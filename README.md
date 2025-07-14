# Adagia

This is a simple web application designed to explore and visualize flexible, heterogeneous data using modern frontend technologies. It is built for experimentation, educational value, and potential future extensibility — not for production or commercial use.

## ✨ Features

- Direct connection to a **local Firestore emulator** (no backend)
- **Flexible NoSQL data model**: supports multiple document types (people, artworks, events, etc.)
- **Interactive data visualizations** using:
  - [Plotly.js](https://plotly.com/javascript/) (charts, timelines)
  - [Leaflet.js](https://leafletjs.com/) (maps)
- Minimal UI with [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [Mantine](https://mantine.dev/)

## 🧱 Tech Stack

| Layer       | Technology                 |
| ----------- | -------------------------- |
| Frontend    | React + Vite + Mantine     |
| Data        | Firestore Emulator (NoSQL) |
| Visuals     | Plotly.js + Leaflet.js     |
| Dev tooling | Docker + Firebase CLI      |
| Task Mgmt   | Linear + GitHub            |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- Firebase CLI

### 1. Clone the repo

```bash
git git@github.com:seemlesscode/Adagia.git
cd Adagia
```

### 2. Install dependencies

```bash
cd frontend
npm install
```

### 3. Start Firestore emulator

```bash
firebase emulators:start
```

_(You may need to run `firebase init` once and enable Firestore + Emulator)_

### 4. Start the frontend (Vite)

```bash
cd frontend
npm run dev
```

_Frontend will be available at `http://localhost:5173`_

## 📁 Project Structure (planned)

```bash
/
├── frontend/      # React app (Vite + Mantine)
│   └── src/
│       ├── components/
│       ├── firebase.ts  # Firestore connection
│       └── adagia/         # Visualization components
├── seed/             # Sample Firestore data (JSON or script)
├── firebase.json     # Emulator configuration
├── docker-compose.yml
└── README.md
```

## 🪪 License

This project is open-source and distributed under the [MIT License](./LICENCE.md).

## 🔗 Project Tracking

This project is managed with Linear, integrated with this GitHub repository.
