import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import windiPlugin from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [solidPlugin(), windiPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
