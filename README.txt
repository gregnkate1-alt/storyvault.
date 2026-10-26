STORYVAULT v1 — independent local-first roleplay & memory prototype

FILES
- index.html: Complete chat interface, importers, character creation, pinned memories, story summaries, optional AI connection, backup/export.
- manifest.webmanifest, icons, sw.js: enable add-to-home-screen when hosted over HTTPS.

QUICK START
1. Open index.html in a desktop browser to test. On Android, extracted HTML files may be opened from the Files app in Chrome, but Android's file viewer and browser storage behavior vary. For reliable use and a home-screen icon, host the 4 files together on any static HTTPS host (GitHub Pages, Netlify, etc.).
OPTIONAL: HOME SCREEN INSTALL VIA GITHUB PAGES
- Make a public repository at github.com, for example `storyvault-app`.
- Upload all files from this ZIP into the repository root.
- Under repository Settings > Pages, choose Deploy from branch > main > /(root), then Save.
- Open the GitHub Pages HTTPS address on your Android Chrome browser. Choose Chrome menu > Add to Home screen / Install app. Browser install UX varies.
- StoryVault is a browser app, not a native APK. A local file:// preview is not a dependable long-term storage or installation method.

2. Add characters or go to Import. Select TXT/MD/JSON saved transcripts or paste turns such as:
      You: Do you remember the party last year?
      Maya: Yes, we went together.
3. Go to Memory and add pinned names, relationships, important plot canon. Pinned memories are always injected into the AI's prompt; additional memories and summarized events are ranked by relevance.
4. Go to Settings to select AI:
      a) On-device AI (EXPERIMENTAL): Load a model after the browser downloads one. Requires WebGPU and adequate phone memory. Android WebGPU bugs can prevent it from working; not guaranteed on your device. WebLLM library itself loads from a CDN, so this is not guaranteed to work offline from a new session without internet.
      b) Endpoint: point to an OpenAI-compatible /v1/chat/completions URL (e.g. self-hosted local model on your computer). No StoryVault subscription is required, but a third-party endpoint may have its own terms/costs and transmit your data.
5. Tap "Build from chat" in Memory to create AI summaries of older messages in chunks. Repeat for very long conversations. Automatic one-chunk summaries start after enough new messages; you can edit/correct important facts by adding pinned memories.
6. Export backups frequently in Settings! IndexedDB storage can be removed if you clear browser data or a browser evicts it. Data is not encrypted.

IMPORT FORMAT
The importer supports plaintext speaker: message transcripts and common JSON message arrays with content/text/message and role/sender/author, as well as StoryVault character/backups. It does NOT log in to SpicyChat or fetch inaccessible chats. SpicyChat's official help documents saved chats/clone but a universal, official full export format could not be confirmed.

LIMITS AND SAFETY
- This is a functional PROTOTYPE, not a packaged Android APK. It provides a local browser interface, a memory database, and optional AI inference. Generating responses requires loading a real local model or connecting to an API endpoint.
- No subscription fee, imposed message quotas, or deliberately truncated stored chat logs. Device storage, context windows, model download, hardware, and browser restrictions still apply.
- Personal chats should only be uploaded to servers you trust; this app itself does not transmit them unless you configure an external AI endpoint or send prompts to one. The WebLLM model loader fetches code/model files from a public CDN/hosting service.
- This tool is not affiliated with SpicyChat, and does not circumvent its account or paid-feature controls.
