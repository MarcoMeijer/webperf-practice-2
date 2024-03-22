import { defineConfig } from "vite";
import { resolve } from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    basicSsl({
      name: 'localEnvironment',
      domains: ['*.custom.com'],
      certDir: './.devServer/cert'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        bootstrapIcons: resolve(__dirname, "css/bootstrap-icons.css"),
        bootstrapMin: resolve(__dirname, "css/bootstrap.min.css"),
        tooplate: resolve(__dirname, "css/tooplate-crispy-kitchen.css"),
        bootstrap: resolve(__dirname, "js/bootstrap.bundle.min.js"),
        custom: resolve(__dirname, "js/custom.js"),
        jquery: resolve(__dirname, "js/jquery.min.js"),
        serverworker: resolve(__dirname, "js/server-worker.js"),
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
