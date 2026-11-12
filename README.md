# ORBIT — Hackathon starter

A React + Vite template with an original Three.js sculpture, Motion entrance reveals, three instant visual presets, responsive navigation, accessible FAQ, theme JSON download, and optional Spline scene integration.

## Run

```sh
npm install
npm run dev
npm run build
```

## Adapt on hackathon day

1. Edit `src/config.js` for your brand, headline, story, and feature content.
2. Set your palette in `themes` and refine typography/spacing in `src/styles.css`.
3. Replace the sample playground / blueprint / FAQs in `src/main.jsx` with your product flow. The primary actions currently navigate to the theme playground; no backend or registration is implied.
4. Add your product's real application route or API when the idea is known.
5. Build and deploy `dist/` to any static host. `.openai/hosting.json` describes the private Sites deployment.

## Spline

The default sculpture is local Three.js geometry, requiring no account or remote asset. To replace it, create your own scene in Spline, choose Export → Code → React, then copy the `.splinecode` URL into `.env.local`:

```env
VITE_SPLINE_SCENE_URL=https://prod.spline.design/YOUR-SCENE/scene.splinecode
```

Restart Vite after changing the environment. Spline is lazy-loaded only when configured. Loading/error states show a simple graphic; pausing or reduced-motion preference hides the Spline animation. Use a scene licensed for your project. The exported theme JSON records a chosen palette; apply those values to config.js to persist the default in source.

## Accessibility and performance

Semantic landmarks, keyboard focus, skip link, accessible accordion, reduced-motion support, explicit animation pause, bounded device pixel ratio, resize observer, and WebGL resource cleanup. Google Fonts have system fallbacks. The default sculpture has a non-WebGL fallback. No API keys are needed. This is a presentation starter, not a completed product backend.

## Design references

Inspired by the editorial scale and expressive 3D direction of the Awwwards gallery (https://www.awwwards.com/websites/), with original layout and geometry. Implementation references: https://motion.dev/docs/react and https://github.com/splinetool/react-spline.
