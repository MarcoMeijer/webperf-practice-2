import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        menu: resolve(__dirname, "menu.html"),
        newsdetail: resolve(__dirname, "news-detail.html"),
        news: resolve(__dirname, "news.html"),
      }
    }
  },
});
