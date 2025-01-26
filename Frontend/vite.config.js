import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react() , tailwindcss()
  ],
  theme:{
    fontFamily : {
      Roboto : ['Roboto', 'sans-serif'],
      Popins : ['Popins', 'sans-serif'],
    },
  }
})