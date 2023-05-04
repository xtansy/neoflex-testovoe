import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/

const { resolve } = path;

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@api/requests": resolve(__dirname, "./src/API/requests"),
			"@redux/headphones": resolve(__dirname, "./src/redux/headphones/headphones"),
			"@redux/cart": resolve(__dirname, "./src/redux/cart/cart"),
			"@redux/instance": resolve(__dirname, "./src/redux/instance"),
			"@pages": resolve(__dirname, "./src/pages"),
			"@utils": resolve(__dirname, "./src/utils"),
			"@components": resolve(__dirname, "./src/components"),
			"@svg": resolve(__dirname, "./src/svg"),
			"@headphones/selectors": resolve(__dirname, "./src/redux/headphones/selectors"),
			"@cart/selectors": resolve(__dirname, "./src/redux/cart/selectors"),
			"@ui": resolve(__dirname, "./src/ui")
		}
	}
})
