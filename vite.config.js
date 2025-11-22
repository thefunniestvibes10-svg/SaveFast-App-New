import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      // --- إضافة هذا السطر يدوياً ---
      build: {
        rollupOptions: {
          input: './src/main.jsx', // هذا يحدد مسار ملف التشغيل يدوياً
        },
      },
    })
