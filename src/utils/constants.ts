import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url); // eslint-disable-line no-underscore-dangle
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, '../');

export const MINIMUM_NODE_VERSION = 14;

export const APP_TITLE = 'CREATE ROSES ELECTRON';

export const DEFAULT_APP_NAME = 'my-roses-electron';

export const CREATE_ROSES_ELECTRON = 'create-roses-electron';

export const DESCRIPTIONS = `Project created with ${CREATE_ROSES_ELECTRON}`;

export const DEFAULT_CLI_OPTIONS: CRE.CliResults = {
  appName: DEFAULT_APP_NAME,
  flags: {
    noInstall: false,
    noGit: false,
    default: false,
  },
};

export const COLOR_SCHEME = {
  BRIGHT_RED: '#E2180A',
  BRIGHT_ORANGE: '#F34B8C',
  BRIGHT_PURPLE: '#C8184F',
  BRIGHT_GREEN: '#52A849',
  DARK_GREEN: '19511E',
};

export const PACKAGES = {
  DEV_DEPEDENCIES: {
    REACT_TYPES: '@types/react',
    REACT_DOM_TYPES: '@types/react-dom',
    VITE_REACT: '@vitejs/plugin-react',
    ELECTRON: 'electron',
    ELECTRON_BUILDER: 'electron-builder',
    REACT: 'react',
    REACT_DOM: 'react-dom',
    TYPESCRIPT: 'typescript',
    VITE: 'vite',
    VITE_ELECTRON: 'vite-plugin-electron',
  },
} as const;
