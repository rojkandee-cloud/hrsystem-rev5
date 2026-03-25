import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],

    server: {
      port: 3000,
      host: '0.0.0.0',

      // ─── Claude API Proxy ────────────────────────────────────
      // แก้ปัญหา CORS เมื่อ dev บน local
      // Claude API ไม่รองรับการเรียกตรงจาก Browser
      proxy: {
        '/api/claude': {
          target: 'https://api.anthropic.com',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/claude/, ''),
          headers: {
            'x-api-key': env.VITE_CLAUDE_API_KEY ?? '',
            'anthropic-version': '2023-06-01',
          },
        },
      },
    },

    // ─── Environment Variables ──────────────────────────────────
    // ใช้ VITE_ prefix เข้าถึงใน React ได้โดยตรง
    // ไม่ต้องใช้ process.env อีกต่อไป
    define: {
      // backward-compat สำหรับโค้ดเก่าที่ยังใช้ process.env
      'process.env.API_KEY': JSON.stringify(env.VITE_CLAUDE_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      // แยก vendor chunks เพื่อ performance
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            firebase: ['firebase/app', 'firebase/firestore'],
            ui: ['lucide-react'],
          },
        },
      },
    },
  };
});
