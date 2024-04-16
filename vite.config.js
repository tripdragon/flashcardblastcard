import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://tripdragon.github.io/flashcardblastcard",
  // base: "/flashcardblastcard/",
  base: "./",
  resolve : {
    alias: {
      '@utilites': path.resolve(__dirname, './src/utilites/utilites.js'),
      '@databases': path.resolve(__dirname, './src/databases')
    },
  }
  
})
