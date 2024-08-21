/// <reference types='vite/client' />

interface ImportMetaEnv {
  VITE_CODEX_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
