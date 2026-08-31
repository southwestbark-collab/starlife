
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/starlife/',
  resolve: {
    alias: [
      { find: /^@\/components\/ui\/(.+)$/, replacement: `${rootDir}/$1` },
      { find: /^@\/components\/(.+)$/, replacement: `${rootDir}/$1` },
      { find: /^@\/data\/(.+)$/, replacement: `${rootDir}/$1` },
      { find: /^@\/hooks\/(.+)$/, replacement: `${rootDir}/$1` },
      { find: /^@\/lib\/(.+)$/, replacement: `${rootDir}/$1` },
      { find: /^@\/(.+)$/, replacement: `${rootDir}/$1` },
    ],
  },
  plugins: [react()],
});
