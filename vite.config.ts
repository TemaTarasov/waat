import { defineConfig } from 'vite';

import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/packages/dashboard/index.tsx', 'resources/packages/website/index.tsx'],
      refresh: true
    }),
    react()
  ],
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      types: '/resources/packages/types',
      dashboard: '/resources/packages/dashboard',
      website: '/resources/packages/website',
      kit: '/resources/packages/kit'
    }
  }
});
