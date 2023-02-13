import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // 监听所有地址
    port: 8080,
  },
  plugins: [
    vue(),
  ],
  assetsInclude: ["**/*.tgs", "**/*.wasm"],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ],
    extensions: ['.js', '.ts', '.vue']
  },
  build: {
    outDir: 'build', // 打包文件的输出目录
    assetsDir: 'static' // 静态资源的存放目录
  },
});
