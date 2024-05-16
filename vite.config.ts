import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), stylelint()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
