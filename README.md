# Todo React Application

Todo app with React 19, Vite, and Feature-Sliced Design.

## Features

- ✅ Create, edit, delete tasks
- 🔍 Search and filter
- 📊 Task stats (completed/total)
- 🎯 Auto-scroll to first incomplete task
- ✨ Task animations
- 💾 LocalStorage (production mode)
- 🔌 REST API demo (development mode)
- 🎨 Custom router (no external libs)
- 📱 Responsive

## Tech Stack

- **React 19.1.0** - UI library
- **Vite 7.0.4** - Build tool and dev server
- **SCSS Modules** - Component styling
- **JSON Server** - Mock REST API for development
- **Custom Router** - Client-side routing via History API

## Architecture

Project follows **Feature-Sliced Design** methodology:

```
src/
├── app/                    # Application configuration
│   ├── App.jsx            # Root component with routing
│   ├── routing/           # Custom router implementation
│   │   ├── Router.jsx     # Route matcher and renderer
│   │   └── useRoute.jsx   # Hook for current path
│   └── styles/            # Global styles and variables
│
├── pages/                 # Page components
│   ├── TasksPage/         # Main page with todo list
│   └── TaskPage/          # Task detail page
│
├── widgets/               # Composite UI blocks
│   └── Todo.jsx           # Main todo widget
│
├── features/              # Business features
│   ├── add-task/          # Task creation form
│   ├── search-task/       # Search functionality
│   └── stats/             # Task statistics display
│
├── entities/              # Business entities
│   └── todo/
│       ├── model/         # State management
│       │   ├── TasksContext.jsx
│       │   ├── TasksProvider.jsx
│       │   ├── useTasks.js
│       │   └── useIncompleteTaskScroll.js
│       └── ui/            # Entity UI components
│           ├── TodoItem/
│           └── TodoList/
│
├── shared/                # Reusable code
│   ├── api/tasks/         # API layer
│   │   ├── index.js                    # API facade
│   │   ├── tasksLocalStorageAPI.js     # LocalStorage implementation
│   │   └── (tasksServerAPI in index)   # JSON Server implementation
│   ├── assets/            # Icons and images
│   └── hooks/             # Shared hooks
│
└── ui/                    # Generic UI components
    ├── Button/
    ├── Field/
    └── RouterLink/
```

## Data Management

The application supports two data storage modes:

### 1. LocalStorage (Production)
- Default mode for deployed application
- Data persists in browser storage
- No backend required
- Simulates async operations with delays

### 2. JSON Server (Development Demo)
- Demonstrates REST API integration
- Full CRUD operations via fetch
- Runs on `http://localhost:3001`

Switch between modes in `src/shared/api/tasks/index.js`:
```javascript
const USE_LOCAL_STORAGE = true // false for JSON Server
```

## Installation

```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

Start JSON Server (optional, for API demo):
```bash
npm run server
```

The app will be available at `http://localhost:5000`

## Build

```bash
npm run build
```

## Project Highlights

### Custom Router
Lightweight routing implementation using History API without external dependencies:
- Dynamic route matching with parameters (`/tasks/:id`)
- Programmatic navigation
- Browser back/forward support

### State Management
Context API with custom hooks:
- `TasksProvider` - Global state container
- `useTasks` - Task operations and state
- `useIncompleteTaskScroll` - Auto-scroll functionality

### API Layer
Abstraction over data sources:
- Unified interface for LocalStorage and Server API
- Easy switching between implementations
- Async/await pattern throughout

### Animations
CSS-based animations for:
- Task appearance on creation
- Task disappearance on deletion
- Smooth list reordering

### Form Validation
Real-time validation with error messages:
- Empty task prevention
- Whitespace-only input detection
- Visual feedback

## Scripts

- `npm run dev` - Start development server (port 5000)
- `npm run server` - Start JSON Server (port 3001)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

Modern browsers with ES2020+ support.

## License

MIT
