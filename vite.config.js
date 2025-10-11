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
        concrete: resolve(__dirname, "src/services/concrete-aggregate-testing.html"),
        chemical: resolve(__dirname, "src/services/chemical-testing.html"),
        geotechnical: resolve(__dirname, "src/services/geotechnical-investigations.html"),
        geophysical: resolve(__dirname, "src/services/geophysical-investigations.html"),
        soil: resolve(__dirname, "src/projects/transmissions-substations.html"),
        asphalt: resolve(__dirname, "src/projects/roads.html"),
        soil: resolve(__dirname, "src/projects/bridges.html"),
        asphalt: resolve(__dirname, "src/projects/buildings.html"),
        soil: resolve(__dirname, "src/projects/dams-hpp.html"),
        asphalt: resolve(__dirname, "src/projects/water.html"),
      },
    },
  }
});
