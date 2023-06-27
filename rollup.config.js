import typescript from 'rollup-plugin-typescript2';
import * as path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('rollup').RollupOptions} */
const options = {
  input: './src/index.ts',
  output: {
    file: path.resolve(dirname, './dist/index.js'),
  },
  plugins: [
    typescript(),
  ],
};

export default options;
