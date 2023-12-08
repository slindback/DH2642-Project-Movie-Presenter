import { defineConfig } from 'vite';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import virtualHtml from 'vite-plugin-virtual-html';


const pages = {
    "index": {
        entry: "/src/vuejs/index.jsx",
        title: "Watch Later",
        body: "<div id='root'></div>"
    }
}

export default defineConfig({
    plugins: [
        vueJsxPlugin(),
        virtualHtml({pages})      // HTML mappings
    ],
    server: {
        port: 8080,
    },
});
