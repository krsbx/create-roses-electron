import path from 'path';
import electron, { onstart } from 'vite-plugin-electron';

const config = electron({
  main: {
    entry: 'electron/main/index.ts',
    vite: {
      build: {
        // For Debug
        sourcemap: true,
        outDir: 'dist/electron/main',
      },
      // Will start Electron via VSCode Debug
      plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
    },
  },
  preload: {
    input: {
      // You can configure multiple preload scripts here
      index: path.join(__dirname, 'electron/preload/index.ts'),
    },
    vite: {
      build: {
        // For Debug
        sourcemap: 'inline',
        outDir: 'dist/electron/preload',
      },
    },
  },
  // Enables use of Node.js API in the Electron-Renderer
  // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
  renderer: {},
});

export default config;
