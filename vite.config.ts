import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],  // ✅ Plugins array should be inside return object
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});

