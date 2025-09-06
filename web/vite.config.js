import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig( {
	server: {
		host: true,
	},
	resolve: {
		alias: {
			"@src": path.resolve( __dirname, "./src" ),
			"@components": path.resolve( __dirname, "./src/Components" ),
			"@ctx": path.resolve( __dirname, "./src/Contexts" ),
			"@pages": path.resolve( __dirname, "./src/Pages" ),
		},
	},
	plugins: [ react() ],
} )
