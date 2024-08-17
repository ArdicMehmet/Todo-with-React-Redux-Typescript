import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Todo-with-React-Redux-Typescript/',
  plugins: [react()],
})
