# {{APP_NAME}}

{{APP_DESCRIPTION}}

A Vue 3 + TypeScript app for the Mimir AI ecosystem, built with the Mimir App Template.

## 🚀 Quick Start

### Development (Browser Testing)
```bash
npm run dev
```
Opens the app in your browser for rapid development and testing.

### Building for Mimir
```bash
npm run build
```
Builds both the plugin version (`dist/`) and web version (`web-dist/`) of your app.

### Testing in Mimir Desktop
1. Make sure Mimir Desktop is running in dev mode: `npm run dev --dev`
2. Build your app: `npm run build`
3. Your app will appear in the Mimir start menu

## 📁 Project Structure

```
{{APP_ID}}/
├── src/
│   ├── components/          # Vue components
│   │   ├── HelloMimir.vue   # Welcome screen
│   │   ├── APIExplorer.vue  # Interactive API testing
│   │   ├── ThemeDemo.vue    # Theme integration demo
│   │   └── ...
│   ├── composables/         # Vue composables
│   │   ├── useMimirAPI.ts   # Main Mimir API integration
│   │   └── ...
│   ├── types/               # TypeScript definitions
│   ├── assets/              # CSS and static assets
│   ├── App.vue              # Main app component
│   └── main.ts              # App entry point
├── dist/                    # Plugin build output
├── web-dist/                # Web build output
├── mim.json                 # Mimir app manifest
├── package.json             # Dependencies and scripts
└── vite.config.ts           # Build configuration
```

## 🛠 Available APIs

Your app has access to all Mimir APIs:

### Notifications
```typescript
import { useMimirAPI } from '@/composables/useMimirAPI';

const { showNotification } = useMimirAPI();

await showNotification('Hello World!', {
  type: 'success',
  duration: 3000
});
```

### Windows
```typescript
const { createWindow } = useMimirAPI();

await createWindow({
  id: 'my-window',
  title: 'My Window',
  width: 400,
  height: 300,
  content: {
    type: 'html',
    source: '<h1>Hello from my window!</h1>'
  }
});
```

### Theme Integration
```typescript
const { getCurrentTheme, onThemeChange } = useMimirAPI();

// Get current theme
const theme = await getCurrentTheme();

// Listen for theme changes
onThemeChange((newTheme) => {
  console.log('Theme changed:', newTheme);
});
```

### Plugin Messaging
```typescript
const { sendMessage } = useMimirAPI();

await sendMessage({
  type: 'my-message',
  data: { hello: 'world' }
});
```

## 🎨 Styling

This template uses Tailwind CSS with CSS custom properties that automatically inherit from Mimir's theme system:

```css
.my-element {
  background: rgb(var(--color-primary));
  color: rgb(var(--color-text-primary));
  border: 1px solid rgb(var(--color-border));
}
```

Available CSS variables:
- `--color-primary`, `--color-secondary`, `--color-accent`
- `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-tertiary`
- `--color-text-primary`, `--color-text-secondary`
- `--color-border`

## 🔧 Customization

### Adding New Components
1. Create your component in `src/components/`
2. Import and use it in `App.vue` or other components
3. Add to the tab system if needed

### Adding New APIs
1. Extend the `useMimirAPI` composable in `src/composables/useMimirAPI.ts`
2. Add TypeScript definitions in `src/types/plugin.d.ts`
3. Test your API in the APIExplorer component

### Modifying the UI
1. Update components in `src/components/`
2. Modify styles in `src/assets/main.css`
3. Use Tailwind classes with theme variables

## 📦 Building and Distribution

### Development Build
```bash
npm run build
```

### Type Checking
```bash
npm run type-check
```

### Code Formatting
```bash
npm run format
```

## 🐛 Troubleshooting

### App Not Loading in Mimir
1. Check that `dist/index.js` exists after building
2. Verify `mim.json` has correct app ID and entry point
3. Check Mimir Desktop console for errors

### Theme Not Updating
1. Ensure you're using CSS custom properties
2. Check that theme listener is properly set up
3. Verify webview is receiving theme injection

### API Calls Failing
1. Check that app is properly connected (see status indicator)
2. Verify required permissions in `mim.json`
3. Check browser console for error messages

## 📚 Learn More

- [Mimir AI Documentation](https://docs.mimir.ai)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Documentation](https://typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 👨‍💻 Development

Created by {{APP_AUTHOR}} using the Mimir Vue App Template.

Happy coding! 🚀