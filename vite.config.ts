import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "/rambas-reserve/", 
	resolve: {
		alias: {
          "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
		}
  	}
})
