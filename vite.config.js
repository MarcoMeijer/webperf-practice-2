import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        bootstrapIcons: resolve(__dirname, "css/bootstrap-icons.css"),
        bootstrapMin: resolve(__dirname, "css/bootstrap.min.css"),
        tooplate: resolve(__dirname, "css/tooplate-crispy-kitchen.css"),
        bootstrap: resolve(__dirname, "js/bootstrap.bundle.min.js"),
        custom: resolve(__dirname, "js/custom.js"),
        jquery: resolve(__dirname, "js/jquery.min.js"),
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
