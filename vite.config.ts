import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
    },
    plugins: [
        react(),
        reactRefresh(),
        tsconfigPaths(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
            },
        }),
    ],
});
