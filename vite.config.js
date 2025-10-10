/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path"
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
 /* root: 'src', // if your entry HTML/JS is in src/
  publicDir: '../public', // static assets
  build: {
    outDir: '../dist', // output at project root
    rollupOptions: {
      // customize rollup if needed
      input: {
        main: 'index.html',
        about: 'src/about.html',
        // add other pages as needed
      }
    }
  }*/
   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/about.html"),
        soil: resolve(__dirname, "src/services/soil-testing.html"),
        asphalt: resolve(__dirname, "src/services/asphalt-testing.html"),
      },
    },
  }
});
