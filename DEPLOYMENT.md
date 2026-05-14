# Deployment Guide

## Deploy to Vercel

### Quick Deploy

1. Push your code to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository: `MARBORZ/todo-react`
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Configuration

Vercel automatically detects:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

No additional configuration needed!

### Environment Variables

Not required for this project since it uses LocalStorage.

### After Deployment

Your app will be available at: `https://todo-react-[your-username].vercel.app`

### Local Preview of Production Build

```bash
npm run build
npm run preview
```

## Data Persistence

The deployed app uses **LocalStorage** for data persistence:
- Data is stored in the browser
- No backend server required
- Works offline after first load
- Data persists across sessions

## Development Mode

To test with JSON Server locally:

1. Change `USE_LOCAL_STORAGE` to `false` in `src/shared/api/tasks/index.js`
2. Run both servers:
   ```bash
   npm run dev      # Frontend on port 5000
   npm run server   # JSON Server on port 3001
   ```

## Troubleshooting

### Build fails on Vercel
- Check that all dependencies are in `package.json`
- Ensure no TypeScript errors (project uses JSX)
- Verify build works locally: `npm run build`

### App loads but data doesn't persist
- Check browser console for localStorage errors
- Ensure browser allows localStorage
- Clear browser cache and reload

### Routing issues (404 on refresh)
Vercel handles SPA routing automatically for Vite projects. If issues occur, create `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
