import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 8080,
		host: '0.0.0.0',
		proxy: proxyOptions,
		watch: {
			usePolling: true,   // more compatible but slightly slower
			interval: 1000      // check for changes every second
		},
		allowedHosts:[
			'new.frontiersoftech.com'
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		outDir: '../mint/public/mint',
		emptyOutDir: true,
		target: 'es2015',
	},
});
