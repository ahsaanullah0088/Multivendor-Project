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
    extend : {
      screens :{
        "1000px" : "1050px",
        "1100px" : "1100px",
        "1300px" : "1300px",
        "800px" : "800px",
        "400px" : "400px",
      }
    },
  },

})